// @flow

import React from 'react';
import _ from 'lodash';

// types
import type { Marker } from '../Map';
import type { Page } from '../Map';

type Props = {
    map: ?Object,
    marker: Marker,
    page: Page,
    showContentBox: Function,
    hideContentBox: Function,
};

export default (props: Props) => props.map ? (
    <div>
        SLASHER PUSS
    </div>
) : null;