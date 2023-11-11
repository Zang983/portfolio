import { useEffect } from 'react'

export const MessageAlert = ({ type, setIsVisible }: { type: string,setIsVisible:(value:boolean)=>void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    let style =""
    let message = ""
    switch (type) {
        case "success":
            message = "Message envoyé !"
            style = "bg-[var(--primary-color)] text-lg"
            break
        case "fail":
            message = "Problème lors de l'envoi du message"
            style = "bg-red-500"
            break
    }
    return (
        <div className={`alertOpen fixed top-0 right-[50% ]-translate-x-1/2 w-[250px] h-[90px] border border-white flex items-center justify-center   ${style}`}>
            {message}
        </div>
    )

}