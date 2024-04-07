import Jsx,{Greet} from "./container/Jsx"
import DataBinding from "./container/DataBinding"
import Users from "./container/Users"
import {Routes , Navlink ,Route} from 'react-router-dom'
function App(){
  return (
    <div>
     
    <Routes>
        <Route path="/" element={<Jsx/>}></Route>
        <Route path="/binding" element={<DataBinding/>}></Route>                                                                                     
        <Route path="/users" element={<Users/>}></Route>                                                                                         
      </Routes>
    </div>
  )
}
export default App;