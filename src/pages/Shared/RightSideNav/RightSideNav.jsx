import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div className="">
            {/* login */}
            <div className="flex flex-col">
                <h2 className="text-[#403F3F] text-xl font-semibold">Login With</h2>
                <div className="btn btn-outline btn-info mt-3 md:mt-5 mb-2 md:mb-3 text-[16px]">
                    <FaGoogle></FaGoogle>
                    <button>Login with Google</button>
                </div>
                <div className="btn btn-outline text-[16px]">
                    <FaGithub></FaGithub>
                    <button>Login with Github</button>
                </div>
            </div>
            {/* find us */}
            <div className="mt-4 md:mt-8">
                <h2 className="text-[#403F3F] text-xl font-semibold">Find Us On</h2>
                <div className="mt-2 md:mt-5">
                    <div className="p-4 flex items-center gap-2 text-[18px] border rounded-t-lg">
                        <FaFacebook className="text-[#3B599C] text-[20px]"></FaFacebook>
                        <span className="text-[#706F6F]">Facebook</span>
                    </div>
                    <div className="p-4 flex items-center gap-2 text-[18px] border-x">
                        <FaTwitter className="text-[#58A7DE] text-[20px]"></FaTwitter>
                        <span className="text-[#706F6F]">Twitter</span>
                    </div>
                    <div className="p-4 flex items-center gap-2 text-[18px] border rounded-b-lg">
                        {/* <RiInstagramFill className="text-red-600"></RiInstagramFill> */}
                        <img className="w-6" src="https://i.ibb.co/GfSZXrz/icons8-instagram-48.png" alt="" />
                        <span className="text-[#706F6F]">Instagram</span>
                    </div>
                </div>
            </div>
            {/* q zone */}
            <div className="bg-[#F3F3F3] mt-2 md:mt-5">
                <h2 className="p-4 text-xl text-[#403F3F] font-semibold">Q-Zone</h2>
                <div className="px-2">
                    <img className="w-full" src={qZone1} alt="" />
                    <img className="w-full" src={qZone2} alt="" />
                    <img className="w-full" src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;