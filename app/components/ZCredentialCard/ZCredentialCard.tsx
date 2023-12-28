"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ZCredentialCardProps {
    title: string,
    logo: StaticImageData,
    alt: string,
    useLargeImage: boolean
    children: ReactNode
};

const ZCredentialCard: React.FC<ZCredentialCardProps> = ({ title, logo, alt, useLargeImage, children }) => {

    const size = useLargeImage ? 150 : 100;

    return (
        <>
            <div className="grid grid-cols-4 m-3 p-3 w-1/2 h-64 shadow-lg space-y-8 dark:bg-gray-700 rounded-md bg-gray-100">
                <div className="grid col-span-1 justify-self-center self-center items-center" style={{ width: '150px', height: '150px' }}>
                    <Image width={size} height={size} src={logo} alt={alt} />
                </div>
                <div className="col-span-3">
                    <h3 className="text-2xl">{title}</h3>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ZCredentialCard;