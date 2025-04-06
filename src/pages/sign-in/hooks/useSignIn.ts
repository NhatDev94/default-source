import { AppDispatch } from "@/redux";
import { signIn } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSignIn = async (userName: string, password: string) => {
    // call api to sign in
    await dispatch(signIn({ userName, password }));
    navigate("/");
  };

  const handleSignOut = () => {
    // dispatch(signOut());
    navigate("/sign-in");
  };

  return {
    handleSignIn,
    handleSignOut,
  };
};

export default useSignIn;
