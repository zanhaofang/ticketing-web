import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { MovieHeader } from '../components/detail';
import { NavBar } from 'antd-mobile';
import { loadMovieDetail, loadShowInfo, loadCinemaList } from '../actions';

import * as React from 'react';
import '../components/show/styles/index.sass';

export interface ShowPageProps {
  loadMovieDetail: Function,
  loadShowInfo: Function,
  loadCinemaList: Function,
  goBack: Function,
  push: Function,
  mid: number,
  cid: number,
  movieDetail: any,
  showInfo: any,
  cinemaList: any
}

class ShowPage extends React.Component<ShowPageProps, any> {

  state = {
    cinema: null,
  }

  componentDidMount() {
    this.props.loadMovieDetail(this.props.mid);
    this.props.loadCinemaList();
    this.props.loadShowInfo(this.props.mid, this.props.cid);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.cinemaList.length > 0) {
  //     for (let i = 0; i< nextProps.cinemaList.length; ++i) {
  //       if (nextProps.cinemaList[i].id == this.props.cid) {
  //         this.setState({cinema: nextProps.cinemaList[i]});
  //         break;
  //       }
  //     }
  //   }

  //   this.setState({
  //       cinema: nextProps.text
  //   });
  // }

  render() {
    const { movieDetail, showInfo, cinemaList } = this.props;
    
    
    return (
      <div id="show-page">
        <NavBar iconName="left" onLeftClick={() => this.props.goBack()}>{this.state.cinema ? this.state.cinema.nm : ""}</NavBar>
        {/*<div className="cinema-info">
          <div className="cinema-name">{ this.state.cinema ? this.state.cinema.nm : "" }</div>
          <p>{ this.state.cinema ? this.state.cinema.addr : ""}</p>
        </div>*/}
        {/*<MovieHeader detail={movieDetail ? movieDetail.detail : {}}/>*/}
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {

  const {
    data: { cinemaList, showInfo }
  } = state

  return {
    cinemaList,
    showInfo,
    mid: ownProps.match.params.movieId,
    cid: ownProps.match.params.cinemaId,
  }
}

export default connect(mapStateToProps, { loadShowInfo, loadMovieDetail,loadCinemaList, goBack, push })(ShowPage);