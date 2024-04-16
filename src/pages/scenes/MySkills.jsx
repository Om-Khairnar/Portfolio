import Image from "next/image";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./Skill.module.css";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const images = [
    "/assets/lang/c.png",
    "/assets/lang/c++.png",
    "/assets/lang/java.png",
    "/assets/lang/html.png",
    "/assets/lang/css.png",
    "/assets/lang/tailwind.png",
    "/assets/lang/bootstrap.png",
    "/assets/lang/javascript.png",
    "/assets/lang/react.png",
    "/assets/lang/angular.png",
    "/assets/lang/nextjs.png",
    "/assets/lang/typescript.png",
    "/assets/lang/git.png",
    "/assets/lang/github copy.png",
    "/assets/lang/node.png",
    "/assets/lang/amazon.png",
    "/assets/lang/firebase.png",
    "/assets/lang/mysql.png",
  ];
  const titles = [
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "bootstrap",
    "JavaScript",
    "React.js",
    "Angular",
    "Next.js",
    "TypeScript",
    "Git",
    "GitHub",
    "Node.js",
    "AWS",
    "Firebase",
    "MySql",
  ];
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Discover the range of skills I possess. From programming languages
            to development tools, explore what I bring to the table.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <Image
                alt="skills"
                className="z-10"
                src="/assets/skills-image.png"
                width={600}
                height={400}
              />
            </div>
          ) : (
            <Image
              alt="skills"
              className="z-10"
              src="/assets/skills-image.png"
              width={600}
              height={400}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {/* Render images from the images array */}
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt={`Image ${index + 1}`}
              priority={true}
            />
            <h6 className="text-center gap-4 mt-4 ">{titles[index]}</h6>{" "}
            {/* Access corresponding title */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
