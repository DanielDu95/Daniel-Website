type Props = {};

const Basics = (props: Props) => {
  return (
    <div className="z-10 w-[300px] transform whitespace-pre-wrap text-center text-xl text-gray-50 drop-shadow-2xl transition-transform duration-300 hover:scale-110">
      <div className="rounded-t-[17px] bg-primary-400 p-4">
        <p className="text-left">My name is:</p>
        <p className="font-semibold">Daniel Du</p>
      </div>
      <div className="flex flex-col gap-5 rounded-b-[17px] border-2 border-primary-400 p-4">
        <p className="text-left">I'm a self-taught</p>
        <div className="text-right">
          <p>UI Designer</p>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Basics;
