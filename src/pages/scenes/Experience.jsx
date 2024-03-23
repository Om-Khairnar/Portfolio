import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiGraduationCap } from "react-icons/pi";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      title: "Walchand College of Engineering",
      location: "sangli",
      description: "i have graguated from here kjsv hohj vlhj vuhj",
      icon: <PiGraduationCap />,
      date: "2019-2023",
    },
    {
      title: "GROUPON TECHNOLOGIES PRIVATE LIMITED",
      location: "Pune",
      description: "i have graguated from here kjsv hohj vlhj vuhj",
      icon: <FaReact />,
      date: "Present",
    },
  ];
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          MY <span className="text-red">Experience</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10">What People are Saying About My Work.</p>
      </motion.div>
      <div>
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000",
                textAlign: "left",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              dateClassName="text-white"
              date={experience.date}
              icon={experience.icon}
              iconStyle={{ background: "#fff", color: "#000"}} 
            >
              <h2 className="vertical-timeline-element-title font-bold">
                {experience.title}
              </h2>
              <p>
                {experience.location}
              </p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
