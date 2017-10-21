// @flow

import React, {Component} from 'react';

import ExpressNewsLogo from '../Icons/ExpressNewsLogo';
import FacebookLogo from '../Icons/FacebookLogo';
import TwitterLogo from '../Icons/TwitterLogo';
import RedditLogo from '../Icons/RedditLogo';

import './Social.scss';

const components = {
	facebook: FacebookLogo,
	twitter: TwitterLogo,
	logo: ExpressNewsLogo,
	reddit: RedditLogo, 
};

class Social extends Component{
	props: {
		type: string,
		link: string,
	};

	redditLink() {
		const link = this.props.link;
		return `https://www.reddit.com/submit?url=${link}`;
	}

	twitterLink() {
		return `https://twitter.com/intent/tweet?url=${this.props.link}`;
	}

	facebookLink() {
		return `https://www.facebook.com/sharer/sharer.php?u=${this.props.link}`;
	}

	logoLink() {
		return this.props.link;
	}

	buildIcon(type: string) {
		const Icon = components[type];
		// $FlowFixMe
		const link = this[`${type}Link`]();
		return <a href={link} target="_blank"><Icon /></a>;
	}

  render() {
  	return (
  		<div className="Social">
	  		{this.buildIcon(this.props.type)}
	  	</div>
  	);
  }
}

export default Social