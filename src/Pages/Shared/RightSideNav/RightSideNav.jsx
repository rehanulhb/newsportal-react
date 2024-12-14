import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/class.png'
import qZone3 from '../../../assets/playground.png'


const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className='p-4  mb-6'>
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a href="" className='p-4 flex text-lg items-center border rounded-t-lg'><FaFacebook className='mr-3'></FaFacebook><span>Facebook</span></a>
        <a href="" className='p-4 flex text-lg items-center border-x'><FaTwitter className='mr-2'></FaTwitter><span>Twitter</span></a>
        <a href="" className='p-4 flex text-lg items-center border rounded-b-lg'><FaInstagram className='mr-2'></FaInstagram><span>Instagram</span></a>
      </div>
      {/* Q Zone */}
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
