"use client";

import { Portfolio } from "@/types/portfolio";

export default function ProblemStatement({ portfolio }: { portfolio: Portfolio }) {
    return <div className="container">
        <div className="py-20">
            <h3 className="pb-8 text-3xl font-semibold">Problem</h3>
            <p className="sm:text-[16px]">{portfolio.problem_statement}</p>
        </div>
    </div>
}

export function ProductionDetails({ portfolio }: { portfolio: Portfolio }) {
    return <div className="container">
        <div className="py-20 flex sm:space-x-20 space-x-0 flex-col space-y-8 sm:space-y-0 sm:flex-row">
            <h3 className="text-3xl font-semibold whitespace-nowrap">Production <br /> technology in detail</h3>
            <p className="sm:text-[16px]">{portfolio.production_detailed_statment || portfolio.description}</p>
        </div>
    </div>
}