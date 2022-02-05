import React from 'react';
// import "./styles.css";
import styled from "styled-components";

// const MyButtonComponent = () => {
//     return <button className="myButton">Sign In</button>

// }

// export default MyButtonComponent

const MyButton = () => {
    return (
    <div>
        <Button>Sign In</Button>
        <Button>Sign In</Button>
    </div>  
    );
}

export default MyButton;

const Button = styled.button`
    background:linear-gradient(91.4deg,#2fb8ff 0%,#9eecd9 100%);
    padding:12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`