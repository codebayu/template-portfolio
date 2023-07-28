interface SectionHeaderProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export const SectionHeader = ({
  icon,
  label,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex items-center space-x-2">
        {icon}
        <h1 className="text-2xl font-bold">{label}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};
