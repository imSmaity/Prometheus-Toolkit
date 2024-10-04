import React, { ChangeEvent, useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import prometheusAlerts from "./config/data";

const Main = () => {
  const [data, setData] = useState(prometheusAlerts);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    if (!value) return setData(prometheusAlerts);

    const regex = new RegExp(value.trim(), "i");

    const filteredData = prometheusAlerts.filter(
      (alert) =>
        regex.test(alert.name) ||
        alert.rules.some((rule) => regex.test(rule.name))
    );

    setData([...filteredData]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-[250px] pt-[50px] flex flex-col gap-4">
        <div className="text-lg leading-3">Browse Library</div>
        <Search text={searchText} handleSearch={handleSearch} />
        <div className="flex flex-col gap-4">
          {data.map((alerts) => (
            <React.Fragment key={alerts.name}>
              <div className="text-xs leading-1 font-bold text-secondary uppercase">
                {alerts.name}
              </div>
              <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                {alerts.rules.map((rule) => (
                  <Alert
                    key={rule.name}
                    logo={rule.logo}
                    name={rule.name}
                    description="Prometheus job missing, Prometheus target missing, Prometheus all targets missing, Prometheus target missing with warmup time, Prometheus configuration reload failure"
                    url={rule.url}
                    totalRules={rule.totalRules}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
