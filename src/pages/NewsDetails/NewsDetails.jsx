import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
    const news = useLoaderData();
    const { _id } = useParams();
    const sNews = news.find(sNews => sNews._id == _id);
    // console.log(sNews);
    // console.log(_id);
    

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5 md:gap-6 mt-5 md:mt-8">
                {/* news details */}
                <div className="col-span-3">
                    <h2 className="text-[#403F3F] text-xl font-semibold mb-3 md:mb-5">Dragon News</h2>
                    <div className="border border-[#E7E7E7] rounded-md">
                        <div className="p-4 md:p-7">
                            <img className='w-full' src={sNews.image_url} alt="" />
                            <h2 className="mt-3 md:mt-5 text-[#403F3F] font-bold text-lg md:text-2xl">{sNews.title}</h2>
                            <p className="text-[#706F6F] text-[16px] font-normal mt-2 ">{sNews.details}</p>

                            <Link to='/'><button className=" btn bg-[#D72050] text-white text-[16px] md:text-[18px] mt-5 md:mt-8"> <FaArrowLeft></FaArrowLeft> All news in this category</button></Link>

                        </div>

                    </div>
                </div>
                {/* right side */}
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;