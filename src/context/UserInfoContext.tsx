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
  ExperienceType,
  MainInfoType,
} from "../common/types";
import { generateId } from "../common/utils";
import {
  INITIAL_DESIRED_POSITION_INFO,
  INITIAL_EDUCATION_INFO,
  INITIAL_EXPERIENCES,
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
  experiences: ExperienceType[];
  changeMainInfo: (data: MainInfoType) => void;
  changeAdditionalInfo: (text: string) => void;
  changeEducations: (data: EducationType[]) => void;
  changeEducationInfo: (data: EducationType) => void;
  changeExperienceInfo: (data: ExperienceType) => void;
  changeDesiredPositionInfo: (data: DesiredPositionType) => void;
  addEducationBlock: () => void;
  addExperienceBlock: () => void;
  changeSkills: (data: string[]) => void;
  changeLanguages: (data: string[]) => void;
  changeExperiences: (data: ExperienceType[]) => void;
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
  const [experiences, setExperiences] = useState<ExperienceType[]>(
    () => INITIAL_EXPERIENCES
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

  const changeExperienceInfo = useCallback(
    (data: ExperienceType) => {
      const updatedExperience: ExperienceType[] = experiences.map((item) => {
        if (item.id === data.id) {
          return data;
        } else {
          return item;
        }
      });

      setExperiences(updatedExperience);
    },
    [setEducations]
  );

  const changeExperiences = useCallback(
    (data: ExperienceType[]) => {
      setExperiences(data);
    },
    [setExperiences]
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

  const addExperienceBlock = useCallback(() => {
    const newBlock: ExperienceType = {
      date: "",
      id: generateId(),
      cases: [],
      company: `Company ${educations.length + 1}`,
      period: '',
      position: ''
    };

    setExperiences([...experiences, newBlock]);
  }, [setExperiences]);

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
      experiences,
      changeMainInfo,
      changeAdditionalInfo,
      changeEducations,
      changeEducationInfo,
      changeExperienceInfo,
      changeDesiredPositionInfo,
      addEducationBlock,
      addExperienceBlock,
      changeSkills,
      changeLanguages,
      changeExperiences
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
    experiences,
    changeMainInfo,
    changeAdditionalInfo,
    changeEducations,
    changeEducationInfo,
    changeExperienceInfo,
    changeDesiredPositionInfo,
    addEducationBlock,
    addExperienceBlock,
    changeSkills,
    changeLanguages,
    changeExperiences
  ]);

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
