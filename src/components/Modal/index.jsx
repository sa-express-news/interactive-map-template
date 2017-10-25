// @flow

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CustomDialog from './CustomDialog';
import ThreeSixty 	from '../ThreeSixty/ThreeSixty';

import './Modal.scss';

const getButtons = (close: Function, getNextPage: Function, isMobile: Function) => (
	<CardActions>
		<FlatButton 
			primary 
			label="Back to map"
			labelStyle={{ 
				paddingLeft: isMobile() ? 8 : 16,
				paddingRight: isMobile() ? 8 : 16,
			}}
			onClick={close}
		/>
		<FlatButton 
			label="Next image"
			labelStyle={{ 
				paddingLeft: isMobile() ? 8 : 16,
				paddingRight: isMobile() ? 8 : 16,
			}}
			style={{ float: 'right' }}
			onClick={getNextPage}
		/>
	</CardActions>
);

const getHeader = (title: string) => (
	<CardHeader
		title={title}
		titleStyle={{
			fontSize: '1.3em',
			paddingTop: '10px',
		}}
		avatar="//ww3.hdnux.com/photos/34/27/72/7437958/4/35x35.png"
	/>
);

const getVideo = (media: string) => (
	<iframe 
		src={media}
		width="533"
		height="300"
		frameBorder="0"
		allowFullScreen
	/>
);

const getPhoto = (media: string, title: string) => (
	<img 
		src={media}
		className="media-img"
		alt={title}
		style={{ width: "auto", height: "auto", minWidth: "none" }}
	/>
);

const getPano = content => <ThreeSixty content={content} />;

export default (props: Props) => (
	<CustomDialog
		open={props.isOpen}
		onRequestClose={props.close}
		className="content-box"
	>
		<Card className="card">
			{props.isMobile() && getButtons(props.close, props.getNextPage, props.isMobile)}
			{!props.isMobile() && getHeader(props.content.title)}
			<CardMedia style={{ textAlign: "center" }}>
		    	{props.content.type === 'video' && getVideo(props.content.media)}
		    	{props.content.type === 'pano' && getPano(props.content)}
		    	{props.content.type === 'photo' && getPhoto(props.content.media, props.content.title)}
		    </CardMedia>
		    <CardText>{props.content.copy}</CardText>
		    {!props.isMobile() && getButtons(props.close, props.getNextPage, props.isMobile)}
		</Card>
	</CustomDialog>
);
