import React, {useState} from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  max-width: 570px;
  height: 60px;
  margin: 0 auto;
`;

const ButtonInside = styled.form`
   position: relative;
`;

const Input = styled.input`
    width: 100%;
    max-width: 570px;
    height: 60px;
    opacity: 0.75;
    box-shadow: 0px 40px 70px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    padding-left: 10px;
    border-radius: 4px;
    border: none;
    outline: none; 
    font-size: 17px;
    line-height: 18px;
    color: #a2a19e;
    /* background-color: #f4f4; */
`;

const Button = styled.button`
   position:absolute;
    right: 4px;
    top: 7px;
    outline:none;
    text-align:center;
    font-weight:bold;
    padding:2px;
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
    font-size: 14px;
    font-weight: 400;
    color: #fff;

    &:disabled {
        filter: contrast(0.6);
      } 

    &:hover {
       transform: translateY(-2px);
   }

   @media screen and (max-width: 768px) {
        top: 72px;
    }
`;


const FieldError = styled.span`
   color: #b32e2e;
   font-size: 11px;
   min-height: 18px;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
`;

const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
`;

const validationSchema = yup.object({
    email: yup.string().email("Please enter a valid email address").required("Email is required!")
    
})


const FormInput = () => {

    const [success, setSuccess] = useState(null); 
    const [error, setError] = useState(null);
    
   
    const onSubmit = async(values) => {
       const  {...data} = values;
       const res = await axios.post("https://localhost:3000", data)
             .catch((err) => {
              if(err && err.res) setError(err.res.data.message);
              setSuccess(null);
              formik.resetForm(); // remove this beceause retain error detail
          })
 
          if(res && res.data) {
            setError(null);
            setSuccess(res.data.message);
            formik.resetForm();
          }
      }; 
 
    const formik = useFormik({initialValues: {name: '', email: '', body: ''},
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema
    });
   

    return (
        <Container>
            {!error && <FormSuccess>{success ? success : "" }</FormSuccess>}
            {!success && <FormError>{error ? error : ""}</FormError>} 
           <ButtonInside onSubmit={formik.handleSubmit}>
           <Input 
                name="email" 
                placeholder="Enter an email address and let's get started" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
               <Button
                  type='submit' 
                  disabled={!formik.isValid}
               > Let's Go </Button>
               <FieldError>
                  {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                </FieldError> 
            </ButtonInside> 
        </Container>
    )
}

export default FormInput
