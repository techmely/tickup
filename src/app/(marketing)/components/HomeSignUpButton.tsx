"use client";

const HomeSignUpButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToSignUp = () => {
    router.push("/signup");
  };
  return (
    <Button
      type="button"
      className="relative h-[43px] bg-[#ffffff01] rounded-[9px] shadow-[0px_10px_25px_#7b68ee66] hover:bg-violet-600"
      onClick={navigateToSignUp}
    >
      Sign Up
    </Button>
  );
};

export default HomeSignUpButton;
