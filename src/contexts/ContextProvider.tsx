import { createContext, useContext, useState, useEffect } from "react";
import { json } from "stream/consumers";
import axios from "axios";

type InitialState = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

type ChildrenProp = {
  children: React.ReactNode;
};
const initialState: InitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: any;
  id: number | string;
  images: string[];
  price: number;
  rating: any;
  thumbnail: string;
  stock: number;
  title: string;
};

type ProductOrderedType = ProductType[];

const StateContext = createContext<any>({});

export const ContextProvider = ({ children }: ChildrenProp) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<InitialState>(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [productList, setProductList] = useState<ProductOrderedType | {}>([]);
  const [currentColor, setCurrentColor] = useState<string>("Light");
  const [currentMode, setCurrentMode] = useState<string>("#03C9D7");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);

  useEffect(() => {
    const ThemeMode = localStorage.getItem("themeMode");
    const ColorMode = localStorage.getItem("colorMode");
    if (!ThemeMode && !ColorMode) {
      localStorage.setItem("themeMode", currentColor);
      localStorage.setItem("colorMode", currentMode);
    } else if (ThemeMode && ColorMode) {
      const theme = ThemeMode;
      const color = ColorMode;
      setCurrentMode(theme);
      setCurrentColor(color);
    }
  });

  const setMode = (mode: string) => {
    setCurrentMode(mode);
    localStorage.setItem("themeMode", mode);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductList(res.data.products))
      .catch(() => <></>);
  });

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        productList,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
