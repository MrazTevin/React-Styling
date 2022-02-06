import React from 'react';
import{useRef, useEffect} from "react";
// import "./styles.css";
import styled from "styled-components";

// const MyButtonComponent = () => {
//     return <button className="myButton">Sign In</button>

// }

// export default MyButtonComponent

// const PropsButton = () => {
//     return (
//     <div>
//         <Button>Sign In</Button>
//         <Button disabled>Sign In</Button>
//     </div>  
//     );
// }

// export default PropsButton;

// const MyButton = () => {
//     // const[count,setCount] = useState(0);
//     const ref = useRef(null)

//     // useEffect(() => {
//     //     document.title = `You clicked ${count} times`;
//     // },[count]);

//     useEffect( ()=> {
//         if (ref) {
//             ref.current.click()
//             // console.log('ref',ref.current);
//         }
//     })
//     return (
//         <Button onClick={() => alert("You clicked!")} ref={ref}> 
//             Click me
//         </Button>
//     );
// }

const MyButton = (props) => {
    return <Button isActive={props.isActive}>Click Me!</Button>;
} 

export default MyButton;

const Button = styled.button `
    background: $ {(props) =>
    props.isActive
        ? "linear-gradient(91.4deg,#2fb8ff 0%,#9eecd9 100%)"
        :"grey"};
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`;
// const Button = styled.button`
//     background: linear-gradient(91.4deg,#2fb8ff, 0%, #9eecd9 100%);
//     padding: 12px 0;
//     width: 200px;
//     border: none;
//     border-radius: 30px;
//     color: white;
//     font-weight: bold;
//     font-family: SegoeUI,sans-serif;
// `;


// const Button = styled.button`
//     background: ${(props) => 
//         props.disabled
//         ?"grey"
//         :"linear-gradient(91.4deg,#2fb8ff 0%,#9eecd9 100%)"};
//     padding:12px 0;
//     width: 200px;
//     border: none;
//     border-radius: 30px;
//     color: white;
//     font-weight: bold;
//     font-family: Segoe UI, sans-serif;
// `