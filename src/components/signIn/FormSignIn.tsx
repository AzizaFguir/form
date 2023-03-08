import { useForm } from "react-hook-form";

//import ButtonGoogle from "./ButtonGoogle";
//import ButtonGoogle from "./ButtonGoogle";
//import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import LinkedinButton from "./LinkedinButton";
import './form.css'
import ButtonGoogle from "./ButtonGoogle";




export default function FormSignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data:unknown) => console.log(data);
   

  return (
    
       <div className="form card"> 
       <div className="card-header">
                <div className="title ">Sign In !</div>
            </div>
       <div className="butt">
        
        <ButtonGoogle/>
        <LinkedinButton/>
        <div className="separator">
  <hr className="line" />
  <span>Or</span>
  <hr className="line" />
</div>
       
             


  
    <form className="formk" onSubmit={handleSubmit(onSubmit)}>
      
    <div className="Group">
      <input type="email"  className="input-field" placeholder="Email" 
        {...register("singleErrorInput", {
          required: "Please enter email"
        })}
      />
      <ErrorMessage className="err"errors={errors} name="singleErrorInput" as="p" />

      
      
        
        <input  type="password"  className="input-field" placeholder="Password" {...register("singleErrorInput2", {
          required: "Please enter password"
        })}/>
          <ErrorMessage className="err"errors={errors} name="singleErrorInput2" as="p" />
    
          </div>
      <button type="submit" className='btn'>Sign In</button>
              
      <a href="#" className="btn-link">Forgot your password?</a>
      <p className='shaper'>Not a shaper yet? <a href ="#" className='btn-link2'>Create your account</a></p>
      
     
      </form>
   
      
    </div>
    </div>
    

  )
}

 