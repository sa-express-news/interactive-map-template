// @flow

import L from 'leaflet';

import * as icons from './icons';

import type { Props } from './index';

const getSVG = (svg: string, type: string) => {
	if (type) {
		svg += '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">';
		svg += icons[type];
		svg += '</svg>';
	}
	return svg;
};

const getPulse = (isPulsing: boolean) => isPulsing ? '<div class="pulsing"></div>' : '';

const getBackgroundImg = (img: string, type: string) => `<div style="background-image: url('${img}');"></div>​`;

const getAttrs = (props: Props) => {
	const html = getPulse(props.isPulsing) + getBackgroundImg(props.img, props.type) + getSVG('', props.type);
	return {
		className: 'marker-icon',
		iconSize: [40, 40],
		html,
	};
};

const iconFactory = (props: Props) => L.divIcon(getAttrs(props));

export default (props: Props) => iconFactory(props);