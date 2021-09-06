import React from 'react'
import styled from 'styled-components'
import img from '../images/Rect.png'
import img2 from '../images/logo.png'


const Container = styled.div`
    /* height: 1375px; */
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
       font-size: 44px;
       font-weight: bold;
       line-height: 64px;
       text-align: center;
       color: #000;
       margin: 88px 0px 11px;

    @media screen and (max-width: 768px) {
      margin-top: 47px;
    }

    }
`;

const SubHeading = styled.div`
   font-size: 18px;
   line-height: 28px;
   text-align: center;
   color: #000;
   max-width: 450px;

   @media screen and (max-width: 768px) {
      width: 337px;
    }
`;

const Group = styled.div`
    width: 100%;
    max-width: 1170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 53px auto 76px;
`;

const BoxA = styled.image`
    width: 100%;
    margin-right: 31px;
    max-width: 370px;
    height: 370px;
    background: url(${img});
    object-fit: cover;
`;


const SubFooter = styled.div`
   margin: 115px 0 149px; 
   display: flex;
   flex-direction: column;
   align-items: center;

   @media screen and (max-width: 768px) {
      margin: 66px 0 69px;
    }
`;

const FooterHeading = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    color: #2349B6;
    margin-bottom: 23px;
`;

const FooterNote = styled.div`
   margin-bottom: 28px;
   color: #222;
   font-size: 24px;
   line-height: 38px;
   text-align: center;
   color: #222;
   width: 100%;
   max-width: 680px;

   h4 {
     font-size: 12px;
     line-height: 10px;
     text-align: center;
     color: #000;
     

     span {
         display: inline-block;
     }
   }

`;

const Footer = styled.div`
  border: solid 1px #e7e7e7;
  width: 100%;
  max-width: 1500px;
  padding: 25px 0px;
 
   div {
    display: flex;
    flex-direction: row; 
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;

   @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
     
    }
   }
`;



const AutoGroup = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 100px;
  background: #fff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  padding-left: 57px;
  padding-right: 31px;

  @media screen and (max-width: 768px) {
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: none;
    }

    h2 {
      margin-top: 30px;

      @media screen and (max-width: 768px) {
         font-size: 18px;
         line-height: 18px;
         margin-top: 20px;
        }
     }
`;

const Group1 = styled.div`
   display: flex;
   flex-direction: row;
`;

const Group2 = styled.div`
    justify-content: space-around;
    display: flex;
    flex-direction: row;

    h5 {
     font-size: 14px;
     line-height: 24px;
     margin-right: 11px;
  } 
`;

const Group3 = styled.div`
     display: flex;
     flex-direction: row; 
     justify-content: end;

  h5 {
     font-size: 14px;
     line-height: 24px;
     margin-right: 11px;
  }   

  span {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    letter-spacing: -1px;
  }
`;

const Image = styled.image`
    margin-right: 8px;
    width: 52px;
    height: 20px;
    background: url(${img2});
    object-fit: cover;
`;

const Button = styled.button`
   background: #222;
   white-space: nowrap;
   outline: none;
   border: none;
   width: 220px;
   height: 50px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   border-radius: 4px;
   font-size: 18px;
   font-weight: bold;
   margin-top: 23px;

   &:hover {
       transform: translateY(-2px);
   }

   @media screen and (max-width: 768px) {
      width: 300px;
      height: 35px;
      margin-bottom: 20px;
    }
`;

const Portfolio = () => {
    return (
        <Container>
           <h1>Portfolio</h1> 
           <SubHeading>
               We've Created Hundreds of Videos for Satisfield Customers in the US and Globally. Here Are Just a Few!
           </SubHeading>
           <Group>
              <BoxA /> 
              <BoxA /> 
              <BoxA /> 
           </Group>
           <AutoGroup>
               <h2>Automated Business Growth</h2>
               <Button>
                   Schedule A call
               </Button>
           </AutoGroup>
           <SubFooter>
               <FooterHeading>
                   WHAT OTHER ARE SAYING
               </FooterHeading>
               <FooterNote>
                   Noah showed me how to grow my email list and figure out my site's revenue model. Don't let his casual, taco-talking sthle fool you. The guy get serious business results.
               </FooterNote>
               <h4>-Andrew Warner</h4>
               <span>Founder of Mixergy.com</span>
           </SubFooter>
           <Footer>
               <div>
                    <Group1>
                        <Image />
                        <h3>Recrowdly</h3>
                    </Group1>
                    <Group2>
                        <h5>Portfolio</h5>
                        <h5>Pricing</h5>
                        <h5>Process</h5>
                        <h5>FAQs</h5>
                    </Group2>
                    <Group3>
                        <h5>A Punch Group company</h5>
                        <span>punch</span>
                    </Group3>
               </div>
           </Footer>
        </Container>
    )
}

export default Portfolio
