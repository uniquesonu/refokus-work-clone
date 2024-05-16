
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Stripe = ({ imgUrl, number }) => {
   
    return (
        <motion.div
        
        className='w-[16.66%] py-5 px-4 border-t-2 border-b-2 border-r-2 border-zinc-700 flex justify-between items-center'>
                <img src={imgUrl} alt='award' className='w-20' />
                <p className='text-xl font-semibold'>{number}</p>
        </motion.div>
    );
};

Stripe.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default Stripe;
