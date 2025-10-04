"use client";

export default function ProblemStatement() {
    return <div className="container">
        <div className="py-20">
            <h3 className="pb-8 text-3xl font-semibold">Problem</h3>
            <p className="sm:text-[16px]">Admin Panel presented several complex technical challenges. The system needed to support multiple departments, including warehouse management and industrial machine control, while maintaining performance and scalability. One of the key issues was rendering large datasets.

                Another major challenge was the lack of reliable real-time data from industrial knitting and paint machines, which limited automation and visibility on the production floor. Additionally, backend APIs were often undocumented or incomplete, requiring careful testing and reverse-engineering for stable integration.

                Architecturally, the entire panel had to be built from scratch with a structure that could support future expansion and maintainability. The application also required a flexible, role-based access control system, including support for unauthenticated mobile devices used in warehouses. Efficient state management was critical due to nested and shared data across modules. Lastly, performance bottlenecks, such as unnecessary re-renders and heavy initial loads, had to be resolved to ensure a smooth user experience across all departments and devices.</p>
        </div>
    </div>
}

export function ProductionDetails() {
    return <div className="container">
        <div className="py-20 flex sm:space-x-20 space-x-0 flex-col sm:flex-row">
            <h3 className="text-3xl font-semibold whitespace-nowrap">Production <br /> technology in detail</h3>
            <p className="sm:text-[16px]">To deliver a high-quality streaming experience, I integrated a custom HLS video player using react-video-js-player and hls.js. To solve quality switch delays, I restructured the video API to deliver multiple resolutions within a single stream, ensuring smoother transitions.

                For content management, I implemented infinite scroll with pagination. SEO issues were resolved by optimizing page metadata, improving crawlability, and integrating Google Tag Manager.

                To improve performance, I applied code splitting, lazy loading, and React Query caching, significantly improving page load times and reducing redundant API calls.

                I also developed a Netflix-style multi-profile system. Profile switching required custom auth logic and frontend state sync to ensure data isolation and a seamless user experience.

                The platform was built from scratch using Next.js, Redux, React Query, MUI, SCSS, Tailwind CSS</p>
        </div>
    </div>
}