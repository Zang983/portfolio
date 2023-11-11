import { Header } from './components/header/header'
import { ContainerGeneralSkills } from './components/containerGeneralSkills/containerGeneralSkills'
import { ProjectsContainer } from './components/projectsContainer/projectsContainer'
import { ContactForm } from './components/contactForm/contactForm'
import { ColorPicker } from './components/colorPicker/colorPicker'
import { getProjectsData, Project } from './functions'


export default async function Home() {
  let projects: Project[] = []
  try {
    projects = await getProjectsData()
  }
  catch (error) {
    console.log("Problème de connexion avec le serveur : " + error)
  }

  return (
    <>
      <ColorPicker />
      <Header />
      <main className="font-roboto largeDesktop:w-2/3 flex flex-col m-auto laptop:w-full laptop:px-8"  >
        <ContainerGeneralSkills />
        <ProjectsContainer projectsArray={projects} />
      </main>
      <footer
        className=" flex flex-col items-center  justify-center mt-28 pt-8 px-4 bg-[var(--primary-color)] text-[var(--primary-text)] w-full">
        <ContactForm />
      </footer>
    </>
  )
}
