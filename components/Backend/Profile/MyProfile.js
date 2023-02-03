import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
const MyProfile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h3 className="text-black fw-bolder">My Account</h3>
      <p className="text-black-50 py-1">Update your profile</p>
      <p className="text-black-50 py-1">{session?.user?.email}</p>
    </div>
  );
};

export default MyProfile;
