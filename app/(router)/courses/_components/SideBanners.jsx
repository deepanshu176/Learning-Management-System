"use client"
import React, { useEffect, useState } from 'react';
import { getSideBanner } from '@/app/_utils/GlobalApi'; 
import Image from 'next/image';

function SideBanners() {
    const [sideBannerList, setSideBannerList] = useState([]); 

    useEffect(() => {
        fetchSideBanner();
    }, []);

    const fetchSideBanner = () => {
        getSideBanner().then(resp => {
            console.log(resp);
            setSideBannerList(resp?.sideBanners || []); 
        });
    };

    return (
        <div>
            {sideBannerList.map((item, index) => (
                <div key={item.id}>
                    <Image src={item.banner.url} alt='banner' width={500} height={300} className='rounded-xl cursor-pointer' onClick={()=>window.open(item?.url)} />
                </div>
            ))}
        </div>
    );
}

export default SideBanners;
