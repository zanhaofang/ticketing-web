import * as React from 'react';


export interface SectionExpanderProps {
  dra: String
}

export const SectionExpander = (props: SectionExpanderProps) => {
  const { dra } = props;

  return (
    <section className="section-seperate section-expander">
      <a href="javascript:void(0)" className="link btn btn-block btn-pay">立即购票</a>
      <div className="text-expander-content">
        <p>{ dra }</p>
      </div>
    </section>
  )
}