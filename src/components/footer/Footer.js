const Footer = () => {
	const appName = "Tech Task Tracker";
  const getYear = new Date().getFullYear();
	
	return (
		<div className="main-footer text-center flex-fill w-100" style={{position: "absolute"}}>
			<div className="container-fluid pd-t-0-f ht-100p">
				<span>Copyright &copy; {getYear}
					<a href="javascript:void(0)" className="mx-2">{appName}.</a>
				</span>
			</div>
		</div>
	)
}

export default Footer;
