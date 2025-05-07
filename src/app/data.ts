const productNames = [
  '天然陶瓷瓶',
  '旅行保溫杯',
  '記事本補充紙',
  '金屬機械鉛筆',
  '皮革筆記本',
  '手工編織籃',
  '精緻茶壺組',
  '石灰岩手工皂',
  '竹製餐具組',
  '有機棉坐墊',
  '手繪馬克杯',
  '風格掛鐘',
  '植物精油組',
  '手工玻璃花瓶',
  '天然蜂蠟蠟燭',
  '羊毛氈拖鞋',
  '紫銅首飾盒',
  '實木相框',
  '手工印花餐巾',
  '草編置物籃',
  '環保隨行杯',
  '織布筆袋',
  '迷你多肉植物',
  '陶瓷醬料碟',
  '亞麻桌巾',
  '手工編織圍巾',
  '仙人掌盆栽',
  '橄欖木砧板',
  '織夢捕手',
  '特色書籤套裝',
]

// 產品描述範例
const productDescriptions = [
  '天然材質製成，每件都獨一無二',
  '精細做工，實用又美觀',
  '手工製作，展現匠人精神',
  '環保材質，對地球友善',
  '現代設計，融入傳統工藝',
  '簡約風格，適合各種場合',
  '獨特紋理，自然質感',
  '精緻包裝，送禮首選',
  '多功能設計，日常實用',
  '限量製作，收藏價值高',
]

/**
 * 生成指定數量的產品資料
 * @param count 需要生成的產品數量
 * @returns 產品資料陣列
 */
export function generateProducts(count = 30) {
  return Array.from({ length: count }, (_, index) => {
    const id = `${index + 1}`
    const name = productNames[index % productNames.length]
    const description = productDescriptions[Math.floor(Math.random() * productDescriptions.length)]

    return {
      id,
      name,
      href: `/photos/${id}`,
      price: `$${Math.floor(Math.random() * 186) + 15}`, // 隨機價格 $15-$200
      imageSrc: `https://picsum.photos/400/400?random=${id}`, // 添加隨機參數以避免快取問題
      imageAlt: `${name} - ${description}`,
    }
  })
}

// 預設匯出30個產品資料
export const products = generateProducts(30)

// 使用方式：
// 1. 預設使用: import { products } from '@/app/data';
// 2. 自訂數量: import { generateProducts } from '@/app/data';
//    const customProducts = generateProducts(10); // 生成10個產品資料
