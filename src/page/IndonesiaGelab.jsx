import { showSlowAnimation } from "../assets/animation/animate";
import { data } from "../data/dataIndonesiaGelab";
import { motion } from "framer-motion";

const IndonesiaGelab = ({ show }) => {
  return (
    <motion.div
      variants={showSlowAnimation}
      initial="initial"
      animate="animate"
      className="h-[462px] relative lg:w-[1000px] md:w-[600px] xl:w-[1265px] w-[300px] mt-20 lg:mt-10"
    >
      {data.map((item, idx) => (
        <div key={item.id} className={`${item.className}`}>
          <img src={item.img} alt={item.name} />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: `1.${idx}`,
                type: "spring",
              },
            }}
          >
            {item.dot && item.dot.element(show)}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default IndonesiaGelab;
