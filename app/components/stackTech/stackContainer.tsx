import { Tech } from "./tech"

interface Stack {
    idTechno:number,
    name:string,
    type:number
}

interface Props {
    stackList:Stack[]    
}
export const StackContainer = ({ stackList = [] }: Props) => {
    return (
        <ul className="flex gap-3 pb-4 flex-wrap justify-center mb-4">
            {stackList.map((tech, index) =>
                <Tech key={index}>{tech.name}</Tech>
            )}
        </ul>
    )
}