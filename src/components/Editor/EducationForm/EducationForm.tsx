import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { EducationType } from "../../../common/types";

type IFormInput = EducationType;

type EducationFormProps = {
  id: string;
};

export const EducationForm: FC<EducationFormProps> = ({ id }) => {
  const userInfo = useContext(UserInfoContext);

  const formDataValues = userInfo?.educations.find((item) => item.id === id);

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("submit:data", data);

    userInfo?.changeEducationInfo({
      ...data,
      id,
    });
  };

  useEffect(() => {
    reset(formDataValues);
  }, []);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Title
          </label>

          <div className="mt-2">
            <input
              id="educationTitle"
              {...register("title")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="educationUniversity"
            className="block text-sm/6 font-medium text-gray-900"
          >
            University
          </label>

          <div className="mt-2">
            <input
              id="educationUniversity"
              {...register("university")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="educationDate"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Date
          </label>

          <div className="mt-2">
            <input
              id="educationDate"
              {...register("date")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="educationMajor"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Major
          </label>

          <div className="mt-2">
            <input
              id="educationMajor"
              {...register("major")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
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
