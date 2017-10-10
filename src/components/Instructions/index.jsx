import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import './Instructions.scss';

const action = () => window.innerWidth < 768 ? 'Touch' : 'Click';

const getMessage = () => `${action()} any image to start exploring murals.`;

export default (props: Props) => (
    <Snackbar
        className="Instructions"
        open={props.open}
        message={getMessage()}
    />
);