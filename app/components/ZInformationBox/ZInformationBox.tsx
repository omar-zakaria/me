import { FaInfoCircle } from 'react-icons/fa';
interface ZInformationBoxProps {
  title: string;
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

const ZInformationBox: React.FC<ZInformationBoxProps> = ({ title, children, className }) => {
  return (
    <div className={`flex items-center border-2 rounded-lg p-3 bg-violet-500 opacity-80 text-white border-violet-900 ${className}`}>
      <FaInfoCircle className="mr-5 ml-2 text-3xl sm:text-2xl md:text-xl"></FaInfoCircle>
      <div className='flex flex-col'>
        <span className="text-lg">{title}</span>
        {children}
      </div>
    </div>
  );
};

export default ZInformationBox;
