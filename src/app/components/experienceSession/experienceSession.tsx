import Image from "next/image";
import './experienceSession.css';

function ExperienceSession() {
    const items = [
        {
            id: 1,
            title: "SysMap Outsource - May 2022 - Present - Remote",
            src: "/logoSysmap.png",
            description: "Working as a Co-Participating Partner inside the company's clients teams and projects as a Front-end UI Developer. \n Acting mainly in the creation of Design Systems for Mobile Applications using frameworks and tools for the Front-end ecosystem.",
        },
        {
            id: 2,
            title: "Atos - Jul 2021 - May 2022",
            src: "/logoAtos.jpeg",
            description: "Using technologies based on JavaScript, HTML, and CSS and implementing UX Design / Interaction UI concepts in the intuitive construction of interfaces.",
        },
        {
            id: 3,
            title: "NSC TV (Globo TV network branch) - Mar 2020 - Jul 2021",
            src: "/logonsctv.jpeg",
            description: "Working with Web Development of the company's Web Applications, dealing with the entire cycle of UX/ UI Design and construction of the Front-end as well as APIS and Backend.",
        },
    ]
  return (
    <div className="experience-session">
      <h2>Experience</h2>
      {items.map((item) => (
        <div className="container-experience" key={item.id}>
          <div className="imageExperience">
            <Image src={item.src} alt={item.title} width="100" height="60" />
          </div>
          <div className="textExperience">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ExperienceSession;
