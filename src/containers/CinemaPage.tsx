import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { NavBar } from 'antd-mobile';
import { loadCinemaList, loadMovieDetail } from '../actions';
import { CinemaList } from '../components/cinema';


import * as React from 'react';
import '../components/cinema/styles/index.sass';

export interface CinemaPageProps {
  loadCinemaList: Function,
  loadMovieDetail: Function,
  goBack: Function,
  push: Function,
  mid: number,
  movieDetail: any,
  cinemaList: Array<any>
}

class CinemaPage extends React.Component<CinemaPageProps, any> {

  componentDidMount() {
    this.props.loadCinemaList();
    this.props.loadMovieDetail(this.props.mid);
  }

  render() {
    const { cinemaList, movieDetail, mid } = this.props;
    return (
      <div id="cinema-page">
        <NavBar iconName="left" onLeftClick={() => this.props.goBack()}>{movieDetail ? movieDetail.detail.nm : ""}</NavBar>
        <CinemaList cinemas={cinemaList} push={this.props.push} mid={mid}/>
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