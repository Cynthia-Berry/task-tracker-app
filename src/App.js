import {Fragment} from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import TokenHelper from "./utils/helpers/tokenHelper";
import Home from "./pages/dashboard/home/Home";
import Projects from "./pages/dashboard/projects/Projects";
import ProjectInfo from "./pages/dashboard/projects/atoms/projectInfo/ProjectInfo";
import Tasks from "./pages/dashboard/tasks/Tasks";
import TaskInfo from "./pages/dashboard/tasks/atoms/taskInfo/TaskInfo";
import Error404 from "./pages/error404/Error404";
import Login from "./pages/auth/login/Login";
import Users from "./pages/dashboard/users/Users";

const App = () => {
const IsLoggedInRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      TokenHelper.checkIfLoggedIn() ? <Component {...props} /> : <Redirect to="/login"/>
    )}/>
  );
	
	return (
		<Fragment>
			<BrowserRouter>
				<Toaster/>
				 <Route path="/login" component={Login}/>
				<Route exact path={["/dashboard", "/home", "/"]} render={() => <Home/>}/>
				<IsLoggedInRoute exact path="/projects" component={Projects}/>
				<IsLoggedInRoute exact path="/projects/:id" component={ProjectInfo}/>
				<IsLoggedInRoute exact path="/tasks" component={Tasks}/>
				<IsLoggedInRoute exact path="/task/:id" component={TaskInfo}/>
				<IsLoggedInRoute exact path="/users" component={Users}/>
				<Route path="/error404" component={Error404}/>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
