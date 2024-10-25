import Link from 'next/link';
import Image from 'next/image';

import MenuItem from './MenuItem';

const SideBar = () => {
  return (
    <div className='max-w-52 w-full h-screen flex flex-col bg-custom-background border-r border-gray-600'>
      <div className='h-40 flex items-center justify-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={166}
            height={44}
          />
        </Link>
      </div>

      <div className='border-t border-gray-600 flex flex-col space-y-2'>
        <MenuItem target='discover' caption='Discover' />
        <MenuItem target='tokens' caption='Tokens' />
        <MenuItem target='dapps' caption='DApps' />
        <MenuItem target='settings' caption='Settings' />
        <MenuItem target='portfolio' caption='Portfolio' />
      </div>

      <div className='border-t border-gray-600 flex flex-col mt-auto mb-4'>
        <MenuItem target='events' caption='Events' />
        <MenuItem target='help' caption='Need help?' />
      </div>
    </div>
  );
};

export default SideBar;