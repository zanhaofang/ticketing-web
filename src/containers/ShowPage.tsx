import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { NavBar } from 'antd-mobile';
import { loadMovieDetail } from '../actions';

import * as React from 'react';
import '../components/show/styles/index.sass';

export interface ShowPageProps {
  loadMovieDetail: Function,
  goBack: Function,
  push: Function,
  mid: number,
  cid: number,
  movieDetail: any,
  cinemaDetail: any
}

class ShowPage extends React.Component<ShowPageProps, any> {

  componentDidMount() {
    this.props.loadMovieDetail(this.props.mid);
  }

  render() {
    const { movieDetail, mid } = this.props;
    return (
      <div id="cinema-page">
        <NavBar iconName="left" onLeftClick={() => this.props.goBack()}>{movieDetail ? movieDetail.detail.nm : ""}</NavBar>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {

  const {
    data: { cinemaList, movieDetail }
  } = state

  return {
    cinemaList,
    movieDetail,
    mid: ownProps.match.params.movieId,
  }
}

export default connect(mapStateToProps, { loadCinemaList, loadMovieDetail, goBack, push })(CinemaPage);