import { useForm, FormProvider } from "react-hook-form";
import EmployeeNumberInput from "./EmployeeNumberInput";
import PasswordInput from "./PasswordInput";
import ErrorMessages from "./ErrorMessage";
import { postAgencyLogin } from "@/api/agency";
import { useUserStore } from "@/stores/useUserStore"; // Zustand User Store
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  employeeNumber: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      employeeNumber: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser); // Zustand 상태 업데이트 함수

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("로그인 시도:", data);

    const response = await postAgencyLogin(
      data.employeeNumber,
      data.password,
      "dealership"
    ); // 역할을 "dealership"으로 설정

    if (response) {
      console.log("로그인 성공!");

      // Zustand Store 업데이트
      setUser({
        id: response.memberId,
        name: response.name,
        email: response.email,
        role: "dealership", // 로그인한 역할
      });

      navigate("/upload");
    }
  };

  return (
    <div className="w-[346px]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmployeeNumberInput />
          <PasswordInput />
          <button
            type="submit"
            className={`w-full h-[56px] rounded-xl my-4 st1 text-white ${
              methods.formState.isValid ? "bg-secondary-500" : "bg-secondary-50"
            }`}
            disabled={!methods.formState.isValid}
          >
            로그인
          </button>
          <ErrorMessages />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
