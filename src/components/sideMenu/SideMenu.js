import {NavLink} from "react-router-dom";
import {menuType} from "../../utils/helpers/constants"

const SideMenu = ({active}) => {
	console.log(active)
	return (
		<div>
			{/*<div className="overlay"/>*/}
			<div id="leftsidebar" className="sidebar">
				<div className="menu main-sidebar mt-1">
					<ul className="list mt-5 pt-5" id="documenter_nav">
						<li className={`nav-item ${active === menuType.HOME ? "active" : ""}`}>
							<NavLink className="nav-link" to="/">
								<i className="fe fe-briefcase sidemenu-icon"/><span className="sidemenu-label">Dashboard</span>
							</NavLink>
						</li>
						<li className={`nav-item ${active === menuType.PROJECTS ? "active" : ""}`}>
							<NavLink className="nav-link" to="/projects">
								<i className="fe fe-aperture sidemenu-icon"/><span className="sidemenu-label">Projects</span>
							</NavLink>
						</li>
						<li className={`nav-item ${active === menuType.TASKS ? "active" : ""}`}>
							<NavLink className="nav-link" to="/tasks">
								<i className="fe fe-link sidemenu-icon"/><span className="sidemenu-label">Tasks</span>
							</NavLink>
						</li>
						<li className={`nav-item ${active === menuType.USERS ? "active" : ""}`}>
							<NavLink className="nav-link" to="/users">
								<i className="fe fe-help-circle sidemenu-icon"/><span className="sidemenu-label">Users</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
	);
}

export default SideMenu;
