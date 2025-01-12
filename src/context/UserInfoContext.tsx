import { createContext, FC, PropsWithChildren, useState } from "react";
import {
  DesiredPositionType,
  EducationType,
  MainInfoType,
} from "../common/types";
import { generateId } from "../common/utils";

export type UserInfoContextType = {
  mainInfo: MainInfoType;
  linkedinProfileLink?: string;
  githubProfileLink?: string;
  skills: string[];
  educations: EducationType[];
  additionalInfo: string;
  desiredPositionInfo: DesiredPositionType;
  changeMainInfo: (data: MainInfoType) => void;
  changeAdditionalInfo: (text: string) => void;
  changeEducations: (data: EducationType[]) => void;
  changeEducationInfo: (data: EducationType) => void;
  changeDesiredPositionInfo: (data: DesiredPositionType) => void;
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
  businessDetails: "full-time, part-time, project work",
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

const desiredPositionInitialInfo: DesiredPositionType = {
  desiredPosition: "Frontend developer",
  busyness: "Ready to move, ready for business trips",
  specializations:
    "Frontend Developer, Software engineer, Full-stack Developer",
  workSchedule: "full-time, flexible schedule, remote work",
};

const userInitialAdditionalInfo =
  "I am an enterprising and purposeful frontend developer with a strong technical base and team interaction skills. I am constantly striving for self-development, open to new technologies and approaches. Attention to detail, cleanliness and structure of the code are important to me, as well as high-quality execution of tasks on time. I easily adapt to changes and also maintain healthy communication in the team.";

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mainInfo, setMainInfo] = useState<MainInfoType>(() => initialValue);
  const [desiredPositionInfo, setDesiredPositionInfo] =
    useState<DesiredPositionType>(() => desiredPositionInitialInfo);
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

  const changeDesiredPositionInfo = (info: DesiredPositionType) => {
    setDesiredPositionInfo(info);
  };

  return (
    <UserInfoContext.Provider
      value={{
        mainInfo,
        linkedinProfileLink,
        githubProfileLink,
        desiredPositionInfo,
        changeMainInfo,
        changeAdditionalInfo,
        changeEducations,
        addEducationBlock,
        changeEducationInfo,
        changeDesiredPositionInfo,
        additionalInfo,
        skills,
        educations,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
