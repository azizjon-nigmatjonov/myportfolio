"use client";
import { memo } from "react";
import Image from "next/image";

interface AboutMeData {
  title: string;
  content: string;
  image?: string;
}

interface AboutMeSectionProps {
  data: AboutMeData;
}

const AboutMeSection = memo(function AboutMeSection({ data }: AboutMeSectionProps) {
  return (
    <section className="scroll-mt-20" id="about">
      <div className="grid sm:grid-cols-4 gap-8 sm:gap-12">
        <div className="sm:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-semibold">{data.title}</h2>
        </div>
        
        <div className="sm:col-span-3">
          <div className="space-y-6">
            {data.image && (
              <div className="relative w-full sm:w-64 h-64 sm:h-80 rounded-lg overflow-hidden mb-6">
                <Image
                  src={data.image}
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 256px"
                  priority
                  unoptimized={data.image.startsWith('http') && !data.image.includes('i.ibb.co')}
                />
              </div>
            )}
            
            <div className="max-w-none">
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMeSection;
