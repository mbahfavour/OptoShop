import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
   height: 60px;
   background-color: white;
   color: black;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

`

const SearchContainer = styled.div`
    border: 0.4px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border: none; 
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: white;
    :focus {
        outline: none;
    }
`;

const Middle = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuLink = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
`;

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
               <Left>
                   <Language>EN</Language>
                   <SearchContainer>
                       <Input style={{color:"white"}}/>
                       <Search style={{fontSize: 18}} />
                   </SearchContainer>
               </Left>

               <Middle>
                   <Logo>
                       OptoShop.
                   </Logo>
                    
               </Middle>
               <Right>
                   <MenuLink>
                       Log In
                   </MenuLink>
                   <MenuLink>
                       Sign In
                   </MenuLink>
                   <MenuLink>
                   <Badge badgeContent={2} color="primary">
                       <ShoppingCartOutlined />
                   </Badge>
                   </MenuLink>
               </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
