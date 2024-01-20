
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

// hooks: modal 상태 관리
import useLoginModal from "hooks/useLoginModal";
import useRegisterModal from "hooks/useRegisterModal";
import useRentModal from "hooks/useRentModal";


const UserMenu = () => {

    const router = useNavigate();

    // state: 모달 상태 state
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const rentModal = useRentModal();

    // state: 토글 메뉴 state
    const [isOpen, setIsOpen] = useState(false);

    // ! eventHandler
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);




    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div

                    className="
            hidden
            md:block
            text-sm 
            font-normal
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
                >
                    내 강의
                </div>
                <div
                    onClick={toggleOpen}
                    className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {/* // state: 토글 메뉴 open상태일 때 // */}
            {isOpen && (
                <div
                    className="
                  absolute
                  rounded-xl
                  shadow-md
                  w-[40vw]
                  md:w-3/4
                  bg-white
                  overflow-hidden
                  right-0
                  top-12
                  text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem
                                onClick={() => { }}
                                label="로그인"
                            />
                            <MenuItem
                                onClick={() => { }}
                                label="회원가입"
                            />

                        </>
                    </div>
                </div>
            )}



        </div>);
}

export default UserMenu;