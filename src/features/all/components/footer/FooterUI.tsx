"use client";
import { MyInfo } from "@/types/auth";
import Link from "next/link";

export default function FooterUI({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
    
    return <div className="container">
        <div className="lg:fixed bottom-0 flex justify-between py-5">
            {/* <Link href={`tel:${myInfo.phone}`}>{myInfo.phone}</Link> */}
            <Link href={`mailto:${myInfo.email}`}>{myInfo.email}</Link>
        </div>
    </div>
}