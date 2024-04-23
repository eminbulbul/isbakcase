import React, { useEffect, useState } from "react";

import TrafficLight from "../components/TrafficLight";
import { lightGroup } from "../data/LightGroup";

const Home = () => {
  const [greenLightDuration, setGreenLightDuration] = useState(15);
  const [currentStepTime, setCurrentStepTime] = useState(5000);
  const [timeForNextStep, settimeForNextStep] = useState(5000);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPedesterianPressed, setIsPedesterianPressed] = useState(false);
  const [groups, setGroups] = useState(lightGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep > 6 || prevStep === "Yaya Geçebilir") {
          return 1;
        } else {
          return prevStep + 1;
        }
      });
    }, parseInt(currentStepTime));
    return () => clearInterval(interval);
  }, [currentStepTime]);

  useEffect(() => {
    if (currentStep === 1) {
      settimeForNextStep(5);
    } else {
      settimeForNextStep(currentStepTime / 1000);
    }
    const timer = setInterval(() => {
      settimeForNextStep((prevStep) => {
        return prevStep - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentStepTime, currentStep]);

  useEffect(() => {
    switch (currentStep) {
      case "Yaya Işığına Basıldı":
        setGroups(
          groups.map((item) => {
            if (item.lightColor !== "red") {
              setCurrentStepTime(5000);
              return { ...item, lightColor: "yellow" ? "yellow" : "red" };
            }
            return { ...item, lightColor: "red" };
          })
        );
        setTimeout(() => {
          setCurrentStep("Yaya Geçebilir");
        }, 5000);
        break;
      case "Yaya Geçebilir":
        setCurrentStepTime(15000);
        setGroups(
          groups.map((item) => {
            return { ...item, lightColor: "red", pedestarianCanGo: true };
          })
        );
        setTimeout(() => {
          setGroups(
            groups.map((item) => {
              return { ...item, pedestarianCanGo: false };
            })
          );
          setIsPedesterianPressed(false);
          setCurrentStep(1);
        }, 15000);
        break;
      case 1:
        setCurrentStepTime(5000);
        handleLightGroup("red", "red", "red");
        break;
      case 2:
        handleLightGroup("green", "red", "red", greenLightDuration);
        break;
      case 3:
        handleLightGroup("yellow", "red", "red");
        break;
      case 4:
        handleLightGroup("red", "green", "red", greenLightDuration);
        break;
      case 5:
        handleLightGroup("red", "yellow", "red"); 
        break;
      case 6:
        handleLightGroup("red", "red", "red");
        setTimeout(() => {
          setCurrentStep(1);
        }, 5000);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [currentStep, currentStepTime]);

  useEffect(() => {
    if (
      isPedesterianPressed &&
      currentStep !== "Yaya Işığına Basıldı" &&
      currentStep !== "Yaya Geçebilir"
    ) {
      setCurrentStep("Yaya Işığına Basıldı");
    }
  }, [isPedesterianPressed, currentStep]);

  const handleLightGroup = (
    firstGroupColor,
    secondGroupColor,
    thirdGroupColor,
    greenLightDuration,
  ) => {
    setGroups(
      groups.map((item, idx) => {
        return {
          ...item,
          lightColor:
            idx === 0
              ? firstGroupColor
              : idx === 1
              ? secondGroupColor
              : thirdGroupColor,
        };
      })
    );
    setCurrentStepTime(greenLightDuration ? greenLightDuration * 1000 : 5000);
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <p className="m-5">Mevcut Adım: {currentStep}</p>
        <p className="m-5">Bir Sonraki Adıma Kalan Sure: {timeForNextStep}</p>
        <div>
          <label htmlFor="greenLightCount">Yeşil Işık Süresi</label>
          <input
            className="outline-offset-1 outline outline-1 rounded-md p-2 w-20 m-5"
            type="number"
            min={1}
            max={30}
            maxLength={2}
            minLength={1}
            step={1}
            name="greenLightCount"
            id="greenLightCount"
            value={greenLightDuration}
            onChange={(e) => setGreenLightDuration(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex m-10 justify-evenly">
        {groups.map((item) => (
          <TrafficLight
            key={item.id}
            type={item.type}
            groupName={item.name}
            lightColor={item.lightColor}
            pedestarianCanGo={item?.pedestarianCanGo}
            isPedesterianPressed={isPedesterianPressed}
            setIsPedesterianPressed={setIsPedesterianPressed}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
