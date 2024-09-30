import React from "react";

export type ProfileProps = {
  name: string;
};
function Profile({ name }: ProfileProps) {
  return <div>Profile component, Name is {name}</div>;
}

export default Profile;
