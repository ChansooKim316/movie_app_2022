import React from 'react';
import propTypes from 'prop-types';
// import Potato from "./Potato";


function Food({name, picture, rating}) {
  
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} width="200" height="200" alt={name} />
    </div>
  )
}

function renderFood(dish) {
  return (
    <Food name={dish.name} picture={dish.image} />
  )
}


const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
    rating: 3.1,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg",
    rating: 3.2,
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 3.3,
  },
  {
    id: 4,
    name: "Donkatsu",
    image: "http://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg",
    rating: 3.4,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg",
    rating: 3.5,
  }
];

// state 는 반드시 class 형 컴포넌트 안에서만 사용해야 함.
// 리액트 컴포넌트로 부터 기능들 상속
// class 는 return 을 쓸 수 없음. 대신 render 를 이용하여 index.js 에 jsx 를 반환.
// this 는 현재 클래스를 가리킴
// setState 는 기존state 와 바뀐 state 를 비교하여 바뀐것만 업데이트함. -> 양이 많아질경우 성능 차이남
class App extends React.Component {

  // constructor : 상위 클래스의 생성자 호출
  //             : 클래스가 처음 시작될때(메모리에 올라갈때) 실행됨
  constructor(props) {
    super(props);
    console.log('hello');
  }

  // componentDidMount
  // 리액트 컴포넌트가 제공
  // 순서 : constructor() -> render() -> componentDidMount()
  // 까지 하면 화면에 그리기 끝
  componentDidMount() {
    console.log('componentDidMount : rendered');
  }

  // componentDidUpdate
  // 처음이 아닌 화면이 업데이트 될때 실행됨 - render() 가 다시 실행될때.
  //
  componentDidUpdate() {
    console.log("componentDidUpdate : Just got updated");
  }

  // componenetWillUnmount
  // 클래스가 메모리에서 사라질때, 웹에서 화면이 사라질떄 실행됨.
  // 화면에서 컴포넌트 지우는 코드를 작성하지 않으면 실행되지 않음.
  componentWillUnmount() {
    console.log('componentWillUnmount : Goodbye world');
  }
  

  state = {
    count: 0
  }

  // this.state.count = this.state.count + 1  은 리액트에서 지원하지 않음.
  add = () => {
    // 프론트엔드 복잡해지면 성능 안좋아짐
    // this.setState({count : this.state.count + 1})
    // 수정
    this.setState(current => ({
        count: current.count + 1
      }))
  }
  
  minus = () => {
    // 프론트엔드 복잡해지면 성능 안좋아짐
    // this.setState({count : this.state.count - 1})
    // 수정
    this.setState(current => ({
      count: current.count - 1
    }))
  }

  // state 를 변경할때 render 가 다시 실행됨
  // setState 를 통해 state 값에 접근. 직접적으로 변경하는 것이 아님.
  // setState 호출되면 render 를 호출함.
  // 변경된 h1 태그만 바뀌기때문에 빠름. 화면 깜빡임, 새로고침 없음. -> 빠른 이유
  // state 를 직접 많이 바꾸게되면 성능 저하 
  render() {
    console.log('render : rendering');
    return (
      <div />
    )
  }


}



// class 형이 아닌 컴포넌트
// function App() {
//   console.log(foodILike.map(renderFood))
//   // id 전달 : 리액트에게 다른 컴포넌트라는것 알려주기 위함. 실제로 Food 컴포넌트에 전달되진 않음.
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id}  name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }



// Food 컴포넌트에서 전달한 키값과 propTypes 에 있는 키값이 일치해야 함.
// isRequired 있으면 필수. 없으면 경고메세지 나옴.
Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

// export default App;
