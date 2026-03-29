import { icons } from 'lucide-react';

const Icon = ({ name, color, size = 24, strokeWidth = 2, className = "" }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Lucide Icon "${name}" bulunamadı. Lütfen lucide.dev adresinden ismi kontrol et.`);
    return null;
  }

  return (
    <LucideIcon 
      color={color} 
      size={size} 
      strokeWidth={strokeWidth} 
      className={className} 
    />
  );
};

export default Icon;