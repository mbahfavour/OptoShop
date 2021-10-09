import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {sliderContent} from "../data";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`;

const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;


const DescContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Desc = styled.p`
    margin: 40px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.5px;

`;


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: black;
    cursor: pointer;
    color: white;
    border: none;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left"  && "10px"};
    right: ${props => props.direction === "right"  && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;



const Slider = () => {
    
    const[slideIndex, setSlideIndex] = useState(0)



    const handleClick = (direction) => {
        
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1: 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderContent.map(item => (
                   <SlideContainer bg={item.bg}>
                   <ImgContainer>
                       <Image src={item.img} />
                   </ImgContainer>
                   <DescContainer>
                       <Title>{item.title}</Title>
                       <Desc>{item.desc}</Desc>
                       <Button>Shop Now</Button>
                   </DescContainer>
                </SlideContainer>  
                ))} 
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
