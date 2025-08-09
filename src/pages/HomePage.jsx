import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'
import ProjectList from '../components/ProjectList.jsx'
import SkillsSection from '../components/SkillsSection.jsx'

export default function HomePage()
{
	return (
		<>
			<NavBar />
			<Header />

			<main>
				<SkillsSection />
				<ProjectList />
			</main>
			<Footer />
		</>
	)
}
