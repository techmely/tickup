import { SignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = (props) => {
  return <SignUp redirectUrl="/dashboard" />;
};

export default SignUpPage;
