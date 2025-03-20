import React, { useState } from "react";
import "@fontsource/roboto/500.css";
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { LuSunMedium } from "react-icons/lu";
import { margin } from "@mui/system";

function Header() {
  const [theme, setTheme] = useState(true);
 
  const changeTheme = () => {
    const root = document.querySelector("body");
    
    setTimeout(() => {
      const icons = document.querySelectorAll(".icons");
      icons.forEach((icon) => {
        icon.style.color = theme ? "white" : "black";
      });
    }, 10); // 10ms gecikme
  
    if (root) {
      root.style.backgroundColor = theme ? "#2e2e2e" : "white";
      root.style.color = theme ? "white" : "#2e2e2e";
    }else{
        root.style.backgroundColor = theme ? "white" : "#2e2e2e";
      root.style.color = theme ? "#2e2e2e" : "white";
    }
  
    setTheme(!theme);
  };
  

  return (
    <div style={{marginTop: "10px"}}>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <div className="d-flex">
        {theme ?
        (<img className="logo" src="../src/assets/cretivo-logo-color.png" alt="" />):
        (<img className="logo" src="../src/assets/cretivo-logo-white.png" alt="" />)
        
}
        <h2 className="Roboto">Cretivo B2B</h2>
      </div>
      <div className="d-flex">
        <input className="search-area" type="text" placeholder="İsteğiniz şeyi arayın..." />
        <div>
          <FaBasketShopping className="icons" />
          {theme ? (
            <FaRegMoon className="icons" onClick={changeTheme} />
          ) : (
            <LuSunMedium className="icons" onClick={changeTheme} />
          )}
        </div>
      </div>
    </div></div>
  );
}

export default Header;
