"use client";
import Link from "next/link";
import { ArrowRightIcon } from "../../../../assets/icons/List";

export default function NavBar() {
  return <nav>
    <ul className="flex gap-4">
      <li className="flex items-center gap-2 group">
        <Link target="_blank" href="https://github.com/azizjon-nigmatjonov">Github </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>
      <li className="flex items-center gap-2 group">
        <Link target="_blank" href="https://www.linkedin.com/in/azizjon-nigmatjonov/">Linkedin </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>
      <li className="flex items-center gap-2 group">
        <Link target="_blank" href="https://drive.google.com/file/d/1gZJRIGk0xwWJl1WBkiYd34Hcj_C_zmfp/view?usp=drive_link">Read.cv </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>
    </ul>
  </nav>
}