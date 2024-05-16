import { motion } from "framer-motion";
import Product from "./product";
import { useState } from "react";

const Products = () => {
  const [pos, setPos] = useState(0);
  const handleScroll = (val) => {
    setPos(val * 23);
  };
  const data = [
    {
      title: "arquitel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas, asperiores autem incidunt iure consequatur!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas, asperiores autem incidunt iure consequatur!",
      live: true,
      case: false,
    },
    {
      title: "YYR 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas, asperiores autem incidunt iure consequatur!",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas, asperiores autem incidunt iure consequatur!",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-32 relative">
      {data.map((item, index) => (
        <Product
          key={index}
          item={item}
          handleScroll={handleScroll}
          count={index}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="absolute w-[32rem] h-[23rem] bg-white left-[43%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-100"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img src="/work1.png" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full pointer-events-none"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img src="work2.png" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img src="/work3.png" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <img src="work4.png" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
