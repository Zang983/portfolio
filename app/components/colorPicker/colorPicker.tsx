'use client'

import { Theme, changeTheme } from "../../functions"
import { useRef, useState } from "react"
import { ConfigSVG } from "../commons/svgs/configSVG"

interface Props {
    bgColor: string,
    theme: Theme,
    isSelected: boolean,
    setSelected: (index: number) => void,
    index: number
}
const ButtonColor = ({ bgColor, theme, isSelected, setSelected, index }: Props) => {
    const refButton = useRef<HTMLButtonElement>(null)
    const handleClick = (theme: Theme) => {
        changeTheme(theme)
    }
    if (refButton.current !== null)
        refButton.current.style.backgroundColor = bgColor
    return (
        <button
            ref={refButton}
            aria-label="Changez le thème de la page."
            className={` bg-[${bgColor}] ${isSelected && 'border-4 border-blue-600'} h-[50px] aspect-square`}
            onClick={() => { handleClick(theme); setSelected(index) }}
            title={theme.name}
        ></button>
    )
}

export const ColorPicker = () => {
    const themes = [
        {
            "name": "default",
            "--primary-color": "#206AC4",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#9EC9FB",
            "--secondary-text": "#141414",
            "--background-primary-color": "#E9F1FA",
            "--background-text": "#141414"
        },
        {
            "name": "gpt1",
            "--primary-color": "#206AC4",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#9EC9FB",
            "--secondary-text": "#141414",
            "--background-primary-color": "#E9F1FA",
            "--background-text": "#141414"
        },
        {
            "name": "gpt2",
            "--primary-color": "#59AD2F",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#FB9E59",
            "--secondary-text": "#141414",
            "--background-primary-color": "#FAE9E9",
            "--background-text": "#141414"
        },
        {
            "name": "gpt3",
            "--primary-color": "#C42020",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#3E82E7",
            "--secondary-text": "#141414",
            "--background-primary-color": "#F1E9E9",
            "--background-text": "#141414"
        },
        {
            "name": "gpt4",
            "--primary-color": "#FF5722",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#009688",
            "--secondary-text": "#141414",
            "--background-primary-color": "#F5F5DC",
            "--background-text": "#141414"
        },
        {
            "name": "gpt5",
            "--primary-color": "#FFC107",
            "--primary-text": "#000000",
            "--secondary-color": "#4CAF50",
            "--secondary-text": "#FFFFFF",
            "--background-primary-color": "#00304C",
            "--background-text": "#FFFFFF"
        },
        {
            "name": "gpt6",
            "--primary-color": "#795548",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#1D3557",
            "--secondary-text": "#141414",
            "--background-primary-color": "#F8DCBA",
            "--background-text": "#141414"
        },
        {
            "name": "gpt7",
            "--primary-color": "#f44336",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#8BC34A",
            "--secondary-text": "#141414",
            "--background-primary-color": "#FFEE58",
            "--background-text": "#141414"
        },
        {
            "name": "gpt8",
            "--primary-color": "#9C27B0",
            "--primary-text": "#FFFFFF",
            "--secondary-color": "#004D40",
            "--secondary-text": "#141414",
            "--background-primary-color": "#FFEADC",
            "--background-text": "#141414"
        }
    ]
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(0)
    const toggleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className={`${visible && "bg-white"} absolute left-[3%] top-[3%] rounded-xl`}>
            {!visible &&
                <button aria-label="Choix du thème de la page" onClick={() => toggleVisible()}>
                    <ConfigSVG
                        customStyle={{
                            fill: visible ? 'fill-black' : 'fill-[var(--secondary-color)]',
                            height: '45px',
                            width: '45px',
                            fillHover: visible ? '' : 'hover:fill-white',
                            stroke: "#CCCCCC"

                        }}
                    />
                </button>
            }
            {visible &&
                <button className="relative mt-3 left-3" onClick={() => {
                    toggleVisible()
                }}>
                    <svg height="25px" viewBox="0 0 512 512" width="25px" className="hover:fill-red-500 fill-[var(--primary-color)] hover:border-red-500 border-2 border-[var(--primary-color)] rounded-full " >
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                    </svg>
                </button>
            }
            <div className={`${visible ? 'grid' : 'hidden'}  bg-white grid-cols-4 gap-x-2 gap-y-3 p-3 w-[250px] rounded-xl `}>
                {themes.map((theme, index) =>
                    <ButtonColor
                        key={index}
                        bgColor={theme["--primary-color"]}
                        theme={theme}
                        isSelected={index === selected ? true : false}
                        setSelected={setSelected}
                        index={index}
                    />
                )}
            </div>
        </div>
    )
}