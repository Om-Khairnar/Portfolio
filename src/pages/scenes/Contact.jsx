import Image from "next/image";
import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import CForm from "./CForm";

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume_of_Om_Khairnar.pdf";
    link.download = "Resume_of_Om_Khairnar.pdf";
    link.click();
  };

  return (
    <section id="contact" className="contact py-48">
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-yellow">Let&apos;s Discuss </span>Your
              Project
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Feel free to contact me for career prospects, business services, and
            other professional inquiries!
          </p>
          <button
            className="p-2 px-8 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-full flex items-center justify-center"
            onClick={handleDownload}
          >
            <span className="mr-2">Resume</span>
            <FaDownload />
          </button>

          <div className="mt-4">
            {" "}
            {/* Add margin-top here */}
            <a
              className="hover:opacity-50 transition-duration-500 flex items-center"
              href="mailto:om.khairnar175@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="mail-link"
                src="/assets/mail.png"
                width={45}
                height={45}
              />
              <span className="ml-2">om.khairnar175@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-yellow">CONTACT ME</span> TO GET STARTED
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-3/4" />
            </div>
          </div>
          <CForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
