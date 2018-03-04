// shop data
// ----
// - everything in the shops object [Array] is STD to Intl
// - sans the (format method) which allows us to add brand styles particular to each shop, (yum 🍭) 
const shops = [
  {
    currency: 'USD', 
    lang: 'en-US',
    options: { currencyDisplay: 'symbol', style: 'currency', currency: 'USD' },
    format: (s) => `${s}—US pricing format 🇺🇸`, 
  },
  {
    currency: 'AUD', 
    lang: 'en-AU',
    options: { currencyDisplay: 'code', style: 'currency', currency: 'AUD' },
    format: (s) => `${s}—Austalia pricing format 🇦🇺`, 
  },
  {
    currency: 'CAD', 
    lang: 'en-CA',
    options: { currencyDisplay: 'code', style: 'currency', currency: 'CAD' },
    format: (s) => `${s}—Canada pricing format 🇨🇦`, 
  },
  {
    currency: 'GBP', 
    lang: 'en-UK',
    options: { currencyDisplay: 'symbol', style: 'currency', currency: 'GBP' },
    format: (s) => `${s}—England pricing format 🇬🇧`, 
  }
]

// resolve shop
const resolveShop = (el, num, shops) => {
  try {
    const resolvedShop = shops.filter(shop => shop.currency === el)[0]
    const resolvedPrice = new Intl.NumberFormat(resolvedShop.lang, resolvedShop.options).format(num)
    return resolvedShop.format(resolvedPrice)
  } catch(e) {
    return console.error(`🚨 resolveShop error: ${e}`)
  }
}

// adds html for each shop
[].slice.call(document.querySelectorAll('.shop')).forEach(shop => {
  const code = shop.getAttribute('data-shop')
  const num = parseFloat(shop.getAttribute('data-num'))
  shop.innerHTML = resolveShop(code, num, shops)
})
