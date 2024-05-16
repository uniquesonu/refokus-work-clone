
import PropTypes from 'prop-types';
import { CornerDownRight } from 'lucide-react';

const Button = ({title}) => {
    return (
        <div className='min-w-36 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer'>
                <span className='text-sm font-medium'>{title}</span>
                <CornerDownRight size={16} />
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button