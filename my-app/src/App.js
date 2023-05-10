import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {getAlldata} from "./Feature/gituserSlice";
import Clock from './Components/Clock';
function App()
{
  const dispatch = useDispatch();
  const data = useSelector((state) =>
  {
    console.log("state", state)
    return state.app
  })
  if (data.loading)
  {
    return <h1>loading</h1>
  }
  if (data.error != null)
  {
    return <h2>{data.error}</h2>
  }
  return (
    <div className="App">
      <Clock />

      <button onClick={() => dispatch(getAlldata())}>get github</button>

      {
        data.users.map((ele) => (
          <li key={ele.id}>{ele.login}</li>
        ))
      }
    </div>
  );
}
export default App;
