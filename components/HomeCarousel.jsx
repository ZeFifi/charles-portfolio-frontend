/* eslint-disable @next/next/no-img-element */
import { getStrapiURL } from "../lib/api"
import Carousel, { CarouselItem } from "./Carousel"

export const HomeCarousel = ({ content }) => {
  return (
    <Carousel>
      {content.map((content) => (
        <CarouselItem key={content.attributes.id}>
          <a className="w-full h-full" href={content.attributes.work_url}>
            <img
              className="w-full h-full object-cover"
              src={getStrapiURL(content.attributes.image_url)}
              alt={content.attributes.title}
            />
          </a>
        </CarouselItem>
      ))}
    </Carousel>
  )
}
