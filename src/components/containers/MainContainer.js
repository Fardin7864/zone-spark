import React from 'react';

const MainContainer = ({children}, color) => {
    return (
        <div className={`bg-[${color}]`}>
            {children}
        </div>
    );
};

export default MainContainer;