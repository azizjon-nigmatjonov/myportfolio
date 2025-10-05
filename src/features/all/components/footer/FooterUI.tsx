"use client";
import Link from "next/link";

export default function FooterUI() {
    return <div className="container">
        <div className="lg:fixed bottom-0 flex justify-between py-5">
            <Link href="mailto:aziz.nigmatjonov8@gmail.com">aziz.nigmatjonov8@gmail.com</Link>
        </div>
    </div>
}