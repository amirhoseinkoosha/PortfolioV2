import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      // Set fill as per your theme
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 900 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        {/* Letter A */}
        <motion.path
          d="M321.955 420L179.465 127.143L224.998 36.1755L416.91 420H321.955ZM204.867 263.253L128.055 420H33.0897L158.769 168.608L204.867 263.253Z"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
        {/* Letter K */}
        <motion.path
          d="M500 420V36.1755H595.955V228.105L720.635 36.1755H840L680.32 240.14L850 420H750.045L620.91 260.21L595.955 290.175V420H500Z "
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut", delay: 0.5 },
            fill: { duration: 3, ease: [1, 0, 0.8, 1], delay: 0.9 },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
