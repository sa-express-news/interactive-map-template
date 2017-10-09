// @flow

import { Component } from 'react';

// factories
import markerFactory from './markerFactory';

import './Marker.scss';

// types
type Props = {
	key: number,
	isPulsing: boolean,
	img: string,
	coords: string,
	type: string,
	pageId: number,
	map: ?Object,
	openModal: Function,
};

type State = {
	marker: ?Object,
};

class Marker extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			marker: null,
		}
	}

	componentDidMount() {
		if (!this.state.marker) {
			this.setState({ marker: markerFactory(this.props) });
		}
	}

	componentWillUnmount() {
		this.props.map.removeLayer(this.state.marker);
	}

	render() {
		return null; // all the fun is handled in the factories by leaflet
	}
}

export default Marker;
