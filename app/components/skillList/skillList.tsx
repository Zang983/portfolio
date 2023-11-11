import { Typo } from "../commons/Typo"

interface Props {
    title: string,
    list: string[]
}
export const SkillList = ({ title, list = ["test"] }: Props) => {
    return (
        <div className="pt-4 pb-1 text-center">
            <Typo variant={"skillCategoryTitle"} container="h3">{title}</Typo>
            <ul>
                {
                    list.map((item, index) =>
                        <Typo key={index} variant="skillCategoryItem" container="li">{item}
                        </Typo>
                    )}
            </ul>
        </div>
    )
}