import Image from "next/image";
import './educationalSession.css';

function EducationSession() {
    const items = [
        {
            id: 1,
            title: "SysMap Outsource",
            src: "/logo_sysmap.svg",
            description: "Working as a Co-Participating Partner inside the company's clients teams and projects as a Front-end UI Developer. \n Acting mainly in the creation of Design Systems for Mobile Applications using frameworks and tools for the Front-end ecosystem.",
        },
        {
            id: 2,
            title: "Atos",
            src: "/logoAtos.jpeg",
            description: "Este é o texto referente a descrição de minhas funções na empresa",
        },
        {
            id: 3,
            title: "SysMap",
            src: "/logo_sysmap.svg",
            description: "Este é o texto referente a descrição de minhas funções na empresa",
        },
    ]
  return (
    <div className="education-session">
      <h2>Educational</h2>
      {items.map((item) => (
        <div className="container-educational" key={item.id}>
          <div>
            <Image src={item.src} alt={item.title} width="128" height="80" />
          </div>
          <div className="textEducational">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default EducationSession;
