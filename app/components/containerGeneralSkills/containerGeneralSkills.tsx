import { PersonSVG } from "../commons/svgs/person"
import { ScreenSVG } from "../commons/svgs/screen"
import { ServerSVG } from "../commons/svgs/server"
import { SkillCard } from "../skillCard/skillCard"
import { SkillList } from "../skillList/skillList"

export const ContainerGeneralSkills = () => {
    const svgSize = "55px"
    return (
        <section className="laptop:w-full laptop:m-auto laptop:-mt-16 laptop:rounded-xl laptop:grid laptop:grid-cols-3 laptop:gap-6
        tablet:w-[75%] tablet:h-auto
        mobile:flex mobile:flex-col mobile:gap-4 mobile:mx-auto mobile:-mt-16
        ">
            <SkillCard title="Frontend Developer" logo={
                <ScreenSVG
                    customStyle={{
                        width: svgSize,
                        height: svgSize,
                        fill: "none",
                        stroke: "#ffffff"
                    }}
                />}>
                <SkillList title="Langages connus" list={['html/css', 'Javascript','Typescript']} />
                <SkillList title="Outils & frameworks" list={['REACT', 'SASS','tailwind', "Figma",]} />
            </SkillCard>
            <SkillCard title="Backend Developer" logo={
                <ServerSVG
                    customStyle={{
                        width: svgSize,
                        height: svgSize,
                        fill: "none",
                        stroke: "#ffffff"
                    }}
                />}>
                <SkillList title="Outils & frameworks" list={['Node', 'Express', 'Multer']} />
                <SkillList title="SGBD" list={['MySQL', 'Sequelize', 'MongoDB','Mongoose']} />
            </SkillCard>
            <SkillCard title="Soft skills" logo={
                <PersonSVG
                    customStyle={{
                        width: svgSize,
                        height: svgSize,
                        fill: "#ffffff",
                    }}
                />}>
                <SkillList title="Qualités personnelles" list={["Esprit d'équipe", 'Autonome', "Passionné"]} />
                <SkillList title="Méthodologie de travail" list={["Agile", "Auto-didacte", "Kanban", "Adaptabilité"]} />
            </SkillCard>
        </section>
    )
}