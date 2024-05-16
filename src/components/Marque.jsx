import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Marque = ({ item, direction}) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%"}}
        animate={{ x: direction === "left" ? "-100%" : "0%"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {item.map((image, index) => (
          <img key={index} src={image} alt={image} className="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%"}}
        animate={{ x: direction === "left" ? "-100%" : "0%"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {item.map((image, index) => (
          <img key={index} src={image} alt={image} className="" />
        ))}
      </motion.div>
      

    </div>
  );
};

Marque.propTypes = {
  item: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Marque;
