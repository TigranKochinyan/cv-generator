import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  DesiredPositionType,
  EducationType,
  MainInfoType,
} from "../common/types";
import { generateId } from "../common/utils";
import {
  INITIAL_DESIRED_POSITION_INFO,
  INITIAL_EDUCATION_INFO,
  INITIAL_LANGUAGES_INFO,
  INITIAL_MAIN_INFO,
  INITIAL_SKILLS,
  INITIAL_USER_ADDITIONAL_INFO,
} from "./constants";

export type UserInfoContextType = {
  mainInfo: MainInfoType;
  linkedinProfileLink?: string;
  githubProfileLink?: string;
  skills: string[];
  educations: EducationType[];
  additionalInfo: string;
  desiredPositionInfo: DesiredPositionType;
  languages: string[];
  changeMainInfo: (data: MainInfoType) => void;
  changeAdditionalInfo: (text: string) => void;
  changeEducations: (data: EducationType[]) => void;
  changeEducationInfo: (data: EducationType) => void;
  changeDesiredPositionInfo: (data: DesiredPositionType) => void;
  addEducationBlock: () => void;
  changeSkills: (data: string[]) => void;
  changeLanguages: (data: string[]) => void;
};

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export const UserInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mainInfo, setMainInfo] = useState<MainInfoType>(
    () => INITIAL_MAIN_INFO
  );
  const [desiredPositionInfo, setDesiredPositionInfo] =
    useState<DesiredPositionType>(() => INITIAL_DESIRED_POSITION_INFO);
  const [linkedinProfileLink, setLinkedinProfileLink] = useState("");
  const [githubProfileLink, setGithubProfileLink] = useState("");
  const [skills, setSkills] = useState<string[]>(() => INITIAL_SKILLS);
  const [educations, setEducations] = useState<EducationType[]>(
    INITIAL_EDUCATION_INFO
  );
  const [additionalInfo, setAdditionalInfo] = useState(
    INITIAL_USER_ADDITIONAL_INFO
  );
  const [languages, setLanguages] = useState<string[]>(
    () => INITIAL_LANGUAGES_INFO
  );

  const changeMainInfo = useCallback(
    (data: MainInfoType) => {
      setMainInfo(data);
    },
    [setMainInfo]
  );

  const changeEducations = useCallback(
    (data: EducationType[]) => {
      setEducations(data);
    },
    [setEducations]
  );

  const changeAdditionalInfo = useCallback(
    (text: string) => {
      setAdditionalInfo(text);
    },
    [setAdditionalInfo]
  );

  const changeEducationInfo = useCallback(
    (data: EducationType) => {
      const updatedEducations: EducationType[] = educations.map((item) => {
        if (item.id === data.id) {
          return data;
        } else {
          return item;
        }
      });

      setEducations(updatedEducations);
    },
    [setEducations]
  );

  const addEducationBlock = useCallback(() => {
    const newBlock: EducationType = {
      date: "",
      id: generateId(),
      major: "",
      title: `Education ${educations.length + 1}`,
      university: "",
    };

    setEducations([...educations, newBlock]);
  }, [setEducations]);

  const changeDesiredPositionInfo = useCallback(
    (info: DesiredPositionType) => {
      setDesiredPositionInfo(info);
    },
    [setDesiredPositionInfo]
  );

  const changeSkills = useCallback(
    (data: string[]) => {
      setSkills(data);
    },
    [setSkills]
  );

  const changeLanguages = useCallback(
    (data: string[]) => {
      setLanguages(data);
    },
    [setLanguages]
  );

  const contextValue: UserInfoContextType = useMemo(() => {
    return {
      mainInfo,
      linkedinProfileLink,
      githubProfileLink,
      skills,
      educations,
      additionalInfo,
      desiredPositionInfo,
      languages,
      changeMainInfo,
      changeAdditionalInfo,
      changeEducations,
      changeEducationInfo,
      changeDesiredPositionInfo,
      addEducationBlock,
      changeSkills,
      changeLanguages,
    };
  }, [
    mainInfo,
    linkedinProfileLink,
    githubProfileLink,
    skills,
    educations,
    additionalInfo,
    desiredPositionInfo,
    languages,
    changeMainInfo,
    changeAdditionalInfo,
    changeEducations,
    changeEducationInfo,
    changeDesiredPositionInfo,
    addEducationBlock,
    changeSkills,
    changeLanguages,
  ]);

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
