import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime ipsam tempora.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Recusandae voluptatem fugit illum perferendis debitis et id iste numquam, nisi earum.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Magni accusamus adipisci inventore, ipsum quidem quasi. Molestias, cumque quod! Nobis, qui.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 pt-32 pb-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Text */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>More than just a gym</HText>
          <p className="my-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            dicta mollitia error quam at ratione iusto numquam corrupti?
            Quibusdam impedit animi nostrum voluptas quae eligendi soluta
            dolores rerum repellendus sapiente?
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Image and description */}
        <div className="items-center justify-center md:flex">
          {/* Image */}
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
            <img
              src={BenefitsPageGraphic}
              alt="benefits image"
              className="mx-auto py-8 md:min-w-[500px]"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>Millions of happy members getting fit</HText>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dignissim diam non iaculis fringilla. Vivamus mollis leo ut
              ultricies accumsan. Suspendisse tincidunt lobortis rhoncus.
              Vivamus finibus vel nulla ac vestibulum. Aliquam eu justo eget
              libero accumsan ornare a in urna. Phasellus laoreet mauris in leo
              bibendum mollis. Curabitur et nulla eu purus scelerisque
              pellentesque ut vitae nulla. Cras sodales diam vitae odio
              ultricies, in pulvinar lectus elementum.
            </p>
            <p className="mb-8">
              Morbi vulputate vitae arcu et ultricies. Maecenas eu metus sed
              lectus congue dapibus. Sed faucibus orci vel erat porta, eget
              pretium quam auctor. In fermentum nec tellus congue tempor.
            </p>

            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
