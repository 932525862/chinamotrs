import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import axios from 'axios'

const ContactPage = () => {
  const { t } = useTranslation()

  const BOT_TOKEN = '8042510110:AAHOSxuklunzCKngM0nPotsvIA4BcWl_3oY'
  const CHAT_ID = '-1002683978598'

  const [firstName, setFirstName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [modelName, setModelName] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      firstName,
      phoneNumber: '+998' + phoneNumber,
      modelName,
    }

    const telegramText = `📥 Yangi so‘rov:\n\n👤 Ism: ${firstName}\n📞 Tel: +998${phoneNumber}\n💬 Telegram: @${
      modelName || 'yo‘q'
    }`

    try {
      await axios.post('https://api.grandfitness.com.uz/api/orders', payload)

      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: telegramText,
        parse_mode: 'HTML',
      })

      // Forma tozalanadi
      setFirstName('')
      setPhoneNumber('')
      setModelName('')
      setSuccessMessage('')
      setIsModalOpen(true)

      setTimeout(() => {
        setIsModalOpen(false)
      }, 3000)
    } catch (error) {
      console.error('Xatolik:', error)
      setSuccessMessage('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.')
    }
  }

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'rgb(237, 237, 237)' }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
      <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-4">{t('contact.formTitle')}</h3>
        <p className="text-center text-green-600 mb-8 uppercase font-semibold">
          {t('contact.formSubtitle')}
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">{t('contact.nameLabel')}</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder={t('contact.namePlaceholder')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">{t('contact.phoneLabel')}</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-600 text-sm">
                +998
              </span>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-r-md p-2"
                placeholder="90 123 45 77"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">{t('contact.messageLabel')}</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder={t('contact.messagePlaceholder')}
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 border-2 border-lime-500 text-black rounded-full hover:bg-lime-500 hover:text-white transition"
            >
              {t('contact.submit')}
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="text-center text-red-600 font-semibold mt-4">{successMessage}</p>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          {t('contact.privacyNotice')}{' '}
          <span className="text-lime-600">{t('contact.privacyConsent')}</span>
        </p>
      </div>

      <div className="mt-10 flex justify-center space-x-6 text-lime-600">
        <a href="#">Telegram</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-green-600">✅ So‘rov yuborildi!</h3>
            <p>
              Sizning so‘rovingiz muvaffaqiyatli yuborildi.
              <br />
              Tez orada siz bilan bog‘lanamiz.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactPage
