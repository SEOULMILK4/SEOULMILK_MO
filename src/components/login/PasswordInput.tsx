import { useFormContext } from "react-hook-form";

const PasswordInput = () => {
  const { register } = useFormContext();

  return (
    <div className="relative flex items-center w-full border-[1px] border-grayScale-100 border-solid h-[51px] rounded-[8px]">
      <input
        className="bg-grayScale-50 placeholder-gray-500 rounded-[7px] text-gray-800 w-full h-full b4 px-4 focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
        type={"password"}
        id="password"
        placeholder={"비밀번호"}
         {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "사원번호 또는 비밀번호가 잘못 되었습니다.",
          },
          maxLength: {
            value: 16,
            message: "사원번호 또는 비밀번호가 잘못 되었습니다.",
          },
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
            message: "사원번호 또는 비밀번호가 잘못 되었습니다.",
          },
        })}
      />
    </div>
  );
};

export default PasswordInput;
