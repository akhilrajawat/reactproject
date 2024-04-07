import Jsx,{Greet} from "./container/Jsx"
import DataBinding from "./container/DataBinding"
import Users from "./container/Users"
import {Routes , Navlink ,Route} from 'react-router-dom'
function App(){
  return (
    <div>
      <nav className="navbar navbar-expand navbar-lght bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Navlink className="nav-link" to="/">Jsx</Navlink>
          </li>
          <li className="nav-item">
            <Navlink className="nav-link" to="/binding">DataBinding</Navlink>
          </li>
          <li className="nav-item">
            <Navlink className="nav-link" to="/users">Users</Navlink>
          </li>
        </ul>
      </nav>
     
    <Routes>
        <Route path="/" element={<Jsx/>}></Route>
        <Route path="/binding" element={<DataBinding/>}></Route>                                                                                     
        <Route path="/users" element={<Users/>}></Route>                                                                                         
      </Routes>
    </div>
  )
}
export default App;