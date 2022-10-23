const SideMenu = () => {
	return (
		<div>
			<div className="overlay"></div>
			
			<div id="leftsidebar" className="sidebar">
				<div className="menu main-sidebar">
					<ul className="list" id="documenter_nav">
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-briefcase sidemenu-icon"/><span
								className="sidemenu-label">Apps</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-aperture sidemenu-icon"/><span
								className="sidemenu-label">UI</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-file-text sidemenu-icon"/><span
								className="sidemenu-label">Form-elements</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-cpu sidemenu-icon"/><span
								className="sidemenu-label">Form-advanced</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-lock sidemenu-icon"/><span
								className="sidemenu-label">Form-validation</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="javascript:void(0)"><i className="fe fe-hard-drive sidemenu-icon"/><span
								className="sidemenu-label">Form-wizard</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
	);
}

export default SideMenu;
