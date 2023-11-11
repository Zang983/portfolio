import { Typo } from "../commons/Typo"

interface Props {
    children: string
}
export const Tech = ({ children }: Props) => {
    return (
        <Typo container="li" variant="cardsTech">
            {children}
        </Typo>
    )
}