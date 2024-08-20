import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { useEffect, useState } from 'react';

interface PlantImageCarouselProps {
  images: {
    imageUrl: string;
    favorite: boolean;
    createdDate: string;
  }[];
}

const PlantImageCarousel = ({ images }: PlantImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className={'mt-[23.5px]'} setApi={setApi}>
      <div
        className={
          'absolute right-4 top-4 z-50 px-[12px] py-[3px] bg-GrayOpacity500 rounded-[20px] text-white text-small-writing font-medium'
        }
      >
        {current}/{count}
      </div>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={`${index}-PlantImageCarousel`}>
            <img
              src={image.imageUrl}
              alt="식물 이미지"
              className="w-full aspect-square object-cover rounded-[10px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PlantImageCarousel;
