import { FLEXCENTER } from "@/constants/styles";
import { IconsCloud } from "./IconsCloud";

const skillsData = [
  {
    name: "React",
    progress: 85,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "JavaScript",
    progress: 87,
    description: "A versatile programming language for web development.",
  },
  {
    name: "TypeScript",
    progress: 80,
    description: "A superset of JavaScript that adds static typing.",
  },
  {
    name: "HTML5",
    progress: 90,
    description: "The standard markup language for creating web pages.",
  },
  {
    name: "CSS3",
    progress: 85,
    description:
      "A style sheet language for describing the presentation of a document.",
  },
  {
    name: "Supabase",
    progress: 75,
    description: "An open-source Firebase alternative for backend services.",
  },
  {
    name: "Tailwind CSS",
    progress: 88,
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Styled Components",
    progress: 82,
    description: "A library for writing CSS in JavaScript.",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className={`${FLEXCENTER} w-full flex-col bg-gray-50 py-10`}
    >
      <div className="w-full max-w-4xl px-4">
        <h2 className="mb-8 text-left font-rocknroll text-2xl text-gray-100">
          My Skills
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-10 group relative flex h-[7rem] w-full flex-col justify-start gap-3 rounded-lg p-4 shadow-lg" // Add group class for hover effects
            >
              <h3 className="text-md mb-2 text-left font-semibold text-gray-50">
                {skill.name}
              </h3>
              <div className="h-2.5 w-full rounded-full bg-gray-200">
                <div
                  className="h-2.5 rounded-full bg-primary-500"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>

              {/* Overlay Element */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-2 text-center text-sm text-white">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <IconsCloud />
    </div>
  );
};

export default Skills;
