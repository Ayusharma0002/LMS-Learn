import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { UserDropdown } from "./header";
import Logo1 from "@/assets/logo1.png";
function CommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <img onClick={() => testingToast()} className="font-extrabold text-md h-12 md:w-full w-2/3"
            src={Logo1} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-4 gap-4 pl-10">
          <span
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses") ? null : navigate("/courses");
            }}
            className=" cursor-pointer text-[14px] md:text-[16px] md:flex hidden"
          >
            Courses
          </span>
          <span className="cursor-pointer text-[14px] md:text-[16px] md:flex hidden">
            Contact
          </span>
        </div>
        <UserDropdown
          className='h-16 w-16 text-xl'
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
}

export default CommonHeader;