const nodemailer = require('nodemailer');

exports.post = (req, res, next) => {

    const mensagem = `
        POSTO \n \n
        Seu link para recuperação de senha chegou! \n
        ${req.body.link} \n \n \n 
        Se você NÃO solicitou a alteração de senha, desconsidere este e-mail.
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        auth: {
            user: 'teste.site@veredastecnologia.com.br',
            pass: '123Mudar@'
        },
        secure: true
    });

    const mailOptions = {
        from: 'teste.envio',
        to: req.body.email,
        subject: "Recuperação de senha Web POSTO",
        text: mensagem
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Erro ao enviar o e-mail:', error);
        } else {
            res.status(200).send('Email enviado com sucesso!');
        }
    });
};