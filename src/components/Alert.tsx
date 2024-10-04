import axios from "axios";
import yaml from "js-yaml";
import { useEffect, useState } from "react";
import { IAlert } from "../types";
import Card from "./Card";
import Modal from "./Modal";

interface IAlertProps {
  logo: string;
  name: string;
  description: string;
  url: string;
  totalRules: number;
}

const Alert = ({ name, description, logo, url, totalRules }: IAlertProps) => {
  const [data, setData] = useState<IAlert[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const getDescription = (alerts: IAlert) => {
    if (!alerts) return "";
    const summaries = alerts.rules.map((rule) => rule.annotations.summary);

    return summaries
      .join(",")
      .replace(/\s*\(instance\s*\{\{\s*\$labels\.instance\s*\}\}\)\s*/g, "")
      .replace(/,\s*/g, ", ");
  };

  const fetchAlertRules = (url: string) => {
    axios
      .get(url)
      .then((res: any) => res?.data)
      .then((text) => {
        const parsedData: any = yaml.load(text);
        if (Array.isArray(parsedData?.groups)) {
          setData(parsedData?.groups);
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchAlertRules(url);
  }, []);

  const handleOpenAlert = () => {
    setOpenAlert(!openAlert);
  };

  return (
    <>
      <Card
        logo={logo}
        title={name}
        description={getDescription(data[0])}
        handleOpenAlert={handleOpenAlert}
        totalRules={totalRules}
      />
      <Modal
        logo={logo}
        header={name}
        open={openAlert}
        handleClose={handleOpenAlert}
        data={data[0]}
      />
    </>
  );
};

export default Alert;
