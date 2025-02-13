import { useTranslation } from "react-i18next";

import github from "../../assets/images/github2.webp";
import linkedin from "../../assets/images/logotipo_de_linkedin2.webp";

const links = [
  {
    href: "mailto:alejandrobravoisajar1@gmail.com",
    className:
      "bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 hover:shadow-xl transition duration-1000",
    content: "presentation.contact",
    isImage: false,
  },
  {
    href: "https://github.com/AlejoBI",
    className:
      "bg-gray-800 dark:bg-gray-900 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-xl transition duration-1000",
    imgSrc: github,
    imgAlt: "GitHub Logo",
    isImage: true,
  },
  {
    href: "https://www.linkedin.com/in/alejandro-bravo-isajar-061b682b5/",
    className:
      "bg-blue-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-xl transition duration-1000",
    imgSrc: linkedin,
    imgAlt: "LinkedIn Logo",
    isImage: true,
  },
];

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex mt-6 space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.isImage ? "_blank" : undefined}
          rel={link.isImage ? "noopener noreferrer" : undefined}
          className={link.className}
        >
          {link.isImage ? (
            <img src={link.imgSrc} alt={link.imgAlt} className="w-6 h-6" />
          ) : (
            t(link.content)
          )}
        </a>
      ))}
    </div>
  );
};

export default Contact;
