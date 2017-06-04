import { connect } from 'react-redux';
import MovieHeader from '../components/detail/MovieHeader';
import * as React from 'react';
import '../components/detail/styles/index.css';

export interface DetailPageProps {
  movieId: number
}

class DetailPage extends React.Component<DetailPageProps, any> {


  render() {
    const { movieId } = this.props;
    return (
      // <MovieHeader detail=""></MovieHeader>
      <div>Detail</div>
    )
  }
}


function mapStateToProps(state) {
  const {
    data: { movieId }
  } = state

  return {
    movieId
  }
}

export default connect(mapStateToProps)(DetailPage);