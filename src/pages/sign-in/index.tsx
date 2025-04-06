import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useSignIn from "./hooks/useSignIn";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  const { handleSignIn } = useSignIn();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full sm:w-[400px] bg-white px-4 py-10 rounded-lg shadow-lg">
        <h4 className="w-full text-center text-2xl font-bold pb-8">Sign In</h4>
        <div className="mb-6">
          <Input
            placeholder="Username..."
            onChange={(e: any) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className="mb-16">
          <Input
            placeholder="Password..."
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Button
          name="Sign In"
          onClick={() => handleSignIn(userName, password)}
        />
      </div>
    </div>
  );
};

export default SignIn;
