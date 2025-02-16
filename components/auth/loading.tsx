import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-y-4 justify-center items-center">
      <Image
        src={"/logo.svg"}
        width={120}
        height={120}
        alt="logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
};
