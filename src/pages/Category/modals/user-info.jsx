import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export function UserInfoDialog({ open, close }) {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '+998',
    modelName: '',
    browser: '',
    address: '', // ✅ manzil qo‘shildi
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)

  const { pathname } = useLocation()
  const base_url = import.meta.env.VITE_API_BASE_URL

  const sendToTelegram = async (data) => {
    const BOT_TOKEN = '8042510110:AAHOSxuklunzCKngM0nPotsvIA4BcWl_3oY'
    const CHAT_ID = '-1002683978598'
    const message = `
📝 <b>Yangi buyurtma:</b>

👤 <b>Ism:</b> ${data.firstName}
📞 <b>Telefon:</b> ${data.phoneNumber}
📦 <b>Model:</b> ${data.modelName}
🌐 <b>Brauzer:</b> ${data.browser}
📍 <b>Manzil:</b> ${data.address}
    `

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
  }

  const productId = pathname.split('/').pop()

  useEffect(() => {
    if (productId) {
      fetch(`${base_url}/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.data)
          setFormData((prev) => ({
            ...prev,
            modelName: data?.data?.name?.uz || '',
          }))
        })
        .catch((err) => {
          console.error('Failed to fetch product:', err)
        })
    }

    // ✅ Brauzer aniqlash
    const userAgent = navigator.userAgent.toLowerCase()
    let browser = 'Unknown'

    if (userAgent.includes('yabrowser')) browser = 'Yandex Browser'
    else if (userAgent.includes('edg')) browser = 'Microsoft Edge'
    else if (userAgent.includes('opr') || userAgent.includes('opera')) browser = 'Opera'
    else if (userAgent.includes('chrome') && !userAgent.includes('edg')) browser = 'Google Chrome'
    else if (userAgent.includes('safari') && !userAgent.includes('chrome')) browser = 'Safari'
    else if (userAgent.includes('firefox')) browser = 'Mozilla Firefox'

    // IP orqali manzil aniqlash
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const city = data.city
        const region = data.region
        const country = data.country_name
        const fullAddress = `${city}, ${region}, ${country}`

        setFormData((prev) => ({
          ...prev,
          browser,
          address: fullAddress,
        }))
      })
      .catch((err) => {
        console.error('IP Location fetch error:', err)
        setFormData((prev) => ({
          ...prev,
          browser,
        }))
      })
  }, [productId, base_url])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === 'phoneNumber') setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const phoneNumber = parsePhoneNumberFromString(formData.phoneNumber)

    if (!phoneNumber || !phoneNumber.isValid()) {
      setError('Please enter a valid phone number.')
      return
    }

    try {
      setLoading(true)

      const res = await fetch(`${base_url}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to create order')

      const result = await res.json()
      console.log('Order created:', result)

      await sendToTelegram(formData)
      close()
    } catch (err) {
      console.error(err)
      alert('Error submitting order')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && close()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-black font-bold text-xl text-center">
            {t('form.fill_form')}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-5 py-4">
          <div className="grid gap-2">
            <Label htmlFor="firstName">{t('form.full_name')}</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">{t('form.phone_number')}</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+998901234567"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className={error ? 'border-red-500' : ''}
            />
            {error && <p className="text-sm text-red-500">{t('form.error_phone')}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="modelName">{t('form.model')}</Label>
            <Input
              id="modelName"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          <DialogFooter className="mt-2">
            <Button type="button" variant="outline" onClick={close}>
              {t('form.cancel')}
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600" disabled={loading}>
              {loading ? t('form.submitting') : t('form.submit')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
