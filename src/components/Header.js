import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

   useEffect(()=>{
        const unsubcribed=onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/Browse")

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
            return ()=> unsubcribed();
        });
    },[])


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48 my-3"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex cursor-pointer" onClick={handleSignOut}>
          <img 
            
            className="w-8 h-10 mt-8 rounded-2xl"
            src={user?.photoURL || USER_AVATAR}
            alt="signout"
          />
          <button
            className="text-white font-bold mt-0"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;