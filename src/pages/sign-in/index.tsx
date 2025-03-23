import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useSignIn from "./hooks/useSignIn";

const SignIn = () => {
  const { handleSignIn } = useSignIn();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full sm:w-[400px] bg-white px-4 py-10 rounded-lg shadow-lg">
        <h4 className="w-full text-center text-2xl font-bold pb-8">Sign In</h4>
        <div className="mb-6">
          <Input placeholder="Username..." />
        </div>
        <div className="mb-16">
          <Input placeholder="Password..." />
        </div>

        <Button name="Sign In" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
