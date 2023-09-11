const nodemailer = require('nodemailer');

exports.post = (req, res, next) => {

    const assunto = req.body.subject;
    const mensagem = `
        O usuário ${req.body.usuario},
        senha ${req.body.senha}, obteve falha na tentativa de login. \n
        Erro : ${req.body.message_error} \n
        token: ${req.body.cnpj} \n 
        Origem: ${req.body.origem} \n
        Nome do dispositivo: ${req.body.device} \n
        IP: ${req.body.ip}
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        auth: {
            user: 'teste.site@veredastecnologia.com.br',
            pass: '123Mudar@'
        },
        secure: true
    });

    // Lista de destinatários
    const destinatarios = ['romario.silveira@veredastecnologia.com.br', 'andre.coury@veredastecnologia.com.br'];

    const mailOptions = {
        from: 'teste.envio',
        to: destinatarios.join(','),
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