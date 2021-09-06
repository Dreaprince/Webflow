import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
   background: #222;
   white-space: nowrap;
   outline: none;
   border: none;
   width: 140px;
   height: 45px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   /* padding: ${({big}) => (big ? '16px 40px' : '14px 24px')}; */
   color: #fff;
   font-size: ${({big}) => (big ? '14px' : '18px')};
   font-weight: ${({weight}) => (weight ? '400' : '700')};

   &:hover {
       transform: translateY(-2px);
   }
`;