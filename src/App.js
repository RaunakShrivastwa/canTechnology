import Header from "./Components/Header/Header";
import OurServices from "./Home Component/Components/Services Component/OurCourses";
import Uniquefeatures from "./Home Component/Components/Unique Feautures/Uniquefeatures";

function App() {
  return (
    <>
      {/* <Header />
      <Banner />
      <Objective />
      <Belive />
      <Alma />
      < Foot/>
      < Footer/>
      < Fotter1/>
    
    */}
      <Router>
        <Navbar />
        <Header />
        <OurServices />
        <Uniquefeatures />
      </Router>
    </>
  );
}

export default App;
