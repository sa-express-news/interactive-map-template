// @flow

import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card';
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
		<CardHeader
			title={props.content.title}
			titleStyle={{
				fontSize: '1.3em',
				paddingTop: '10px',
			}}
			avatar="//ww3.hdnux.com/photos/34/27/72/7437958/4/35x35.png"
		/>
		<CardMedia style={{ textAlign: "center" }}>
			{props.mediaMap(props.content)}
	    </CardMedia>
	    <CardText>{props.content.copy}</CardText>
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
	</Card>
);
