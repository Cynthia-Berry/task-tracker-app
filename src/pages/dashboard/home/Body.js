const Body = ({projects}) => {
	console.log(projects)
	return (
		<div className="page">
			{
				projects.map((data, index) => (
				<div key={index}>
					<h1>{data["name"]}</h1>
				</div>
				))
			}
		</div>
	);
}

export default Body;
