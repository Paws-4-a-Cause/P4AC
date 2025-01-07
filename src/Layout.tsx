import Navbar from '../src/components/Navbar';

import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div id = "layout">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
