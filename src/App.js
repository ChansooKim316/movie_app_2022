import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import {HashRouter, Route} from 'react-router-dom';
// import './App.css';

// state 필요 없으므로 함수형사용
function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* exact 를 써서 "/" 일때만 해당 컴포넌트 출력 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />      
    </HashRouter>
  );
}


export default App;
