import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const action = {
      type: "SIGN_IN",
      payload: {
        id: 1,
        userName: "John Doe",
      },
    };
    dispatch(action);
    navigate("/");
  };

  const handleSignOut = () => {
    const action = {
      type: "SIGN_OUT",
    };
    dispatch(action);
    navigate("/sign-in");
  };

  return {
    handleSignIn,
    handleSignOut,
  };
};

export default useSignIn;
