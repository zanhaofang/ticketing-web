import * as React from 'react';


export interface MovieHeaderProps {
  detail: any
}

export const MovieHeader = (props: MovieHeaderProps) => {
  const { detail } = props;

  return (
    <section className="movie-header">
      <div className="movie">
        <div className="movie-background" style={{backgroundImage: `url(${detail.img})`}}></div>
        <div className="movie-filter"></div>
        <div className="movie-container">
          <div className="movie-cover">
            <img src={ detail.img } alt="海报"/>
          </div>
          <div className="movie-content">
            <div className="movie-name text-ellipsis">{ detail.nm }</div>
            <div className="movie-score text-ellipsis">{ detail.sc }</div>
            <div className="movie-category text-ellipsis">
              <span className="movie-cat">{ detail.cat }</span>
            </div>
            <div className="movie-content-row">{ detail.ver }</div>
            <div className="movie-content-row">{ detail.rt }</div>
          </div>
        </div>
      </div>
    </section>
  )
}