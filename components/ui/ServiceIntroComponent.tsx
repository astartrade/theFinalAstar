import React from 'react';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';
import { poppins } from '@/config/fonts';

type ServiceIntroComponentProps = {
  title: string;
  description: string;
  url?: string;
  color?: string;
};

const ServiceIntroComponent: React.FC<ServiceIntroComponentProps> = ({
  title,
  description,
  url = '/services',
  color = 'lime'
}) => {
  return (
    <div
      className={`rounded-3xl bg-neutral-100 hover:bg-${color}-300/30 p-4 md:p-8 aspect-square md:aspect-video flex flex-col justify-center items-start border border-neutral-300 space-y-2 relative`}
      data-scroll
      data-scroll-speed={0.1}
    >
      <div className="w-full text-lg flex justify-between items-center">
        <div className="text-3xl">{title}</div>
        <div className={`bg-${color}-600 rounded-full w-8 aspect-square flex justify-center items-center absolute top-2 right-2`}>
          <Link href={url}>
            <LucideArrowUpRight className="text-white" />
          </Link>
        </div>
      </div>
      <div className={`${poppins.className} font-light line-clamp-3`}>
        {description}
      </div>
      <div>
        <Link href={url} className={`hover:text-${color}-600`}>
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default ServiceIntroComponent;
