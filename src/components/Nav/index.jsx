import React from 'react';

import SocialBlock from '../SocialBlock';

import './Nav.scss';

export default function(props) {
	return (
		<div className="nav-wrapper">
			<nav>
				<div className="title">{props.title}</div>
				<div className="links">
					<SocialBlock />
				</div>
			</nav>
		</div>
	);
}