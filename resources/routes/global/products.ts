import { TProduct } from '@/types/product';

export const productsData: TProduct[] = (() => {
  const data: TProduct[] = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      id: i,
      quantity: 22970,
      colors: ['#3c62ea', '#fc282f', '#00A651'],
      path: '/product/1',
      attributes: [
        { key: 'رنگ', value: 'سبز' },
        { key: 'برند', value: 'اپل' },
        { key: 'دسته بندی', value: 'موبایل' },
        { key: 'اقلام همراه', value: 'شارژر' },
      ],
      discount: 3,
      priceWithoutDiscount: 76530000,
      priceWithDiscount: 75530000,
      title: {
        fa: 'کنسول بازی مایکروسافت مدل ایکس باکس سری ایکس دیجیتال ادیتییشن سه ترابایت',
        en: 'Microsoft Xbox Series X Digital Edition Robot White Gaming Console TB',
      },
      category: {
        text: 'گیمینگ و لوازم',
        path: 'https://shopi.codisa.ir/product-category/%da%af%db%8c%d9%85%db%8c%d9%86%da%af-%d9%88-%d9%84%d9%88%d8%a7%d8%b2%d9%85/',
      },
      images: [
        '/images/global/product-1.png',
        '/images/global/product-2.png',
        '/images/global/product-3.png',
        '/images/global/product-4.png',
        '/images/global/product-5.png',
        '/images/global/product-6.png',
        '/images/global/product-7.png',
        '/images/global/product-8.png',
      ],
      description: `مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
    });
  }
  return data;
})();
