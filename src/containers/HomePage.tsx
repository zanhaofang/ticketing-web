import { connect } from 'react-redux';
import * as React from 'react';
import { NavBar, SearchBar } from 'antd-mobile';
import { loadMovieList } from '../actions';
import { MovieList, MovieCarousel } from '../components/home';


export interface HomePageProps {
  carouselImages: Array<string>;
  movieList: Array<any>;
  loadMovieList: Function;
}

class HomePage extends React.Component<HomePageProps, any> {

  componentDidMount() {
    this.props.loadMovieList();
  }

  render() {
    const { carouselImages, movieList } = this.props;
    return (
      <div>
        <NavBar iconName={null} leftContent="城市" onLeftClick={() => console.log('onLeftClick')}>热映</NavBar>
        <SearchBar className="tk-searchbar" placeholder="搜索" style={{marginBottom: 0}}/>
        <MovieCarousel carouselImages={carouselImages}></MovieCarousel>
        <MovieList movies={movieList} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  const {
    data: { carouselImages, movieList }
  } = state

  return {
    carouselImages,
    movieList
  }
}

export default connect(mapStateToProps, { loadMovieList })(HomePage);