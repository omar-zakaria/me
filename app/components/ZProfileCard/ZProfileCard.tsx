'use client';
import Image from 'next/image';

interface ZProfileCardProps {
    title: string,
    image?: any,
    className: string,
    children?: any
}

const ZProfileCard: React.FC<ZProfileCardProps> = ({ title, image, className, children }) => {
    return (<div id="profile-card" className={`grid grid-cols-12 shadow-lg rounded-lg px-4 py-8 dark:bg-gray-700 bg-gray-100 ${className}`}>
        {/* <!-- Photo Section --> */}
        {image &&
            <div className="col-span-12 sm:col-span-6 xl:col-span-4 mb-5 md:mb-0 flex justify-center">
                <Image src={image} alt="Profile Image" className="rounded-full w-60  h-auto" />
            </div>
        }

        {/* <!-- Information Section --> */}
        <div className={`ml-4 ${image ? 'col-span-12 sm:col-span-6 xl:col-span-8 ' : 'col-span-12 md:col-span-12 '}`}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            {children}
        </div>
    </div>)
}

export default ZProfileCard;