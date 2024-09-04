"use client";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CourseVideoDescription from './_components/CourseVideoDescription';
import { getCourseById } from '@/app/_utils/GlobalApi'; 
import CourseEnrollSection from './_components/CourseEnrollSection';


function CoursePreview({ params }) {
    const [courseInfo, setCourseInfo] = useState();

    useEffect(() => {
        params && getCourseInfoById();
    }, [params]);

    const getCourseInfoById = () => {
        getCourseById(params?.courseId).then(resp => {
            setCourseInfo(resp?.courseList);
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
            <div className="col-span-2 bg-white p-3">
                <CourseVideoDescription courseInfo={courseInfo} />
            </div>
            <div>
              <CourseEnrollSection courseInfo={courseInfo}/>
            </div>
        </div>
    );
}

export default CoursePreview;
