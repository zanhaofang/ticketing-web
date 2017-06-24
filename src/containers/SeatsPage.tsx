import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { NavBar } from 'antd-mobile';
import { loadMovieDetail } from '../actions';

import * as React from 'react';
import '../components/cinema/styles/index.sass';

export interface SeatsPageProps {
  goBack: Function,
  loadMovieDetail: Function,
  movieDetail: any,
  mid: number,
}

class SeatsPage extends React.Component<SeatsPageProps, any> {

  componentDidMount() {
    this.props.loadMovieDetail(this.props.mid);
  }

  render() {
    const { movieDetail } = this.props;
    return (
      <div id="seats-page">
        <NavBar iconName="left" onLeftClick={() => this.props.goBack()}></NavBar>
        <div className="movie">
          <button className="btn btn-pay">提交订单</button>
          <div className="info">
            <h3>月亮</h3>
            <p>2016-01-01</p>
          </div>
        </div>
        <div className="tips">
          <ul className="seat-intro">
            <li>
              <span className="seat active">可选</span>
            </li>
            <li>
              <span className="seat selected">已选</span>
            </li>
            <li>
              <span className="seat disabled">已售</span>
            </li>
            <li>
              <span className="seat love">情侣座</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {

  const {
    data: { movieDetail }
  } = state

  return {
    movieDetail,
    mid: ownProps.match.params.movieId
  }
}

export default connect(mapStateToProps, { loadMovieDetail, goBack, push })(SeatsPage);