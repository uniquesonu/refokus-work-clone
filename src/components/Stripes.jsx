import { motion } from 'framer-motion';
import Stripe from './Stripe';

const Stripes = () => {
    const data = [
        {
            imgUrl: "/stripe/award.svg",
            number: 15,
        },
        {
            imgUrl: "/stripe/css-design.svg",
            number: 52,
        },
        {
            imgUrl: "/stripe/no-code.svg",
            number: 2,
        },
        {
            imgUrl: "/stripe/award.svg",
            number: 15,
        },
        {
            imgUrl: "/stripe/css-design.svg",
            number: 52,
        },
        {
            imgUrl: "/stripe/no-code.svg",
            number: 2,
        },
    ];

    return (
        <div className='w-full overflow-hidden'>
        <motion.div
            className='flex items-center mt-20'
            initial={{ x: '100%' }}
            animate={{ x: "-100%" }}
            transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
        >
            {data.map((item, index) => (
                <Stripe key={index} imgUrl={item.imgUrl} number={item.number} />
            ))}
        </motion.div>
        </div>
    );
};

export default Stripes;