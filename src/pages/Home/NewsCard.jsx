import PropTypes from 'prop-types';
import { FaBookReader } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { rating, total_view, title, author, image_url, details, _id } = news;
    return (
        <div>
            <div className='bg-[#F3F3F3] flex justify-between p-3 md:p-5 '>
                <div className=' flex gap-3 '>
                    <div className="avatar">
                        <div className="w-10 md:w-12 rounded-full">
                            <img src={author.img} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[#403F3F] text-[14px] md:text-[16px] font-semibold'>{author.name}</h2>
                        <p className='text-[#706F6F] text-[12px] md:text-[14px]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[16px] md:text-lg text-[#706F6F]'>
                    <FaBookReader></FaBookReader>
                    <IoShareSocial></IoShareSocial>
                </div>
            </div>
            <div className='border border-[#E7E7E7] rounded-md rounded-t-none border-t-0'>
                <div className='px-5'>
                    <h2 className='text-[17px] md:text-xl text-[#403F3F] font-bold pt-2 md:pt-4 mb-3 md:mb-5'>{title}</h2>
                    <img className='w-full' src={image_url} alt="" />
                    {/* <p className='mt-4 md:mt-7 '>{details}</p> */}
                    <div className='text-[#706F6F] text-[16px] font-medium mt-4 md:mt-7 '>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='font-semibold bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] inline-block text-transparent bg-clip-text'>Read More...</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </div>
                    <hr className='mt-2 md:mt-5 mb-3 md:mb-6 border-[#E7E7E7]' />
                    <div className='mb-2 md:mb-5 flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <div className='text-[#FF8C47] flex gap-1 md:gap-2'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <p>{rating.number}</p>
                        </div>
                        <div className='text-[18px] text-[#706F6F] flex gap-2 items-center'>
                            <IoEye className='text-xl'></IoEye>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsCard;