import React from 'react'
import Logo from '../../assets/image/Logo.png';
import { useNavigate } from 'react-router-dom'
import HeaderContainer from 'layouts/navbar/HeaderContainer';
import Search from 'layouts/navbar/Search';
import UserMenu from 'layouts/navbar/UserMenu';
import ClientOnly from 'layouts/navbar/ClientOnly';
import RegisterModal from 'layouts/modals/RegisterModal';

export default function Navbar() {

    const router = useNavigate();

    return (
        <ClientOnly>
            <RegisterModal />
            <div className="fixed w-full bg-white z-10 shadow-sm">
                <div className="
             py-4
             border-b-[1px]
             ">
                    <HeaderContainer>
                        <div
                            className="
                          flex
                          flex-row
                          items-center
                          justify-between
                          gap-3
                          md:gap-0">
                            <img
                                alt='Logo'
                                className='hidden md:block cursor-pointer'
                                height={100}
                                width={100}
                                src={Logo}
                            />
                            <Search />
                            <UserMenu />
                        </div>
                    </HeaderContainer>

                </div>

            </div>


        </ClientOnly>)
}
