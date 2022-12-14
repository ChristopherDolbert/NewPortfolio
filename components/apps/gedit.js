import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
        }
    }

    componentDidMount() {
        emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    sendMessage = async () => {
        let email = $("#sender-email").val();
        let name = $("#sender-name").val();
        let subject = $("#sender-subject").val();
        let message = $("#sender-message").val();

        email = email.trim();
        name = name.trim();
        subject = subject.trim();
        message = message.trim();

        let error = false;


        if (!email.includes("@") && !email.includes(".")) {
            $("#sender-email").val('');
            $("#sender-email").attr("placeholder", "Merci d'utiliser un vrai email");
            error = true;
        } else if(email.length === 0) {
            $("#sender-email").val('');
            $("#sender-email").attr("placeholder", "L'e-mail ne doit pas être vide !");
            error = true;
        } else if(email.length <= 8) {
            $("#sender-email").val('');
            $("#sender-email").attr("placeholder", "Êtes-vous sûr que vous utilisez un bon email ?");
            error = true;
        }



        if (name.length === 0) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Le prénom ne doit pas être vide !");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Le message ne doit pas être vide !");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true });

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_USER_ID;
        const templateParams = {
            'email': email,
            'name': name,
            'subject': subject,
            'message': message,
        }

        emailjs.send(serviceID, templateID, templateParams, userID).then(() => {
            this.setState({ sending: false });
            $("#close-gedit").trigger("click");
        }).catch(() => {
            this.setState({ sending: false });
            $("#close-gedit").trigger("click");
        })

        ReactGA.event({
            category: "Send Message",
            action: `${email}, ${name}, ${subject}, ${message}`
        });

    }

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
                    <span className="font-bold ml-2">Envoyez-moi un message</span>
                    <div className="flex">
                        <div onClick={this.sendMessage} className="border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80">Envoyer</div>
                    </div>
                </div>
                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen">
                    <div className="absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker"></div>
                    <div className="relative">
                        <input id="sender-email" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="E-mail" spellCheck="false" autoComplete="off" type="email" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
                    </div>

                    <div className="relative">
                        <input id="sender-name" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="Prénom" spellCheck="false" autoComplete="off" type="text" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">2</span>
                    </div>
                    <div className="relative">
                        <input id="sender-subject" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="Sujet (peut être un feedback sur ce site web !)" spellCheck="false" autoComplete="off" type="text" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">3</span>
                    </div>
                    <div className="relative flex-grow">
                        <textarea id="sender-message" className=" w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent" placeholder="Message" spellCheck="false" autoComplete="none" type="text" />
                        <span className="absolute left-1 top-1 font-bold  text-sm text-ubt-gedit-blue">4</span>
                    </div>
                </div>
                {
                    (this.state.sending
                        ?
                        <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
                            <img className={" w-8 absolute animate-spin"} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
                        </div>
                        : null
                    )
                }
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}