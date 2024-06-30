import styled from 'styled-components';
import BgBenner from './img/background_1.png';
import BgContact from './img/kupu2small.png';

// Banner
export const BennerStyle = styled.section`
    width: auto;
    min-height: 85.9vh;
    background-color: #F8F7F4;
    background-image: url(${BgBenner});
    background-repeat: no-repeat;
    background-size: 1087px;
    background-position: 94% 99%;
    display: grid;
    align-items: center;
    padding: 0 100px;
    margin-bottom: 0; // Tambahkan ini
`;

export const ButtonStyleHome = styled.button`
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    color: rgb(193, 163, 98);
    border: 2px solid rgb(193, 163, 98);
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        border-radius: inherit;
        scale: 0;
        z-index: -1;
        background-color: rgb(193, 163, 98);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    }

    &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: #555;
        left: calc(50% - 10px);
        bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    }

    &::after,
    &::before {
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
    }

    .text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-wrapper,
    .text

    .text {
        top: 0;
    }

    &:hover {
        background: #222;
    }

    &:hover .text {
        top: -100%;
    }

    &:hover::before {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }
`;

export const ButtonStyle = styled.button`
    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: white;
    font-size: 16px;
    // color: #000;
    cursor: pointer;
    transition: opacity 0.3s;
`;

export const BennerText = styled.div`
    letter-spacing: 1px;

    h3 {
        font-family: 'Cinzel', serif;
        font-size: 2.4rem;
        margin-bottom: 10px;
        color: #cb997e;
        text-transform: uppercase;
    }

    p {
        font-family: 'Antic Didone', serif;
        font-size: 1.5rem;
        margin-bottom: 40px;
        color: #cb997e;
    }
`;

// About
export const AboutStyle = styled.section`
    min-height: 75.9vh;
    background-color: #d0b8ac;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
    margin: 0; // Tambahkan ini
`;

export const AboutImg = styled.div`
    border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
    font-family: 'Cinzel', serif;
    font-size: 1.9rem;
    margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        color: #343a40;
    }
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 0.5rem 0 1.1rem;
`;

// Kartu Produk
export const ProductSection = styled.section`
    padding: 50px 100px;
    min-height: 85.5vh;
    background-color: #d0b8ac; // Warna krem
    margin-top: 0;
    // margin-bottom: 50px;
    text-align: center; // Menambahkan ini untuk membuat h1 berada di tengah

    h1 {
        font-family: 'Cinzel', serif;
        font-size: 2.5rem;
        color: black;
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 5rem;
    justify-content: center; // Menambahkan ini untuk membuat kartu produk berada di tengah
    margin: 0;
`;

export const ProductCard = styled.div`
    position: relative;
    left: 40px;
    width: 15em; // Memperbesar lebar kartu
    height: 20em; // Memperbesar tinggi kartu
    box-shadow: 0px 1px 13px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0.5em;
    padding-bottom: 3.4em;
    margin: 0;
    font-family: 'Poppins', sans-serif;

    &::after {
        content: "Add To Cart";
        padding-top: 1.25em;
        padding-left: 1.25em;
        position: absolute;
        left: 0;
        bottom: -60px;
        background: #decbb7;
        color: #fff;
        height: 3 em;
        width: 100%;
        transition: all 80ms;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0;
        font-family: 'Poppins', sans-serif;
    }

    &:hover::after {
        bottom: 0;
        opacity: 1;
    }

    &:active {
        transform: scale(0.98);
    }

    &:active::after {
        content: "Added!";
        height: 3.125em;
        font-family: 'Poppins', sans-serif;
    }
`;

export const ProductImage = styled.div`
    width: 95%;
    height: 100%;
    display: grid;
    place-items: center;
    margin: 0;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
        object-fit: cover; // Menyesuaikan gambar agar tidak terpotong
    }

    .text {
        max-width: 55px;
    }
`;

export const ProductTitle = styled.span`
    font-family: 'Antic Didone', serif;   
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 1.875em;
    font-weight: 400;
    color: #000;
`;

export const ProductPrice = styled.span`
    font-family: 'Antic Didone', serif;
    font-size: 0.9em;
    position: absolute;
    left: 0.625em;
    bottom: 0.625em;
    color: #000;
    font-weight: bold;
`;

// Testimoni
export const TestiSection = styled.section`
    background-color: #F8F7F4;
    padding: 2rem 0;
    text-align: center;

    h1 {
        margin-bottom: 1.5rem;
        font-family: 'Cinzel', serif;
        font-size: 2.5rem;
        color: black;
    }
`;

export const TestiStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 0 20px;

    .box {
        padding: 20px;
        border-radius: 0.5rem;
        text-align: center;
        background: #decbb7;
        color: black;
        font-family: 'Poppins', sans-serif;

        p {
            font-size: 0.938rem;
        }

        h2 {
            font-weight: bold;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0.5rem 0 0.5rem;
        }

        button {
            background: #d00000;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: #9d0208;
            }

            img {
                width: 30px;  // Ukuran ikon
                height: 30px;  // Ukuran ikon
            }
        }
    }
`;

export const TestiForm = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background: #d0b8ac;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px #ccc;

    .input-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start; // Memposisikan elemen secara horizontal di sebelah kiri
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 5px;
        border: 1px solid #000;
        border-radius: 3px;
        background-color: #F7F7F7;
        font-family: 'Poppins', sans-serif;
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }

    .btn-block {
        margin-top: 20px;
        text-align: center;
    }

    button {
        width: 150px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: white;
        font-size: 16px;
        // color: #000;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.9;
        }
    }
`;


// Kontak
export const ContactStyle = styled.section`
    min-height: 85.9vh;
    background-image: url(${BgContact});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 50px 300px;
    background-color: #F8F7F4; // Warna krem
    display: flex;
    flex-direction: column;
    justify-content: center; // Ini memastikan konten berada di tengah secara vertikal
    align-items: center; // Ini memastikan konten berada di tengah secara horizontal
    text-align: center;
    margin: 0; // Tambahkan ini

    h1 {
        font-family: 'Cinzel', serif;
        font-size: 2.5rem;
        color: #333;
    }

    p {

        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        color: #666;
    }
`;

export const ContactInfo = styled.div`
    margin-bottom: 20px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export const SocialIcon = styled.a`
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;
