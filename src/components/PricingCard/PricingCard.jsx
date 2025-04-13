import React from 'react';
import PricingFeaturs from './PricingFeaturs';

const PricingCard = ({ pricing }) => {
    const {name , price, info, features} = pricing;
    console.log(pricing)
    return (
        <div className='border bg-amber-200 rounded-2xl  p-4'>
            {
                <div>
                    <h1 className='text-5xl'> {name}</h1>
                    <h4 className='text-2xl'> {price}</h4>
                    <div className='bg-amber-300 p-4 rounded mt-6'>
                        <p> {info}</p>
                        {
                            features.map((feature , index) => 
                                 <PricingFeaturs key={index} 
                            feature={feature}>
                                 </PricingFeaturs> )
                        }
                    </div>

                </div>

            }

        </div>
    );
};

export default PricingCard;