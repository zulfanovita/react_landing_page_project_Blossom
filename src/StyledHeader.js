import styled from 'styled-components';

export const NavStyle = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 95px;
    padding: 0 100px;
    background-color: #F8F7F4; /* Mengubah warna background header */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan untuk efek mengambang */
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end; /* Tambahkan jarak antara item */
    margin: 0;
    padding: 0;
`;

export const LiStyle = styled.li`
    margin: 0 10px; /* Kurangi jarak antar item */
`;

export const AStyle = styled.a`
    appearance: none;
    background-color: transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: 'Poppins', sans-serif; /* Gunakan font Poppins */
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 1em;
    margin: 0;
    opacity: 1;
    outline: 0;
    padding: 1.2em 1.5em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 300ms cubic-bezier(.694, 0, 0.335, 1), border 100ms cubic-bezier(.694, 0, 0.335, 1);
    user-select: none;
    white-space: nowrap;

    &:hover {
        color: #000000; /* Ubah warna teks saat di-hover */
        border: 2px solid #000000; /* Ubah border saat di-hover */
        text-decoration: none;
    }

    span {
        z-index: 1;
        position: relative;
    }
`;

export const LogoStyle = styled.img`
    height: 70px; /* Sesuaikan ukuran tinggi logo menjadi lebih kecil */
    width: auto;  /* Pertahankan rasio aspek */
`;
