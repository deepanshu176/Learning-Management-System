import { enrollToCourse } from '@/app/_utils/GlobalApi';

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function CourseEnrollSection({ courseInfo }) {
    const membership = false;
    const { user } = useUser();

    const onEnrollCourse = () => {
        if (courseInfo && user) {
            GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
                .then(resp => {
                    console.log(resp);
                });
        }
    };

    return (
        <div className='p-3 text-center rounded-sm bg-primary'> 
            <h2 className='text-[22px] font-bold text-white'>Enroll To The Course</h2>
            {user && (membership || (courseInfo && courseInfo.free)) ? (
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the Project</h2>
                    <Button className='bg-white text-primary hover:bg-white hover:text-primary' onClick={onEnrollCourse}>
                        Enroll Now
                    </Button>
                </div>
            ) : !user ? (
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the Project</h2>
                    <Link href={'/sign-in'}>
                        <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Enroll Now</Button>
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses</h2>
                    <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy Membership Just Rs.299</Button>
                </div>
            )}
        </div>
    );
}

export default CourseEnrollSection;
