import React from 'react';
import './Nav.scss';

export default function(props) {
	return (
		<div className="nav-wrap">
			<nav>
				<div className="logo">
					<a href="http://www.expressnews.com/"><img src="http://ww3.hdnux.com/photos/34/27/72/7437958/4/35x35.png" alt="logo" /></a>
				</div>
				<div className="divider"></div>
				<div className="title">{props.title}</div>
				<div className="links">
					<div>
						<a href="http://www.expressnews.com/entertainment/arts-culture/article/Witte-to-open-as-a-bigger-badder-version-of-10952264.php" alt="Return to story" target="_blank">
							Return to Witte story
						</a>
					</div>
					<div className="divider"></div>
				</div>
			</nav>
		</div>
	);
}