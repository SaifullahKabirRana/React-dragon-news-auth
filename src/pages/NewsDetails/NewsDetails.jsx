import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const aNews = news.find(sNews => sNews.id == id);
    console.log(aNews);
    

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5 md:gap-6 mt-5 md:mt-8">
                {/* news details */}
                <div className="col-span-3">
                    <h2 className="text-[#403F3F] text-xl font-semibold mb-3 md:mb-5">Dragon News</h2>
                    <div className="border border-[#E7E7E7]">
                        <div className="p-4 md:p-7">
                            <img className='w-full' src='' alt="" />
                            <h2>{id}</h2>

                        </div>

                    </div>
                </div>
                {/* right side */}
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;