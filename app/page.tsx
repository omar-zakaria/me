'use client';
import csharp_logo from '@/assets/c_sharp.svg';
import dotnet_logo from '@/assets/dotnet.svg';
import mongo_logo from '@/assets/mongodb.svg';
import nodejs_logo from '@/assets/nodejs_logo.svg';
import javascript_logo from '@/assets/javascript_logo.svg';
import typescript_logo from '@/assets/typescript_logo.svg';
import aws_logo from '@/assets/aws_logo.svg';
import azure_logo from '@/assets/azure_logo.svg';
import vue_logo from '@/assets/vue_logo.svg';
import react_logo from '@/assets/react_logo.svg';
import sql_logo from '@/assets/sql_logo.svg';
import poly_logo from '@/assets/polymtl.png';
import vanier_logo from '@/assets/vanier_logo.png';
import coursera_logo from '@/assets/coursera_logo.svg';
import aws_logo2 from '@/assets/aws_logo.jpg';

import profile_photo from '@/assets/profile.jpeg';
import { FaLinkedin, FaArrowCircleRight } from 'react-icons/fa';
import ZSkillCard from '@/components/ZSkillCard/ZSkillCard';
import ZCredentialCard from './components/ZCredentialCard/ZCredentialCard';
import ZToggle from './components/ZToggle/ZToggle';
import ZModal from './components/ZModal/ZModal';
import ZContactForm from './components/ZContactForm/ZContactForm';

import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import ZProfileCard from './components/ZProfileCard/ZProfileCard';
import ZButton, { SizeType, VariantType } from './components/ZButton/ZButton';
import ZInformationBox from './components/ZInformationBox/ZInformationBox';

const skills = [
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'C#',
    logo: csharp_logo,
    alt: 'C# Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: '.NET',
    logo: dotnet_logo,
    alt: '.NET Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'Vue',
    logo: vue_logo,
    alt: 'Vue Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'React',
    logo: react_logo,
    alt: 'React Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'Node.Js',
    logo: nodejs_logo,
    alt: 'Node.Js Logo',
    useLargeImage: true,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'AWS',
    logo: aws_logo,
    alt: 'AWS Logo',
    useLargeImage: true,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'Azure',
    logo: azure_logo,
    alt: 'Azure Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'Javascript',
    logo: javascript_logo,
    alt: 'Javascript Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'Typescript',
    logo: typescript_logo,
    alt: 'Typescript Logo',
    useLargeImage: false,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'MongoDb',
    logo: mongo_logo,
    alt: 'MongoDb Logo',
    useLargeImage: true,
  },
  {
    className: 'col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1',
    label: 'SQL',
    logo: sql_logo,
    alt: 'SQL Logo',
    useLargeImage: true,
  },
];

const skillCards = skills.map((x, i) => ZSkillCard({ key: i.toString(), ...x }));

const startingYear = 2015;
const yearsOfExperience = new Date().getFullYear() - startingYear;

export default function Page() {
  const [isEmailMeModalOpen, setIsEmailMeModalOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  function handleEmailMeClick() {
    setIsEmailMeModalOpen(true);
  }

  function DarkModeToggle() {
    return (
      <ZToggle
        id="dark-mode-toggle"
        label="Dark Mode"
        checked={isDarkMode}
        updateFunc={() => setIsDarkMode(!isDarkMode)}
      />
    );
  }

  return (
    <>
      <div className="p-2 md:px-5 md:pt-5 grid grid-cols-12 items-center">
        <div className="justify-self-end col-span-12 md:hidden">
          {DarkModeToggle()}
        </div>
        <ZInformationBox title="Portfolio in development" className="col-span-12 md:col-span-6 xl:col-span-5 2xl:col-span-4 md:py-5">
          <p className="text-sm text-wrap">
            This website aims to showcase professional development in React/Next.js frameworks.
          </p>
        </ZInformationBox>
        <div className="justify-self-end md:col-start-10 md:col-span-3 lg:col-start-11 lg:col-span-2 hidden md:block">
          {DarkModeToggle()}
        </div>
      </div>
      <div className="p-1 md:p-5 grid grid-cols-12 gap-3">
        <ZProfileCard title="Omar Zakaria" image={profile_photo} className="col-span-12 lg:col-span-6">
          <p className="text-lg">Full-Stack Software Developer</p>
          <p className="text-lg mb-6">{yearsOfExperience}+ years of experience</p>
          {/* <p className="flex space-x-1 underline"><Image src={linkedin_icon} alt="LinkedIn logo" height="17" width="17"></Image><a href="https://www.linkedin.com/in/omar-zakaria/">LinkedIn</a></p> */}
          <p className="text-lg flex items-center hover:underline cursor-pointer">
            <FaLinkedin />
            <a target="_blank" className="ml-2 mr-3" href="https://www.linkedin.com/in/omar-zakaria/">
              LinkedIn
            </a>
            <FaArrowCircleRight />
          </p>
          <div className="flex justify-center mt-8 mb-4">
            <ZButton variant={VariantType.Secondary} size={SizeType.Large} onClick={handleEmailMeClick}>
              <div className="flex">&nbsp;Contact me</div>
            </ZButton>
          </div>
        </ZProfileCard>
        <ZProfileCard title="About Me" className="col-span-12 lg:col-span-6">
          Full-stack developer with 8+ years of experience in C# .NET and Javascript/Typescript. Skilled in Node.js,
          Vue.js, and agile methodologies. Passionate about innovation and all aspects of business. Strong communication
          and collaboration skills with an excellent business acumen as well as technical awareness.
          <ul className="list-disc pl-5 pt-2">
            <li>Strong communication and collaboration skills</li>
            <li>Organized and professional</li>
            <li>Excellent business acumen as well as technical awareness</li>
            <li>Positive, practical, and flexible character</li>
          </ul>
        </ZProfileCard>
      </div>

      <div id="credentials-section" className="p-1 mt-8 md:mt-4 md:p-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Education and Certificates</h2>
        <div className="grid grid-cols-12 gap-3">
          <ZCredentialCard
            className="col-span-12 md:col-span-6"
            title="École Polytechnique de Montréal"
            href="https://www.polymtl.ca/"
            alt="École Polytechnique logo"
            logo={poly_logo}
            useLargeImage={false}
          >
            <p className="text-sm md:text-lg">Bachelor&apos;s in Software Engineering</p>
            <p className="text-sm md:text-lg">2011-2015</p>
          </ZCredentialCard>
          <ZCredentialCard
            className="col-span-12 md:col-span-6"
            title="Machine Learning Specialization"
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/5RA34NUFWY3G"
            alt="Coursera logo"
            logo={coursera_logo}
            useLargeImage={false}
          >
            <p className="md:text-lg">Coursera</p>
            <p className="md:text-lg">Issued 2023</p>
          </ZCredentialCard>
          <ZCredentialCard
            className="col-span-12 md:col-span-6"
            title="Vanier College"
            href="https://www.vaniercollege.qc.ca/"
            alt="Vanier College logo"
            logo={vanier_logo}
            useLargeImage={false}
          >
            <p className="md:text-lg">D.E.C. Pure and Applied Sciences</p>
            <p className="md:text-lg">2008-2011</p>
          </ZCredentialCard>
          <ZCredentialCard
            className="col-span-12 md:col-span-6"
            title="AWS Certified Developer Associate"
            alt="AWS logo"
            logo={aws_logo2}
            useLargeImage={false}
          >
            <p className="md:text-lg">Amazon</p>
            <p className="text-sm md:text-lg">Issued November 2023</p>
            <p className="text-sm md:text-lg">Credential ID 5RA34NUFWY3G</p>
          </ZCredentialCard>
        </div>
      </div>
      <div id="skills-section" className="p-1 mt-8 md:mt-4 md:p-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-12 gap-3">{skillCards}</div>
      </div>
      <ZModal open={isEmailMeModalOpen} setOpen={setIsEmailMeModalOpen} title="Contact Me">
        <ZContactForm onClose={() => setIsEmailMeModalOpen(false)} />
      </ZModal>
      {/* <div id="skills-section" className="p-5">
        <h2 className="text-3xl font-bold text-center mb-6">Buzzwords map</h2>
          <ZBubbleCanvas />
      </div> */}
    </>
  );
}
