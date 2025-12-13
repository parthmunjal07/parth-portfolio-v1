import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
animate: { opacity: 1, scale: 1 },
exit: { opacity: 0, scale: 1.02 },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
