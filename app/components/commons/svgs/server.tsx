interface Props {
    customStyle:{
        fill: string,
        height: string,
        width: string,
        stroke:string,
    }
}
export const ServerSVG = ({ customStyle }:Props) => {
    return (
        <svg viewBox="-2.4 -2.4 28.80 28.80"
            width={customStyle.width}
            height={customStyle.height}
            fill={customStyle.fill}
            xmlns="http://www.w3.org/2000/svg">
            <g >
                <path d="M22 19H14M2 19H10" stroke={customStyle.stroke}
                    strokeLinecap="round"></path>
                <path d="M12 17V14" stroke={customStyle.stroke}
                    strokeLinecap="round"></path>
                <circle cx="12" cy="19" r="2" stroke={customStyle.stroke} ></circle>
                <path
                    d="M2 11C2 9.34315 3.34315 8 5 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H5C3.34315 14 2 12.6569 2 11Z"
                    stroke={customStyle.stroke} >

                </path>
                <path
                    d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8H5C3.34315 8 2 6.65685 2 5Z"
                    stroke={customStyle.stroke} >

                </path>
                <path d="M13 5L19 5" stroke={customStyle.stroke}
                    strokeLinecap="round">

                </path>
                <path d="M13 11L19 11" stroke={customStyle.stroke}
                    strokeLinecap="round">

                </path>
                <circle cx="6" cy="5" r="1" fill={customStyle.stroke}></circle>
                <circle cx="6" cy="11" r="1" fill={customStyle.stroke}></circle>
            </g>
        </svg>
    )
}