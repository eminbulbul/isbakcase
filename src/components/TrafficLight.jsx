import React, { useEffect, useState } from "react";
import StopHandIcon from "../assets/media/stophand.svg";
import WalkIcon from "../assets/media/walk.svg";

const TrafficLight = ({
  type,
  lightColor,
  groupName,
  pedestarianCanGo,
  setIsPedesterianPressed,
  isPedesterianPressed,
}) => {
  const handlePedestrianPress = () => {
    setIsPedesterianPressed(true);
  };
  const [timeForNextStep, settimeForNextStep] = useState(15);
  useEffect(() => {
    if (pedestarianCanGo) {
      const timer = setInterval(() => {
        settimeForNextStep((prevStep) => {
          return prevStep - 1;
        });
      }, 1000);
      settimeForNextStep(15)
      return () => clearInterval(timer);
    }
  }, [pedestarianCanGo]);

  return (
    <div className="w-32">
      <div className="flex flex-col items-center">
        {type === "forCar" && (
          <div className="w-24 h-52 bg-gray-700 outline-slate-500 outline rounded-sm z-10 flex flex-col justify-between items-center p-5">
            <div
              className={`w-12 h-12 bg-red-500 rounded-full ${
                lightColor === "red" ? "opacity-100" : "opacity-15"
              }`}
            ></div>
            <div
              className={`w-12 h-12 bg-yellow-500 rounded-full ${
                lightColor === "yellow" ? "opacity-100" : "opacity-15"
              }`}
            ></div>
            <div
              className={`w-12 h-12 bg-green-600 rounded-full ${
                lightColor === "green" ? "opacity-100" : "opacity-15"
              }`}
            ></div>
          </div>
        )}
        {type === "forOnFoot" && (
          <div
            className={`w-24 h-52 bg-gray-700 outline-slate-500 outline rounded-sm z-10 flex flex-col ${
              isPedesterianPressed ? "justify-between" : "justify-end"
            } items-center p-5 py-8`}
          >
            {isPedesterianPressed && (
              <div className="bg-gray-800 w-14 h-14 text-white text-3xl rounded-full flex items-center justify-center p-2">
                {timeForNextStep}
              </div>
            )}
            <div className="w-14 h-14 rounded-full ">
              {pedestarianCanGo && isPedesterianPressed ? (
                <img src={WalkIcon} alt="" />
              ) : (
                <img src={StopHandIcon} alt="" />
              )}
            </div>
          </div>
        )}
        <div className="relative flex justify-center">
          <div className="h-64 w-8 bg-gray-800"></div>
          {type === "forOnFoot" && (
            <div className="w-6 h-10 bg-yellow-200 absolute bottom-36 z-10 flex justify-center items-end pb-2">
              <button
                onClick={handlePedestrianPress}
                className="w-4 h-4 rounded-full bg-slate-600"
              ></button>
            </div>
          )}
        </div>
        <div className="h-20 w-14 bg-gray-800 rounded-t-md"></div>
        <h3 className="text-xl font-bold pt-5">{groupName}</h3>
      </div>
    </div>
  );
};

export default TrafficLight;
