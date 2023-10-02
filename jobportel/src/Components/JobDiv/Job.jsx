import React from 'react'
import { BiTimeFive } from "react-icons/bi"
//Image Imported
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'
import logo9 from '../../Assets/logo9.png'
import logo10 from '../../Assets/logo10.png'

//For All the jobs , we are going t use high order array method called MAP...
//In this case we shall lis all the jobs into nan arry called Data...

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developr',
    time: 'Now',
    timeParameter: 'hrs',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Developr',
    time: '8',
    timeParameter: 'hrs',
    location: 'Mumbai',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'Google'
  },
  {
    id: 3,
    image: logo3,
    title: 'React Developr',
    time: '8',
    timeParameter: 'hrs',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'Apple'
  },
  {
    id: 4,
    image: logo4,
    title: 'Devops Developer',
    time: '8',
    timeParameter: 'hrs',
    location: 'Mumbai',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'PwC'
  },
  {
    id: 5,
    image: logo5,
    title: 'ETL Devloper',
    time: '8',
    timeParameter: 'hrs',
    location: 'Hyderbad',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'E&Y'
  },
  {
    id: 6,
    image: logo6,
    title: 'SalseForce Admin',
    time: '8',
    timeParameter: 'hrs',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'KPMG'
  },
  {
    id: 7,
    image: logo7,
    title: 'Angular',
    time: '8',
    timeParameter: 'hrs',
    location: 'Bangalore',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'TCS'
  },
  {
    id: 8,
    image: logo8,
    title: 'GCP Cloud',
    time: '8',
    timeParameter: 'hrs',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'Infosys.'
  },
  {
    id: 9,
    image: logo9,
    title: 'AWS Cloud',
    time: '8',
    timeParameter: 'hrs',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'Infosys'
  },
  {
    id: 10,
    image: logo10,
    title: 'Automation Tester  ',
    time: '8',
    timeParameter: 'hrs',
    location: 'Pune',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam!',
    company: 'ZS'
  }
]// it's a single company let see how to

export const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {/* <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className='flex justify-between items-center gap-4'>
          <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now
            </span>
        </span>
          <h6 className='text-[#ccc]'>Canada</h6>
          <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iste?
          </p>
          <div className='company flex items-center gap-2'>
            <img src={logo1} alt="Company Logo" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>Novac Linus Co.</span>
          </div>
          
          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-txtColor group-hover:text-white'>Apply Now</button>
      </div> */}

        {
          Data.map(({ id, image, title, time, timeParameter, location, desc, company }) => {
            return (
              //This is return single job based on ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                    <span className='flex items-center text-[#ccc] gap-1'>
                      {timeParameter}
                    </span>
                  </span>

                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                  {desc}
                </p>
                <div className='company flex items-center gap-2'>
                  <img src={image} alt="Company Logo" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-txtColor group-hover:text-white'>Apply Now</button>
              </div>
            )

          })
        }

      </div>
    </div>
  )
}

export default Job