// @flow

import React 	from 'react';

// types
import type { Page } from '../Map';

// components
import CustomDialog from './CustomDialog';
import ModalMobile 	from '../ModalMobile/';
import ModalDesktop from '../ModalDesktop';

import mediaMap from './mediaMap';

type Props = {
    isOpen: Boolean,
    open: Function,
    close: Function,
    content: Page,
    getNextPage: Function,
    isMobile: Boolean,
};

export default (props: Props) => (
	<CustomDialog
		open={props.isOpen}
		onRequestClose={props.close}
		className="modal"
	>
		{props.isMobile() && (<ModalMobile {...props} mediaMap={mediaMap} />)}
		{!props.isMobile() && (<ModalDesktop {...props} mediaMap={mediaMap} />)}
	</CustomDialog>
);
