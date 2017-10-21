// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import _ from 'lodash';

import store from '../../store';
import actions from '../../actions';

// components
import MapUI from '../MapUI';

import './Map.scss';

export type MarkerProps = {
	id: number,
	img: string,
	coords: string,
	type: string,
};

export type Page = {
	id: number,
	media: string,
	title: string,
	copy: string,
	type: string,
};

type Props = {
	markers: Array<MarkerProps>,
	page: Page,
};

type State = {
	pageId: number,
	map: ?Object,
	tileLayer: ?Object,
	modalIsOpen: boolean,
	panToMarker: boolean,
};

class Map extends Component<Props, State> {
	_mapNode: ?HTMLDivElement;

	constructor(props: Props) {
		super(props)
		this.state = {
			pageId: 0,
			map: null,
			tileLayer: null,
			modalIsOpen: false,
			panToMarker: false,
			instructionsAreOpen: true,
		}
		this.getNextPage 		= this.getNextPage.bind(this);
		this.openModal			= this.openModal.bind(this);
		this.closeModal			= this.closeModal.bind(this);
		this.hideInstructions	= this.hideInstructions.bind(this);
	}

	/*****************
	 * Build the map
	 *****************/

	componentDidMount() {
		this.getData();
		if (!this.state.map) this.init(this._mapNode)
	}

	getData() {
	    store.dispatch(actions.map.getAllMarkers());
	    store.dispatch(actions.page.getPage(this.state.pageId));
	}

	isMobile() {
		return window.innerWidth < 768;
	}

	getLeafletConfigObj() {
		const tileLayer = {
			uri: 'https://api.mapbox.com/styles/v1/saen-editors/cj8lz9cbp6d0i2ro29ef2422q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Flbi1lZGl0b3JzIiwiYSI6ImNpeXVreTZ6YjAwenYycW15d3hoNmp1aTEifQ.OjH869qC5JzcGVVy-rg4JQ',
		};
		const params = {
			center: this.isMobile() ? [29.428, -98.470] : [29.422, -98.481],
			zoom: 12,
			maxZoom: 18,
			minZoom: 8,
			legends: true,
		};
		return {
			tileLayer,
			params,
		};
	}

	init(id) {
		if (this.state.map) return;
		const config 	= this.getLeafletConfigObj()
		const map 		= L.map(id, config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri).addTo(map);
		this.setState({ map, tileLayer });
	}

	/*************************
	 * Pan to current marker
	 *************************/

	componentWillUpdate(nextProps, nextState) {
		if (nextState.panToMarker) {
			this.panToMarker(nextState);
		}
	}

	panToMarker(nextState) {
		const { map, pageId } 	= nextState;
		const { markers }		= this.props;
		const marker 			= _.find(markers, ['id', pageId]);
		const coords			= marker.coords.split(','); 
		map.setView(coords, 15);
	}

	/****************************************
	 * Handle modal iteration and visibility
	 ****************************************/

	iteratePages() {
		const last = this.props.page.len - 1;
		return this.state.pageId === last ? 0 : this.state.pageId + 1;
	}

	getNextPage(requested: ?number) {
		const pageId = typeof requested === 'number' ? requested : this.iteratePages();
		store.dispatch(actions.page.getPage(pageId));
		this.setState({ 
			pageId,
			panToMarker: true,
    	});
	}

	openModal() {
		this.setState({ 
			modalIsOpen: true,
			instructionsAreOpen: false,
		});
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	/***********************
	 * Manage instructions
	 ***********************/

	hideInstructions() {
		this.setState({ instructionsAreOpen: false })
	}

	/**************
	 * Render time!
	 **************/

	render() {
		return (
			<div id="mapWrap">
				<div ref={(node) => this._mapNode = node} id="map" />
				<MapUI 
		          map={this.state.map}
		          markers={this.props.markers}
		          page={this.props.page}
		          getNextPage={this.getNextPage}
		          openModal={this.openModal}
		          closeModal={this.closeModal}
		          modalIsOpen={this.state.modalIsOpen}
		          isMobile={this.isMobile}
		          instructionsAreOpen={this.state.instructionsAreOpen}
		          onClick={this.hideInstructions}
		        />
			</div>
		);
	}
}

const mapStateToProps = store => {
	return { 
		markers: store.markers,
		page: store.page,
	}
};
export default connect(mapStateToProps)(Map);