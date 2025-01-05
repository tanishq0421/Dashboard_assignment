import { Details } from "../components/details";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Tabs } from "../components/tabs";
import { Title } from "../components/title";
import { Activity } from "../components/activity";
import { Event } from "../components/events";
import { StageHistory } from "../components/stageHistory";

export const Home = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header Section */}
      <div className="h-[6%] w-[99.85%]">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-grow h-[94%]">
        {/* Sidebar */}
        <div className="h-full">
          <Sidebar />
        </div>
        
        {/* Content Section */}
        <div className="w-[95.5%] h-full flex flex-col border-gray border-r-2">
          {/* Title and Tabs */}
          <div className="h-[20%]">
            <Title />
            <Tabs />
          </div>
          
          {/* Details and Additional Information */}
          <div className="flex flex-grow h-full w-full">
            {/* Details Section */}
            <div className="w-[40%] h-full">
              <Details />
            </div>
            
            {/* Activity, Stage History, and Events */}
            <div className="w-[60%] h-full flex flex-col">
              {/* Activity and Stage History */}
              <div className="flex h-[70%]">
                <div className="w-[60%] h-full">
                  <Activity />
                </div>
                <div className="w-[40%] h-full">
                  <StageHistory />
                </div>
              </div>
              
              {/* Events Section */}
              <div className="h-[30%] w-full">
                <Event />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
