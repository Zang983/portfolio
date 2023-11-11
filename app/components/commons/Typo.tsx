import React from "react"
interface Props {
    container?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span" | "li" | "label"
    children: React.ReactNode | string | any
    variant: "headerTitle" | "headerPresentation" | "skillCategoryPrimaryTitle" | "skillCategoryTitle" | "skillCategoryItem" | "sectionTitle" | "dialogTitle" | "projectName" | "cardsTech" | "contextProject" | "formLabel" | "errorForm" | "textareaLabel" | "cardName"
}

export const Typo = ({ container: Container = "div", children, variant }: Props) => {

    let customStyle = ""
    let globalStyle = ""
    let mobileStyle = ""
    let tabletStyle = ""
    let laptopStyle = ""
    let desktopStyle = ""
    let largeDesktop = ""
    switch (variant) {
        case "headerTitle":
            globalStyle = "font-bold text-center text-[var(--primary-text)]"
            mobileStyle = "mobile:text-5xl mobile:mt-10 text-6xl "
            tabletStyle = "tablet:mt-8"
            largeDesktop = " largeDesktop:mb-3 largeDesktop:mt-0 "
            break
        case "headerPresentation":
            globalStyle = "text-[var(--primary-text)] text-justify"
            mobileStyle = "mobile:text-center mobile:text-lg mobile:w-full mobile:mt-3"
            laptopStyle = "laptop:w-full"
            desktopStyle = "desktop:w-4/5 mb-8"
            largeDesktop = "largeDesktop:mt-2"
            break
        case "skillCategoryPrimaryTitle":
            laptopStyle = "laptop:text- laptop:w-full laptop:text-2xl"
            desktopStyle = "desktop:w-full desktop:text-xl "
            largeDesktop = "relative uppercase font-bold text-2xl pt-5 pb-1 text-center text-[var(--primary-color)] after:content-[''] after:block after:w-[80%]"
            break
        case "skillCategoryTitle":
            largeDesktop = "uppercase text-xl text-[var(--secondary-text)] pb-2 underline font-bold"
            break
        case "skillCategoryItem":
            largeDesktop = "uppercase text-[var(--secondary-text)] font-medium"
            break
        case "sectionTitle":
            largeDesktop = "uppercase text-2xl font-semibold underline w-full text-center"
            break
        case "dialogTitle":
            largeDesktop = "text-6xl pt-6 pb-6 text-[var(--primary-color)] capitalize font-bold underline my-4 "
            break
        case "projectName":
            break
        case "cardsTech":
            largeDesktop = "px-2 py-1 min-w-[65px] shadow-md text-center font-bold uppercase bg-[var(--secondary-color)] text-black"
            break
        case "contextProject":
            largeDesktop = "bg-[var(--secondary-color)] px-4 py-6 rounded-xl shadow-md text-justify mt-6 "
            break
        case "errorForm":
            largeDesktop = "text-[var(--primary-text)] text-xs italic "
            break
        case "formLabel":
            globalStyle = "flex gap-2  justify-between items-end"
            laptopStyle = ""
            mobileStyle = "mobile:flex-col items-center mobile:w-full"
            largeDesktop = "largeDesktop:flex-row"
            break
        case "textareaLabel":
            laptopStyle = "h-full pb-2"
            largeDesktop = "flex flex-col"
            break
        case "cardName":
            largeDesktop = "uppercase font-bold text-3xl text-[var(--primary-color)]"
            break
    }
    customStyle = `${globalStyle} ${mobileStyle} ${tabletStyle} ${laptopStyle} ${desktopStyle} ${largeDesktop}`
    return (
        <Container className={`${customStyle}`}>
            {children}
        </Container>
    )
}
