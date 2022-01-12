import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount() {
    // 영화 데이터 로딩
    // https://yts.mx/api/v2/list_movies.json -> 불법이므로 아래 주소 사용
    // https://yts-proxy.now.sh/list_movies.json
    // 문제점 : 가져오는 데이터가 많으면 느려짐
    // axios.get('https://yts-proxy.now.sh/list_movies.json') // 느려질 경우 기다려여야 하므로 async/await 사용
    this.getMovies();
  }

  getMovies = async() => {
    // 구조분해할당
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');  // 파라미터 적용
    // this.setState({movies: movies}) // 키밸류 이름 같으므로 생략
    this.setState({movies, isLoading: false})
    
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        <div>
          {isLoading ? 
            <div class="loader">
              <span class="loader__text">Loading..</span>
            </div>
          
          : (
              <div class="movies">
                {movies.map(movie => {              
                  <Movie 
                    key={movies.id}
                    id={movies.id}
                    year={movies.year}
                    title={movies.title}
                    summary={movies.summary}
                    poster={movies.medum_cover_image}
                  />
              })}
              </div>
            )
          }
        </div>
      </section>
    )
  }


}


export default App;
