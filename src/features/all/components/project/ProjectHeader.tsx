import Link from "next/link";
import dayjs from "dayjs";
import { Portfolio } from "@/types/portfolio";
export default function ProjectHeader({ portfolio = {} as Portfolio }: { portfolio: Portfolio }) {
    return <div className="container">
        <div className="border-t border-gray-600 py-5 flex flex-col sm:flex-row space-y-5 lg:space-y-0 lg:grid lg:grid-cols-4">
            <div className="sm:flex space-y-2 sm:space-y-0">
                <p className="text-gray-400">{dayjs(portfolio.created_date).format('YYYY')}</p>
                <div className="sm:pl-5">
                    <Link className="text-2xl font-semibold animated-border" href={`/project/${portfolio.id}`}>{portfolio.title}</Link>
                </div>
            </div>
            <div className="sm:px-5 lg:px-0">
                <p>{portfolio.description}</p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="flex sm:justify-end"><span className="text-gray-400 text-[12px] sm:text-base">{portfolio.tool}</span></div>
        </div>
    </div>
}