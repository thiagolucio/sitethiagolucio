import Image from "next/image";
import "./logo.css";

function Logo() {
  return (
    <a className="containerLogo">
      <Image src="/logo.png" alt="Logo" width="40" height="40" />
      <span className="font-bar-code">ThiagoLucio</span>
    </a>
  );
};

export default Logo;