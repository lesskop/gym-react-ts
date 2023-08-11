import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full bg-primary-300 rounded-lg px-4 py-2 placeholder-white outline-none mt-4 shadow-lg`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Text */}
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
            <HText>
              <span className="text-primary-500">Join now</span> to get in shape
            </HText>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias qui facere nobis alias pariatur mollitia, corporis
              quibusdam quaerat eum perferendis!
            </p>
          </motion.div>

          {/* Sign Up Form */}
          {/* Use formsubmit.co and temporary mail */}
          <motion.div
            className="flex flex-col font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/331de60324ce55a9a4f6732e78e12e82"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              <input
                type="email"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={`${inputStyles} resize-none`}
                rows={4}
                placeholder="MESSAGE"
                {...register("message", {
                  maxLength: 1000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-2 rounded-lg bg-secondary-500 px-8 py-2 shadow-xl transition duration-500 hover:bg-primary-500 hover:text-white"
              >
                JOIN NOW
              </button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            className="justify-self-center md:col-start-2 md:row-span-2 md:row-start-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={ContactUsPageGraphic}
              alt="Contact Us"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
