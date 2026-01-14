"use client";
import { useState } from "react";
import NavBar from "./NavBar";
import MenuUI from "./MenuUI";
import { MenuIcon } from "@/assets/icons/List";
import { MyInfo } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function HeaderUI({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name, profilePicture } = myInfo;
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigateHome = () => {
    router.push("/");
  }

  return (
    <>
      <div className="container sticky top-0 z-50">
        {/* Mobile layout - below 640px */}
        <div className="sm:hidden flex items-center justify-between py-5">
          <div className="cursor-pointer" onClick={handleNavigateHome}>
            <h1 className="font-semibold">{name}</h1>
          </div>
          <div>
            <button onClick={handleMenuToggle}>
              <MenuIcon className="cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Desktop layout - 640px and above */}
        <div className="hidden sm:grid grid-cols-4 py-5">
          <div className="cursor-pointer" onClick={handleNavigateHome}>
            <h1>{name}</h1>
          </div>
          <div>
            <p>Tashkent <br /> Software Engineer</p>
          </div>
          <NavBar myInfo={myInfo || {} as MyInfo} />
          <div className="flex justify-end">
            {profilePicture && <img src={profilePicture} alt="avatar" width={40} height={40} className="w-[40px] h-[40px] rounded-full object-cover" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <MenuUI 
          onClose={handleMenuClose}
          profilePicture={profilePicture}
        />
      )}
    </>
  );
}