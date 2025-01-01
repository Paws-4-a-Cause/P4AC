import React from 'react';
import Navbar from '../src/components/Navbar';

const Layout = ({ children }) => {
    return (
        <div id = "layout">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
