import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import SkillsSection from '../components/SkillsSection.jsx'

export default function HomePage()
{
	return (
		<>
			<NavBar />
			<Header />

			<main>
				<SkillsSection />
				<hr/>
				<ProjectsSection />
			</main>
			<Footer />
		</>
	)
}
