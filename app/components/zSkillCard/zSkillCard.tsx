"use client";
import Image from "next/image";

interface ZSkillCardProps {
  label: string,
  logo: string,
  alt: string,
  useLargeImage: boolean
};

const ZSkillCard: React.FC<ZSkillCardProps> = ({ label, logo, alt, useLargeImage }) => {

  const size = useLargeImage ? 150 : 100;

  return (
    <>
      <div className="m-3 p-3 flex flex-col w-48 h-64 justify-center items-center shadow-lg space-y-8 dark:bg-gray-700 rounded-md bg-gray-100">
        <div className="flex justify-center items-center" style={{ width: '150px', height: '150px' }}>
          <Image width={size} height={size} src={logo} alt={alt} />
        </div>
        <h3 className="text-2xl">{label}</h3>
      </div>
    </>
  )
}

export default ZSkillCard;