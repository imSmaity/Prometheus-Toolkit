import githubIcon from "./assets/icons/github.svg";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-[200px] pt-[50px] flex flex-col gap-4">
        <div className="text-lg leading-3">Browse Library</div>
        <Search />
        <div className="flex flex-col gap-4">
          <div className="text-xs leading-1 font-bold text-secondary">
            BASIC RESOURCE MONITORING
          </div>
          <Card
            logo={githubIcon}
            title="Prometheus self-monitoring"
            description="Prometheus job missing, Prometheus target missing, Prometheus all targets missing, Prometheus target missing with warmup time, Prometheus configuration reload failure"
            totalRules={28}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
