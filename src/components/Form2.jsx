import React from 'react'
import styled from 'styled-components';


const Box = styled.div`
    width: 100%;
    max-width: 1170px;
    height: 100px;
    opacity: 0.75;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
    padding-left: 57px;
    padding-right: 31px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 

    @media screen and (max-width: 768px) {
      height: 120px;
      padding: 0px;
      margin: 0 15px;

    }

    
    h2 {
        font-size: 24px;
        line-height: 28px;
        font-weight: bold;
        color: #000;
        margin-top: 30px;

        @media screen and (max-width: 768px) {
           font-size: 18px;
           line-height: 18px;
           margin-top: 25px;
       }
    }
`;

const Button = styled.button`
    outline:none;
    text-align:center;
    font-weight:bold;
    padding:2px;
    background: #222;
    white-space: nowrap;
    border: none;
    width: 220px;
    height: 50px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    background: #000;
    margin-top: 23px;

    &:hover {
       transform: translateY(-2px);
   }

   @media screen and (max-width: 768px) {
        height: 35px;
        width: 300px;
    }

`;


const Form2 = () => {

    return (
       
            <Box>
                <h2>Automated Business Growth</h2>
               <Button
                  type='submit' 
               > Schedule A call </Button>
            </Box>
    )
}

export default Form2