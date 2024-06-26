import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({ 
    host: 'smtp.hotmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'danielsantilli1@hotmail.com',
        pass: process.env.SMTP_SECRET,
        authMethod: 'LOGIN'
    }
});

const sendMail = async (mailOptions) => {
    try {
        await transport.sendMail(mailOptions);
        console.log('Email enviado correctamente');
    } catch (error) {
        console.error(error);
    }
};

export const sendRecoveryMail = (email, recoveryLink) => {
    const mailOptions = {
        from: 'danielsantilli1@gmail.com',
        to: email,
        subject: 'Link para reestablecer su contraseña',
        text: `Haga click en el siguiente enlace para reestablecer su contraseña: ${recoveryLink}`
    }

    sendMail(mailOptions);
}

export const sendDeleteMail = (email) => {
    const mailOptions = {
        from: 'danielsantilli1@gmail.com',
        to: email,
        subject: 'Novedades respecto a su cuenta',
        text: `Sr. Usuario, su cuenta ha sido eliminada por inactividad`
    }

    sendMail(mailOptions);
}