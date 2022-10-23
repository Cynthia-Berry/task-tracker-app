import SideMenu from "../../../components/sideMenu/SideMenu";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Body = () => {
	return (
		<div className="page">
			<SideMenu active="home"/>
			<Header/>
			{/*{loadState ? <SphereLoader/> :*/}
			{/*  <Body stats={analytics.stats} userStats={users.userStats} profile={users.userData} trips={services.trips}/>*/}
			}
			<Footer/>
		</div>
	);
}

export default Body;
