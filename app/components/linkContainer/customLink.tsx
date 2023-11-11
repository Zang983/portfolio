import Image from "next/image"
import Link from "next/link"

interface Props{
    link:string,
    customStyleLink?:string,
    children : string|React.ReactNode,
    label:string
}

export const CustomLink = ({ link, customStyleLink,children,label }:Props) => {
    return (
        <>
            {
                <Link href={link} aria-label={label} className={customStyleLink}>
                    {children}
                </Link>
            }
        </>
    )
}