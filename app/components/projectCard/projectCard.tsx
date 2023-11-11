'use client'

import Image from "next/image"
import { Typo } from "../commons/Typo"

interface Props {
    children: React.ReactNode,
    dialRef: React.RefObject<HTMLDialogElement>,
    setSelected: (index: number) => void,
    index: number,
    presentation: string,
}
export const ProjectCard = ({ children, dialRef, setSelected, index, presentation }: Props) => {
    const handleClick = () => {
        dialRef?.current?.show()
        setSelected(index)
    }

    return (
        <figure
            onClick={handleClick}
            className="mobile:mt-6
            bg-white
            laptop:mt-0 
            relative border border-[var(--primary-color)] shadow-2xl rounded-xl w-full aspect-[16/9] cursor-pointer 
            hover:after-content-[''] hover:after:block hover:after:w-full hover:after:h-full hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:bg-black hover:after:rounded-xl hover:after:opacity-10"
        >
            <img 
            src={`https://api-portfolio.kevin-kerkar.com/images/${presentation}`} 
            alt="illustration du projet" 
            className="laptop:w-full max-w-full laptop:h-full px-3 py-1 object-contain rounded-t-xl " />
            <figcaption className="h-[50px] flex justify-center items-center border-t-2">
                <Typo variant="cardName" container="h2">{children}</Typo>
            </figcaption>
        </figure>
    )
}