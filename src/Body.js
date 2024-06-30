import React, { useState } from "react";
import ImgAbout from "./img/about_new.png";
import ImgProductOne from "./img/product/1.png";
import ImgProductTwo from "./img/product/2.jpg";
import ImgProductThree from "./img/product/3.png";
import FacebookIcon from "./img/facebook.png";
import InstagramIcon from "./img/instagram.png";
import TwitterIcon from "./img/twitter.png";
import DeleteTesti from "./img/delete.png";

import {
    BennerStyle, ButtonStyle, BennerText,
    AboutStyle, AboutImg, AboutHeading, AboutText,
    TestiForm, TestiSection,
    TestiStyle,
    ProductSection, ProductGrid, ProductCard, ProductImage, ProductTitle, ProductPrice,
    ContactStyle, SocialIcons, SocialIcon, ContactInfo,
    ButtonStyleHome
} from "./StyledBody";

const products = [
    { id: 1, name: "Summer Stunners", price: "$120", img: ImgProductOne },
    { id: 2, name: "Ephemeral Elegance", price: "$150", img: ImgProductTwo },
    { id: 3, name: "Simple White", price: "$130", img: ImgProductThree },
];

const Body = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputText, setInputText] = useState('');

    const handleAuthorChange = (e) => {
        setInputAuthor(e.target.value);
    };

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const addTestimonial = () => {
        if (inputAuthor.trim() !== '' && inputText.trim() !== '') {
            const newTestimonial = {
                author: inputAuthor,
                text: inputText,
            };
            setTestimonials([...testimonials, newTestimonial]);
            setInputAuthor('');
            setInputText('');
        }
    };

    const deleteTestimonial = (index) => {
        const updateTestimonials = testimonials.filter((_, i) => i !== index);
        setTestimonials(updateTestimonials);
    };

    const handleGamelabClick = () => {
        window.location.href = 'https://www.gamelab.id/';
    }

    const [message, setMessage] = useState('');
    const handleAboutClick = () => {
        setMessage('Thank you for joining us on this journey through time. Thank you for joining us on this journey through time. We hope that our collection brings joy, inspiration, and a touch of vintage magic to your wardrobe.');
    };

    return (
        <div>
            <section id="home">
                <BennerStyle>
                    <BennerText>
                        <h3>Embrace Timeless Elegance</h3>
                        <p>Discover the Charm of Vintage Dress</p>
                        <ButtonStyleHome onClick={handleGamelabClick}>Shop Now</ButtonStyleHome>
                    </BennerText>
                </BennerStyle>
            </section>

            <section id="product">
                <ProductSection>
                    <h1>Our Products</h1>
                    <br></br>
                    <br></br>
                    <ProductGrid>
                        {products.map(product => (
                            <ProductCard key={product.id}>
                                <ProductImage className="image">
                                    <img src={product.img} alt={product.name} />
                                    <span className="text"></span>
                                </ProductImage>
                                <ProductTitle className="title">{product.name}</ProductTitle>
                                <ProductPrice className="price">{product.price}</ProductPrice>
                            </ProductCard>
                        ))}
                    </ProductGrid>
                </ProductSection>
            </section>

            <section id="testi">
                <TestiSection>
                    <h1>Testimonial</h1>
                    <TestiForm>
                        <form>
                            <div className="input-group">
                                <label className="nama">Name :</label>
                                <input autoComplete="off" 
                                    type="text"
                                    placeholder="Enter author..."
                                    value={inputAuthor}
                                    onChange={handleAuthorChange}
                                    className="input"/>
                            </div>

                            <div className="input-group">
                                <label className="pesan">Message :</label>
                                <textarea
                                    placeholder="Enter testimonial..."
                                    value={inputText}
                                    onChange={handleTextChange}
                                ></textarea>
                            </div>
                            <div className="btn-block">
                                <button type="button" onClick={addTestimonial}>
                                    Add Testimonial
                                </button>
                            </div>
                        </form>
                    </TestiForm> 

                    <TestiStyle className="testimonial-list">
                        {testimonials.map((testimonial, index) => (
                            <div className="box" key={index}>
                                <h2 className="card-title">{testimonial.author}</h2>
                                <p className="card-text">{testimonial.text}</p>
                                <button onClick={() => deleteTestimonial(index)}>
                                    <img src={DeleteTesti} alt= "Delete"/>
                                </button>
                            </div>
                        ))}
                    </TestiStyle>
                </TestiSection>
            </section>

            <section id="about">
                <AboutStyle>
                    <AboutImg>
                        <img alt="blossom" src={ImgAbout} style={{height: "300px", width: "300px"}} />
                    </AboutImg>
                    <AboutText>
                        <AboutHeading>Welcome to Blossom Vintage Boutique</AboutHeading>
                        <p>
                            At Blossom, we believe in celebrating the timeless beauty and elegance of vintage fashion. 
                            Our curated collection of vintage dresses captures the essence of classic styles, 
                            allowing you to embrace the charm and sophistication that never goes out of style.
                        </p>
                        {message && <p>{message}</p>}
                        <ButtonStyle onClick={handleAboutClick}>Read More</ButtonStyle>
                    
                    </AboutText>
                </AboutStyle>
            </section>

            <section id="contact">
                <ContactStyle>
                    <h1>Contact </h1>
                    <ContactInfo>
                        <p>Email: info@blossomvintage.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Vintage St, Fashion City, FC 12345</p>
                    </ContactInfo>
                    <SocialIcons>
                        <SocialIcon href="https://www.facebook.com">
                            <img src={FacebookIcon} alt="Facebook" />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com">
                            <img src={InstagramIcon} alt="Instagram" />
                        </SocialIcon>
                        <SocialIcon href="https://www.twitter.com">
                            <img src={TwitterIcon} alt="Twitter" />
                        </SocialIcon>
                    </SocialIcons>
                </ContactStyle>
            </section>
        </div>
    );
}

export default Body;
