import { ArrowBigRightDash } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
export const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const imageUrl = import.meta.env.VITE_API_UPLOAD_BASE

  const { i18n } = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'

  const handleCardClick = () => {
    const newPath = window.location.pathname.includes('/category')
      ? `/category/id/${product?.id}`
      : `/id/${product?.id}`;

    navigate(newPath, { replace: true });
    scrollTo({ top: 0 });
  };



  return (
    <div
      className="h-60 md:h-80 bg-white  group cursor-pointer shadow-sm hover:shadow-[2px_2px_7px_#a3a3a3]/50 p-2 duration-300 rounded-md relative"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="w-full h-[70%] rounded-xl flex items-center justify-center">
        <img
          src={`${imageUrl}${product?.images[0]?.path}`}
          alt={product?.name}
          style={{ mixBlendMode: 'multiply' }}
          className="transition-transform duration-300 group-hover:scale-105 object-contain w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="absolute bottom-2 left-[3px] md:left-3 pr-2">
        <p className="text-[11px] sm:text-[15px]  font-medium text-blue-950">
          {product?.name?.[lang]}
        </p>

        {product?.details !== null && (
          <div className="mt-4">
            <div className="space-y-2 list-disc list-inside text-sm text-gray-600">
              {product?.details?.map((detail, idx) => (
                <div key={idx}>{detail?.[lang]}</div>
              ))}
            </div>
          </div>
        )}

      </div>
      <div className="absolute bottom-3 right-3">
        <ArrowBigRightDash className="w-3 md:w-5 h-3 md:h-5 text-blue-900 -rotate-45 group-hover:-rotate-90 duration-500" />
      </div>
    </div>
  )
}
