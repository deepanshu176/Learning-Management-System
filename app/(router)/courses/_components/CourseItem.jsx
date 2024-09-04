import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-400'>
      <Image src={course?.banner?.url} width={500} height={150} alt='banner' className='rounded-t-xl' />
      <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course.name}</h2>
        <div className='flex gap-2'> 
          <Image src='/youtube.jpeg' alt='youtube' width={30} height={30}/>
          <h2 className='text-[14px] text-gray-700' >Watch On Youtube</h2>
        </div>
        <h2 className='text-[15px] font-medium'>{course?.free?'Free':'Paid'}</h2>
      </div>
    </div>
  )
}

export default CourseItem