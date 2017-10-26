// @flow

import React from 'react';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

type Props = {
    isOpen: Boolean,
    open: Function,
    close: Function,
    content: Page,
    getNextPage: Function,
    isMobile: Boolean,
    mediaMap: Function,
};

export default (props: Props) => (
	<Card className="card">
		<CardActions>
			<FlatButton 
				primary 
				label="Back to map"
				labelStyle={{ 
					paddingLeft: 8,
					paddingRight: 8,
				}}
				onClick={props.close}
			/>
			<FlatButton 
				label="Next image"
				labelStyle={{ 
					paddingLeft: 8,
					paddingRight: 8,
				}}
				style={{ float: 'right' }}
				onClick={props.getNextPage}
			/>
		</CardActions>
		<CardMedia style={{ textAlign: "center" }}>
			{props.mediaMap(props.content)}
	    </CardMedia>
	    <CardText>{props.content.copy}</CardText>
	</Card>
);
