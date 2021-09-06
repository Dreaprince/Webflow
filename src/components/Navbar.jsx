import React from 'react'
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import img from '../images/logo.png'
import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
   height: 105px;
   display: flex;
   
   padding: 1rem 2rem;
   z-index: 100;
   width: 100%;
   background: #E5E5E5;
   width: 100%;
   max-width: 1500px;
   margin: 0 auto;
   
`;

const Container = styled.div`
   width: 100%;
   max-width: 1170px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;

   div {
       display: flex;
   }
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
        margin-right:25px;
    }
`;

const NavLink = css`
  color: #000;
  display: flex;
  align-items: center;
 
  height: 100%;
  cursor: pointer;
  font-weight: 800;
  text-decoration: none;
`;



const Logo = styled(Link)`
   ${NavLink}
   width: 200px;
   font-style: normal;
   display: flex;
   font-size: 18px;

   h3 {
    @media screen and (max-width: 768px) {
        display: none;
    }
   }
   
`;

const LogoImage = styled.img`
     width: 100%;
     margin-right: 5px;
    max-width: 52.33px;
    height: 21px;
    background: url(${img});
    object-fit: cover;
`;

const MenuBars = styled(FaBars)`
   display: none;

   @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 30px;
        width: 30px;
        margin-top: 30px;
        cursor: pointer;
        position: absolute;
        color: #000;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
     ${NavLink}
     font-weight: 700;
     font-size: 14px;
     line-height: 16px;
     padding: 0 1rem;

     @media screen and (max-width: 768px) {
        display: none;
    }
`;



const Navbar = ({toggle}) => {
    return (
        <Nav>
          <Container> 
            <div> 
                <Logo to="/">
                <LogoImage />
                    <h3>Recrowdly</h3>
                </Logo> 
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))} 
                </NavMenu>
            </div>  
            <NavBtn>
                <Button to='/schedule'
                    primary='true'
                    big='true'
                    weight='true'
                    css={`
                        width: 150px;
                        height: 40px;
                    `}
                >
                    Schedule A Call
                    </Button>
            </NavBtn>
           </Container> 
        </Nav>
    )
}

export default Navbar

