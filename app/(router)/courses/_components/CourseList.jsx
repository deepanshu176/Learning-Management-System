"use client";
import { getAllCourseList } from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    getAllCourseList().then(resp => {
      setCourseList(resp?.courseLists);
    });
  };

  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {courseList?.length > 0 ? courseList.map((item) => (
          <Link key={item.id} href={'/course-preview/' + item.slug}>
            <div>
              <CourseItem course={item} />
            </div>
          </Link>
        )) :
        [1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={index} className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse'>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
