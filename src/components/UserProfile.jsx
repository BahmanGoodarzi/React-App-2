import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { Button } from '.';
import { useStateContext } from '../context/ContexProvider';

const UserProfile = () => {
  const { handleUnclick, currentColor } = useStateContext();
  return (
    <div className='h-48 w-64 z-[1000] rounded-md p-4 dark:text-gray-200 bg-white dark:bg-secondary-dark-bg shadow-lg'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-gray-700 dark:text-gray-200 text-md'>User Profile</p>
        <button onClick={() => handleUnclick(false)} className='text-gray-400 dark:text-gray-200 text-xl p-1 hover:bg-light-gray rounded-full'>
          <MdOutlineCancel />
        </button>
      </div>

      <div className='flex items-center mt-3 gap-4'>
        <img src={avatar} alt='avatar' className='rounded-full w-16 h-16' />
        <div className='flex flex-col'>
          <p className='font-semibold text-md'>
            Michael Roberts
          </p>
          <p className='text-gray-500 text-sm'>Administrator</p>
          <p className='text-gray-500 text-sm font-bold'>info@shop.com</p>
        </div>
      </div>

      <div className='w-full mt-5'>
        <button className='p-1 text-sm rounded-md text-white w-full' style={{ background: currentColor }}>
          Logout
        </button>
      </div>

    </div>
  )
}

export default UserProfile