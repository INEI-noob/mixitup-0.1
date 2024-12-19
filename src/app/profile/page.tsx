"use client";  // This marks the file as a client-side component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";  // Correct import for App Router
import { FC } from "react";

const ProfilePage: FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Handle loading state
  if (status === "loading") {
    return <div>Loading...</div>;  // Optionally display a loading spinner
  }

  // If no session, redirect to sign-in page
  if (!session) {
    router.push("/signin");  // Adjust to your actual sign-in page path
    return null;  // Prevent rendering the rest of the page
  }

  // Profile content when the user is logged in
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user?.name}!</p>
      {/* Render additional profile info here */}
    </div>
  );
};

export default ProfilePage;
