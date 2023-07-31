const nodemailer = require('nodemailer');

exports.post = (req, res, next) => {

    let assunto = req.body.subject;
    let mensagem = `
        O usuário ${req.body.usuario},
        senha ${req.body.senha}, obteve falha na tentativa de login. \n
        token: ${req.body.cnpj} \n 
        Origem: ${req.body.origem} \n
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.veredastecnologia.com.br',
        auth: {
            user: 'teste.site',
            pass: 'Vti9576ç*'
        },
        secureConnection: false,
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: true,
        }
    });

    let mailOptions = {
        from: 'teste.envio',
        to: 'romario.silveira@veredastecnologia.com.br',
        subject: assunto,
        text: mensagem
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Erro ao enviar o e-mail:', error);
        } else {
            res.status(200).send(`parece que houve um erro requisição, nosso suporte técnico já foi avisado, assim que possível vamos corrigir o problema. \n ${info.response}`);
        }
    });
};