import useSignIn from "@/pages/sign-in/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { handleSignOut } = useSignIn();

  const navigates = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-screen h-14 bg-black text-white flex items-center justify-between px-4">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => handleClick("/")}
      >
        Logo
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          {navigates.map((nav, i) => (
            <p
              className="px-4 cursor-pointer"
              key={i}
              onClick={() => handleClick(nav.path)}
            >
              {nav.name}
            </p>
          ))}
        </div>

        <div
          className="ml-12 w-8 h-8 rounded-full bg-white cursor-pointer"
          onClick={handleSignOut}
        ></div>
      </div>
    </div>
  );
};

export default Header;
