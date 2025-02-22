import { Tooltip, Image } from "@heroui/react";

interface OtherTechnologyExperienceProps {
  toolTipText: string;
  altText: string;
  src: string;
}

const OtherTechnologyExperience = ({
  toolTipText,
  altText,
  src,
}: OtherTechnologyExperienceProps) => {
  return (
    <Tooltip content={toolTipText} showArrow={true}>
      <Image
        alt={altText}
        className="pointer-events-auto"
        src={src}
        width={50}
      />
    </Tooltip>
  );
};

export default OtherTechnologyExperience;
