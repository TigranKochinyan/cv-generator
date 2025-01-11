import { FC, useContext, useMemo } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { EducationForm } from "./EducationForm";
import { Accordion } from "../../Accordion";

const items = [
  {
    title: "Accordion Item 1",
    content:
      "This is the content for accordion item 1. This is the content for accordion item 1.  This is the content for accordion item 1.  This is the content for accordion item 1. ",
  },
  {
    title: "Accordion Item 2",
    content: "This is the content for accordion item 2.",
  },
  {
    title: "Accordion Item 3",
    content: "This is the content for accordion item 3.",
  },
];

export const EducationsForm: FC = () => {
  const userInfo = useContext(UserInfoContext);

  const educations = userInfo?.educations;

  const handleAddBlock = () => {
    userInfo?.addEducationBlock();
    console.log("educations:", educations);
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
    <div className="p-4">
      <button
        type="button"
        onClick={handleAddBlock}
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Education Block
      </button>

      <Accordion items={eduItems} />
    </div>
  );
};
