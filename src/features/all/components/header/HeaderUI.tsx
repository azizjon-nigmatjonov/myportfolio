"use client";
import NavBar from "./NavBar";

interface MyInfo {
  name?: string;
  profilePicture?: string;
}

export default function HeaderUI({ myInfo = {} }: { myInfo: MyInfo }) {

  const { name, profilePicture } = myInfo;
  return <div className="container sticky top-0 z-50">
    <div className="grid grid-cols-4 py-5">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>Tashkent <br /> Frontend Developer</p>
      </div>
      <NavBar />
      <div className="flex justify-end">
        {profilePicture && <img src={profilePicture} alt="avatar" width={40} height={40} className="w-[40px] h-[40px] rounded-full object-cover" />}
      </div>
    </div>
  </div>
}