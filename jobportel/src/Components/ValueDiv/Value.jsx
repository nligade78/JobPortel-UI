import React from 'react'

//Image Imported
import simple from '../../Assets/simple.png'
import valentine from '../../Assets/valentine.png'
import shield from '../../Assets/shield.png'

export const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px block]'>The Value that holds us true and to accound</h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='ingDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>

              <span className='font-semibold txt-textColor text-[18p]'>
                Simplicity
              </span>
          </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
              Lorem ipsum dolor sit amet.
            </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='ingDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={valentine} alt="" className='w-[70%]' />
            </div>

              <span className='font-semibold txt-textColor text-[18p]'>
                Simplicity
              </span>
          </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
              Lorem ipsum dolor sit amet.
            </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='ingDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={shield} alt="" className='w-[70%]' />
            </div>

              <span className='font-semibold txt-textColor text-[18p]'>
                Simplicity
              </span>
          </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
              Lorem ipsum dolor sit amet.
            </p>
        </div>

      </div>

    </div>
  )
}

export default Value
