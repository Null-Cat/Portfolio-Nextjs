import { Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import { VisibleProjectTag } from "../Projects";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: VisibleProjectTag[];
  href?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  href,
}: ProjectCardProps) => {
  return (
    <Card
      isBlurred
      isPressable
      shadow="sm"
      className="w-[300px] h-[370px] backdrop-blur-sm"
      as="a"
      href={href}
    >
      <CardHeader className="flex flex-col items-center pt-3 pb-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
          height={200}
        />
        <h2 className="font-bold text-lg pt-1">{title}</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-0">
        <div className="flex justify-center gap-1 pb-3 w-full">
          {tags &&
            Array.from(tags).map(({ name, colour, icon }) => (
              <Chip
                key={name}
                size="sm"
                radius="sm"
                variant="shadow"
                className="flex gap-1"
                color={
                  colour as
                    | "primary"
                    | "secondary"
                    | "success"
                    | "danger"
                    | "warning"
                    | "default"
                }
                startContent={icon}
              >
                {name}
              </Chip>
            ))}
        </div>
        <p className="text-small">{description}</p>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
