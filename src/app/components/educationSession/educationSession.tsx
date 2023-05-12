import Image from "next/image";
import './educationalSession.css';

function EducationSession() {
    const items = [
        {
            id: 1,
            title: "University of Vale do Itajaí - UNIVALI.",
            src: "/univali-logo.jpg",
            description: "Graduate in Interaction Design - 2016 - 2018.",
        },
        {
            id: 2,
            title: "University of Southern Santa Catarina - UNISUL.",
            src: "/unisul-logo.jpeg",
            description: "Bachelor of Web Development - 2009 - 2013.",
        },
        {
            id: 3,
            title: "Estácio de Sá University - UNESA.",
            src: "/unesa-logo.jpg",
            description: "Bachelor of Systems Analysis - 1998 - 2002.",
        },
    ]
  return (
 <div className="educacional-session">
      <h2>Educacional</h2>
      {items.map((item) => (
        <div className="container-educacional" key={item.id}>
          <div className="image-educacional">
            <Image src={item.src} alt={item.title} width="100" height="60" />
          </div>
          <div className="text-educacional">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <a className="btn-linkedin" href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825" target="_blank">
         <Image src="/link-icon.svg" alt="Linkedin" width="16" height="16" /> See more on Linkedin...
      </a>
    </div>
  );
}
export default EducationSession;
