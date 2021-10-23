
import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import {increment, login} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className='blue'>{counter}</h1>
      <button onClick={() => dispatch(increment())} >Aumenta</button>
      <button onClick={() => dispatch(login())}>Login</button>
      {logged ? <h1>sei loggato</h1> : <h1>loggati dai</h1> }
    </div>
  );
}

export default App;
