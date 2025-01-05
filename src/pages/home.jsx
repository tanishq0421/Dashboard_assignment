import { Details } from "../components/details";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Tabs } from "../components/tabs";
import { Title } from "../components/title";
import { Activity } from "../components/activity"

export const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Title />
          <Tabs />
          <div className="flex flex-grow">
            <Details />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};
