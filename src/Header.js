import React, { Component } from "react";
import { NavStyle, UlStyle, AStyle, LogoStyle, LiStyle } from "./StyledHeader";
import LogoImage from "./img/9-removebg-preview.png";

class Header extends Component {
    render() {
        return (
           <NavStyle>
            <h3><LogoStyle src={LogoImage} alt="Logo" /></h3>
            <UlStyle>
                <LiStyle><AStyle href="#home"><span>Home</span></AStyle></LiStyle>
                <LiStyle><AStyle href="#product"><span>Product</span></AStyle></LiStyle>
                <LiStyle><AStyle href="#testi"><span>Testimonial</span></AStyle></LiStyle> 
                <LiStyle><AStyle href="#about"><span>About Us</span></AStyle></LiStyle>
                <LiStyle><AStyle href="#contact"><span>Contact</span></AStyle></LiStyle>
            </UlStyle>
           </NavStyle>
        );
    }
}

export default Header;
