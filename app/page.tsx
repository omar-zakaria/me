'use client';
import Image from 'next/image';
import csharp_logo from '@/assets/c_sharp.svg';

const skills = [
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
  { label: "C#", logo: csharp_logo, alt: "C# Logo" },
]

function SkillCard({ label, logo, alt }) {
  return (
    <>
      <div className="p-3 flex flex-col w-48 h-64 justify-center items-center shadow-md space-y-8">
        <Image width="100" height="100" src={logo} alt={alt} />
        <h3 className="text-2xl font-bold">{label}</h3>
      </div>
    </>
  )
}

const skillCards = skills.map(x => SkillCard({ ...x }))

export default function Page() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="flex space-x-4">
          {skillCards}
        </div>
      </div>
    </>
  )
}
