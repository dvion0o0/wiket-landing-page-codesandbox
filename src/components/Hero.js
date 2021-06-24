import React from "react";
import HeroImage from "../Assets/jpg/header-img-florist.jpg";
import HeroSmallImage1 from "../Assets/jpg/header-img-barista.jpg";
import HeroSmallImage2 from "../Assets/jpg/header-img-gardener.jpg";
import HeroSmallImage3 from "../Assets/jpg/header-img-pottery.jpg";
import HeroLine from "../Assets/svg/header-line-phone-portrait.svg";
import HeroLine1 from "../Assets/svg/header-line-desktop.svg";
import Pin1 from "../Assets/svg/pin-02.svg";
import Pin2 from "../Assets/svg/pin-01.svg";
import { motion } from "framer-motion";
import Fade from "react-reveal";

const ContainerTextVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease",
      delay: 0.3,
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const HeaderTextVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease",
      delay: 0.1,
      duration: 1.2
    }
  }
};

const HeaderImageVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease",
      delay: 0.3,
      duration: 1.5
    }
  }
};

const HeaderImageSmallVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

// const SmallImageVariant = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "ease",
//       delay: 0.4,
//       duration: 1,
//     },
//   },
// };

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <motion.div
          variants={ContainerTextVariant}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div
            variants={HeaderTextVariant}
            initial="hidden"
            animate="visible"
            className="hero-content-header"
          >
            <h3>Explore new oppurtunities</h3>
            <h1>
              <span>Grow</span> your business.
            </h1>
          </motion.div>
          <motion.div
            variants={HeaderTextVariant}
            initial="hidden"
            animate="visible"
            className="hero-content-text"
          >
            <p>
              <span>Wiket is the first businee to business network </span>
              which lets you connect to mind like people
            </p>
          </motion.div>
        </motion.div>
        {/* hero Images */}
        <div className="hero-image-container">
          <div className="hero-image-big">
            <img src={Pin1} alt="pin1" className="pin1" />
            <img src={Pin2} alt="pin2" className="pin2" />
            <motion.div
              variants={HeaderImageVariant}
              initial="hidden"
              animate="visible"
              className="hero-image-big-caption"
            >
              <h3>Hanging Garden</h3>
              <h4>Florist in Bangkok</h4>
            </motion.div>
            <motion.div
              variants={HeaderImageVariant}
              initial="hidden"
              animate="visible"
              className="hero-image"
            >
              <img src={HeroImage} alt="heroimage" />
            </motion.div>
          </div>
          <Fade cascade bottom>
            <motion.div
              variants={HeaderImageSmallVariant}
              initial="hidden"
              animate="visible"
              className="hero-image-small-container"
            >
              <picture>
                <source media="(min-width: 768px)" srcset={HeroLine1} />
                <img src={HeroLine} className="hero-line" alt="hero-line" />
              </picture>
              <div className="hero-image-small hero-image-small-1">
                <img src={HeroSmallImage3} alt="herosmall1" />
                <div className="hero-image-small-caption">
                  <h5>Potject</h5>
                  <h6>Pottery in Bangkok</h6>
                </div>
              </div>
              <div className="hero-image-small hero-image-small-2">
                <img src={HeroSmallImage2} alt="herosmall1" />
                <div className="hero-image-small-caption">
                  <h5>Green Thumb</h5>
                  <h6>Gardener in CheChe</h6>
                </div>
              </div>
              <div className="hero-image-small hero-image-small-3">
                <img src={HeroSmallImage1} alt="herosmall1" />
                <div className="hero-image-small-caption">
                  <h5>Green Cafe</h5>
                  <h6>Cafe in Bangkok</h6>
                </div>
              </div>
            </motion.div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Hero;
