import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeaturs = ({feature}) => {
    return (
 <p className='flex mt-3'>
    <CircleCheckBig className='mr-4'></CircleCheckBig>
    {feature}
 </p>
    );
};

export default PricingFeaturs;