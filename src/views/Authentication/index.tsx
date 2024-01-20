import React from 'react';
import './style.css';
import MainLogo from "../../assets/image/MainLogo.png"

// component: 인증 화면 컴포넌트 //
export default function Authentication() {
    // render: 인증 화면 컴포넌트 렌더링 //
    return (
        <div
            className='
          flex
          min-h-full
          flex-col
          justify-center
          py-12
          sm:px-6
          lg:px-8
          bg-gray-50'
        >
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <img
                    alt='MainLogo'
                    height="130"
                    width="130"
                    className="mx-auto w-auto"
                    src={MainLogo}
                />
                <h2 className='
                mt-4
                text-center
                text-3xl
                font-bold
                font-sans
                tracking-tight
                text-gray-900'
                >
                    당신 근처의 당근
                </h2>
                <h3 className="text-xl mt-6 text-center  font-medium tracking-tight text-gray-600"> 동네라서 가능한 모든 것</h3>
                <h3 className="text-xl mt-2 text-center font-medium tracking-tight text-gray-600">지금 내 동네를 선택하고 시작해보세요!</h3>


            </div>



        </div>
    )
}
