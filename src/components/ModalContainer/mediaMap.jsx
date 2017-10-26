// @flow

import React from 'react';

import ThreeSixty from '../ThreeSixty';

const mapper = {
	video: content => (
		<iframe
			src={content.media}
			width="533"
			height="300"
			frameBorder="0"
			allowFullScreen
		/>
	),
	pano: content => <ThreeSixty content={content} />,
	photo: content => (
		<img 
			src={content.media}
			className="media-img"
			alt={content.title}
			style={{ width: "auto", height: "auto", minWidth: "none" }}
		/>
	),
	getMedia: function (content) {
		return content.type && this[content.type] ? this[content.type](content) : null;
	},
};

export default (mediaType, content) => {
	return mapper.getMedia(mediaType, content);
}