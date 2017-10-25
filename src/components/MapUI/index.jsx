// @flow

import React from 'react';
import _ from 'lodash';

// types
import type { MarkerProps } from '../Map';
import type { Page } from '../Map';

// components
import Marker from '../Marker';
import Modal from '../Modal';
import Instructions from '../Instructions';

type Props = {
    map: ?Object,
    markers: Array<MarkerProps>,
    page: Page,
    openModal: Function,
    closeModal: Function,
};

export default (props: Props) => props.map ? (
    <div>
        {props.markers.map((marker: MarkerProps, key: number) => (
        	<Marker
        		key={key}
        		isPulsing={key === props.pulsingMarkerIndex}
				img={marker.img}
				coords={marker.coords}
				type={marker.type}
				pageId={marker.id}
				map={props.map}
				openModal={props.openModal}
				getNextPage={props.getNextPage}
        	/>
        ))}
        <Modal
        	isOpen={props.modalIsOpen}
        	open={props.openModal}
        	close={props.closeModal}
        	content={props.page}
        	getNextPage={props.getNextPage}
            isMobile={props.isMobile}
        />
        <Instructions
            open={props.instructionsAreOpen}
        />
    </div>
) : null;