"use client";

export default function IntroducingImage() {
    return <div className="mt-5 sm:mt-0 max-h-[85vh] overflow-hidden">
        <img src="https://framerusercontent.com/images/TTy0vkv0zZmRHic7ThXKOrJsBY.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
    </div>
}

export function ProductionImage() {
    return <div className="container">
        <div className="max-h-[85vh] overflow-hidden rounded-3xl">
            <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
        </div>
    </div>
}
export function GridImages() {
    return <div className="container">
        <div className="grid grid-cols-2 gap-5">
            <div className="max-h-[85vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[85vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[85vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
            <div className="max-h-[85vh] overflow-hidden rounded-3xl">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
            </div>
        </div>
    </div>
}

export function NavigatingImages() {
    return <div className="container">
        <div className="py-20">
            <div className="max-h-[85vh] overflow-hidden rounded-3xl relative">
                <img src="https://framerusercontent.com/images/D40RTJ3biUaNajstvRX5TZjK6g.png" alt="Makrformelle" className="w-full h-full object-cover object-center" />
                <div className="w-[100px] h-[100px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-full h-full">
                        {/* Black circle background */}
                        <div className="absolute inset-0 bg-black rounded-full"></div>
                        
                        {/* Spinning text container */}
                        <div className="absolute inset-0 hover:animate-spin transition-all duration-300">
                            <svg 
                                className="w-full h-full" 
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <path 
                                        id="circle" 
                                        d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                                    />
                                </defs>
                                <text className="fill-white text-xs font-medium uppercase">
                                    <textPath href="#circle" startOffset="0%">
                                        NEXT • PROJECT • NEXT • PROJECT
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}