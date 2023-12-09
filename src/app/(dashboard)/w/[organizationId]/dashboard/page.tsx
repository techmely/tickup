import { currentUser } from "@clerk/nextjs/server";

const DashboardPage: React.FC = async () => {
  const user = await currentUser();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl">Dashboard Page</h1>
      <p className="text-base">
        {JSON.stringify({ email: user?.emailAddresses, name: user?.username })}
      </p>
      {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="User" />}
    </div>
  );
};

export default DashboardPage;
