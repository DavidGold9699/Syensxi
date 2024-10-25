import Image from 'next/image';

const TopBar = () => {
  return (
    <div className='bg-card-body rounded-md w-full h-28 px-4 pt-6 pb-1 flex items-center justify-between'>
      <div className='w-1/2 pb-3 flex border-b border-gray-600'>
        <Image
          src='/search.png'
          alt='search'
          width={24}
          height={24}
          className='ml-2 mr-6'
        />
        <input type='text' placeholder='Search...' className='bg-inherit focus:outline-none' />
      </div>

      <div className='flex'>
        <button className='w-36 h-10 bg-custom-pink rounded-md'>
          Connect Wallet
        </button>
        <div className='ml-8 flex items-center space-x-4'>
          <Image
            src='/notification.png'
            alt='notification'
            width={24}
            height={24}
          />
          <div className='relative'>
            <Image
              src='/avatar.png'
              alt='avatar'
              width={28}
              height={28}
            />
            <Image
              src='/wallet.png'
              alt='wallet'
              width={16}
              height={16}
              className='absolute -bottom-1 -right-1'
            />
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold'>Username</div>
            <div className='text-xs'>profile ID</div>
          </div>
          <Image
            src='/arrow-down.png'
            alt='arrow-down'
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;