import { FLEXCENTER } from "@/constants/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { LEARNING_EXPERIENCE } from "@/constants/arrays";
import { useState } from "react";

const LearningExperience = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState(
    new Array(LEARNING_EXPERIENCE.length).fill(false), // Initialize all descriptions as hidden
  );

  const toggleDescription = (index: number) => {
    const newVisibleDescriptions = [...visibleDescriptions];
    newVisibleDescriptions[index] = !newVisibleDescriptions[index];
    setVisibleDescriptions(newVisibleDescriptions);
  };
  return (
    <div id="portfolio" className={`${FLEXCENTER} w-full bg-gray-50 py-10`}>
      <div className="w-full max-w-4xl px-4">
        <h2 className="mb-8 text-left font-rocknroll text-2xl text-gray-100">
          My Learning Journey
        </h2>
        <VerticalTimeline>
          {LEARNING_EXPERIENCE.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#E26B46", // primary-500
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid #E26B46" }} // primary-500
              date={experience.period}
              iconStyle={{
                background: "#358D99", // secondary-500
                color: "#fff",
                width: "50px", // Set the desired width
                height: "50px", // Set the desired height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%", // Ensures it remains a circle
              }}
              icon={
                <img
                  src={experience.image}
                  alt={experience.courseName}
                  className="h-full w-full rounded-full object-cover"
                />
              }
            >
              <div className="grid grid-cols-[3fr_1fr] items-start">
                <h3 className="vertical-timeline-element-title font-semibold text-[#FFE3D0]">
                  {experience.courseName}
                </h3>

                <div className="flex justify-end">
                  <button
                    className="flex h-10 w-10 transform items-center justify-center rounded-full bg-primary-500 text-white transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none sm:bg-secondary-400 sm:shadow-lg"
                    onClick={() => toggleDescription(index)}
                  >
                    {visibleDescriptions[index] ? "-" : "+"}
                  </button>
                </div>
              </div>

              {visibleDescriptions[index] && (
                <p className="mt-2 indent-4 text-[#FFE3D0]">
                  {experience.description}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default LearningExperience;
