import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
  text: string;
};

export const AdditionalInfoForm: FC = () => {
  const userInfo = useContext(UserInfoContext);

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    userInfo?.changeAdditionalInfo(data.text);
  };

  useEffect(() => {
    reset({ text: userInfo?.additionalInfo });
  }, []);

  return (
    <div className="px-5">
      <form action="submit" onSubmit={handleSubmit(onSubmit)} className="p-5 mt-5 border-2 border-indigo-300 rounded-xl">
        <label
          htmlFor="additionalInfoInput"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Additional Info
        </label>
        <textarea
          {...register("text")}
          id="additionalInfoInput"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        />

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
