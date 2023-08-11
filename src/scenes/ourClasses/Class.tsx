import { motion } from "framer-motion";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <motion.div
      className="rounded-lg bg-gray-20 text-center shadow-lg"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 1 }}
    >
      <img className="rounded-t-lg" src={image} alt={image} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold">{name}</h5>
        <p className="text-primary-200 mb-3 font-normal">{description}</p>
      </div>
    </motion.div>
  );
};

export default Class;
