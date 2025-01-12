import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { DesiredPositionType } from "../../../common/types";

type DesiredPositionFormProps = {
  additionalInfo?: string;
};

type IFormInput = DesiredPositionType;

export const DesiredPositionForm: FC<DesiredPositionFormProps> = ({
  additionalInfo,
}) => {
  const userInfo = useContext(UserInfoContext);

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    userInfo?.changeDesiredPositionInfo(data);
  };

  useEffect(() => {
    reset({
      busyness: userInfo?.desiredPositionInfo.busyness,
      desiredPosition: userInfo?.desiredPositionInfo.desiredPosition,
      specializations: userInfo?.desiredPositionInfo.specializations,
      workSchedule: userInfo?.desiredPositionInfo.workSchedule,
    });
  }, []);

  return (
    <div className="ml-5 p-5 mt-5 border-2 border-indigo-300 rounded-xl">
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="desiredPosition"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Desired Position
          </label>
          <div className="mt-2">
            <input
              id="desiredPosition"
              {...register("desiredPosition")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="specializations"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Specializations
          </label>
          <div className="mt-2">
            <input
              id="specializations"
              {...register("specializations")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="busyness"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Busyness
          </label>
          <div className="mt-2">
            <input
              id="busyness"
              {...register("busyness")}
              type="text"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="workSchedule"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Work Schedule
          </label>
          <div className="mt-2">
            <input
              id="workSchedule"
              {...register("workSchedule")}
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
