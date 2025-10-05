import Link from "next/link";

export default function ProjectHeader() {
    return <div className="container">
        <div className="border-t border-gray-600 py-5 flex flex-col sm:flex-row space-y-5 lg:space-y-0 lg:grid lg:grid-cols-4">
            <div className="sm:flex space-y-2 sm:space-y-0">
                <p className="text-gray-400">2025</p>
                <div className="sm:pl-5">
                    <Link className="text-2xl font-semibold animated-border" href="/project/makrformelle">Makrformelle</Link>
                </div>
            </div>
            <div className="sm:px-5 lg:px-0">
                <p>The panel optimizes cross-departmental workflows with modules for product management, warehouse operations and control of industrial knitting and paint machines.</p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="flex sm:justify-end"><span className="text-gray-400 text-[12px] sm:text-base">React.js</span></div>
        </div>
    </div>
}