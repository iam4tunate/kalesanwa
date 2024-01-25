import { MISSIONS, VISIONS } from "../data";
import { IoFlag } from "react-icons/io5";

const Commitment = () => {
  return (
    <div className="pt-48 max-lg:pt-20 pb-20 max-sm:pt-16 max-sm:pb-16 maxW padX grid grid-cols-2 max-lg:grid-cols-1 gap-x-12 gap-y-8">
      <div className="col-start-1 col-end-2">
        <div className="">
          <span className="bg-gray flex items-center gap-x-2 rounded-md py-2 px-2 w-fit text-base font-Heebo500">
            <IoFlag className="text-secondary" />
            <span>Our Commitment</span>
          </span>
          <div className="pt-5 pb-7">
            <div className="font-DMSefif text-5xl max-md:text-4xl text-primary pb-3">
              Vision & Mission
            </div>
            <p className="text-lg max-sm:text-base leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              maxime aspernatur alias odio ratione sit.
            </p>
          </div>
        </div>
        <div className="bg-gray py-8 px-4 max-sm:px-2">
          <span className="font-DMSefif text-primary text-3xl">Vision</span>
          {VISIONS.map((vision) => (
            <div
              key={vision.id}
              className="pt-6 before:w-2 before:h-2 before:rounded-full before:bg-primary before:inline-block before:mt-2 gap-x-3 grid grid-cols-[min-content_1fr]"
            >
              <div className="">
                <div className="text-lg font-Heebo500">{vision.title}</div>
                <p className="font-Heebo400 text-base text-primary opacity- leading-normal">
                  {vision.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary text-white col-start-2 col-end-3 max-lg:col-start-1 max-lg:col-end-2 py-8 px-4 max-sm:px-2 h-fit">
        <span className="font-DMSefif text-3xl">Mission</span>
        {MISSIONS.map((mission) => (
          <div
            key={mission.id}
            className="pt-6 before:w-2 before:h-2 before:rounded-full before:bg-secondary before:inline-block before:mt-2 gap-x-3 grid grid-cols-[min-content_1fr]"
          >
            <div className="">
              <div className="text-lg font-Heebo500">{mission.title}</div>
              <p className="font-Heebo300 text-base opacity-90 leading-normal">
                {mission.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Commitment;
