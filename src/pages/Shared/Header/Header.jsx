import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='mt-6 md:mt-12'>
            <div className='flex justify-center'>
                <img  src={logo} alt="" />
            </div>
            <div className='text-center mt-3 md:mt-5'>
                <p className='#706F6F text-[18px]'>Journalism Without Fear or Favour</p>
                <p className='mt-1 md:mt-2 '>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;