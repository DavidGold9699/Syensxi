export default function Discover() {
  return (
    <div className='flex w-full'>
      <div className='flex flex-col max-w-3/5 w-full'>
        <div className='text-4xl'>Discover</div>
        <div className='text-custom-gray'>Experience more in the decentralized web</div>

        <div className='bg-card-body rounded-md flex flex-col mt-7 px-3 py-6'>
          <div className='flex justify-between items-center'>
            <div className="text-2xl">Recommended for you</div>
            <div className='w-20 h-7 bg-card-item flex items-center justify-center'>
              <button className="text-xs font-semibold">View more</button>
            </div>

          </div>
        </div>
      </div>
      <div className='flex flex-col w-full bg-card-body rounded-md ml-8 px-8 py-6'>
        <div className="bg-custom-gradient bg-clip-text text-transparent text-2xl font-semibold ml-5">New Arrivals</div>
      </div>
    </div>
  );
}