import { FC, useContext, useEffect } from "react";
import { UserInfoContext } from "../../../context/UserInfoContext";
import { SubmitHandler, useForm } from "react-hook-form";

type AdditionalInfoFormProps = {
  additionalInfo: string;
};

type IFormInput = {
  text: string;
};

export const AdditionalInfoForm: FC<AdditionalInfoFormProps> = ({
  additionalInfo,
}) => {
  const userInfo = useContext(UserInfoContext);

  console.log(userInfo);

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("change:::submit Additional info");

    userInfo?.changeAdditionalInfo(data.text);
  };

  useEffect(() => {
    reset({ text: userInfo?.additionalInfo });
  }, []);

  return (
    <div className="ml-5 p-5 mt-5 border-2 border-indigo-300 rounded-xl">
      <form action="submit" onSubmit={handleSubmit(onSubmit)}>
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
        ></textarea>

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
