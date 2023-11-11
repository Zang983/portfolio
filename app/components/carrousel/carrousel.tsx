'use client'
import { ImageProject } from "../../functions"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Props {
    imagesArray: ImageProject[]
}

export const Carrousel = ({ imagesArray = [] }: Props) => {
    const [selected, setSelected] = useState(0)

    const handlePrev = () => {
        setSelected(selected - 1);
    }
    const handleNext = () => {
        setSelected(selected + 1);
    }
    useEffect(() => {
        setSelected(0)
    }, [imagesArray])
    return (
        <div className="w-full border-2 flex flex-col relative laptop:overflow-hidden h-[550px] mt-4">
            <button onClick={handlePrev} className={`${selected > 0 ? "visible" : "invisible"} h-[50px]`}>Précédent</button>
            {imagesArray.map((image, index) =>
                <img
                    key={index}
                    src={`https://api-portfolio.kevin-kerkar.com/images/${image.url}`}
                    alt="capture d'écran du projet"
                    className={`h-full max-h-[450px] w-full transform transition-all duration-500 ${index === selected ? "translate-y-0 opacity-100 " : "translate-y-full opacity-0 hidden"}`}
                />
            )}
            <button className={`${selected + 1 < imagesArray.length ? "visible" : "invisible"} h-[50px]`} onClick={handleNext}>Suivant</button>
        </div>)
}