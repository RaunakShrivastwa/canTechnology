import AboutMain from "./Components/AboutPage/AboutMain";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route exact path="/can/about" Component={AboutMain} />
        </Routes>
       </Router>
    </>
  )
}

export default App;
