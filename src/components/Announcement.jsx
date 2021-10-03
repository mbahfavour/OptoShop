import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex:
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
`;

const Announcement = () => {
    return(
        <Container>
            Super deals for purchases over $100.00      
        </Container>
    )
}
  
export default Announcement
