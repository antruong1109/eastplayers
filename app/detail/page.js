"use client";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { makeServer } from "../mirageServer";
import { fetchAuth } from "@/lib/features/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { IoIosCheckmarkCircle, IoMdClose } from "react-icons/io";
import ProfileCard from "../components/appointmentDetail/ProfileCard";
import PaymentCard from "../components/appointmentDetail/PaymentCard";
import WorkOrderCard from "../components/appointmentDetail/WorkOrderCard";

if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  makeServer();
}

export default function Detail() {
  const Msg = ({ closeToast, toastProps }) => (
    <div className="flex items-center gap-2">
      <IoIosCheckmarkCircle size={32} color="#FFFFFF" />
      <p className="text-xs font-bold text-white">
        Create Appointment and send successfully
      </p>
      <IoMdClose
        size={28}
        color="#FFFFFF"
        onClick={closeToast}
        className="cursor-pointer"
      />
    </div>
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuth());
    toast(Msg, {
      autoClose: 5000,
      customProgressBar: true,
      closeButton: false,
    });
  }, [dispatch]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar label="Appointment Detail" />
        <div
          className="flex-1 overflow-hidden py-6 px-5"
          style={{
            background: `rgb(46, 127, 241)`,
            background: `linear-gradient(180deg, rgba(46,127,241,0.3) 0%, rgba(15,15,15,1) 15%, rgba(15,15,15,1) 100%)`,
          }}
        >
          <div className="overflow-auto h-full">
            <ProfileCard />
            <div className="flex gap-4 mt-4">
              <PaymentCard />
              <WorkOrderCard />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer toastClassName={"!bg-[#00976F] !rounded-[16px]"} />
    </div>
  );
}
