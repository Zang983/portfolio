export interface ImageProject {
  idImage: number,
  isLogo: boolean,
  isPresentation: boolean,
  order?: number,
  project_idProject: number,
  url: string
}
export interface Project {
  idProject:number,
  name: string,
  description: string,
  order: number,
  technos: [],
  githubLink: string,
  externalLink: string,
  presentationImage:ImageProject,
  logoImage:ImageProject,
  images: ImageProject[],
}
export interface Theme {
    "name": string,
    "--primary-color": string
    "--primary-text": string
    "--secondary-color": string
    "--secondary-text": string
    "--background-primary-color": string
    "--background-text": string
}
export const changeTheme = (theme : Theme) =>
{       
    for (const [key, value] of Object.entries(theme)) {
    if (key !== "name")
        document.documentElement.style.setProperty(key, value)
      
}}

function parseData (data:{projects : Project[]}){
  const parsedData = []
  

  for(const project of data.projects){
    const newObj:Project = {
    idProject : project.idProject,
    name : project.name,
    description : project.description,
    order : project.order,
    githubLink : project.githubLink,
    externalLink : project.externalLink,
    presentationImage : project.images.filter((image:ImageProject)=>image.isPresentation)[0],
    logoImage : project.images.filter((image:ImageProject)=>image.isLogo)[0],
    images : project.images.filter((image:ImageProject)=>!image.isLogo  && !image.isPresentation),
    technos:[...project.technos]
  }
    parsedData.push(newObj)
  }

  return parsedData
}

export async function getProjectsData(){
    const requestPath = "https://api-portfolio.kevin-kerkar.com/api/getProjects"
    const res = await fetch(requestPath,{
      cache:"no-cache",
    })
    if(!res.ok)
      throw new Error('Projects impossible à récupérer')
      const data = await res.json()
      return parseData(data)
  }