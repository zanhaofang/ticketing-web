import * as React from 'react';
import request from '../../utils/request';
import './styles/index.sass';

export interface CinemaListProps {
  cinemas: Array<any>,
  push: Function,
  mid: number,
}

export const CinemaList = (props: CinemaListProps) => {

  const { cinemas, push, mid } = props;

  const toShow = (cid: number) => {
    push(`/movie/${mid}/cinema/${cid}`);
  }

  const cards = cinemas.map((item, index) => (
    <li className="cinema-container" key={index} onClick={() => toShow(item.id)}>
      <div className="cinema-name">{ item.nm }</div>
      <div className="price">
        <span className="num">{ item.sell ? item.sellPrice : "不售票" }</span>
        <span>{ item.sell ? "元" : "" }</span>
      </div>
      <div>
        <p className="address">{ item.addr }</p>
      </div>
    </li>
  ));

  return (
    <div id="cinema-list">
      <ul>
        {cards}
      </ul>
    </div>
  );
  
}
