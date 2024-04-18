import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNewss = () => {
    return (
        <div className="bg-[#F3F3F3] p-2 md:p-4 mt-3 md:mt-5 text-[18px] font-semibold poppins-font text-[#403F3F]">
             <div className="flex gap-2 md:gap-5">
                <button className="btn bg-[#D72050] text-white">Breaking News</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link to='/' className="mr-8 ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link to='/' className="mr-8 ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link to='/' className="mr-8 ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNewss;