import { FC, useState, ReactNode } from "react";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-10 space-y-4">
      {items.map((item, index) => (
        <div key={item.title + index} className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring"
          >
            {item.title}
            <span
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              &#x25BC;
            </span>
          </button>
          <div
            className={`px-4 text-gray-600 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen py-2" : "max-h-0"
            }`}
            style={{
              maxHeight: openIndex === index ? "1000px" : "0",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
