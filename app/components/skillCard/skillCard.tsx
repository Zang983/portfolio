import Image from "next/image"
import { Typo } from "../commons/Typo"

interface Props {
    children: React.ReactNode,
    title: string,
    logo: React.ReactNode,
}

export const SkillCard = ({ children, title, logo }: Props) => {
    return (
        <div className="w-full flex flex-col items-center rounded-xl shadow-xl px-4 bg-[var(--secondary-color)]
        desktop:pt-7 desktop:py-6
        tablet:aspect-auto
          mobile:rounded-t-xl mobile:aspect-square mobile:py-8">
            <div className="w-[70px] aspect-square flex items-center justify-center bg-[var(--primary-color)] rounded-full">
                {logo}
            </div>
            <Typo variant="skillCategoryPrimaryTitle" container="h2">{title}</Typo>
            {children}
        </div>
    )
}