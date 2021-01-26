import './App.css';
import { CartProvider } from './cartcontext';
import { RecipeProvider } from './contextapi';
import Recipes from './recipes';
import Searchrecipes from './searchrecipes';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Cartdetails from './cartdetail';
import Navbar from './Navbar';
import {toast ,Zoom,Bounce} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"
import "react-toastify/dist/ReactToastify.css"
import Aboutus from './Aboutus';



function App() {
  return (
    <div className="App">
      <Router>
      <RecipeProvider>
        <CartProvider>
          <Navbar/>
        <Searchrecipes/>
        <Switch>
       <Route exact path="/" component={Recipes}/>
       <Route exact path="/cart" component={Cartdetails}/>
       <Route exact path="/aboutus" component={Aboutus}/>
        </Switch>
        </CartProvider>
      </RecipeProvider>
      </Router>
    </div>
  );
}

export default App;
