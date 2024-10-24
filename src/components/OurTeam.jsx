import TeamMember from "./TeamMember";
import image1 from "../assets/20230819_134458_0000.jpg";
import image2 from "../assets/mohitkumar.jpg";
import Section from "./Section";

const members = [
  {
    name: "Mohit Saroha",
    designation: "Front-end Developer | UI/UX",
    description:
      "Former Frontend development intern at NirmanLabs. Early Frontend Developer at edquest",
    img: image1,
    link: "https://www.linkedin.com/in/mohit-saroha/",
  },
  {
    name: "Mohit Kumar",
    designation: "Front-end Developer | UI/UX",
    description:
      "Former Frontend development intern at NirmanLabs. Early Frontend Developer at edquest",
    img: image2,
    link: "https://www.linkedin.com/in/mohitkumar282000/",
  },
];
const OurTeam = () => {
  return (
    <Section>
      <h5 className="font-medium text-3xl md:text-5xl text-center leading-tight">
        We are the people who make up Zestify
      </h5>
      <p className="my-2 text-center tracking-wide mt-5">
        Our philosophy is simple; hire great people and give them the resources
        and support to do their best work
      </p>
      <br />
      <div className="md:flex space-y-8 md:space-y-0 gap-20 justify-center">
        {members &&
          members.map((e) => (
            <TeamMember
              key={e.name}
              name={e.name}
              designation={e.designation}
              description={e.description}
              img={e.img}
              link={e.link}
            />
          ))}
      </div>
    </Section>
  );
};
export default OurTeam;
