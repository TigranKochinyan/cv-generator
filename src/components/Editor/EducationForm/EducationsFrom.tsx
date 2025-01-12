import { FC, useContext, useMemo } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { EducationForm } from "./EducationForm";
import { Accordion } from "../../Accordion";

export const EducationsForm: FC = () => {
  const userInfo = useContext(UserInfoContext);

  const educations = userInfo?.educations;

  const handleAddBlock = () => {
    userInfo?.addEducationBlock();
  };

  const eduItems = useMemo(() => {
    return (
      educations?.map((item, index) => ({
        title: item.title,
        content: <EducationForm id={item.id} />,
      })) || []
    );
  }, [educations?.length]);

  return (
    <div className="px-4 mt-10">
      <div className="w-full flex items-center justify-between">
        <p className="text-xl">Education</p>

        <button
          type="button"
          onClick={handleAddBlock}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Add Education Block
        </button>
      </div>

      <Accordion items={eduItems} />
    </div>
  );
};
