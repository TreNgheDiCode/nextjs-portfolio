import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="size-full opacity-70"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can hep you achieve
          your goals.
        </p>
        <a href="mailto:gabayan170@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copright &copy; 2024 Phùng Quang Long
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <img src={img} alt={img} className="size-[20px]" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
