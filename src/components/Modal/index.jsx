// @flow

import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CustomDialog from './CustomDialog';

const buildYouTubeUrl = media => `//www.youtube.com/embed/${media}?wmode=opaque`;

export default (props: Props) => (
	<CustomDialog
		open={props.isOpen}
		onRequestClose={props.close}
		className="content-box"
	>
		<Card className="card" style={{ marginBottom: 20 }}>
			<CardHeader
				title={props.content.title}
				titleStyle={{
					fontSize: '1.3em',
					paddingTop: '10px',
				}}
				avatar="http://ww3.hdnux.com/photos/34/27/72/7437958/4/35x35.png"
			/>
			<CardMedia style={{ textAlign: "center" }}>
		    	{props.content.type === 'video' && (
		    		<iframe 
		    			src={buildYouTubeUrl(props.content.media)}
		    			width="533"
		    			height="300"
		    			frameBorder="0"
		    			allowFullScreen
		    		/>
		    	)}
		    	{props.content.type === 'photo' && (
		    		<img 
		    			src={props.content.media}
		    			className="media-img"
		    			alt={props.content.title}
		    			style={{ width: "auto", height: "auto", minWidth: "none" }}
		    		/>
		    	)}
		    </CardMedia>
		    <CardText>{props.content.copy}</CardText>
		    <CardActions>
				<FlatButton 
					primary 
					label="Back to map"
					onClick={props.close}
				/>
				<FlatButton 
					label="Next exhibit"
					style={{ float: 'right' }}
					onClick={props.getNextPage}
				/>
			</CardActions>
		</Card>
	</CustomDialog>
);