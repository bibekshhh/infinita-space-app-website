import styled from "styled-components";

export const Container = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0D1117;
    padding: 30px 0px;

    @media screen and (max-width: 768px) {
        min-height: auto;
    }

    @media screen and (max-width: 480px) {
        min-height: auto;
    }
`

export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    /* width: 85vw; */
    gap: 25px;
    /* padding: 8px; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const HeadingH1 = styled.h1`
    font-size: 2.2rem;
    color: #fff;  
    font-weight: 700 !important; 
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`