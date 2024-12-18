import { createContext, FC, PropsWithChildren, useState } from "react";

type MainInfo = {
  jobTitle?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country?: string;
  city?: string;
};

type AdditionalInfo = {
  linkedinProfileLink?: string;
  githubProfileLink?: string;
};

export type UserInfoContextType = {
  mainInfo: MainInfo;
  linkedinProfileLink?: string;
  githubProfileLink?: string;
  skills: string[];
  changeMainInfo: (data: MainInfo) => void;
  changeAdditionalInfo: (data: AdditionalInfo) => void;
};

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mainInfo, setMainInfo] = useState<MainInfo>({
    city: "",
    country: "",
    email: "",
    firstName: "",
    jobTitle: "",
    lastName: "",
    phoneNumber: "",
  });
  const [linkedinProfileLink, setLinkedinProfileLink] = useState("");
  const [githubProfileLink, setGithubProfileLink] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const changeMainInfo = (data: MainInfo) => {
    setMainInfo(data);
  };

  const changeAdditionalInfo = ({
    linkedinProfileLink: linkedinLink,
    githubProfileLink: githubLink,
  }: AdditionalInfo) => {
    if (githubLink !== undefined) setGithubProfileLink(githubLink);
    if (linkedinLink !== undefined) setGithubProfileLink(linkedinLink);
  };

  return (
    <UserInfoContext.Provider
      value={{
        mainInfo,
        linkedinProfileLink,
        githubProfileLink,
        changeMainInfo,
        changeAdditionalInfo,
        skills,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
