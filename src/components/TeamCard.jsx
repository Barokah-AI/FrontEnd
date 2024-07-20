import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const TeamCard = ({ team }) => {
  const { name, image, content, designation, contact } = team;

  return (
    <div className="w-full">
      <div className="rounded-lg bg-white p-10 shadow-md duration-300 hover:shadow-lg dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
        <div className="flex items-center mb-5">
          <div className="relative mr-5 h-25 w-25 overflow-hidden rounded-full">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 italic font-semibold">
              {designation}
            </p>
          </div>
        </div>
        <p className="mb-4 border-b border-gray-200 dark:border-gray-600 pb-5 text-base leading-relaxed text-gray-800 dark:text-gray-300">
          "{content}"
        </p>
        {contact && (
          <div className="flex items-center justify-center mt-2">
            <a
              href={`https://instagram.com/${contact.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-pink-400 flex items-center mr-2 hover:text-pink-600 dark:hover:text-pink-500"
              style={{ color: "#E4405F" }} // Customize Instagram icon color
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href={`https://linkedin.com/${contact.replace(/\s/g, "")}`} // Adjust LinkedIn URL accordingly
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 flex items-center mr-2 hover:text-blue-600 dark:hover:text-blue-500"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {contact}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
