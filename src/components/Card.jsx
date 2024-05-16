import { motion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";

import PropTypes from "prop-types";

const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
    whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[28rem] flex flex-col justify-between `}
    >
      <div>
        <div className="w-full flex justify-between items-center text-gray-300">
          <h2>one heading</h2>
          <MoveRightIcon />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading is.</h1>
      </div>

      <div className="w-full">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none mt-60">
              Start a project{" "}
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        <p className="text-sm text-zinc-400 font-medium">
          {para && "Explore what drives our team."}
        </p>
      </div>
    </motion.div>
  );
};
Card.propTypes = {
  width: PropTypes.string.isRequired,
  start: PropTypes.bool.isRequired,
  para: PropTypes.bool.isRequired,
  hover: PropTypes.string,
};

export default Card;
