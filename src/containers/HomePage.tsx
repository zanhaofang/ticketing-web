import { connect } from 'react-redux';
import { Home } from '../components/home';
import * as React from 'react';
import { loadTodayMovie } from '../actions';

export interface HomePageProps {
  cityId: number,
  carouselImages: Array<string>;
  todayMovies: Array<any>;
  loadTodayMovie: Function;
}

class HomePage extends React.Component<HomePageProps, any> {

  componentDidMount() {
    this.props.loadTodayMovie(this.props.cityId);
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
    data: { cityId, carouselImages, todayMovies }
  } = state

  return {
    cityId,
    carouselImages,
    todayMovies
  }
}

export default connect(mapStateToProps, { loadTodayMovie })(HomePage);