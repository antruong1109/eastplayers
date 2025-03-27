import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/lib/features/settingSlice";

const menuSidebar = [
  {
    name: "Proposals",
    logo: "/proposals.svg",
    active: false,
  },
  {
    name: "Services",
    logo: "/car.svg",
    active: false,
  },
  {
    name: "Vehicle Rules",
    logo: "/dollar.svg",
    active: false,
  },
  {
    name: "Appointments",
    logo: "/calendar.svg",
    active: true,
  },
  {
    name: "Inventory",
    logo: "/package.svg",
    active: false,
  },
  {
    name: "Contacts",
    logo: "/user.svg",
    active: false,
  },
  {
    name: "Transactions",
    logo: "/money.svg",
    active: false,
  },
  {
    name: "Invoices",
    logo: "/newspaper.svg",
    active: false,
  },
];

export const Sidebar = ({}) => {
  const dispatch = useDispatch();
  const { data: userData } = useSelector((state) => state.auth);
  return (
    <div className="h-screen w-50 bg-[#0F0F0F] border-r border-r-[#212226] flex flex-col">
      <div className="p-4 h-15 border-b border-[#212226]">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={28}
          priority
          className="cursor-pointer"
        />
      </div>
      <div className="flex-1 border-b border-[#212226] py-4">
        {menuSidebar.map((item) => {
          return (
            <div
              className={`${
                item.active &&
                "!bg-[rgba(46,127,241,0.1)] !border-r-2 !border-r-[#2E7FF1]"
              } flex cursor-pointer items-center h-10 px-4 py-[10px] gap-[10px] hover:bg-[rgba(46,127,241,0.1)] group hover:border-r-2 hover:border-r-[#2E7FF1]`}
              key={item.name}
            >
              <Image
                src={item.logo}
                alt="logo"
                width={20}
                height={20}
                priority
              />
              <p
                className={`${
                  item.active && "!text-[#2E7FF1]"
                } group-hover:text-[#2E7FF1] text-sm`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-15 p-4 relative">
        <div className="inline-flex items-center rounded-[14px] bg-[#2F323E] cursor-pointer">
          <div className="rounded-full bg-pink-200 flex justify-center items-center overflow-hidden w-7 h-7">
            {userData?.avatar && (
              <Image
                src={userData?.avatar}
                alt="logo"
                width={28}
                height={28}
                priority
              />
            )}
          </div>
          <div className="pl-2 pr-4 flex justify-between items-center">
            <p className="font-bold text-sm">{userData?.name}</p>
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(toggleSidebar());
          }}
          className="w-6 h-6 bg-[#212226] rounded-full absolute -top-3 right-3 p-[3px] cursor-pointer"
        >
          <IoArrowBackCircleOutline size={18} color="#7F859F" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
