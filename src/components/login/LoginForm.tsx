import { useForm, FormProvider } from "react-hook-form";
import EmployeeNumberInput from "./EmployeeNumberInput";
import PasswordInput from "./PasswordInput";
import ErrorMessages from "./ErrorMessage";
import { postAgencyLogin } from "@/api/agencyLogin";
import { useUserStore } from "@/stores/useUserStore"; 
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
  const setUser = useUserStore((state) => state.setUser); 

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("로그인 시도:", data);

    const response = await postAgencyLogin(
      data.employeeNumber,
      data.password,
      "dealership"
    ); 

    if (response) {
      console.log("로그인 성공!");

      
      setUser({
        id: response.memberId,
        name: response.name,
        email: response.email,
        role: "dealership", 
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
