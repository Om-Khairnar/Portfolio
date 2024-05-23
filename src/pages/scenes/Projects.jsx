import Image from "next/image";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, overlayMessage, overlayLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{overlayMessage}</p>
        {overlayLink && (
          <p className="mt-3 font-bold">
            <Link href={overlayLink}>Link</Link>
          </p>
        )}
      </div>
      <Image
        src={`/assets/projects/${projectTitle}.jpeg`}
        alt={projectTitle}
        width={400}
        height={400}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Explore a selection of my latest projects, showcasing creativity and
          skill across various domains. From innovative solutions to captivating
          experiences, discover the breadth of my work
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            overlayMessage="Created Cafe management System using Angular and Firebase"
            overlayLink="https://oldvibescaffe.web.app/"
          />
          <Project
            title="Project 2"
            overlayMessage="Custom message for Project 2"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            overlayMessage="Custom message for Project 3"
          />
          <Project
            title="Project 4"
            overlayMessage="Explore my CodePen projects showcasing my skills in JavaScript!"
            overlayLink="https://codepen.io/Om-Khairnar"
          />
          <Project
            title="Project 5"
            overlayMessage="Custom message for Project 5"
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            overlayMessage="Custom message for Project 6"
          />
          <Project
            title="Project 7"
            overlayMessage="Custom message for Project 7"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
