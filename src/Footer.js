import React from "react";
import { 
    StyledFooter, 
    FooterLogo, 
    FooterAddr, 
    FooterNav, 
    NavItem, 
    NavTitle, 
    NavUl, 
    Legal
} from "./StyledFooter";
import Logo from "./img/9-removebg-preview.png"; // Replace with the correct path to your logo

const Footer = () => {
    return (
        <StyledFooter>
            <FooterAddr>
                <FooterLogo src={Logo} alt="Vintage Dress Logo" />
            </FooterAddr>
            <FooterNav>
                <NavItem>
                    <NavTitle><a href="#home">Home</a></NavTitle>
                    <NavUl>
                        {/* Additional Nav Items */}
                    </NavUl>
                </NavItem>
                <NavItem>
                    <NavTitle><a href="#product">Product</a></NavTitle>
                    <NavUl>
                        {/* Additional Nav Items */}
                    </NavUl>
                </NavItem>
                <NavItem>
                    <NavTitle><a href="#testi">Testimonial</a></NavTitle>
                    <NavUl>
                        {/* Additional Nav Items */}
                    </NavUl>
                </NavItem>
                <NavItem>
                    <NavTitle><a href="#about">About Us</a></NavTitle>
                    <NavUl>
                        {/* Additional Nav Items */}
                    </NavUl>
                </NavItem>
                <NavItem>
                    <NavTitle><a href="#contact">Contact</a></NavTitle>
                    <NavUl>
                        {/* Additional Nav Items */}
                    </NavUl>
                </NavItem>
            </FooterNav>
            <Legal>
                <p>&copy; 2023 | Blossom. All rights reserved.</p>
            </Legal>
        </StyledFooter>
    );
}

export default Footer;
