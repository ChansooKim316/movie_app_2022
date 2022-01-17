import React from "react";


// history 함수 사용을 위해 클래스형으로 전환
// didMount 이용해 Detail 컴포넌트가 마운트 될때 push() 함수 실행하기

class Detail extends React.Component {
    

    componentDidMount() {
        const {location, history} = this.props
        if (location.state == undefined) {
            history.push('/');
        }
    }
    
    // render 함수에도 리다이렉트 해줘야 오류 발생 안함.
    render() {
        console.log('props - detail : ', this.props);
        const { location } = this.props;
        if (location.state) {
            return (
                <div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="movie__data">
                        <h3 className="movie__title" >{location.state.title}</h3>
                        <h5 className="movie__year" >{location.state.year}</h5>
                        <ul className="movie__genres">
                            {/* key prop 이 필요하므로 index 추가 */}
                            {location.state.genres.map((genres, index) => {
                                return <li key={index} className="movie__genre">{location.state.genres}</li>;
                            })}
                        </ul>
                        <p className="movie__summary" >{location.state.summary.slice(0,180)}...</p>
                    </div>
                </div>
            )
        } else {
            // null 을 반환하면 didMount 가 자동 실행. 리다이렉트 됨.
            return null;
        }
        
    }
    
}


export default Detail;