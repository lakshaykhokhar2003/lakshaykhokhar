import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {renderInput} from "../../utils/functions.tsx";
import {formFields, privateKey, publicKey, receiverEmail, receiverName, templateId} from "../constants";
import {FormData, formSchema} from "../../utils/types.ts";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await emailjs.send(privateKey, templateId, {
                from_name: data.name,
                to_name: receiverName,
                from_email: data.email,
                to_email: receiverEmail,
                message: data.message + " Message from: " + data.email
            },publicKey)
            reset();
        } catch (e) {
            console.log(e)
        }
    };



    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute  min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Lets Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve
                        your existing platform, or bring a unique project to life, I’m here to help.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col space-y-7" noValidate>
                        {formFields.map((field, index) => (
                            <div key={index}>
                                {renderInput(field, register, errors)}
                                {/*// @ts-expect-error props error */}
                                {errors[field.register] && <p className="text-red-500 mt-2">{errors[field.register].message}</p>}
                            </div>
                        ))}


                        <button className="field-btn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
