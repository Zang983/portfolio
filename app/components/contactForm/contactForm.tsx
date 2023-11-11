'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Typo } from "../commons/Typo"
import { CustomInput } from "./customInput"
import { useState } from 'react'
import { MessageAlert } from "../commons/messageAlert"


interface contactForm {
    lastName: string,
    firstName: string,
    email?: string,
    phoneNumber: string,
    societyName?: string,
    message: string
}

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email(),
    phoneNumber: yup.string().required(),
    societyName: yup.string(),
    message: yup.string().required()
}).required()

export const ContactForm = () => {
    const [alertVisible, setAlertVisible] = useState(false)
    const [typeMessage, setTypeMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit: SubmitHandler<contactForm> = (data) => {
        const requestPath = "https://api-portfolio.kevin-kerkar.com/api/newContact"
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const request = new Request(requestPath, options)
        fetch(request)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then((data) => {
                setAlertVisible(true)
                setTypeMessage("success")
            })
            .catch(error => {
                setAlertVisible(true)
                setTypeMessage("fail")
            })
    }
    return (
        <>
            <Typo container="h2" variant="sectionTitle">Me contacter</Typo>
            {alertVisible && <MessageAlert setIsVisible={setAlertVisible} type={typeMessage} />}
            <form
                id="formContact"
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8
                mobile:flex mobile:flex-col mobile:gap-6 mobile:w-[80%]
                laptop:grid laptop:grid-cols-2 laptop:gap-12  ">
                <div className="flex flex-col justify-center gap-2">
                    <CustomInput labelText="Votre prénom :" propsInput={{
                        ...register("firstName"),
                    }}
                        errors={errors} />
                    <CustomInput labelText="Votre nom :" propsInput={{
                        ...register("lastName"),
                    }}
                        errors={errors} />
                    <CustomInput labelText="Adresse e-mail :" propsInput={{
                        ...register("email"),
                    }}
                        errors={errors} />
                    <CustomInput labelText="Téléphone :" propsInput={{
                        ...register("phoneNumber"),
                    }}
                        errors={errors} />
                    <CustomInput labelText="Nom de société :" propsInput={{
                        ...register("societyName"),
                    }}
                        errors={errors} />
                </div>
                <div className="text-center">
                    <Typo container="label" variant="textareaLabel">Votre message :
                        <textarea
                            {...register("message")}
                            className="mt-2 p-2 rounded-xl h-[150px] text-[var(--secondary-text)]
                            laptop:h-full"
                        >
                        </textarea>
                    </Typo>
                    {errors.message &&
                        <Typo container="p" variant="errorForm">Ce champ est obligatoire.</Typo>}
                </div>
                <button className="self-end rounded-xl border w-[150px] h-[75px] m-auto mb-10 font-bold text-xl bg-[var(--secondary-color)] text-[var(--secondary-text)] hover:scale-105 shadow-md hover:shadow-lg col-span-2">Envoyer</button>
            </form>

        </>
    )
}