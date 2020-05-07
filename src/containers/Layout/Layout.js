import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => (
        <>
            <Header/>
            {props.children}
            <Footer />
        </>
    );

export default Layout;