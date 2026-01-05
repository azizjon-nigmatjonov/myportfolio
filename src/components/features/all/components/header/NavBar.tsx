"use client";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons/List";
import { MyInfo } from "@/types/auth";

export default function NavBar({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
  return <nav>
    <ul className="flex gap-4">
      {myInfo.github_url && <li className="flex items-center gap-2 group">
        <Link target="_blank" href={myInfo.github_url || ''}>Github </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>}
      {myInfo.linkedin_url && <li className="flex items-center gap-2 group">
        <Link target="_blank" href={myInfo.linkedin_url || ''}>Linkedin </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>}
      {myInfo.resume_url && <li className="flex items-center gap-2 group">
        <Link target="_blank" href={myInfo.resume_url || ''}>Read.cv </Link>
        <ArrowRightIcon className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-in-out" />
      </li>}
    </ul>
  </nav>
}