import { signIn, signOut } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    // call api to sign in
    const apiResponse = {
      id: 1,
      userName: "John Doe",
    };
    dispatch(signIn(apiResponse));
    navigate("/");
  };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
  };

  return {
    handleSignIn,
    handleSignOut,
  };
};

export default useSignIn;
