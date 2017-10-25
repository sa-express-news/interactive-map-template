// @flow

import React from 'react';

import Social from '../Social';

import './SocialBlock.scss';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/explore-san-antonio-botanical-garden/' />
    <Social type='twitter' link='http://www.expressnews.com/explore-san-antonio-botanical-garden/' />
    <Social type='reddit' link='http://www.expressnews.com/explore-san-antonio-botanical-garden/' />
  </div>
);