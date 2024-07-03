import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../../assets/image/qZone1.png"
import qzone2 from "../../../assets/image/qZone2.png"
import qzone3 from "../../../assets/image/qZone3.png"
const RightSide = () => {
    return (
        <div>

            <div className="p-2 space-y-2">
                <h2>Login With</h2>
                <button className="btn w-full border-2 border-cyan-500 text-cyan-500">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="p-2">
                <h2>Find us On</h2>
                <a href="" className="p-4 flex gap-4 items-center border-2">
                    <FaFacebookF />
                    <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex gap-4 items-center border-x-2">
                    <FaTwitter />
                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex gap-4 items-center border-2">
                    <FaInstagram />
                    <span>Instragram</span>
                </a>
            </div>
            <div className="p-2">
                <div className="bg-slate-200 p-2">
                    <h2>Q-Zone</h2>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
            <div className="p-2">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(/src/assets/image/bg1.png)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Create an Amazing Newspaper</h1>
                            <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSide;