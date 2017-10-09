// @flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Map from '../Map';

import './App.scss';

class App extends Component<null> {
	render() {
		return (
			<div className='App'>
				<MuiThemeProvider>
					<Map />
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;