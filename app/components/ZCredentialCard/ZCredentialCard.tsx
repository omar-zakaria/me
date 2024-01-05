"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ZCredentialCardProps {
    title: string,
    className?: string,
    href?: string | undefined,
    logo: StaticImageData,
    alt: string,
    useLargeImage: boolean
    children: ReactNode
};

const ZCredentialCard: React.FC<ZCredentialCardProps> = ({ title, className, href, logo, alt, useLargeImage, children }) => {

    const size = 80;
    const mdSize = useLargeImage ? 150 : 100;

    return (
        <>
            <div className={`grid grid-cols-12 p-1 md:p-3 w-full h-36 md:h-48 shadow-lg md:gap-x-2 gap-y-2 md:gap-y-6 dark:bg-gray-700 rounded-md bg-gray-100 ${className}`}>
                <div className="block md:hidden flex col-span-4 justify-self-center self-center items-center" >
                    <Image width={size} height={size} src={logo} alt={alt} />
                </div>
                <div className="hidden md:block flex md:col-span-3 justify-self-center self-center items-center" >
                    <Image width={mdSize} height={size} src={logo} alt={alt} />
                </div>

                <div className="col-span-8 md:col-span-9 md:mt-6">
                    <h3 className="text-lg md:text-2xl"><a className="hover:underline" href={href}>{title}</a></h3>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ZCredentialCard;