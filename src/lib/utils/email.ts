import axios from "axios";

export type Mailata = {
    toName: string;
    toEmail: string;
}

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const SENDER_EMAIL = "info@themeanssolutions.com";
const SENDER_NAME = "Means Solutions";
const SUBJECT = "BPM Training Registration Successful";
const CONTENT = `<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>`;

export async function sendRegistrationSuccessEmail(data: Mailata) {
    const mailData = {
        sender: {
            name: SENDER_NAME,
            email: SENDER_EMAIL
        },
        to: [
            {
                email: data.toEmail,
                name: data.toName
            }
        ],
        subject: SUBJECT,
        htmlContent: CONTENT
    }

    // @ts-ignore
    const res = await axios.post(BREVO_URL, JSON.stringify(mailData), {
        headers: {
            'X-Mailin-custom': `api-key:${import.meta.env.VITE_BREVO_API_KEY}|accept:application/json|content-type:application/json`
        },
        validateStatus: function (status) {
            return status < 500;
        }
    })

    return res?.status < 400;
}
