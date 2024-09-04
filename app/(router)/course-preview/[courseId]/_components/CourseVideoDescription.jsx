import React from 'react';
import VideoPlayer from './VideoPlayer';

function CourseVideoDescription({ courseInfo }) {
  if (!courseInfo) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
        <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
        <VideoPlayer videoUrl={courseInfo?.chapter?.video?.url} />
    </div>
  );
}

export default CourseVideoDescription;
