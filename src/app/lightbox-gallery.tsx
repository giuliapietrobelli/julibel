"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Masonry } from "masonic";
import { createBreakpoint } from 'react-use';
import { breakpoints } from '../../tailwind.screens';

type Image = {
  src: StaticImageData,
  title: string,
  alt: string,
  className?: string;
}

const useBreakpoint = createBreakpoint(breakpoints);

type Props = { 
  images: Image[], 
  className?: string, 
  columns?: number[]; 
}

export default function LightboxGallery(props: Props) {
  const [isServerSide, setIsServerSide] = React.useState(true)

  React.useEffect(() => {
    setIsServerSide(false)
  }, [])

  const [currentIndex, setIndex] = React.useState<number | undefined>(undefined);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIndex(undefined);
    }
  }

  const [api, setApi] = React.useState<CarouselApi>()
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", ({  selectedScrollSnap }) => {
      // reset slide scroll position after slide change
      api.slideNodes()[selectedScrollSnap()].scrollTo(0, 0);
    })
  }, [api])

  const columnsCount = useColumnsNumber(props.columns);

  if (isServerSide) {
    return;
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <Masonry 
        columnGutter={24} 
        columnCount={columnsCount} 
        items={props.images} 
        render={(renderProps) => <MasonryCard {...renderProps} onClick={setIndex} />} 
      />

      <DialogContent className={cn('block max-w-4xl', props.className)}>
        <Carousel setApi={setApi} opts={{ startIndex: currentIndex }} className="h-full [&>*:first-child]:h-full">
          <CarouselContent className="h-full">
            {props.images.map((image, index) => (
              <CarouselItem key={index} className="overflow-y-auto flex items-start justify-center">
                <Image src={image.src} alt={image.alt} priority/>
              </CarouselItem>
            ))}
          </CarouselContent>
          {props.images.length > 1 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}

const MasonryCard = ({ index, data, onClick }: any) => (
  <div className={cn('leading-[0]', data.className)}>
    <DialogTrigger onClick={() => onClick(index)}>
      <Image className="max-w-full hover:opacity-75 hover:transition-opacity duration-500" src={data.src} alt={data.alt} quality={10} priority/>
    </DialogTrigger>
  </div>
);

const useColumnsNumber = (columns?: number[]) => {
  const breakpoint = useBreakpoint();
  const defaultColumns = columns ? columns[columns.length - 1] : 2;

  switch (breakpoint) {
    case "sm":
      return columns?.[0] ?? defaultColumns;
    case "md":
      return columns?.[1] ?? defaultColumns;
    case "lg":
      return columns?.[2] ?? defaultColumns;
    case "xl":
      return columns?.[3] ?? defaultColumns;
    case "2xl":
      return columns?.[4] ?? defaultColumns;
    default:
      return defaultColumns;
  }
}