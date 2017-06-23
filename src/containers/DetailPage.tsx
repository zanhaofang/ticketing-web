import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { NavBar } from 'antd-mobile';
import { loadMovieDetail } from '../actions';
import { MovieHeader, SectionExpander, SectionMedia, SectionMovieComment } from '../components/detail/';

import * as React from 'react';
import '../components/detail/styles/index.sass';

export interface DetailPageProps {
  id: number,
  loadMovieDetail: Function,
  goBack: Function,
  movieDetail: any
}

class DetailPage extends React.Component<DetailPageProps, any> {

  componentDidMount() {
    this.props.loadMovieDetail(this.props.id);
  }

  render() {
    const { id, movieDetail } = this.props;
    return (
      <div id="detail-page">
        <NavBar iconName="left" onLeftClick={() => this.props.goBack()}>{ movieDetail ? movieDetail.detail.nm : "" }</NavBar>
        <MovieHeader detail={ movieDetail ? movieDetail.detail : {}} />
        <SectionExpander dra={ movieDetail ? movieDetail.detail.dra : "暂无介绍"} />
        <SectionMedia photos={ movieDetail ? movieDetail.photos : [] }/>
        <SectionMovieComment comments={ movieDetail ? movieDetail.comments : [] }/>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {

  const {
    data: { movieDetail }
  } = state

  return {
    id: ownProps.match.params.id,
    movieDetail : movieDetail
  }
}

export default connect(mapStateToProps, { loadMovieDetail, goBack })(DetailPage);