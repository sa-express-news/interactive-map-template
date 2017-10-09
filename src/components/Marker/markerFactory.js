// @flow

import L from 'leaflet';

import type { Props } from './index';

// factories
import iconFactory from './iconFactory';

// pulsing wrapper div
let pulse = null;

const getIcon = (props: Props) => iconFactory(props);

const getCoords = (coords: string) => coords.split(',');

const getAttrs = (props: Props) => {
	const icon 	= getIcon(props);
	const title = props.caption || '';
	return { icon, title };
};

const openMarker = (props: Props) => {
	if (!pulse) pulse = document.querySelector('.pulsing')
	pulse.className = 'pulsing hidden';
	props.getNextPage(props.pageId);
	props.openModal();
};

const markerFactory = (props: Props) => L.marker(
		getCoords(props.coords),
		getAttrs(props)
	).addTo(props.map)
		.on('click', openMarker.bind(null, props));

export default (props: Props) => markerFactory(props);