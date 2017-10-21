// @flow

import React from 'react';

import Social from '../Social';

import './SocialBlock.scss';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/san-antonio-mural-map/' />
    <Social type='twitter' link='http://www.expressnews.com/san-antonio-mural-map/' />
    <Social type='reddit' link='http://www.expressnews.com/san-antonio-mural-map/' />
  </div>
);