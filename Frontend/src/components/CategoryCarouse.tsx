import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const Category = [
  "General Contractors",
  "Architects",
  "Structural Engineers",
  "Plumbers",
  "Electricians",
  "Masons",
  "Carpenters",
  "Interior Designers", 
  "Painters",
];

const CategoryCarouse: React.FC = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {Category.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
                <Button variant='outline' className="rounded-full" >{category}</Button>   
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarouse;
