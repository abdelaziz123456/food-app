import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";


function App() {
  return (
    <Fragment>
    <Header/>
    <main>
    <Meals/>
    </main>
    </Fragment>
    
  );
}

export default App;
