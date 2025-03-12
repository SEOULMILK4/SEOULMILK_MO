import { useForm, FormProvider } from "react-hook-form";
import EmployeeNumberInput from "./EmployeeNumberInput";
import PasswordInput from "./PasswordInput";
import ErrorMessages from "./ErrorMessage";

interface LoginFormInputs {
  employeeId: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      employeeId: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("로그인 시도:", data);
  };

  return (
    <div className="w-[346px]"> 
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmployeeNumberInput />
          <PasswordInput />
          <button
            type="submit"
            className={`w-full h-[56px] rounded-xl  my-4 st1 text-white ${
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
