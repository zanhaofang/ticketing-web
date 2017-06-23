import * as React from 'react';


export interface SectionMediaProps {
  photos: Array<any>
}

export const SectionMedia = (props: SectionMediaProps) => {
  const { photos } = props;

  const photoList = photos.map((item, index) => {
    const url = item.src.replace(/\/w\.h\//g, "/90.70/");
    return (
      <li className="stage-img-container" key={ index }>
        <a href="javascript:void(0)">
          <img className="img noneBg" src={url} alt="photo"/>
        </a>
      </li>
    )
  });

  return (
    <section className="section-media section-seperate">
      <h3>剧照</h3>
      <ul className="movie-stages">
        { photoList }
      </ul>
    </section>
  )
}