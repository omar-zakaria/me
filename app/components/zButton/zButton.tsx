'use client';

export enum VariantType { Primary = 'primary', Secondary = 'secondary', Warning = 'warning', Danger = 'danger' };
export enum SizeType { Small = 'small', Medium = 'medium', Large = 'large' };
interface ButtonProps {
  variant?: VariantType;
  size?: SizeType;
  children: React.ReactNode;
  onClick?: () => void; // Optional prop
}

const ZButton: React.FC<ButtonProps> = ({ variant, size, children, onClick }) => {

  // let baseClasses = 'focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center';
  let baseClasses = 'rounded-md px-3 py-2 font-semibold shadow-sm';
  // Variant classes
  const variantClasses = {
    [VariantType.Primary]: 'bg-primary hover:bg-primary-dark text-white',
    [VariantType.Secondary]: 'bg-secondary hover:bg-secondary-dark text-white',
    [VariantType.Warning]: 'bg-warning hover:bg-warning-dark text-white',
    [VariantType.Danger]: 'bg-danger hover:bg-danger-dark text-white',
  };

  // Size classes
  const sizeClasses = {
    [SizeType.Small]: 'text-xs px-3 py-1.5',
    [SizeType.Medium]: 'text-sm px-5 py-2.5',
    [SizeType.Large]: 'text-lg px-6 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant ?? VariantType.Primary] } ${sizeClasses[size ?? SizeType.Medium] || sizeClasses.medium}`;

  return (
    <button type="button" className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default ZButton;