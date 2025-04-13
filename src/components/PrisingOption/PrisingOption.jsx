import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PrisingOption = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData)


    return (
        <div>
            <h2 className='text-4xl'> Gor our membership</h2>
            <div className='grid md:grid-cols-3 gap-4 '>
                {
                    pricingData.map(pricing =>
                        <PricingCard key={pricing.id} pricing={pricing}>
                        </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PrisingOption;