import { authOptions } from "@/helpers/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard Home",
  description: "welcome to the dashboard home page",
}

const DashboardHomePage = async() => {

  const session = await getServerSession(authOptions);


  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-2">
      <figure>
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={100}
          height={100}
          className="rounded-full"
        />
      </figure>
      <h1 className="text-4xl font-bold">Welcome {session?.user?.name} !</h1>
      <p className=" text-xl">{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
