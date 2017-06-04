import * as React from 'react';
import { NavBar, Icon, Card, SearchBar, Carousel } from 'antd-mobile';


export interface MovieHeaderProps {
  detail: any
}

export const MovieHeader = (props: MovieHeaderProps) => {
  const { detail } = props;
  
  return (
    <div className="movie-header">
      <div className="movie">
        <div className="movie-background"></div>
        <div className="movie-filter"></div>
        <div className="movie-container">
          <div className="movie-cover"></div>
          <div className="movie-content">
            <div className="movie-name text-ellipsis"></div>
            <div className="movie-ename text-ellipsis"></div>
            <div className="movie-score text-ellipsis"></div>
            <div className="movie-category text-ellipsis"></div>
            <div className="movie-content-row"></div>
            <div className="movie-content-row"></div>
          </div>
        </div>
      </div>
    </div>
  )
}