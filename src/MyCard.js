import React from 'react';
import styled from 'styled-components';
import MyButton from './MyButtonComponent';

const MyCard = () => {
    return (
        <Wrapper>The button should be active
        <MyButton isActive={false} /> 
        </Wrapper>
    );
}

export default MyCard;

const Wrapper  = styled.div `
    margin-top: 100px;
    background: rgba(255,255,255,0.6);
    box-shadow: inset 0 0 0 0.5px rgba(255,255,255,0.6);
    box-radius: 30px;
    padding: 20px;
    width: 300px;
    display: grid;
    gap: 30px;
    justify-items: center;
    align-items: center;
    font-family: SegoeUI, sans-serif;
`;