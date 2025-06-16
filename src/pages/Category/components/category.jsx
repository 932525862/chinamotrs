import { useState } from 'react';
import { Share2, MessageCircle, Copy, Facebook, Twitter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { productData } from '../fake-data/data';

const CategoryOnePage = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);


  const handleShare = (platform = "") => {
    if (platform) {
      const url = window.location.href;
      const text = `Проверьте этот ${productData.title}`;

      const shareUrls = {
        telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
      };

      if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank');
        // toast({ title: 'Ссылка открыта для публикации', description: `Поделиться через ${platform}` });
      }
    } else if (navigator.share) {
      navigator.share({
        title: productData.title,
        text: `Проверьте этот ${productData.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // toast({ title: 'Ссылка скопирована!', description: 'Ссылка на товар скопирована в буфер обмена' });
    }
    setShowShareOptions(false);
  };


  const openImageModal = () => {
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Product Image Section */}
            <div className="space-y-4 lg:space-y-6">
              <Card className="bg-white border-gray-200 shadow-xl p-4 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Product Image */}
                <div className="relative flex items-center justify-center h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl" onClick={openImageModal}>
                  <img
                    src={productData.image}
                    alt="STARFIT Dumbbell 1kg"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />

                </div>
              </Card>
            </div>

            {/* Product Details Section */}
            <div className="space-y-2 lg:space-y-0">
              {/* Header with Share Button */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 mb-2 sm:mb-3 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                    {productData.category}
                  </Badge>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 leading-tight text-gray-900 break-words">
                    {productData.title}
                  </h1>
                </div>

                <div className="relative flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm text-xs sm:text-sm"
                    onClick={() => setShowShareOptions(!showShareOptions)}
                  >
                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Поделиться</span>
                  </Button>

                  {showShareOptions && (
                    <Card className="absolute top-10 sm:top-12 right-0 z-10 bg-white border-gray-200 shadow-xl p-3 sm:p-4 w-40 sm:w-48 rounded-lg">
                      <div className="space-y-1 sm:space-y-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-xs sm:text-sm"
                          onClick={() => handleShare('telegram')}
                        >
                          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Telegram
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-green-600 hover:bg-green-50 text-xs sm:text-sm"
                          onClick={() => handleShare('whatsapp')}
                        >
                          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-xs sm:text-sm"
                          onClick={() => handleShare('facebook')}
                        >
                          <Facebook className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-sky-600 hover:bg-sky-50 text-xs sm:text-sm"
                          onClick={() => handleShare('twitter')}
                        >
                          <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Twitter
                        </Button>
                        <Separator className="my-1 sm:my-2" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-purple-600 hover:bg-purple-50 text-xs sm:text-sm"
                          onClick={() => handleShare()}
                        >
                          <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Скопировать ссылку
                        </Button>
                      </div>
                    </Card>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">ОПИСАНИЕ:</h3>
                <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {productData.description}
                </p>

                {/* Price and Purchase Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div className='flex gap-5 items-center justify-between'>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                        {productData.price.toLocaleString()}
                      </span>
                      <span className="text-lg sm:text-xl text-gray-600">{productData.currency}</span>
                    </div>
                    <button
                      className="relative group border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 flex items-center gap-2"
                    >
                      <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-10">
                        Add to cart
                      </span>
                      <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                    </button>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-200" />


            </div>
          </div>
        </div>

        {/* Image Modal */}
        {showImageModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white border-0 z-10"
                onClick={closeImageModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Modal Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={productData.image}
                  alt="STARFIT Dumbbell 1kg - Enlarged View"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Click outside to close modal */}
        {showImageModal && (
          <div
            className="fixed inset-0 z-40"
            onClick={closeImageModal}
          />
        )}
      </div>
    </>
  );
};

export default CategoryOnePage;