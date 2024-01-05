"use client";
import Image from "next/image";

interface ZSkillCardProps {
  label: string,
  className: string,
  logo: string,
  alt: string,
  useLargeImage: boolean
};

const ZSkillCard: React.FC<ZSkillCardProps> = ({ label, className, logo, alt, useLargeImage }) => {

  const size = useLargeImage ? 150 : 100;

  return (
    <>
      {/* <div className="p-3 flex flex-col w-48 h-64 justify-center items-center shadow-lg space-y-8 dark:bg-gray-700 rounded-md bg-gray-100"> */}
      <div className={`px-3 py-8 flex flex-col justify-center items-center shadow-lg dark:bg-gray-700 rounded-md bg-gray-100 ${className}`}>
        <div className="flex justify-center items-center" style={{ width: '80px', height: '80px' }}>
          <Image width={size} height={size} src={logo} alt={alt} />
        </div>
        <h3 className="text-2xl md:text-2xl lg:text-xl xl:text-md">{label}</h3>
      </div>
    </>
  )
}

export default ZSkillCard;