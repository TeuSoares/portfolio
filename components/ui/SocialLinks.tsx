import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className = "",
  iconSize = 18,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <a
        href="https://www.linkedin.com/in/mateus-soares-santos/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:scale-110 transition-all duration-300 block"
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      <a
        href="https://github.com/TeuSoares"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-110 transition-all duration-300 block"
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href="https://instagram.com/mateusoaresz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 hover:scale-110 transition-all duration-300 block"
      >
        <FaInstagram size={iconSize} />
      </a>
    </div>
  );
}
