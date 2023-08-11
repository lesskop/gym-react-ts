import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-gray-20 pt-2 md:pt-10">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-24 md:basis-3/5">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img src={HomePageText} alt="home page text" />
            </div>
            <p className="py-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
              voluptatem corporis esse! Tenetur sed provident ipsum at illum!
              Eligendi aspernatur, voluptatibus excepturi accusantium asperiores
              iusto et odit vero quos?
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex basis-3/5 justify-center pb-8 md:ml-32 md:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="home page graphic" />
        </motion.div>
      </motion.div>

      {/* Sponsors */}
      <div className="invisible flex w-full items-center justify-evenly bg-primary-100 py-8 md:visible">
        <img src={SponsorRedBull} alt="Red Bull" />
        <img src={SponsorForbes} alt="Forbes" />
        <img src={SponsorFortune} alt="Fortune" />
      </div>
    </section>
  );
};

export default Home;
