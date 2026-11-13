import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "বেসিক ইলেকট্রিক্যাল নলেজ",
  description: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং ও ইলেকট্রনিক্সের মৌলিক ধারণাসমূহ",
  lang: 'bn-BD',
  themeConfig: {
    nav: [
      { text: 'হোম', link: '/' },
      { text: 'গাইড', link: '/guide/introduction' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'মৌলিক ধারণা (Basics)',
          items: [
            { text: 'পরিচিতি (Introduction)', link: '/guide/introduction' },
            { text: 'ভোল্টেজ ও কারেন্ট (Voltage & Current)', link: '/guide/voltage-current' },
            { text: 'ওহমের সূত্র ও সার্কিট (Ohm\'s Law)', link: '/guide/ohms-law' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'বেসিক ইলেকট্রিক্যাল লার্নিং ডকুমেন্টেশন',
      copyright: 'Copyright © 2026'
    }
  }
})

