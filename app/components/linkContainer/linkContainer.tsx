import { CustomLink } from "./customLink"

interface customLink {
    link: string,
    image: React.ReactNode,
    label?: string,
}
interface Props {
    links: customLink[],
    customClass: string,

}

export const LinkContainer = ({ links, customClass }: Props) => {
    let customStyle = ""
    let customStyleLink = ""
    switch (customClass) {
        case "header":
            customStyle = "flex gap-3 position absolute top-[3%] right-[3%]"
            break
        case "project":
            customStyle = "flex gap-10 absolute top-[6%] right-[3%] -translate-y-full"
            customStyleLink = "flex items-center gap-2 bg-[var(--primary-color)] text-[var(--primary-text)] px-3 py-2 rounded-xl text-lg shadow-lg"
            break

    }
    return (
        <div className={customStyle}>
            {links.map((item, index) =>
                <CustomLink
                    label={item.label ? item.label : ""}
                    key={index}
                    link={item.link}
                    customStyleLink={customStyleLink}
                >
                    {item.image}
                </CustomLink>
            )}
        </div>
    )
}