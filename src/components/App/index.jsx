// @flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../Nav';
import Map from '../Map';

import './App.scss';

class App extends Component<null> {
	render() {
		return (
			<div className='App'>
				<MuiThemeProvider>
					<div>
						<Nav className="Nav" title="Explore San Antonio's murals" />
						<Map />
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;