import axios from 'axios';

type PropsMail = {
    name: string;
    email: string;
    message: string;
}
export const sendMail = async ({ name, email, message }: PropsMail): Promise<boolean> => {

    const result = await axios.post('https://mail-send-nestjs.onrender.com/mail/send', {
        name,
        email,
        message,
    })

    return !!result;

}