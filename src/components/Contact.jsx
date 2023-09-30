import './Contact.css'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vzsyg4x', 'template_tyw4d4j', form.current, 'Apdofq8oJZ3g3vbx6')
            .then((result) => {
                console.log(result);
            }, (error) => {
                    return toast.error("Ocorreu um erro ao enviar a Menssagem!", { position: "bottom-center" });
            });

     
        toast.success("Messagem enviada com Sucesso!", { position: "bottom-center" });
        
        form.current.reset();
    }

    return (
        <section className="contact" id="contact">
            <h2 className="heading"><span>Contate-me!</span></h2>

            <form ref={form} action="" method="post" onSubmit={sendEmail}>
                <div className="input-box">
                    <input required minLength="5"
                        type="text"
                        id="name_sender"
                        name="name_sender"
                        placeholder='Nome Completo'
                    />
                    <input
                        required
                        type="email"
                        name="sender_email"
                        placeholder='Endereço e-mail' id="sender_email"
                    />
                </div>

                <div className="input-box">
                    <input
                        required minLength="8"
                        type="tel"
                        id="number_cel"
                        name="number_cel"
                        placeholder='Número Celular'

                    />
                    <input
                        required
                        type="text"
                        name="title_message"
                        placeholder='Assunto e-mail'
                        id="title_message"
                    />
                </div>

                <textarea
                    required
                    name="user_message"
                    id='user_message' cols="30" rows="10" placeholder='Sua Menssagem'
                >
                </textarea>
                <input className='btn' type='submit' value="Enviar Menssagem" />

            </form>
        </section>
    )
}