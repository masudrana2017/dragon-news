import moment from "moment";
import logo from "../../../assets/image/logo.png"
const Header = () => {
    return (
        <div>
           <div className="flex flex-col items-center justify-center">
           <img src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;