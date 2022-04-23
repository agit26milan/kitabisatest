import React from "react";
import {Row, Col, Navbar, NavbarBrand} from 'reactstrap'
import styled from "styled-components";
import Image from "next/image";
import KitaBisaPic from '../../assets/images/kitabisa.png'
import { useRouter } from 'next/router'

const LogoContainer = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #f2f2f2;
cursor: pointer
`

const CustomNavbar = () => {
    const router = useRouter()

    const onPressLogo = () => {
        router.replace({
            pathname: '/'
        })
    }

    return (
        <Navbar
        expand="md"
        light
  >
        <NavbarBrand>
           <LogoContainer onClick={onPressLogo} >
               <Image src={KitaBisaPic} height={60} width={60} />
           </LogoContainer>
        </NavbarBrand>
  </Navbar>
    )
}


export default CustomNavbar