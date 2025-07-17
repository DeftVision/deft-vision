import emailjs from '@emailjs/browser';

export async function sendContactForm(formElement) {
    return emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
}

export async function sendEarlyAccessForm(formElement) {
    return emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_EARLY_ADOPT_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_EARLY_ADOPT_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
}



