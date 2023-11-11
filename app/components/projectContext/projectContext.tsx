import { Typo } from "../commons/Typo"

interface Props{
children:string|React.ReactNode
}

export const ProjectContext = ({children}:Props) => {
    return (
        <Typo container="p" variant="contextProject">
            {children}
        </Typo>
    )
}