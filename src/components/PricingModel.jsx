import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  /* height: 1100px; */
  display: flex;
  padding-bottom: 53px;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90.39deg, #ffffff, 0.37% rgba(255, 255, 255, 0) 99.71%);
  background: linear-gradient(#fff, #7e8b5f);

   h1 {
     margin: 92px 0px 49px;

     @media screen and (max-width: 768px) {
       margin:41px 0px 0px;
    }

    
    @media screen and (max-width: 768px) {
       padding-bottom: 62px;
    }
   }
`;

const LayOut = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 82px;

   @media screen and (max-width: 768px) {
       flex-direction: column;
       margin-bottom: 30px;
        
    }
`; 

const Box1 = styled.div`
   width: 100%;
   max-width: 370px;
   height: 370px;
   background: rgba(255, 255, 255, 0.75);
   border: solid 1px #f5efef;
   margin-right: 31px;
   margin-top: 160px;
     
     div {
         margin:35px 30px;
     }
     @media screen and (max-width: 768px) {
       margin-top:30px ;   
    }
`; 

const Box2 = styled.div`
   width: 100%;
   max-width: 370px;
   height: 470px;
   background: rgba(255, 255, 255, 0.75);
   border: solid 1px #f5efef;
   margin-right: 30px;
   margin-top: 60px;

   div {
         margin: 30px 37px;
     }

     @media screen and (max-width: 768px) {
       margin-top:30px ;   
    } 
`;

const Box3 = styled.div`
   width: 100%;
   max-width: 370px;
   height: 530px;
   background: #000;
   border: solid 1px #352d2d;
   color: #fff;

   div {
       margin:48px 20px;
   }

   @media screen and (max-width: 768px) {
       margin-top:30px ;   
    }
`; 

const Time = styled.div`
  font-size: 28px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 31px;
`; 

const Note = styled.div`
    font-size: 15px;
    line-height: 23px;
    margin-bottom: 16px;
`; 

const Note2 = styled.div`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 26px;
`; 

const Note3 = styled.div`
    font-size: 20px;
    line-height: 24px;
`; 

const Price = styled.div`
   font-size: 28px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 56px;
`; 



const Price2 = styled.div`
   font-size: 24px;
  line-height: 24px;
  font-weight: bold;
`; 

const Price3 = styled.div`
   font-size: 24px;
  line-height: 24px;
  padding-top: 150px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

   h4 {
       font-size: 24px;
       line-height: 24px;
   }

   span {
      font-size: 18px;
      line-height: 24px;
      text-decoration: underline;
  }

 
`; 
const Hr = styled.hr`
   height: 1px;
   margin: 31px;
`;

const Hr2 = styled.hr`
    height: 1px;
   margin: 43px;
`;

const Hr3 = styled.hr`
   margin-bottom: 46px;
   margin: 38px 25px 46px;
`;

const Textbox = styled.div`
  width: 250px;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LowerLayer = styled.div`
   width: 100%;
   max-width: 1170px;
   /* height: 430px; */
   display: flex;
   color: #000;
   flex-direction: column;
   padding: 36px 42px 24px 50px;
   line-height: 24px;
   border: solid 1px #ebe2e2;
   background: #fff;
 
  h4 {
      margin-bottom: 29px;
  }
  @media screen and (max-width: 768px) {
       /* margin-top: 30px; */
      padding-top: 30px;
       
    }
`; 

const LowerGroup = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: #fff;
   margin-bottom: 30px;

   @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;

const LowerGroup2 = styled.div`
  
`;

const LowerBox1 = styled.div`

@media screen and (max-width: 768px) {
     margin-bottom: 11px;
    }
`; 


const P1 = styled.div`
   font-size: 16px;
   margin-bottom: 11px;

   @media screen and (max-width: 768px) {
       font-size: 14px;
    }
`;

const P2 = styled.div`
   font-size: 16px;

   @media screen and (max-width: 768px) {
       font-size: 14px;
    }
`;

const TopBox = styled.div`
   
   p {
     font-size: 28px;
     font-weight: bold;
   }
`;


const Low = styled.div`
   font: 14px;

 @media screen and (max-width: 768px) {
       font-size: 12px;
    }
`; 

const PricingModel = () => {
    return (
        <Container>
          <h1>Pricing Model</h1> 
          <LayOut>
              <Box1>
                  <div>
                  <Time>30 Second</Time>
                  <Hr />
                  <Note>commercial video (2D)</Note>
                  <Price>$2,000</Price>
                  <Note2>commercial video (3D)</Note2>
                  <Price2>$2,500</Price2>
                  </div>
              </Box1>
              <Box2>
                  <div>
                    <Time>1 Minutes</Time>
                    <Hr2 />
                    <Textbox>
                       <p>Explain video with 2D assets on decided color pallet</p>
                       <span>(Extra palets incur additional cost)</span> 
                    </Textbox>
                    <Price>$3,000</Price>
                    <Note>
                        Explainer video $3,500 with 3D asset on decided color palette
                    </Note>
                    <Price>$3,500</Price>
                  </div>
              </Box2>
              <Box3>
                  <div>
                     <TopBox>
                       <p>1 and a half to</p>  
                       <p>2 minute</p>
                    </TopBox> 
                    <Hr3 />
                    <Note3>Detailed explainer video with detailed asset</Note3>
                    <Price3>
                        <h4>$5,000</h4>
                        <span>Buy Now</span>
                     </Price3>
                  </div>
              </Box3>
          </LayOut> 
          <LowerLayer>
              <h4>Add-ons</h4>
              <LowerGroup>
                <LowerBox1>
                    <P1>Live actor or actress $350</P1>
                    <P2>Copywriting and story direction: $500</P2>
                </LowerBox1>
                <LowerBox1>
                    <P1>Asset creation 2d or 3D $45/hour</P1>
                    <P2>Each video includes two sets of revisions</P2>
                </LowerBox1>
                <LowerBox1>
                    <P1>Additional revisions billed at $45/hr</P1>
                </LowerBox1>
              </LowerGroup>
              <LowerGroup2>
                <Low>Satisfaction guaranteed. if you're not happy with the final product don't pay a dime!</Low>
              </LowerGroup2>
          </LowerLayer>
        </Container>
    )
}

export default PricingModel
