import { useLinkedIn } from 'react-linkedin-login-oauth2';

export default function LinkedinButton() {
    const { linkedInLogin } = useLinkedIn({
        clientId: '86vhj2q7ukf83q',
        redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
        onSuccess: (code) => {
          console.log(code);
        },
        onError: (error) => {
          console.log(error);
        },
      });
  return (
    <><button className='button' onClick={linkedInLogin} ><img src="icons/linkedin.svg" alt="google login" className="icon2"></img><span className="buttonText">Sign in with Linkedin</span>
    
    </button></>
  )
}
