import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      This is a screen for Authenticated users only
      <div className="">
        <UserButton />
      </div>
    </div>
  );
}
