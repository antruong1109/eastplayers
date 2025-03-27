"use client";
import { useState, useEffect } from "react";
import ClientInfo from "./components/ClientInfo";
import Sidebar from "./components/Sidebar";
import StepBox from "./components/StepBox";
import Topbar from "./components/Topbar";
import Services from "./components/Services";
import Review from "./components/Review";
import { makeServer } from "./mirageServer";
import { fetchAuth } from "@/lib/features/authSlice";
import { useSelector, useDispatch } from "react-redux";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default function Home() {
  const { step } = useSelector((state) => state.createAppointment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <ClientInfo />;
      case 2:
        return <Services />;
      case 3:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div
          className="flex-1 overflow-hidden py-6 px-5"
          style={{
            background: `rgb(46, 127, 241)`,
            background: `linear-gradient(180deg, rgba(46,127,241,0.3) 0%, rgba(15,15,15,1) 15%, rgba(15,15,15,1) 100%)`,
          }}
        >
          <div className="overflow-hidden h-full flex gap-4">
            <div className="overflow-auto h-full flex-1">
              {renderStep(step)}
            </div>
            <StepBox step={step} />
          </div>
        </div>
      </div>
    </div>
  );
}
