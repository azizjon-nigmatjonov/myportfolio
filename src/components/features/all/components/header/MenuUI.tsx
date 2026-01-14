"use client";
import Link from "next/link";
import { ArrowRightIcon, CloseIcon } from "@/assets/icons/List";

interface MenuUIProps {
  onClose?: () => void;
  profilePicture?: string;
}

export default function MenuUI({ onClose, profilePicture }: MenuUIProps) {
  const menuItems = [
    { name: "Experience", href: "/experience", icon: "💼" },
    { name: "Telegram", href: "https://t.me/aziz_nodirovich", icon: "📱" },
    { name: "Linkedin", href: "https://linkedin.com/in/azizjon-nigmatjonov", icon: "💼" },
    { name: "Read.cv", href: "https://drive.google.com/file/d/1gZJRIGk0xwWJl1WBkiYd34Hcj_C_zmfp/view?usp=drive_link", icon: "📄" },
    { name: "Email", href: "mailto:aziz.nigmatjonov7@gmail.com", icon: "✉️" }
  ];

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        {/* Profile Picture */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          {profilePicture ? (
            <img 
              src={profilePicture} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-xl">
              👤
            </div>
          )}
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
        >
          <CloseIcon/>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
        {menuItems.map((item, index) => {
          const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:");
          const MenuItemContent = (
            <>
              <span className="text-2xl">{item.icon}</span>
              <span className="text-2xl font-medium">{item.name}</span>
              <ArrowRightIcon 
                fill="white" 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              />
            </>
          );

          if (isExternal) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-gray-300 transition-colors duration-200 group"
              >
                {MenuItemContent}
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={item.href}
              onClick={onClose}
              className="flex items-center space-x-4 text-white hover:text-gray-300 transition-colors duration-200 group"
            >
              {MenuItemContent}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-6">
        <p className="text-white text-sm">© 2025</p>
      </div>
    </div>
  );
}