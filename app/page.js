"use client";
import { useState } from "react";
import ClientInfo from "./components/ClientInfo";
import Sidebar from "./components/Sidebar";
import StepBox from "./components/StepBox";
import Topbar from "./components/Topbar";
import Services from "./components/Services";
import Review from "./components/Review";

export default function Home() {
  const [step, setStep] = useState(2);

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <ClientInfo setStep={setStep} />;
      case 2:
        return <Services setStep={setStep} />;
      case 3:
        return <Review setStep={setStep} />;
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
