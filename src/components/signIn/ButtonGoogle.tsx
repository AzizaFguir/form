import { GoogleLogin } from '@react-oauth/google';

export default function ButtonGoogle() {
  
    const responseMessage = (response:unknown) => {
        console.log(response);
    };
    const errorMessage = (error:unknown) => {
        console.log(error);
    };
    return (
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    
    
  
  )
}