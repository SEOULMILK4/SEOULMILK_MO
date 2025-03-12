import LoginForm from "@/components/login/LoginForm";

function LoginPage() {
  return (
    <div className="center-login flex-col">
      <img src="/logo.svg" alt="서울우유" className="mb-[53px]"/>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
