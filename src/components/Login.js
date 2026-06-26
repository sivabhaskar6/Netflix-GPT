import { useRef, useState } from "react";
import checkValidateData from "../utils/validate";


const Login = () => {
    const [isSignIn,setisSignIn] = useState(true);

    const name= useRef(null)
    const email=useRef(null)
    const password=useRef(null)
    const [message,setmessage]=useState(null);

    const validateData=()=>{
        console.log(email.current.value)
        console.log(password.current.value)
        const validateMessage=checkValidateData(email.current.value,password.current.value,name.current.value);
        setmessage(validateMessage);
    }
     
    const toggleSignIn=()=>{
        setisSignIn(!isSignIn);
    }
    return(
    
        <div>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_large.jpg" alt="bg img"  className="w-screen h-screen object-cover"/>
            </div>
            <form
                onSubmit={(e)=> e.preventDefault()}
                className=" absolute p-12  opacity-80  text-white bg-black mx-auto left-0 right-0 my-52 w-3/12">
                <h1 className="text-3xl font-bold py-4 mx-4">{isSignIn?"Sign in":"Sign up"}</h1>
                {!isSignIn &&<input ref={name} type="text" placeholder=" enter your name" className="py-2 m-4 w-full rounded  text-black bg-gray-300  placeholder-black"/>}
                <input 
                    ref={email} type="text" placeholder=" enter your email" className="py-2 m-4 w-full rounded bg-gray-300 text-black  placeholder-black"
                />
                <input
                   ref={password} type="password" placeholder=" enter your password" className="py-2 m-4 w-full rounded text-black bg-gray-300 placeholder-black"
                />
                {message && (<p className="text-red-500 ml-4">{message}</p>)}
                <button
                    className="p-4 m-4 mt-6 rounded-lg bg-red-600" onClick={validateData}>{isSignIn?"Sign in":"Sign up"}
                </button>
                <p
                    className="py-2 ml-5">{isSignIn ? "New to Netflix? " : "Already have an account?"}<span className="text-blue-600 cursor-pointer" onClick={toggleSignIn}>{isSignIn ? "Sign up now" : "Sign in now"}
                </span></p>
            </form>     
        
        </div>
  )
};

export default Login;