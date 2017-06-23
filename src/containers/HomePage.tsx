import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as React from 'react';
import { NavBar, Drawer, List, SearchBar } from 'antd-mobile';
import { loadMovieList, loadAreaList } from '../actions';
import { MovieList, MovieCarousel } from '../components/home';


export interface HomePageProps {
  carouselImages: Array<string>,
  movieList: Array<any>,
  areaList: Array<any>,
  loadMovieList: Function,
  loadAreaList: Function,
  push: Function
}

class HomePage extends React.Component<HomePageProps, any> {

  state = {
    open: false,
    position: 'left',
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    this.props.loadMovieList();
    this.props.loadAreaList();
  }

  render() {
    const { carouselImages, movieList, areaList, push } = this.props;

    const sidebar = (
      <List>
        {areaList.map((item, index) => {
          return (<List.Item key={index}>{item.nm}</List.Item>);
        })}
      </List>
    );

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    
    return (
      <div>
        <NavBar iconName={null} leftContent="番禺区" onLeftClick={ this.onOpenChange }>热映</NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight, marginTop: 90 }}
          dragHandleStyle={{ display: 'none' }}
          sidebar={sidebar}
          {...drawerProps}
        >
          <SearchBar className="tk-searchbar" placeholder="搜索" style={{marginBottom: 0}}/>
          <MovieCarousel carouselImages={carouselImages}></MovieCarousel>
          <MovieList movies={movieList} push={push} />
        </Drawer>
        
      </div>
    )
  }
}


function mapStateToProps(state) {
  const {
    data: { carouselImages, movieList, areaList }
  } = state

  return {
    carouselImages,
    movieList,
    areaList
  }
}

export default connect(mapStateToProps, { loadMovieList, loadAreaList, push })(HomePage);