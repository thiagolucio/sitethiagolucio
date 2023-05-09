import Image from "next/image";
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <Image src="/banner-footer.png" alt="Banner do footer" className="footer-image" height="200" width="300"/>
      </footer>
    );
}
export default Footer;