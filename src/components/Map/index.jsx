// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import _ from 'lodash';

import store from '../../store';
import actions from '../../actions';

// components
import MapUI from '../MapUI';

import 'leaflet/dist/leaflet.css';
import './Map.scss';

type Marker = {
	id: number,
	img: string,
	coords: string,
	type: string,
};

type Page = {
	id: number,
	media: string,
	title: string,
	copy: string,
	type: string,
};

type Props = {
	markers: Array<Marker>,
	page: Page,
};

type State = {
	pageId: number,
	map: ?Object,
	tileLayer: ?Object,
	contentBoxIsOpen: boolean,
};

class Map extends Component<Props, State> {
	_mapNode: ?HTMLDivElement;

	constructor(props: Props) {
		super(props)
		this.state = {
			pageId: 0,
			map: null,
			tileLayer: null,
			contentBoxIsOpen: false,
		}
	}

	componentDidMount() {
		this.getData();
		if (!this.state.map) this.init(this._mapNode)
	}

	getData() {
	    store.dispatch(actions.map.getAllMarkers());
	    store.dispatch(actions.page.getPage(this.state.pageId));
	}

	getLeafletConfigObj() {
		const tileLayer = {
			uri: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Flbi1lZGl0b3JzIiwiYSI6ImNpeXVreTZ6YjAwenYycW15d3hoNmp1aTEifQ.OjH869qC5JzcGVVy-rg4JQ',
		};
		const params = {
			center: [29.417,-98.459],
			zoom: 10,
			maxZoom: 13,
			minZoom: 3,
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

	toggleContentBox(val: boolean) {
    	this.setState({ contentBoxIsOpen: val });
	}

	showContentBox() {
		this.toggleContentBox(true);
	}

	hideContentBox() {
		this.toggleContentBox(false);
	}

	render() {
		return (
			<div id="mapWrap">
				<div ref={(node) => this._mapNode = node} id="map" />
				<MapUI 
		          map={this.state.map}
		          markers={this.props.markers}
		          page={this.props.page}
		          showContentBox={this.showContentBox}
		          hideContentBox={this.hideContentBox}
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