import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import './Instructions.scss';

const action = () => window.innerWidth < 768 ? 'Tap' : 'Click';

const getMessage = () => `${action()} any image to start.`;

const styles = {
	fontFamily: '"Open Sans Condensed", sans-serif',
	fontSize: 18,
}

export default (props: Props) => (
    <Snackbar
        className="Instructions"
        open={props.open}
        message={getMessage()}
        contentStyle={styles}
    />
);