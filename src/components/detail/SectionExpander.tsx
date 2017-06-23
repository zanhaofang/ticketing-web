import * as React from 'react';


export interface SectionExpanderProps {
  detail: any,
  push: Function
}

export const SectionExpander = (props: SectionExpanderProps) => {
  const { detail, push} = props;

  const toCinema = (id: number) => {
    push(`/movie/${id}/cinema`);
  }

  return (
    <section className="section-seperate section-expander">
      <a href="javascript:void(0)" className="link btn btn-block btn-pay" onClick={() => toCinema(detail.id)}>立即购票</a>
      <div className="text-expander-content">
        <p>{ detail.dra }</p>
      </div>
    </section>
  )
}