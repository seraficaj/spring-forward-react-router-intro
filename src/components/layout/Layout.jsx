// wrapper component for app layout

import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>
                <p>super kool kids inc. {new Date().getFullYear()}</p>
            </footer>
        </>
    );
}

export default Layout;
