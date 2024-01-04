'use client';
import Image from 'next/image';

interface ZProfileCardProps {
    title: string,
    profileImageSrc: any,
    children?: any
}

const ZProfileCard: React.FC<ZProfileCardProps> = ({ title, profileImageSrc, children }) => {
    return (<div id="profile-card" className="col-span-3 grid grid-cols-3 shadow-lg rounded-lg px-4 py-8 dark:bg-gray-700 bg-gray-100">
        {/* <!-- Photo Section --> */}
        <div className="col-span-1">
            <Image src={profileImageSrc} alt="Profile Image" className="rounded-full w-full h-auto" />
        </div>

        {/* <!-- Information Section --> */}
        <div className="col-span-2 ml-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {children}
        </div>
    </div>)
}

export default ZProfileCard;