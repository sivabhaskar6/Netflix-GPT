import { useState } from "react";


const Login = () => {
    const [isSignIn,setisSignIn] = useState(true);
    const toggleSignIn=()=>{
        setisSignIn(!isSignIn);
    }
    return(
    
        <div>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_large.jpg" alt="bg img"  className="w-screen h-screen object-cover"/>
            </div>
            <form className=" absolute p-12  opacity-80  text-white bg-black mx-auto left-0 right-0 my-52 w-3/12">
                <h1 className="text-3xl font-bold py-4 mx-4">{isSignIn?"Sign in":"Sign up"}</h1>
                {!isSignIn &&<input type="text" placeholder=" enter your name" className="py-2 m-4 w-full rounded bg-gray-300  placeholder-black"/>}
                <input type="text" placeholder=" enter your email" className="py-2 m-4 w-full rounded bg-gray-300  placeholder-black"/>
                <input type="password" placeholder=" enter your password" className="py-2 m-4 w-full rounded bg-gray-300 placeholder-black"/>
                <button className="p-4 m-4 mt-6 rounded-lg bg-red-600">{isSignIn?"Sign in":"Sign up"}</button>
                <p className="py-2 ml-5">{isSignIn?"New to Netflix? ":"Already registered? "}<span className="text-blue-600 cursor-pointer" onClick={toggleSignIn}>{isSignIn?"Sign in now":"Sign up now"}</span></p>
            </form>
        
        </div>
  )
};

export default Login;