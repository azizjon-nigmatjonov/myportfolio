"use client";
import { useState } from "react";
import NavBar from "./NavBar";
import { ArrowRightIcon, CloseIcon } from "@/assets/icons/List";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MyInfo {
    name?: string;
    profilePicture?: string;
}

export default function HeaderInnerUI({ myInfo = {}, url }: { myInfo: MyInfo, url: string }) {

    const router = useRouter();
    const { name } = myInfo;

    const handleNavigateHome = () => {
        router.push("/");
    }


    return (
        <>
            <div className="container sticky top-0 z-50">
                <div className="flex justify-between sm:grid grid-cols-4 py-5">
                    <div onClick={handleNavigateHome}>
                        <h1>{name}</h1>
                    </div>
                    <div className="gap-x-2 hidden sm:flex">
                        <Link href={url || 'undefined'}>Laung Project</Link>
                        <ArrowRightIcon className="rotate-[-45deg]" />
                    </div>
                    <div className="hidden sm:block"></div>
                    <div className="flex justify-end">
                        <button onClick={handleNavigateHome} className="cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}