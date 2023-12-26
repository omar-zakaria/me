'use client';
import csharp_logo from '@/assets/c_sharp.svg';
import dotnet_logo from '@/assets/dotnet.svg';
import mongo_logo from '@/assets/mongodb.svg';
import nodejs_logo from '@/assets/nodejs_logo.svg';
import javascript_logo from '@/assets/javascript_logo.svg';
import typescript_logo from "@/assets/typescript_logo.svg";
import aws_logo from "@/assets/aws_logo.svg";
import azure_logo from "@/assets/azure_logo.svg";
import vue_logo from "@/assets/vue_logo.svg";
import react_logo from "@/assets/react_logo.svg";
import sql_logo from "@/assets/sql_logo.svg";
import ZSkillCard from './components/zSkillCard/zSkillCard';

const skills = [
  { label: "C#", logo: csharp_logo, alt: "C# Logo", useLargeImage: false },
  { label: ".NET", logo: dotnet_logo, alt: ".NET Logo", useLargeImage: false  },
  { label: "Vue", logo: vue_logo, alt: "Vue Logo", useLargeImage: false  },
  { label: "React", logo: react_logo, alt: "React Logo", useLargeImage: false  },
  { label: "Node.Js", logo: nodejs_logo, alt: "Node.Js Logo", useLargeImage: true  },
  { label: "AWS", logo: aws_logo, alt: "AWS Logo", useLargeImage: true  },
  { label: "Azure", logo: azure_logo, alt: "Azure Logo", useLargeImage: false  },
  { label: "Javascript", logo: javascript_logo, alt: "Javascript Logo", useLargeImage: false  },
  { label: "Typescript", logo: typescript_logo, alt: "Typescript Logo", useLargeImage: false  },
  { label: "MongoDb", logo: mongo_logo, alt: "MongoDb Logo", useLargeImage: true  },
  { label: "SQL", logo: sql_logo, alt: "SQL Logo", useLargeImage: true  },
]

const skillCards = skills.map(x => ZSkillCard({ ...x }))

export default function Page() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap my-14">
          {skillCards}
        </div>
      </div>
    </>
  )
}
