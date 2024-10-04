import { useEffect } from "react";
import closeIcon from "../assets/icons/close.svg";
import copy from "../assets/icons/copy.svg";
import githubIcon from "../assets/icons/github.svg";
import { IAlert, IRules } from "../types";
import yaml from "js-yaml";
import no_logo_found from "../assets/icons/alert_Icons/empty.svg";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  data: IAlert;
  header: string;
  logo: string;
}

const Modal = ({ open, handleClose, header, data, logo }: IModalProps) => {
  const convertToSentenceCase = (text: string) => {
    const result = text.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  const generateSubHeading = (text: string) => {
    if (!text) return;

    const cleanedText = text
      .replace(/\n\s*VALUE\s*=\s*\{\{[\s\S]*$/, "")
      .trim();
    // const firstSentence = cleanedText.split(".")[0] + ".";

    return cleanedText;
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleCopy = (rules: IRules) => {
    const textToCopy = yaml.dump(rules);

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div
      className={`${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out bg-[#27374780] w-full h-full fixed top-0 left-0 z-10`}
    >
      {data ? (
        <div className={"flex justify-center items-center fixed inset-0 z-20"}>
          <div className=" max-w-[784px] max-h-[556px] overflow-auto bg-[#ffffff] rounded-md pb-6">
            <div className="flex justify-between items-center border-b border-gray px-6 py-4 sticky top-0 bg-white">
              <div className="flex gap-2 ">
                <img
                  src={logo || no_logo_found}
                  alt="Logo"
                  className="w-5 h-5"
                />
                <div className="flex gap-1 items-center">
                  <div className="text-md leading-2 font-bold">{header}</div>
                  <div className="bg-highlight text-xs leading-1 rounded-full px-[4px] py-[2px] font-bold text-secondary">{`${data.rules.length} RULES`}</div>
                </div>
              </div>
              <img src={closeIcon} alt="Icon" onClick={handleClose} />
            </div>
            <div className="flex flex-col gap-6 px-6 pt-6 ">
              {data?.rules.map((rules: IRules, index: number) => {
                return (
                  <div
                    className="flex gap-4 pl-2 overflow-auto w-[680px]"
                    key={index}
                  >
                    <div>
                      <div className="w-10 h-10 bg-highlight flex justify-center items-center text-sm leading-1 font-bold rounded-full">
                        {index > 8 ? index + 1 : `0${index + 1}`}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <div>
                          <div className="text-md leading-2 font-medium">
                            {convertToSentenceCase(rules.alert)}
                          </div>
                          <div className="text-modal-secondary text-sm leading-1 font-medium">
                            {generateSubHeading(
                              String(rules.annotations.description)
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm leading-1 pb-6 px-2 bg-highlight-2 rounded min-w-[610px]">
                        <div className="flex justify-end">
                          <div className="flex items-center gap-1 font-bold self-start cursor-pointer bg-highlight hover:bg-highlight-2 px-2 py-3 rounded-l-md w-fit">
                            <img src={copy} alt="Copy icon" />
                            <div onClick={() => handleCopy(rules)}>COPY</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div>-</div>
                          <div>
                            <div>
                              <span className="text-active">alert</span>:{" "}
                              {rules.alert}
                            </div>
                            <div>
                              <span className="text-active">expr</span>:{" "}
                              {rules.expr}
                            </div>
                            <div>
                              <span className="text-active">for</span>:{" "}
                              {rules.for}
                            </div>
                            <div>
                              <span className="text-active">labels</span>:
                              <div className="ml-2">
                                <span className="text-active">severity</span>:{" "}
                                {rules.labels.severity}
                              </div>
                            </div>
                            <div>
                              <span className="text-active">annotations</span>:
                              <div className="ml-2">
                                <div>
                                  <span className="text-active">summary</span>:{" "}
                                  {rules.annotations.summary}
                                </div>
                                <div>
                                  <span className="text-active">
                                    description
                                  </span>
                                  : {rules.annotations.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
