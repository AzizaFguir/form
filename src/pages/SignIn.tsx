
import background from '../assets/images/bg/background.png';
import FormSignIn from '../components/signIn/FormSignIn';
import SignInContent from '../components/signIn/SignInContent';

export default function SignIn() {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover bg-center relative h-screen flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <FormSignIn/>
      <SignInContent/>
    </div>
  );
}