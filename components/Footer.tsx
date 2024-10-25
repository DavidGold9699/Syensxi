import Image from 'next/image';

const Footer = () => {
  return (
    <div className='border-t border-gray-700 flex flex-col'>
      <div className='flex justify-between px-24 mt-36'>
        <div className='text-custom-gray flex flex-col mt-20'>
          <div>Your Gateway to a better and seamless</div>
          <div>Web3 Experience</div>
        </div>

        <div className='flex flex-col space-y-3 mr-20'>
          <div className='text-custom-gray'>
            Resources
          </div>
          <div>About Us</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>

      <div className='flex justify-between mt-20 mx-32 pt-8 pb-12 border-t border-gray-700'>
        <div className='text-custom-gray'>© 2024 Synesxi</div>

        <div className='flex space-x-6'>
          <Image
            src='/social/twitter.png'
            alt='twitter'
            width={24}
            height={22.5}
          />
          <Image
            src='/social/telegram.png'
            alt='telegram'
            width={30.4}
            height={24}
          />
          <Image
            src='/social/linkedin.png'
            alt='linkedin'
            width={24}
            height={24}
          />
          <Image
            src='/social/medium.png'
            alt='medium'
            width={54}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;