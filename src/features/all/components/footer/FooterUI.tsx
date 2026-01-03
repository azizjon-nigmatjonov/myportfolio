"use client";
import { MyInfo } from "@/types/auth";
import Link from "next/link";

export default function FooterUI({ myInfo = {} as MyInfo }: { myInfo: MyInfo }) {
    const formatPhoneNumber = (phone: string): string => {
        // Remove any non-digit characters
        const digits = phone.replace(/\D/g, '');
        // Format as XXX XX XXX XX XX (3-2-3-2-2)
        if (digits.length >= 12) {
            return `${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
        }
        // Fallback to original if format doesn't match
        return phone;
    };

    const formattedPhone = formatPhoneNumber(myInfo.phone);

    return <div className="lg:fixed bottom-0 left-0 w-full py-5">
        <div className="container flex justify-between lg:flex-row flex-col gap-y-3 lg:gap-y-0">
            <Link href={`tel:${myInfo.phone}`}>+{formattedPhone}</Link>
            <Link href={`mailto:${myInfo.email}`}>{myInfo.email}</Link>
        </div>
    </div>
}