import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const dateOfMonth = [
  {
    date: "Mon",
    num: 1,
    status: "active",
  },

  {
    date: "Tue",
    num: 2,
    status: "available",
  },
  {
    date: "Wed",
    num: 3,
    status: "disable",
  },
  {
    date: "Thu 1",
    num: 4,
    status: "disable",
  },
  {
    date: "Fri",
    num: 5,
    status: "available",
  },
  {
    date: "Sat",
    num: 6,
    status: "available",
  },
  {
    date: "Sun",
    num: 7,
    status: "available",
  },
];

const timeOfDate = [
  {
    time: "08:00 AM",
    status: "available",
  },
  {
    time: "09:00 AM",
    status: "active",
  },
  {
    time: "10:00 AM",
    status: "available",
  },
  {
    time: "11:00 AM",
    status: "disable",
  },
  {
    time: "12:00 AM",
    status: "disable",
  },
  {
    time: "13:00 PM",
    status: "available",
  },
  {
    time: "14:00 PM",
    status: "available",
  },
  {
    time: "15:00 PM",
    status: "available",
  },
  {
    time: "16:00 PM",
    status: "available",
  },
  {
    time: "17:00 PM",
    status: "disable",
  },
];

export const AppointmentSchedule = () => {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="z-[1] cursor-pointer w-8 h-8 rounded-full border border-[#7F859F] bg-[#44485ACC] !flex justify-center items-center absolute top-6 -right-4"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronRight size={10} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="z-[1] cursor-pointer w-8 h-8 rounded-full border border-[#7F859F] bg-[#44485ACC] !flex justify-center items-center absolute top-6 -left-4"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronLeft size={10} />
      </div>
    );
  }
  const settingsSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full bg-[#18181B] rounded-xl px-8 py-4 relative">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold">Appointment Schedule</p>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-bold">Select A Date</p>
          <div className="flex items-center gap-1">
            <CiCalendar />
            <p className="text-sm">Jan 2024</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settingsSlider}>
            {dateOfMonth.map((item) => {
              return (
                <div key={item.num} className="pr-4 pb-4">
                  <div
                    className={clsx({
                      "flex flex-col gap-1 justify-center items-center h-20 border cursor-pointer w-40 rounded-lg": true,
                      "border-[#7F859F]": item.status === "available",
                      "bg-[#2F323E] border-[#7F859F]":
                        item.status === "disable",
                      "bg-[#00285F] border-[#2E7FF1]": item.status === "active",
                    })}
                  >
                    <p className="text-sm text-[#7F859F]">{item.date}</p>
                    <p className="text-sm">{item.num}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-bold">Select A Time</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {timeOfDate.map((item) => {
            return (
              <div
                key={item.time}
                className={clsx({
                  "w-60 h-13 border rounded-lg justify-center items-center flex cursor-pointer": true,
                  "border-[#7F859F]": item.status === "available",
                  "bg-[#2F323E] border-[#7F859F]": item.status === "disable",
                  "bg-[#00285F] border-[#2E7FF1]": item.status === "active",
                })}
              >
                <p className="text-sm">{item.time}</p>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
      <div className="rounded-full bg-[#2F323E] px-4 h-10 inline-flex justify-center items-center mb-4">
        <p className="text-sm text-[#A4A8B7] font-bold">
          Estimated End Date{" "}
          <span className="font-normal text-white pl-4">
            January 20, 2025 - 4:00 PM
          </span>
        </p>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
