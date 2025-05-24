'use client'

import { useGetAuthUserQuery } from '@/state/api';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import ImagePreviews from './ImagePreviews';
import ShopOverview from './ShopOverview';
import ShopDetails from './ShopDetails';
import ShopLocation from './ShopLocation';
import ContactWidget from './ContactWidget';

const SingleListing = () => {
    const {id} = useParams();
    const vendorShopId = Number(id);
    const {data:authUser} = useGetAuthUserQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
        <ImagePreviews
            images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
        />
        <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
             <div className="order-2 md:order-1">
                 <ShopOverview vendorShopId={vendorShopId} />
                 <ShopDetails vendorShopId={vendorShopId} />
                 <ShopLocation vendorShopId={vendorShopId} />
            </div>

            <div className="order-1 md:order-2">
                <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
            </div>
        </div>
    </div>
  )
};

export default SingleListing