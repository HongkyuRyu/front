import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Container() {

    // state: 현재 페이지 path name 상태 //
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <>  {pathname}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
