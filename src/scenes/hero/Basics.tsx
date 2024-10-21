import { FLEXCENTER } from "@/constants/styles";
import useMediaQuery from "@/hooks/useMediaQuery";

const Basics = () => {
  const isAboverSmallScreen = useMediaQuery("(min-width:768px");
  if (isAboverSmallScreen)
    return (
      <div className="relative z-10 w-[320px] transform overflow-hidden text-gray-50 shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="rounded-t-xl bg-primary-400 px-6 py-5">
          <p className="text-left text-base font-medium text-gray-50">
            My name is:
          </p>
          <p className="text-right text-2xl font-bold text-gray-50">
            Daniel Du
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-b-xl border border-primary-400 bg-gray-50 p-6">
          <p className="text-left text-lg font-medium text-primary-600">
            I'm a self-taught
          </p>
          <div className="text-right text-xl font-semibold text-primary-500">
            <p>UI Designer</p>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`${FLEXCENTER} relative z-10 h-[240px] w-[240px] flex-col gap-6 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-6 shadow-lg`}
      >
        <div className="text-white">
          <p className="text-left text-base font-light">My name is:</p>
          <p className="text-xl font-bold">Daniel Du</p>
        </div>

        <div className="text-center text-white">
          <p className="text-base font-light">I'm a self-taught</p>
          <p className="text-lg font-semibold">UI Designer</p>
          <p className="text-lg font-semibold">Web Developer</p>
        </div>
      </div>
    );
};

export default Basics;
