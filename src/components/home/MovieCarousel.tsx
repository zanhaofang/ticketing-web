import * as React from 'react';
import { Carousel } from 'antd-mobile';

export interface MovieCarouselProps {
  carouselImages: Array<string>
}

export const MovieCarousel = (props: MovieCarouselProps) => {
  const { carouselImages } = props;

  const images = carouselImages.map(item => (
    <a href="http://www.baidu.com" key={item}>
      <img
        src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
        onLoad={() => {
          // fire window resize event to change height
          window.dispatchEvent(new Event('resize'));
        }}
      />
    </a>
  ))

  return (
    <Carousel className="tk-carousel" autoplay={true} infinite selectedIndex={1} >
      { images }
    </Carousel>
  )
}