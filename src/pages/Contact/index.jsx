const ContactPage = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgb(237, 237, 237)" }}>
      <h2 className="text-3xl font-bold text-center mb-12">BOG'LANISH</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-2">Manzil:</p>
          <p>Toshkent shahri, Chilonzor tumani, Naqqoshlik ko'cha, 20-uy</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-2">Yagona ma'lumot markazi:</p>
          <p className="text-green-600 font-semibold">+998 71 200 02 26</p>
          <p className="text-green-600 font-semibold">+998 71 200 02 77</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-2">E-mail:</p>
          <p>info@sportmix.uz</p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-4">Bizga nima xizmatinigiz bor?</h3>
        <p className="text-center text-green-600 mb-8 uppercase font-semibold">
          MUTAXASSISLARIMIZ 5 DAQIQA SIZGA TELEFON QILIB BILMOQCHI BO'LGAN BARCHA SAVOLLARINGIZGA JAVOB BERISHADI
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Sizning ismingiz *</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Sizning fikringiz</label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 h-24" />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Telefon raqami yoki Email *</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button className="px-6 py-2 border-2 border-lime-500 text-black rounded-full hover:bg-lime-500 hover:text-white transition">
              YUBORISH
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Jo'natish tugmasini bosganda o'zingiz haqingizdagi <span className="text-lime-600">shaxsiy ma'lumot ishlanishiga ruxsat bergan bo'lasiz</span>
        </p>
      </div>

      <div className="mt-10 flex justify-center space-x-6 text-lime-600">
        <a href="#">Telegram</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">YouTube</a>
      </div>
    </div>
    )
}

export default ContactPage