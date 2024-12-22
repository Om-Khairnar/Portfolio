import Image from "next/image";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition-duration-500"
        href="www.linkedin.com/in/omkhairnar"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="linkedin-link"
          src="/assets/linkedin.png"
          width={40}
          height={40}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://x.com/Omkara2002"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="twitter-link"
          src="/assets/twitter.png"
          width={40}
          height={40}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="facebook-link"
          src="/assets/facebook.png"
          width={40}
          height={40}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://leetcode.com/u/Omkara2002/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="instagram-link"
          src="/assets/leetcode.png"
          width={40}
          height={40}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://github.com/Om-Khairnar"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Github-link"
          src="/assets/github.png"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
