import React from 'react';

import Screen from './screen';
import EndModal from './endModal';

export default () => {
    return(
        <div className = 'game-scene'>
            <Screen />
            <EndModal />
        </div>
    );
}