import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
import { loadMovieDetail } from '../actions';
import { MovieHeader } from '../components/detail/MovieHeader';

import * as React from 'react';
import '../components/detail/styles/index.sass';

export interface DetailPageProps {
  id: number,
  loadMovieDetail: Function,
}

class DetailPage extends React.Component<DetailPageProps, any> {

  componentDidMount() {
    this.props.loadMovieDetail(this.props.id);
  }

  render() {
    const { id } = this.props;
    return (
      <div id="detail-page">
        <NavBar iconName={null}>movieName</NavBar>
        <MovieHeader detail={10} />
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {

  const {
    data: { movieId }
  } = state

  return {
    id: ownProps.match.params.id,
  }
}

export default connect(mapStateToProps, { loadMovieDetail })(DetailPage);