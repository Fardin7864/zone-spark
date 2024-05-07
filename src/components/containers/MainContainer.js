import React from 'react';

const MainContainer = ({children}, color, from, to ) => {
    return (
        <div className={`bg-[${color}] bg-gradient-to-r from-[${from}] to-[${to}]`}>
            {children}
        </div>
    );
};

export default MainContainer;