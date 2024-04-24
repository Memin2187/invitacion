'use client'
import { useEffect, useState } from "react";

interface CountDownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountDown = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number): void => {
    const currentTime: number = new Date().getTime();
    const timeDifference: number = countDownTime - currentTime;
    let days: string | number =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours: string | number =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`;
    const minutes: string | number =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds: string | number =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      
    } else {
      setCountDownTime({
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString(),
      });
    }
  };

  useEffect(() => {
    const customDate: Date = new Date();
    const countDownDate: Date = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    const intervalId: NodeJS.Timeout = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[url('../images/fondito.jpg')] h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          Act Now, Time is Short
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          {/* Renderización de los elementos de conteo aquí */}
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {/* {countDownTime?.days == 1 ? "Day" : "Days"} */}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
              {/* {countDownTime?.hours == 1 ? "Hour" : "Hours"} */}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {/* {countDownTime?.minutes == 1 ? "Minute" : "Minutes"} */}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {/* {countDownTime?.seconds == 1 ? "Second" : "Seconds"} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
