'use client'
import { Typo } from "../commons/Typo"
import { CustomDialog } from "../customDialog/customDialog"
import { ProjectCard } from "../projectCard/projectCard"
import { useState, useRef } from 'react'
import { StackContainer } from "../stackTech/stackContainer"
import { ProjectContext } from "../projectContext/projectContext"
import { LinkContainer } from "../linkContainer/linkContainer"
import { GithubSVG } from "../commons/svgs/github"
import { Project } from "../../functions"
import { Carrousel } from "../carrousel/carrousel"
import { ExternalLink } from "../commons/svgs/externalLink"



interface Props {
    projectsArray?: Project[]
}
export const ProjectsContainer = ({ projectsArray = [] }: Props) => {
    const [selected, setSelected] = useState(0)
    const dialRef = useRef(null)
    return (
        <section className="mt-12 w-full m-auto flex flex-col items-center" >
            <Typo variant="sectionTitle" container="h1">Mes projets</Typo>
            <div className="laptop:w-full laptop:grid laptop:grid-cols-3 laptop:gap-6 laptop:pt-8
            mobile:px-4 mobile:flex mobile:flex-col mobile:gap-4">
                {projectsArray.map((project: Project, index) => {
                    const imageInfo = ""
                    return <ProjectCard
                        key={index}
                        dialRef={dialRef}
                        setSelected={setSelected}
                        index={index}
                        presentation={project.presentationImage?.url}
                    >{project.name}</ProjectCard>
                }
                )}
            </div>
            <CustomDialog dialRef={dialRef}>
                {projectsArray[selected].logoImage &&
                    <img src={`https://api-portfolio.kevin-kerkar.com/images/${projectsArray[selected]?.logoImage.url}`}
                        className="rounded-[40%] object-cover shadow-xl w-[250px] aspect-square shadow-[var(--secondary-color)]
                        mobile:w-[175px]"
                        alt="Logo du projet" />}
                <Typo variant="dialogTitle" container="h1">{projectsArray[selected]?.name}</Typo>
                <StackContainer stackList={projectsArray[selected]?.technos}></StackContainer>
                <LinkContainer
                    links={
                        [{
                            link: projectsArray[selected]?.githubLink ? projectsArray[selected].githubLink : "",
                            image: <GithubSVG customStyle={{
                                width: "30px",
                                height: "30px",
                                fill: "fill-[var(--primary-text)]",
                                fillHover: ""
                            }} />,
                            label:"Voir le projet sur Github "
                        },
                        {
                            link: projectsArray[selected]?.externalLink !== undefined ? projectsArray[selected].externalLink : "",
                            image: <ExternalLink
                            customStyle = {{
                                width:"30px",
                                height:"30px",
                                stroke: "stroke-[var(--primary-text)]",
                            }}
                            />,
                            label:"Voir le site."
                        }
                        ]
                    }
                    customClass="project" />
                <ProjectContext>
                    {projectsArray[selected]?.description}
                </ProjectContext>

                <Carrousel imagesArray={projectsArray[selected]?.images} />
            </CustomDialog>


        </section>
    )
}