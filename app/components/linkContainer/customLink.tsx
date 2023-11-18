import Image from "next/image"
import Link from "next/link"

interface Props {
    link: string,
    customStyleLink?: string,
    children: string | React.ReactNode,
    label: string,
    title?: string,
}

export const CustomLink = ({ link, customStyleLink, children, label, title }: Props) => {
    return (
        <>
            {
                <Link href={link} aria-label={label} title={title}  target={(link !== "#formContact") ? "_blank" : "_self"} className={customStyleLink}>
                    {children}
                </Link>
            }
        </>
    )
}