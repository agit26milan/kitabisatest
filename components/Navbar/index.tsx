import React from "react";
import {Row, Col, Navbar, NavbarBrand} from 'reactstrap'
import styled from "styled-components";
import Image from "next/image";
import KitaBisaPic from '../../assets/images/kitabisa.png'
const LogoContainer = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #f2f2f2
`


const CustomNavbar = () => {
    
    return (
        <Navbar
        expand="md"
        light
  >
        <NavbarBrand>
           <LogoContainer >
               <Image src={KitaBisaPic} height={60} width={60} />
           </LogoContainer>
        </NavbarBrand>
  </Navbar>
    )
}


export default CustomNavbar