import * as React from 'react';

import { PortraitImage } from './portrait.styles';

import port from '/src/images/portrait.jpg';

const Portrait = () => {
    return (
        <>
            <PortraitImage src={port}/>
        </>
    )
}

export default Portrait;