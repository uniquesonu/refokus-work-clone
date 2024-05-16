
import Button from "./Button";


import PropTypes from 'prop-types';

const Product = ({item, handleScroll, count}) => {

  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div onMouseEnter={()=>{handleScroll(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-bold capitalize">{item.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">
            {item.description}
          </p>
          <div className="w-36 flex gap-6">
            {item.live && Button({title: "Live Website"})}
            {item.case && Button({title: "Case Study"})}
          </div>
        </div>
      </div>
    </div>
  );

};

Product.propTypes = {
    item: PropTypes.object.isRequired,
    handleScroll: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

export default Product;
