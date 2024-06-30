import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Profil</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un développeur full stack junior avec de l'expérience en Java et C#, et une expertise en Node.js. Je suis titulaire d'un Bachelor universitaire de technologie. 
        J'apprends rapidement et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales
        qui résolvent des problèmes réels. Travaillons ensemble pour donner vie à vos idées !
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServiceCard = ({ index, title, icon, subtitle, doing  }) => (
  <Tilt className='xs:w-[280px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <h5 className='text-white text-[14px] font-bold text-center'>
          {subtitle}
        </h5>
        <h5 className='text-white text-[14px] font-bold text-center'>
          {doing}
        </h5>
      </div>
    </motion.div>
  </Tilt>
);


export default SectionWrapper(About, "about");