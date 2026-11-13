import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "বেসিক ইলেকট্রিক্যাল নলেজ",
  description: "ইলেকট্রিক্যাল টেকনোলজি ও ইঞ্জিনিয়ারিংয়ের সম্পূর্ণ মৌলিক শিক্ষণীয় গাইড (২৫টি অধ্যায়)",
  lang: 'bn-BD',
  themeConfig: {
    nav: [
      { text: 'হোম', link: '/' },
      { text: 'সূচিপত্র', link: '/guide/01-safety' },
      {
        text: 'অধ্যায়সমূহ',
        items: [
          { text: 'পর্ব ১: নিরাপত্তা ও হ্যান্ড টুলস (অধ্যায় ১-২)', link: '/guide/01-safety' },
          { text: 'পর্ব ২: মৌলিক ইলেকট্রিসিটি ও সার্কিট (অধ্যায় ৩-৫)', link: '/guide/03-basic-electricity' },
          { text: 'পর্ব ৩: চুম্বকত্ব ও ডিসি মেশিন (অধ্যায় ৬-৯)', link: '/guide/06-magnetism' },
          { text: 'পর্ব ৪: এসি সার্কিট ও মেশিন (অধ্যায় ১০-১৪)', link: '/guide/10-ac-circuit' },
          { text: 'পর্ব ৫: ওয়্যারিং ও ইন্সটলেশন (অধ্যায় ১৫-১৯)', link: '/guide/15-illumination' },
          { text: 'পর্ব ৬: অ্যাপ্লায়েন্স ও সিস্টেম (অধ্যায় ২০-২৫)', link: '/guide/20-electrical-appliances' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'পর্ব ১: নিরাপত্তা ও হ্যান্ড টুলস',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ১: নিরাপদ কর্ম পদ্ধতি', link: '/guide/01-safety' },
            { text: 'অধ্যায় ২: হ্যান্ড টুলস', link: '/guide/02-hand-tools' }
          ]
        },
        {
          text: 'পর্ব ২: মৌলিক ইলেকট্রিসিটি ও সার্কিট',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ৩: মৌলিক ইলেকট্রিসিটি', link: '/guide/03-basic-electricity' },
            { text: 'অধ্যায় ৪: ইলেকট্রিক্যাল পরিবাহী ও ইনস্যুলেটর', link: '/guide/04-conductors-insulators' },
            { text: 'অধ্যায় ৫: জয়েন্ট, সোল্ডারিং, পাওয়ার ও এনার্জী', link: '/guide/05-joints-soldering-power' }
          ]
        },
        {
          text: 'পর্ব ৩: চুম্বকত্ব ও ডিসি মেশিন',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ৬: চুম্বক ও চৌম্বকত্ব', link: '/guide/06-magnetism' },
            { text: 'অধ্যায় ৭: ডি. সি. জেনারেটর', link: '/guide/07-dc-generator' },
            { text: 'অধ্যায় ৮: ডি. সি. মোটর', link: '/guide/08-dc-motor' },
            { text: 'অধ্যায় ৯: ব্যাটারী', link: '/guide/09-battery' }
          ]
        },
        {
          text: 'পর্ব ৪: এসি সার্কিট ও মেশিন',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ১০: এ. সি. সার্কিট', link: '/guide/10-ac-circuit' },
            { text: 'অধ্যায় ১১: ট্রান্সফরমার', link: '/guide/11-transformer' },
            { text: 'অধ্যায় ১২: ইন্ডাকশন মোটর', link: '/guide/12-induction-motor' },
            { text: 'অধ্যায় ১৩: সিঙ্গেল ফেজ মোটর', link: '/guide/13-single-phase-motor' },
            { text: 'অধ্যায় ১৪: এ. সি. জেনারেটর বা অল্টারনেটর', link: '/guide/14-alternator' }
          ]
        },
        {
          text: 'পর্ব ৫: ওয়্যারিং ও ইন্সটলেশন',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ১৫: উল্লাসন / আলোক ব্যবস্থা', link: '/guide/15-illumination' },
            { text: 'অধ্যায় ১৬: হাউজ ওয়্যারিং', link: '/guide/16-house-wiring' },
            { text: 'অধ্যায় ১৭: আর্থিং', link: '/guide/17-earthing' },
            { text: 'অধ্যায় ১৮: আর্মেচার ওয়াইন্ডিং (এসি ও ডিসি)', link: '/guide/18-armature-winding' },
            { text: 'অধ্যায় ১৯: মোটর স্টার্টার', link: '/guide/19-motor-starter' }
          ]
        },
        {
          text: 'পর্ব ৬: অ্যাপ্লায়েন্স, ইলেকট্রনিক্স ও পাওয়ার সিস্টেম',
          collapsed: false,
          items: [
            { text: 'অধ্যায় ২০: ইলেকট্রিক্যাল অ্যাপ্লায়েন্স', link: '/guide/20-electrical-appliances' },
            { text: 'অধ্যায় ২১: রেফ্রিজারেশন পদ্ধতি', link: '/guide/21-refrigeration' },
            { text: 'অধ্যায় ২২: মেজারিং ইনস্ট্রুমেন্ট', link: '/guide/22-measuring-instruments' },
            { text: 'অধ্যায় ২৩: ইলেকট্রনিক্স', link: '/guide/23-electronics' },
            { text: 'অধ্যায় ২৪: ট্রান্সমিশন ও ডিস্ট্রিবিউশন', link: '/guide/24-transmission-distribution' },
            { text: 'অধ্যায় ২৫: ক্যাপাসিটর', link: '/guide/25-capacitor' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'বেসিক ইলেকট্রিক্যাল নলেজ (Basic Electrical Knowledge) সম্পূর্ণ কোর্স গাইড',
      copyright: 'Copyright © 2026'
    }
  }
})
