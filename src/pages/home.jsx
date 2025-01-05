import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Tabs } from "../components/tabs";
import { Title } from "../components/title";
export const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Title />
          <Tabs />
        </div>
      </div>
    </div>
  );
};
