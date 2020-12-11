import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetail from "./components/projects/ProjectDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
      <Route path="/project/:id" component={ProjectDetail}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/create" component={CreateProject}></Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
