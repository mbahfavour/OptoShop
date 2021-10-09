import { Info } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   flex: 1;
   margin: 4px;
   height: 70vh;
   position: relative;
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

const Details = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Title = styled.h1`
   color: white;
   margin-bottom: 20px;
`;

const Button = styled.button`
   border: none;
   padding: 10px;
   border-radius: 3px;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 600;
`;


const CategoryContent = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Details>
                <Title>{item.title}</Title>
                <Button>SHOP NOW!</Button>
            </Details>
        </Container>
    )
}

export default CategoryContent
