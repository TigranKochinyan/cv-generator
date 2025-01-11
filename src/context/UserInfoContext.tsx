import { createContext, FC, PropsWithChildren, useState } from "react";
import { EducationType, MainInfoType } from "../common/types";
import { generateId } from "../common/utils";

export type UserInfoContextType = {
  mainInfo: MainInfoType;
  linkedinProfileLink?: string;
  githubProfileLink?: string;
  skills: string[];
  educations: EducationType[];
  additionalInfo: string;
  changeMainInfo: (data: MainInfoType) => void;
  changeAdditionalInfo: (text: string) => void;
  changeEducations: (data: EducationType[]) => void;
  changeEducationInfo: (data: EducationType) => void;
  addEducationBlock: () => void;
};

const initialValue: MainInfoType = {
  lastName: "Kochinyan",
  firstName: "Tigran",
  birthDate: "January 24, 1999",
  city: "Yerevan",
  phoneNumber: "+374 (93) 550242",
  email: "tigrankochinyan24@gmail.com",
  country: "Armenia",
  busyness: "Ready to move, ready for business trips",
  desiredPosition: "Frontend developer",
  businessDetails: "full-time, part-time, project work",
  // specializations: "Frontend Developer, Software engineer, Full-stack Developer",
  // workSchedule: "full-time, flexible schedule, remote work",
};

const initialEducation: EducationType[] = [
  {
    id: generateId(),
    date: "2021",
    major: "Computer Science, Software Architect",
    title: "Bachelor's degree",
    university: "National Polytechnic University of Armenia",
  },
];

const userInitialAdditionalInfo =
  "I am an enterprising and purposeful frontend developer with a strong technical base and team interaction skills. I am constantly striving for self-development, open to new technologies and approaches. Attention to detail, cleanliness and structure of the code are important to me, as well as high-quality execution of tasks on time. I easily adapt to changes and also maintain healthy communication in the team.";

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mainInfo, setMainInfo] = useState<MainInfoType>(() => initialValue);
  const [linkedinProfileLink, setLinkedinProfileLink] = useState("");
  const [githubProfileLink, setGithubProfileLink] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [educations, setEducations] =
    useState<EducationType[]>(initialEducation);
  const [additionalInfo, setAdditionalInfo] = useState(
    userInitialAdditionalInfo
  );

  const changeMainInfo = (data: MainInfoType) => {
    setMainInfo(data);
  };

  // const changeAdditionalInfo = ({
  //   linkedinProfileLink: linkedinLink,
  //   githubProfileLink: githubLink,
  // }: AdditionalInfo) => {
  //   if (githubLink !== undefined) setGithubProfileLink(githubLink);
  //   if (linkedinLink !== undefined) setGithubProfileLink(linkedinLink);
  // };

  const changeEducations = (data: EducationType[]) => {
    setEducations(data);
  };

  const changeAdditionalInfo = (text: string) => {
    setAdditionalInfo(text);
  };

  const changeEducationInfo = (data: EducationType) => {
    const updatedEducations: EducationType[] = educations.map((item) => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });

    setEducations(updatedEducations);
  };

  const addEducationBlock = () => {
    const newBlock: EducationType = {
      date: "",
      id: generateId(),
      major: "",
      title: `Education ${educations.length + 1}`,
      university: "",
    };

    setEducations([...educations, newBlock]);
  };

  return (
    <UserInfoContext.Provider
      value={{
        mainInfo,
        linkedinProfileLink,
        githubProfileLink,
        changeMainInfo,
        changeAdditionalInfo,
        changeEducations,
        addEducationBlock,
        changeEducationInfo,
        additionalInfo,
        skills,
        educations,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
