import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { BsChatRight } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Avatar } from "../data/Images";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

type NavButtonProps = {
  title: string;
  customFn(): void;
  icon: React.ReactNode;
  color: string;
  dotColor?: string;
};

const NavButton = ({
  title,
  customFn,
  icon,
  color,
  dotColor,
}: NavButtonProps): JSX.Element => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFn()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFn={() =>
          setActiveMenu((prevActiveMenu: boolean) => !prevActiveMenu)
        }
        color={currentColor}
        icon={<AiOutlineMenu />}
      ></NavButton>

      <div className="flex">
        <NavButton
          title="Cart"
          customFn={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        ></NavButton>

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFn={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        ></NavButton>

        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFn={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        ></NavButton>

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={Avatar}
              alt="User Profile Image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-gray-400 text-14">
              <span>Hi,</span> <span className="font-bold ml-1">Adeniyi</span>
            </p>
            <p className="text-gray-400 text-14">
              <MdKeyboardArrowDown />
            </p>
          </div>
        </TooltipComponent>

        {/* {isClicked.cart && <Cart />} */}
        {/* {isClicked.chat && <Chat />} */}
        {/* {isClicked.notification && <Notification />} */}
        {/* {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
