import React from 'react';
import * as Scroll from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const scroll = Scroll.animateScroll;

const DownArrow = () => {
    return (
        <FontAwesomeIcon onClick={onDownArrowClicked} icon={faArrowDown} size="2x" />
    );
}

const onDownArrowClicked = () => {
    scroll.scrollToBottom();
}

export default DownArrow;