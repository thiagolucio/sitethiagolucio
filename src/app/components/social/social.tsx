import Image from "next/image";
import './social.css';

function Social() {
  return (
    <div className="container-sociais">
        <Image
          className="iconRedesSociais"
          src="/iconLinkedin.svg"
          alt="linkedin"
          width="50"
          height="50"
        />
        <Image className="iconRedesSociais" 
            src="/iconGithub.svg" 
            alt="Github" 
            width="50"
            height="50"
        />
        <Image
          className="iconRedesSociais"
          src="/iconBehance.svg"
          alt="Wordpress"
          width="50"
          height="50"
        />
        <Image
          className="iconRedesSociais"
          src="/iconStackOverFlow.svg"
          alt="Stack Overflow"
          width="50"
          height="50"
        />
        <Image
          className="iconRedesSociais"
          src="/iconWordpress.svg"
          alt="Wordpress"
          width="50"
          height="50"
        />
    </div>
  );
}

export default Social;