interface Props {
    customStyle:{
        fill: string,
        height: string,
        width: string,
        stroke:string,
    }
}
export const ScreenSVG = ({ customStyle }:Props) => {
    return (
        <svg
            width={customStyle.width}
            height={customStyle.height}
            viewBox="0 0 24 24"
            fill={customStyle.fill}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 9C2 6.17157 2 4.75736 2.87868 3.87868C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.87868C22 4.75736 22 6.17157 22 9V10C22 12.8284 22 14.2426 21.1213 15.1213C20.2426 16 18.8284 16 16 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10V9Z"
                stroke={customStyle.stroke}></path>
            <path d="M12 19V16.5M12 19L18 21M12 19L6 21"  stroke={customStyle.stroke}
                strokeLinecap="round"></path>

        </svg>
    )
}