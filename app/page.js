import ClientInfo from "./components/ClientInfo";
import Sidebar from "./components/Sidebar";
import StepBox from "./components/StepBox";
import Topbar from "./components/Topbar";

export default function Home() {
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
          <p className="text-[30px] font-bold mb-5">Client Information</p>
          <div className="overflow-hidden h-full flex gap-4">
            <div className="overflow-auto h-full flex-1">
              <ClientInfo />
            </div>
            <StepBox />
          </div>
        </div>
      </div>
    </div>
  );
}
