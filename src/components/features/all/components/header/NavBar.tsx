"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons/List";
import { MyInfo } from "@/types/auth";

export default function NavBar({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Collect additional links that will be in dropdown
  const additionalLinks = [
    myInfo.github_url && { name: "Github", url: myInfo.github_url },
    myInfo.linkedin_url && { name: "Linkedin", url: myInfo.linkedin_url },
    myInfo.resume_url && { name: "Read.cv", url: myInfo.resume_url },
  ].filter(Boolean) as Array<{ name: string; url: string }>;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav>
      <ul className="flex gap-4">
        {/* Always visible links */}
        <li className="flex items-center gap-2 group">
          <Link href="/experience">Experience </Link>
          <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
        </li>
        <li className="flex items-center gap-2 group">
          <Link href="/blog">Blog </Link>
          <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
        </li>

        {/* Additional links - visible on small screens, hidden in dropdown on xl+ */}
        {additionalLinks.map((link, index) => (
          <li key={index} className="hidden xl:flex items-center gap-2 group">
            <Link target="_blank" href={link.url}>{link.name} </Link>
            <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
          </li>
        ))}

        {/* Dropdown trigger and menu - only on xl+ */}
        {additionalLinks.length > 0 && (
          <li className="block xl:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 group"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              More
              <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[var(--background)] border border-gray-300 dark:border-gray-700 rounded-md shadow-lg py-2 min-w-[150px] z-50">
                {additionalLinks.map((link, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    href={link.url}
                    className="flex items-center gap-2 group px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
                  </Link>
                ))}
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}