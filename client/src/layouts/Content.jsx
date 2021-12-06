import React from 'react';

import { ContainerType } from '../styles/theme';

const Content = ({ children }) => {
    return (
        <main className={ ` ${ContainerType.paddedContainerAuto} my-4` }>
            {
                children
            }
        </main>
    );
};

export default Content;
