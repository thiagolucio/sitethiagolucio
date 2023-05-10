import Image from "next/image";
import "./buttonsDownload.css"

function ButtonsDownload() {
  return (
    <div className="buttonDownload">
      <div>
        <a
          className="btn"
          href="https://thiagolucio.com.br/cv/cv-midia-en-thiagolucio.pdf"
        >
          <Image src="/icon-download.svg" alt="Download" width="24" height="30" />
          <span> Download English CV</span>
        </a>
      </div>
      <div>
        <a
          className="btn"
          href="https://thiagolucio.com.br/cv/cv-midia-br-thiagolucio.pdf"
        >
          <Image src="/icon-download.svg" alt="Download" width="24" height="30" />
          <span> Download CV Português</span>
        </a>
      </div>
    </div>
  );
}

export default ButtonsDownload;
