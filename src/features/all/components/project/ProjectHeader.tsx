import Link from "next/link";

export default function ProjectHeader() {
    return <div className="border-t border-gray-600 py-5 grid grid-cols-2">
        <div className="flex">
            <p className="text-gray-400">2025</p>
            <div className="px-8">

                <Link className="text-2xl font-semibold animated-border" href="/projects/makrformelle">Makrformelle</Link>
            
            </div>
            <p>The panel optimizes cross-departmental workflows with modules for product management, warehouse operations and control of industrial knitting and paint machines.</p>
        </div>
        <div className="flex justify-end"><span className="text-gray-400">React.js</span></div>
    </div>
}