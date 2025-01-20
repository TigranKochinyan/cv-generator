import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExperienceType } from "../../../common/types";

type IFormInput = ExperienceType & { cases: string };

type EducationFormProps = {
  id: string;
};

export const ExperienceForm: FC<EducationFormProps> = ({ id }) => {
  const userInfo = useContext(UserInfoContext);

  const formDataValues = userInfo?.experiences.find((item) => item.id === id);

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const cases = data.cases.split("--\n");

    userInfo?.changeExperienceInfo({
      ...data,
      cases,
    });
  };

  useEffect(() => {
    const cases = formDataValues?.cases.join("--\n");

    reset({ ...formDataValues, cases });
  }, []);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5 mt-5 border-2 border-indigo-300 rounded-xl"
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="positionInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Position
          </label>

          <div className="mt-2">
            <input
              id="positionInput"
              {...register("position")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="companyInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Company
          </label>

          <div className="mt-2">
            <input
              id="companyInput"
              {...register("company")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="expDateInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Date
          </label>

          <div className="mt-2">
            <input
              id="expDateInput"
              {...register("date")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="periodInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Period
          </label>

          <div className="mt-2">
            <input
              id="periodInput"
              {...register("period")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="casesInput"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Job Cases
          </label>
          <textarea
            {...register("cases")}
            id="casesInput"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
          />
        </div>

        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};
