"use client";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { button, Image } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

interface CarouselImages {
  image: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: CarouselImages[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [altText, setAltText] = useState(images[0].alt);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const rightButton = useRef<HTMLButtonElement>(null);
  const leftButton = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setAltText(images[api.selectedScrollSnap()].alt);
      setCurrentImage(images[api.selectedScrollSnap()]);
    });

    const stopAutoplay = () => {
      api.plugins().autoplay.stop();
    };

    api.on("pointerDown", stopAutoplay);
    rightButton.current?.addEventListener("click", stopAutoplay);
    leftButton.current?.addEventListener("click", stopAutoplay);
  }, [api, images]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-sm gap-1">
                {altText}
              </ModalHeader>
              <ModalBody className="flex justify-center pb-5">
                <Image
                  src={currentImage.image}
                  alt={currentImage.alt}
                  className="w-full"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <Carousel
          setApi={setApi}
          className="sm:max-w-6xl w-9/12"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  onClick={onOpen}
                  src={image.image}
                  alt={image.alt}
                  className="w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious ref={rightButton} />
          <CarouselNext ref={leftButton} />
        </Carousel>
        <div className="text-center text-md pt-2">{altText}</div>
        <div className="text-center text-sm text-muted-foreground">
          {current} of {count}
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
export type { CarouselImages };
