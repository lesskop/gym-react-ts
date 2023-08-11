import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus totam, incidunt non ex voluptatem corporis recusandae nihil, atque animi amet laborum nobis! Repudiandae quia, quae obcaecati sequi corrupti exercitationem!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Obcaecati dignissimos in necessitatibus quos officia perferendis perspiciatis officiis temporibus, porro nobis aspernatur consequatur iure ratione blanditiis. Quam commodi quidem excepturi iste, neque magnam exercitationem nulla impedit omnis eius fugiat?",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Vel minima sapiente doloremque. Similique earum natus perspiciatis eius, veritatis, quam commodi deleniti blanditiis ex voluptatem ipsam quisquam. Error reprehenderit ex laborum quod nam tempore provident aspernatur quos velit iste.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Nobis aliquid est commodi exercitationem laudantium id ullam ipsa ipsum dicta expedita voluptates neque accusamus beatae inventore similique quaerat officia officiis mollitia sunt quidem quod nemo, perspiciatis ad? Corrupti, minus!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Quos ratione, exercitationem laboriosam odio est blanditiis cumque dolore ab eum eius, tenetur, commodi porro nemo doloribus repudiandae at qui veritatis tempore vitae officiis sunt dignissimos nisi assumenda voluptas. Vitae.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Vel amet beatae voluptatem ea cupiditate ut aut quam tempora sequi corporis vitae sapiente, laudantium magnam perferendis maiores aliquam dicta praesentium molestias omnis asperiores ducimus quis. Ea sed amet autem!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 pt-32 pb-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              consequuntur soluta, molestias illo tenetur ratione itaque quam
              dicta ad magni eaque alias libero sint labore. Commodi corporis
              temporibus enim veritatis?
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex justify-center py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <div className="grid w-5/6 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
