import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Components/FunctionalComp'
import {ClassComp,ClassComp1} from './Components/ClassComp'
import Click from './Components/Click'
import Counter from './Components/Counter'
import ParentComp from './Components/ParentComp'
import ClassProps from './Props/ClassProps';
import FunctionComp from './Props/FunctionProps';
import NewComp from './State/NewComp';
import Server from './Server';
import NewComponent from './redux/NewComponent';
import ReactFetch from './ReactApi/ReactFetch';
import FunComponent from './react-redux/FunComponent';
import CounterClass from './react-redux/CounterClass';
import ReactForm from './ReactForm/ReactForm'
import DynamicForm from './dynamic-form/DynamicForm';
import DynamicJsonForm from './json-form/DynamicJsonForm';
import DynamicFormComp1 from './dynamic-form/DynamicFormComp1';
import PractiseComponent from './Components/PractiseComponent';
import RenderChild from './Components/RenderChild';
import PaginationComponent from './Components/PaginationComponent';
import TodoListClass from './Components/TodoListClass';
import TodoListFunction from './Components/TodoListFunction';
import WithoutThrottlingAndDebouncing from './Components/WithoutThrottlingAndDebouncing';
import DebounceFunc from './Components/DebounceFunc';
import ThrottleFunc from './Components/ThrottleFunc';
import SearchList from './Components/SearchList';
import HomePage from './react-router/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './react-router/AboutPage';
import ShopPage from './react-router/ShopPage';
import ItemDetails from './react-router/ItemDetails';
import SearchApi from './SearchApi';

function App() {
  return (
    /*<div>
  <h1>Hello Welcome to simplilearn</h1>
   <FunctionalComp />
   <ClassComp />
   <ClassComp1/>
   <Click />
   <Counter/>
   <ParentComp />
   <ClassProps name="Learner1" place="PlaceX"><p>Child Component</p></ClassProps>
   <ClassProps name="Learner2" place="PlaceY"><button>Click Me</button></ClassProps>
   <FunctionComp name="Learner4" place="placeA"/>
   <NewComp/>
   <Server />
   <NewComponent />
    </div>*/
    <div>
    
      <Router>
        <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
        <Route path="/shop" exact component={ShopPage}></Route>
        <Route path="/shop/id" exact component={ItemDetails}></Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
