import React from 'react'
import FormInput from './FormInput';
import styled  from 'styled-components'
import img1 from '../images/a.png'
import img2 from '../images/b.png'
import img3 from '../images/c.png'
import img4 from '../images/d.png'
import imgp from '../images/p.png'


const Container = styled.div`
  /* height: 1950px; */
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90.39deg, #fff 0.37%, rgba(255, 255, 255, 0)99.71%);
  @media screen and (max-width: 768px) {
        padding: 0px 23px 0px;
    }
`;

const OuterBox = styled.div`
   background: linear-gradient(#fff, #778e9b);
`;

const Box = styled.div`
   width: 100%;
   height: 692px;
   max-width: 1005px;
   margin: 0 auto;
`;

const Box2 = styled.div`
   background: #fff;
   margin: 260px auto 120px;
   width: 100%;
   max-width: 1170px;

   @media screen and (max-width: 768px) {
       margin-bottom: 48px;   
    }
`;

const Note = styled.div`
      font-weight: bold;
      font-style: normal;
      font-size: 58px;
      line-height: 74px;
      text-align: center;
      color: #000;
      margin: 158px 0px 66px;

      @media screen and (max-width: 768px) {
        margin: 28px auto 31px;
        font-size: 34px;
        line-height: 44px;
        margin-top: 28px;
    }
`;

const Videodiv = styled.div`
   position: relative;
`;

const Image8 = styled.div`
    width: 100%;
    max-width: 55px;
    height: 62px;
    background: url(${imgp});
    object-fit: cover;
    position: absolute;
    top: 320px;
    right: 430px;

    @media screen and (max-width: 768px) {
       right: 200px;
    }
`;

const Vnote = styled.div`
   color: #fff;
   font-size: 16px;
   line-height: 17px;
   font-weight: bold;
   position: absolute;
   top: 400px;
   right: 400px;

   @media screen and (max-width: 768px) {
       right: 160px;
    }
`;


const Video = styled.video`
     width: 100%;
     max-width: 925px;
     height: 525px;
     margin:121px 0px 39px 74px;
     background-color: #232323;

     @media screen and (max-width: 768px) {
       margin: 94px 0px 24px;   
    }
`;

const PicBox = styled.div`
     width: 100%;
    max-width: 1170px;
    height: 64px;
    background: url(${img1});
    object-fit: cover;
    margin-bottom: 89px;
`;

const NoteBox = styled.div`
   text-align: center;
   margin-bottom: 90px;
  
   @media screen and (max-width: 768px) {
      margin-bottom: 50px;
        
    }
`;

const Heading = styled.div`
   font-weight: bold;
   font-size: 44px;
   line-height: 64px;
   text-align: center;
   color: #000;
`;

const LowNote = styled.div`
   font-size: 18px;
   line-height: 28px;
   text-align: center;
   max-width: 600px;
   margin-left: 280px;
   text-align: center;

   @media screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top: 20px;
        
    }
`;

const FooterBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media screen and (max-width: 768px) {
      flex-direction: column;
        
    }
`;

const Group1 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   max-width: 370px;
   padding: 0px 20px;

   @media screen and (max-width: 768px) {
      flex-direction: row;
      padding: 0px;
        
    }

    div {
      @media screen and (max-width: 768px) {
        margin-left: 5px;
      }
    }

`;

const Image1 = styled.div`
    width: 100%;
    max-width: 180px;
    height: 180px;
    background: url(${img2});
    object-fit: cover;
`;

const Image2 = styled.div`
    width: 100%;
    max-width: 180px;
    height: 180px;
    background: url(${img3});
    object-fit: cover;
`;

const Image3 = styled.div`
    width: 100%;
    max-width: 180px;
    height: 180px;
    background: url(${img4});
    object-fit: cover;
`;

const UpperNote = styled.div`
   text-align: center;
   font-size: 24px;
   font-weight: bold;
   line-height: 24px;
   color: #000;
   margin-bottom: 24px;
`;

const GroupNote = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

const Infosection = ({heading}) => {
    return (
        <Container>
          <OuterBox>
            <Box>
              <Note>{heading}</Note> 
              <FormInput />
              <Videodiv>
                <Video 
                  src='' control autoPlay loop muted 
                />
                <Image8 />
                <Vnote>WATCH THE VIDEO</Vnote>
              </Videodiv>
            </Box>
          </OuterBox>
          <Box2>
            <PicBox /> 
            <NoteBox>
              <Heading>Animated Video Production & Video</Heading>
              <Heading>Marketing Services:</Heading>
              <LowNote>
                Our services cover the entire gamut of what you could use to really get your business`s value proposition out there
              </LowNote>
            </NoteBox>
            <FooterBox>
              <Group1>
                 <Image1 />
                 <div>
                  <UpperNote>2D Animation</UpperNote>
                  <GroupNote>
                    Go classic with a lively 2D animated video that bings to life your ideas to life with vivid colors and motion.
                  </GroupNote>
                 </div>
              </Group1>
              <Group1>
                 <Image2 />
                 <div>
                    <UpperNote>2D Animation</UpperNote>
                    <GroupNote>
                      3D models interact with reality to lend your concept new dimensions.
                    </GroupNote>
                 </div>
              </Group1>
              <Group1>
                 <Image3 />
                 <div>
                    <UpperNote>2D Animation</UpperNote>
                    <GroupNote>
                      Get the best of both 2D and 3D worlds to really bring the most out of your concept.
                    </GroupNote>
                 </div>
              </Group1>
            </FooterBox>
          </Box2>
        </Container>
    )
}

export default Infosection
