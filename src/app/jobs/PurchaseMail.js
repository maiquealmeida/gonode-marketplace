const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handler (job, done) {
    const {
      ad,
      user,
      content
    } = job.data

    await Mail.sendMail({
      from: '"Maique Almeida" <maique.almeida@maiquealmeida.com.br>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: {
        user,
        content,
        ad
      }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
