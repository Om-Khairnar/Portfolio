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
    bg-grey z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue`;
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
            overlayMessage="TheOversize is an ecommerce platform for oversized t-shirts, built with React, Next.js, Sanity for the backend, and Stripe for payments, showcasing my full-stack skills in creating a seamless shopping experience."
            overlayLink="https://theoversize.vercel.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            overlayMessage="TODO App is built using the MEAN stack (MongoDB, Express, Angular, Node.js), allowing users to perform all CRUD operations"
            overlayLink="https://github.com/Om-Khairnar/Front-end-of-MEAN-Stack-TODO-App"
          />
          <Project
            title="Project 4"
            overlayMessage="Explore my CodePen projects showcasing my skills in JavaScript!"
            overlayLink="https://codepen.io/Om-Khairnar"
          />
          <Project
            title="Project 5"
            overlayMessage="Building a Hackathon App using React and Next.js to solve real-world problems and enhance my skills in web development."
            overlayLink="https://hackathonaii.vercel.app/"
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            overlayMessage="A dynamic and interactive online code editor that allows developers to create and showcase HTML, CSS, and JavaScript projects in real-time, offering a seamless coding experience in a visually engaging environment"
            overlayLink="https://scriptpads.netlify.app/"
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
