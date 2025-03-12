import { useFormContext } from "react-hook-form";

const EmployeeNumberInput = () => {
  const { register } = useFormContext();

  return (
    <div className="relative flex items-center border-[1px] border-grayScale-100 border-solid h-[51px] rounded-[8px] mb-1">
      <input
        className="bg-grayScale-50 placeholder-gray-500 rounded-[7px] text-gray-800 w-full h-full b4 px-4 focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
        id="employeeNumber"
        type="text"
        placeholder={"사원번호"}
        {...register("employeeNumber", {
          required: true,
          pattern: {
            value: /^[0-9]+$/,
            message: "사원번호 또는 비밀번호가 잘못 되었습니다.",
          },
        })}
      />
    </div>
  );
};

export default EmployeeNumberInput;
