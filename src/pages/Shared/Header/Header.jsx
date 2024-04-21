import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='mt-6 md:mt-12'>
            <div className='flex justify-center'>
                <img className='w-[330px] md:w-min' src={logo} alt="" />
            </div>
            <div className='text-center mt-3 md:mt-5'>
                <p className='text-[#706F6F] text-[15px] md:text-[18px]'>Journalism Without Fear or Favour</p>
                <p className='mt-1 md:mt-2 text-[#403F3F] text-[16px] md:text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;