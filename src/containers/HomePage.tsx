import { connect } from 'react-redux';
import { Home } from '../components/home';
import * as React from 'react';
import { loadMovieList } from '../actions';

export interface HomePageProps {
  carouselImages: Array<string>;
  todayMovies: Array<any>;
  loadMovieList: Function;
}

class HomePage extends React.Component<HomePageProps, any> {

  componentDidMount() {
    this.props.loadMovieList();
  }

  render() {
    const { carouselImages, todayMovies } = this.props;
    return (
      <Home carouselImages={carouselImages} movies={todayMovies} />
    )
  }
}


function mapStateToProps(state) {
  const {
    data: { carouselImages, todayMovies }
  } = state

  return {
    carouselImages,
    todayMovies
  }
}

export default connect(mapStateToProps, { loadMovieList })(HomePage);