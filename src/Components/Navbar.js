import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        handleScrollToSection(this.getAttribute("href"));
      });
    });
  }, []);

  return (
    <nav >
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" style={{ width: "180px", height: "auto" }} />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Categories</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button" style={{backgroundColor:"#8AAAE5"}}>Login/SignUp</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#home");
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#about");
                }}
              >
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#works");
                }}
              >
                <ListItemText primary="Categories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#reviews");
                }}
              >
                <ListItemText primary="Reviews" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#contact");
                }}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenMenu(false);
                  handleScrollToSection("#cart");
                }}
              >
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
