import * as React from 'react';
import { NavBar, Icon, Card, SearchBar, Carousel } from 'antd-mobile';
import request from '../../utils/request';
import './styles/index.css';

export interface HomeProps {
  carouselImages: Array<string>;
  movies: Array<any>;
}

export const Home = (props: HomeProps) => {

  const { carouselImages, movies } = props;

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

  const cards = movies.map((item, index) => (
    <Card full key={index}>
      <Card.Header
        title={item.nm}
        thumb={item.img}
        extra={item.sc}
        styles={{}}
      />
      <Card.Body styles={{}}>
        <div>{item.scm}</div>
      </Card.Body>
      <Card.Footer styles={null} content={item.cat} extra={item.rt} />
    </Card>
  ));

  return (
    <div>
      <NavBar iconName={null} leftContent="城市" onLeftClick={() => console.log('onLeftClick')}
      >热映</NavBar>
      <SearchBar className="tk-searchbar" placeholder="搜索" style={{marginBottom: 0}}/>
      <Carousel
          className="tk-carousel" autoplay={true} infinite selectedIndex={1}
        >
        {images}
      </Carousel>
      {cards}
    </div>
  )
}
