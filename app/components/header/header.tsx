import { Typo } from "../commons/Typo"
import { LinkContainer } from "../linkContainer/linkContainer"
import { GithubSVG } from "../commons/svgs/github"
import { LinkedinSVG } from "../commons/svgs/linkedin"
import { ContactSVG } from "../commons/svgs/contact"


export const Header = () => {
    const iconSize="45"
    return (
        <header className="
        mobile:w-full mobile:bg-[var(--primary-color)] mobile:p-0 mobile:m-0
        largeDesktop:w-full largeDesktop:bg-[var(--primary-color)] largeDesktop:p-28 largeDesktop:shadow-lg
        ">
            <div className="flex items-center flex-col mobile:py-14 mobile:px-6 laptop:p-16 ">
                <Typo variant="headerTitle" container="h1">Développeur web</Typo>
                <Typo variant="headerPresentation" container="h2">Je m'appelle Kevin Kerkar, et je suis un développeur d'applications web. Depuis mon adolescence, j'ai nourri une passion profonde pour l'informatique, et j'ai commencé à apprendre en autodidacte. Une opportunité professionnelle m'a finalement encouragé à formaliser ma passion en une carrière. Aujourd'hui, je mets mes compétences au service du développement web, où je continue à apprendre et à innover pour créer des solutions numériques exceptionnelles.</Typo>
            </div>
            <LinkContainer links={[
                {
                    link: "https://github.com/zang983",
                    label:"Liens vers mon profil github",
                    image: <GithubSVG
                        customStyle={{
                            width: iconSize,
                            height:iconSize,
                            fill:"fill-[var(--secondary-color)]",
                            fillHover : "hover:fill-white"
                        }} />
                },
                {
                    link: "https://www.linkedin.com/in/kevin-kerkar-8a8a56243/",
                    label:"Liens vers mon profil linkedin",
                    image: <LinkedinSVG 
                    customStyle={{
                        width:iconSize,
                        height:iconSize,
                        fill:"fill-[var(--secondary-color)]",
                        fillHover : "hover:fill-white"
                    }}/>
                },
                {
                    link:'#formContact',
                    label:"Ancre vers la partie contact",
                    image:<ContactSVG 
                    customStyle={{
                        width:iconSize,
                        height:iconSize,
                        fill:"fill-[var(--secondary-color)]",
                        fillHover : "hover:fill-white",
                        stroke:"stroke-none"
                    }}/>
                }
            ]}
                customClass="header"
            />
        </header>
    )
}