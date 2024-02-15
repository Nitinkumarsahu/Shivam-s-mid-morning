import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import BackgroundDiv from "../components/BackgroundDiv";
import Card from "../components/Card";
import CardMobile from "../components/CardMobile";
import Layout from "../components/Layout";
import ThemeContext from "../components/ThemeContext";
import styles from "../styles/Projects.module.css";

const Projects: NextPage = () => {
  const theme = useContext(ThemeContext);

  const [activeCard, setActiveCard] = useState(0);
  let elem;

  const dragToChange = (activeCard: number) => {
    activeCard >= 0 && activeCard <= 3 ? setActiveCard(activeCard) : 0;
  };

  switch (activeCard) {
    case 0:
      elem = (
        <CardMobile
          backgroundStyle={styles.div1}
          key={0}
          title="Flora"
          description={`An Eye Catching Modern Portfolio.\n\n Built using NextJS & Framer Motion.`}
          imageLink={`/floraProject1.webp`}
          projectLink={`https://github.com/SomnathDas/Flora-Portfolio`}
          index={1}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          theme={theme}
        />
      );
      break;
    case 1:
      elem = (
        <CardMobile
          backgroundStyle={styles.div2}
          key={1}
          title="Soul"
          description={`An Experimental Adaption of a portfolio design.\n\n Built using NextJS & Framer Motion.`}
          imageLink={`/soulProject2.webp`}
          projectLink={`https://github.com/SomnathDas/Soul-Portfolio`}
          index={2}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          theme={theme}
        />
      );
      break;
    case 2:
      elem = (
        <CardMobile
          backgroundStyle={styles.div3}
          key={2}
          title="Anuvadak"
          description={`Simple Product Landing Page.\n\n Built using NextJS.`}
          imageLink={`/anuvadakProject1.webp`}
          projectLink={`https://github.com/SomnathDas/Anuvadak-LandingPage`}
          index={3}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          theme={theme}
        />
      );
      break;
    case 3:
      elem = (
        <CardMobile
          backgroundStyle={styles.div4}
          key={3}
          title="Darkness"
          description={`An Interesting Application. Built using ElectronJS.`}
          imageLink={`/darknessProject1.webp`}
          projectLink={`https://github.com/SomnathDas/Darkness-chan`}
          index={4}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          theme={theme}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className={`w-screen h-screen`}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Battleships at orion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundDiv currentTheme={theme} />
      <Layout>
        <main className="h-full w-full flex justify-center items-center pt-12 flex-col md:flex-row">
          <motion.section
            className={`relative h-4/5 w-11/12 text-white text-4xl md:text-5xl md:hidden overflow-x-hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.3,
            }}
          >
            <AnimatePresence exitBeforeEnter={true}>{elem}</AnimatePresence>
          </motion.section>
          <p className={`md:hidden`}> --- Swipe --- </p>
          <motion.section
            className={`relative h-4/5 w-11/12 ${styles.parent} text-white text-4xl md:text-5xl hidden md:flex`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <AnimatePresence exitBeforeEnter={true}>
              <motion.div
                initial={{ x: -10000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                exit={{ y: 10000, opacity: 0 }}
                key={256}
              >
                <Card
                  backgroundStyle={styles}
                  title="Flora"
                  description={`An Eye Catching Modern Portfolio.\n\n Built using NextJS & Framer Motion.`}
                  imageLink={`/floraProject1.webp`}
                  projectLink={`https://github.com/SomnathDas/Flora-Portfolio`}
                  index={1}
                  theme={theme}
                />
              </motion.div>

              <motion.div
                initial={{ x: -10000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                exit={{ y: 10000, opacity: 0 }}
                key={329}
              >
                <Card
                  backgroundStyle={styles}
                  title="Soul"
                  description={`An Experimental Adaption of a portfolio design.\n\n Built using NextJS & Framer Motion.`}
                  imageLink={`/soulProject2.webp`}
                  projectLink={`https://github.com/SomnathDas/Soul-Portfolio`}
                  index={2}
                  theme={theme}
                />
              </motion.div>
              <motion.div
                initial={{ x: -10000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                exit={{ y: 10000, opacity: 0 }}
                key={212}
              >
                <Card
                  backgroundStyle={styles}
                  title="Anuvadak"
                  description={`Simple Product Landing Page.\n\n Built using NextJS.`}
                  imageLink={`/anuvadakProject1.webp`}
                  projectLink={`https://github.com/SomnathDas/Anuvadak-LandingPage`}
                  index={3}
                  theme={theme}
                />
              </motion.div>
              <motion.div
                initial={{ x: -10000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                exit={{ y: 10000, opacity: 0 }}
                key={982}
              >
                <Card
                  backgroundStyle={styles}
                  title="Darkness"
                  index={4}
                  theme={theme}
                  description={`An Interesting Application. Built using ElectronJS.`}
                  imageLink={`/darknessProject1.webp`}
                  projectLink={`https://github.com/SomnathDas/Darkness-chan`}
                />
              </motion.div>
            </AnimatePresence>
          </motion.section>
        </main>
      </Layout>
    </div>
  );
};

export default Projects;
