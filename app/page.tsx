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
import poly_logo from "@/assets/polymtl.png";
import vanier_logo from "@/assets/vanier_logo.png";
import coursera_logo from "@/assets/coursera_logo.svg";
import aws_logo2 from "@/assets/aws_logo.jpg";

import profile_photo from "@/assets/profile.jpeg";
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaArrowCircleRight } from "react-icons/fa";
import ZSkillCard from "@/components/ZSkillCard/ZSkillCard";
import ZCredentialCard from './components/ZCredentialCard/ZCredentialCard';
import Image from 'next/image';
import ZToggle from './components/ZToggle/ZToggle';
import ZModal from './components/ZModal/ZModal';
import ZContactForm from './components/ZContactForm/ZContactForm';

import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
// import ZBubbleCanvas from './components/ZBubbleCanvas/ZBubbleCanvsas';

const skills = [
  { label: "C#", logo: csharp_logo, alt: "C# Logo", useLargeImage: false },
  { label: ".NET", logo: dotnet_logo, alt: ".NET Logo", useLargeImage: false },
  { label: "Vue", logo: vue_logo, alt: "Vue Logo", useLargeImage: false },
  { label: "React", logo: react_logo, alt: "React Logo", useLargeImage: false },
  { label: "Node.Js", logo: nodejs_logo, alt: "Node.Js Logo", useLargeImage: true },
  { label: "AWS", logo: aws_logo, alt: "AWS Logo", useLargeImage: true },
  { label: "Azure", logo: azure_logo, alt: "Azure Logo", useLargeImage: false },
  { label: "Javascript", logo: javascript_logo, alt: "Javascript Logo", useLargeImage: false },
  { label: "Typescript", logo: typescript_logo, alt: "Typescript Logo", useLargeImage: false },
  { label: "MongoDb", logo: mongo_logo, alt: "MongoDb Logo", useLargeImage: true },
  { label: "SQL", logo: sql_logo, alt: "SQL Logo", useLargeImage: true },
]

const skillCards = skills.map(x => ZSkillCard({ ...x }))

const startingYear = 2015;
const yearsOfExperience = (new Date()).getFullYear() - startingYear;


export default function Page() {
  const [isEmailMeModalOpen, setIsEmailMeModalOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  function handleEmailMeClick() {
    setIsEmailMeModalOpen(true);
  }

  return (
    <>
      <div className="p-2 grid grid-cols-6">
        <div className="justify-self-end col-start-6">
          <ZToggle id="dark-mode-toggle" label="Dark Mode" checked={isDarkMode} updateFunc={() => setIsDarkMode(!isDarkMode)} />
        </div>
      </div>
      <div className="p-5 grid grid-cols-6 gap-3">
        <div id="profile-card" className="col-span-3 grid grid-cols-3 shadow-lg h-80 rounded-lg px-4 py-8 dark:bg-gray-700 bg-gray-100">
          {/* <!-- Photo Section --> */}
          <div className="col-span-1">
            <Image src={profile_photo} alt="Profile Photo" className="rounded-full w-full h-auto" />
          </div>

          {/* <!-- Information Section --> */}
          <div className="col-span-2 ml-4">
            <h2 className="text-2xl font-semibold">Omar Zakaria</h2>
            <p className="text-lg">Full-Stack Software Developer</p>
            <p className="text-lg mb-6">{yearsOfExperience}+ years of experience</p>
            {/* <p className="flex space-x-1 underline"><Image src={linkedin_icon} alt="LinkedIn logo" height="17" width="17"></Image><a href="https://www.linkedin.com/in/omar-zakaria/">LinkedIn</a></p> */}
            <p className="text-lg flex items-center hover:underline cursor-pointer">
              <FaLinkedin />
              <a target='_blank' className="ml-2 mr-3" href="https://www.linkedin.com/in/omar-zakaria/">LinkedIn</a>
              <FaArrowCircleRight />
            </p>
            <p className="text-lg flex items-center hover:underline cursor-pointer">
              <MdEmail />
              <a className="ml-2 mr-3" onClick={handleEmailMeClick}>Email me</a>
              <FaArrowCircleRight />
            </p>
            {/* <!-- More rows of information here --> */}
          </div>
        </div>
        <div id="profile-card" className="col-span-3 grid grid-cols-3 shadow-lg rounded-lg px-4 py-8 dark:bg-gray-700 bg-gray-100">
          <div className="col-span-3">
            <h2 className="text-2xl font-semibold pb-2">About Me</h2>
            Full-stack developer with 8+ years of experience in C# .NET and Javascript/Typescript. Skilled in Node.js, Vue.js, and agile methodologies. Passionate about innovation and all aspects of business. Strong communication and collaboration skills with an excellent business acumen as well as technical awareness.
            <ul className='list-disc pl-5 pt-2'>
              <li>Strong communication and collaboration skills</li>
              <li>Organized and professional</li>
              <li>Excellent business acumen as well as technical awareness</li>
              <li>Positive, practical, and flexible character</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="credentials-section" className="p-5">
        <h2 className="text-3xl font-bold text-center mb-6">Education and Certificates</h2>
        <div className="grid grid-cols-2 gap-3">
          <ZCredentialCard title='École Polytechnique de Montréal' href="https://www.polymtl.ca/" alt='École Polytechnique logo' logo={poly_logo} useLargeImage={false} >
            <p className="text-lg">Bachelor's in Software Engineering</p>
            <p className="text-lg">2011-2015</p>
          </ZCredentialCard>
          <ZCredentialCard title='Machine Learning Specialization' href="https://www.coursera.org/account/accomplishments/specialization/certificate/5RA34NUFWY3G" alt='Coursera logo' logo={coursera_logo} useLargeImage={false} >
            <p className="text-lg">Coursera</p>
            <p className="text-lg">Issued 2023</p>
          </ZCredentialCard>
          <ZCredentialCard title='Vanier College' href="https://www.vaniercollege.qc.ca/" alt='Vanier College logo' logo={vanier_logo} useLargeImage={false} >
            <p className="text-lg">D.E.C. Pure and Applied Sciences</p>
            <p className="text-lg">2008-2011</p>
          </ZCredentialCard>
          <ZCredentialCard title='AWS Certified Developer - Associate' alt='AWS logo' logo={aws_logo2} useLargeImage={false} >
            <p className="text-lg">Amazon</p>
            <p className="text-lg">Issued November 2023</p>
            <p className="text-lg">Credential ID 5RA34NUFWY3G</p>
          </ZCredentialCard>
        </div>
      </div>
      <div id="skills-section" className="p-5">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap">
          {skillCards}
        </div>
      </div>
      <ZModal open={isEmailMeModalOpen} setOpen={setIsEmailMeModalOpen} title='Contact Me'>
        <ZContactForm />
      </ZModal>
      {/* <div id="skills-section" className="p-5">
        <h2 className="text-3xl font-bold text-center mb-6">Buzzwords map</h2>
          <ZBubbleCanvas />
      </div> */}
    </>
  )
}
