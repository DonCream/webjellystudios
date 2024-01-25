'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      t  variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.InnerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About WebJelly..."
        textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Sit error alias labore iure assumenda Aperiam ipsa repellendus dolorum laborum ex soluta tempora. Ducimus illo praesentium beatae facilis possimus animi deleniti, velit? Ea minima id aspernatur maiores fugiat. Asperiores
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18pc] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
    About section
  </section>
);

export default About;
