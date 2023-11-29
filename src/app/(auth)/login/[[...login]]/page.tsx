import { SignIn } from "@clerk/nextjs";

const LoginPage: React.FC = (props) => {
  return <SignIn redirectUrl="/dashboard" />;
};

export default LoginPage;
