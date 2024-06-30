import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #dab49d;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FooterLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const FooterAddr = styled.address`
  font-style: normal;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  flex: 1;
  padding: 0 10px;
  min-width: 150px;
`;

export const NavTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #fff; // Mengubah warna teks menjadi putih

  a {
    text-decoration: none; // Menghapus garis bawah
    color: #fff; // Mengubah warna teks menjadi putih
    &:hover {
      color: #fff; // Mengubah warna teks saat hover tetap putih
    }
    &:visited {
      color: #fff; // Mengubah warna teks saat dikunjungi tetap putih
    }
  }
`;

export const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;

    a {
      text-decoration: none; // Menghapus garis bawah
      color: green; // Warna default link

      &:hover {
        text-decoration: none;
        color: white; // Warna saat hover
      }

      &:visited {
        color: white; // Warna saat sudah dikunjungi
      }
    }
  }
`;

export const Legal = styled.div`
  font-size: 0.8em;
  margin-top: 20px;
`;

export const LegalLinks = styled.div`
  margin-top: 10px;
`;

export const Heart = styled.span`
  color: red;
`;

export const FooterBtn = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
