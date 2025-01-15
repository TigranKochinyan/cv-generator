import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  skills: string;
};

export const SkillsAndLanguagesForm: FC = () => {
  const userInfo = useContext(UserInfoContext);

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const skillsData = data.skills.split(", ");

    userInfo?.changeSkills(skillsData);
  };

  useEffect(() => {
    const skillsFormatted = userInfo?.skills.join(", ");

    reset({
      skills: skillsFormatted,
    });
  }, []);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 mt-5 border-2 border-indigo-300 rounded-xl"
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="skillsInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Skills
          </label>
          <textarea
            {...register("skills")}
            id="skillsInput"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
          />
        </div>

        <button
          type="submit"
          className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};
