import { Typo } from "../commons/Typo"
import { InputHTMLAttributes } from "react"
import {FieldErrors} from 'react-hook-form'


interface Props {
    labelText: string,
    propsInput: InputHTMLAttributes<HTMLInputElement>,
    errorMessage?: string,
    errors:FieldErrors
}



export const CustomInput = ({ labelText, propsInput, errors, errorMessage = "Ce champ est obligatoire." }: Props) => {
    return (
        <>
            <Typo container="label" variant="formLabel">{labelText}
                <input {...propsInput} className="outline-none w-3/4 bg-transparent text-xl text-[var(--primary-text)] font-bold border-b-2 border-[var(--primary-text)] mb-3 
                laptop:h-[20px] "/>
            </Typo>
            {
                errors[propsInput.name as string] &&
                <Typo container="p" variant="errorForm">{errorMessage}</Typo>}
        </>

    )
}