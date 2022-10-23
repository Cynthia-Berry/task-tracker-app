import SideMenu from "../../../components/sideMenu/SideMenu"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Body from "./Body";
import {useQuery} from "@apollo/client";
import Loader from "../../../components/Loader/Loader";
import {FETCH_ALL_PROJECTS} from "../../../utils/helpers/queries/project.queries";

const Home = () => {
	const {loading, data} = useQuery(FETCH_ALL_PROJECTS);
	
	return (
		
		<div>
			<Header/>
			<SideMenu active="home"/>
			{!data ? <Loader/> : <Body projects={data.getAllProject}/>}
			<Footer/>
		</div>
	)
}

export default Home;
