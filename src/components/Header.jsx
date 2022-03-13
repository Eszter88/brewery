import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="header-container">
      <h1 className="logo">Best Beers</h1>
      <MenuIcon sx={{ fontSize: 36 }} />
    </div>
  );
}

export default Header;
