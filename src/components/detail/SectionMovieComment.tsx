import * as React from 'react';


export interface SectionMovieCommentProps {
  comments: Array<any>
}

export const SectionMovieComment = (props: SectionMovieCommentProps) => {
  const { comments } = props;

  const commentsList = comments.map((item, index) => {
    let stars = [];
    let largeScore = item.score*10;
    let num = largeScore/10;
    for (let i = 0; i < 5; ++i) {
      if (i < num) {
        stars.push(
          <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" alt="" key={stars.length}/>
        )
      } else {
        stars.push(
          <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-empty-new.png" alt="" key={stars.length}/>
        )
      }
      
    }


    return (
      <li className="list-view-item" key={ index }>
        <div className="comment">
          <header>
            <div className="rating">{ stars }</div>
            <time className="timeago">{ item.time }</time>
          </header>
          <section>
            { item.content }
          </section>
          <footer>
            <img className="img" src={ item.avatarurl } alt="avatar"/>
            <em className="nick">{ item.nickName }</em>
          </footer>
        </div>
      </li>
    )
  });

  return (
    <section className="section-seperate section-movie-comment">
      <h3>短评</h3>
      <ul className="list-view list-view-styled">
        { commentsList }
      </ul>
    </section>
  )
}