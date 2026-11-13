# অধ্যায় ৪: ইলেকট্রিক্যাল পরিবাহী ও ইনস্যুলেটর (Conductors & Insulators)

ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ে বিদ্যুৎশক্তি উৎপাদন কেন্দ্র থেকে শুরু করে ব্যবহারকারীর ডিভাইস পর্যন্ত নিরাপদ ও কার্যকরভাবে বিদ্যুৎ প্রেরণের জন্য পরিবাহী (Conductor) এবং নিরাপত্তা নিশ্চিতকরণের জন্য অন্তরক (Insulator)-এর ভূমিকা অপরিহার্য।

---

## ৪.১ পদার্থসমূহের বৈদ্যুতিক শ্রেণিবিন্যাস (Classification of Materials)

তড়িৎ পরিবাহিতা এবং এনার্জি ব্যান্ড কাঠামোর (Energy Band Structure) ওপর ভিত্তি করে মহাবিশ্বের সমস্ত কঠিন পদার্থকে তিন ভাগে ভাগ করা যায়:

1. **পরিবাহী (Conductor):** যে পদার্থের মধ্য দিয়ে অতি সহজে বৈদ্যুতিক কারেন্ট প্রবাহিত হতে পারে। এদের ভ্যালেন্স ব্যান্ড ও কন্ডাকশন ব্যান্ড পরস্পরের সাথে ওভারল্যাপ করে থাকে (কোনো নিষিদ্ধ ব্যান্ড গ্যাপ থাকে না)।
2. **অর্ধপরিবাহী বা সেমিকন্ডাক্টর (Semiconductor):** সাধারণ তাপমাত্রায় এদের পরিবাহিতা কন্ডাক্টর ও ইনস্যুলেটরের মাঝামাঝি থাকে। এদের নিষিদ্ধ ব্যান্ড গ্যাপ খুবই সংকীর্ণ (প্রায় $1\text{ eV}$)।
3. **অপরিবাহী বা ইনস্যুলেটর (Insulator):** যে পদার্থের মধ্য দিয়ে বিদ্যুৎ একেবারেই প্রবাহিত হতে পারে না। এদের ভ্যালেন্স ব্যান্ড পূর্ণ থাকে এবং কন্ডাকশন ব্যান্ড খালি থাকে এবং মাঝে বিশাল নিষিদ্ধ শক্তি ব্যবধান (ব্যান্ড গ্যাপ $> 5\text{ eV}$) বিদ্যমান থাকে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 320" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- 1. CONDUCTOR PANEL -->
  <g transform="translate(15, 15)">
    <rect width="200" height="270" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <text x="100" y="26" fill="#059669" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">১. পরিবাহী (Conductor)</text>

    <!-- Conduction Band -->
    <rect x="25" y="65" width="150" height="65" rx="5" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="100" y="88" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">কন্ডাকশন ব্যান্ড</text>
    <text x="100" y="105" fill="#047857" font-size="10" text-anchor="middle" font-family="system-ui">(মুক্ত ইলেকট্রনে ভরপুর)</text>

    <!-- Overlap Zone -->
    <rect x="25" y="115" width="150" height="30" fill="#a7f3d0" stroke="#059669" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="100" y="134" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">ওভারল্যাপ অঞ্চল</text>

    <!-- Valence Band -->
    <rect x="25" y="130" width="150" height="65" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="100" y="172" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ভ্যালেন্স ব্যান্ড</text>

    <!-- Note -->
    <rect x="20" y="215" width="160" height="36" rx="5" fill="#f0fdf4"/>
    <text x="100" y="230" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ব্যান্ড গ্যাপ = ০ eV</text>
    <text x="100" y="244" fill="#166534" font-size="10" text-anchor="middle" font-family="system-ui">ইলেকট্রন সহজে প্রবাহিত হয়</text>
  </g>

  <!-- 2. SEMICONDUCTOR PANEL -->
  <g transform="translate(240, 15)">
    <rect width="200" height="270" rx="8" fill="var(--vp-c-bg)" stroke="#f59e0b" stroke-width="1.8"/>
    <text x="100" y="26" fill="#d97706" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">২. সেমিকন্ডাক্টর (Semiconductor)</text>

    <!-- Conduction Band -->
    <rect x="25" y="55" width="150" height="50" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="100" y="85" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">কন্ডাকশন ব্যান্ড (আংশিক খালি)</text>

    <!-- Energy Gap -->
    <line x1="100" y1="108" x2="100" y2="148" stroke="#f59e0b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
    <text x="100" y="132" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">Eg ≈ 1.1 eV</text>

    <!-- Valence Band -->
    <rect x="25" y="152" width="150" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="100" y="182" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ভ্যালেন্স ব্যান্ড (পূর্ণ)</text>

    <!-- Note -->
    <rect x="20" y="215" width="160" height="36" rx="5" fill="#fffbeb"/>
    <text x="100" y="230" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">সংকীর্ণ ব্যান্ড গ্যাপ (≈ 1 eV)</text>
    <text x="100" y="244" fill="#92400e" font-size="10" text-anchor="middle" font-family="system-ui">তাপ পেলে পরিবাহী হয়</text>
  </g>

  <!-- 3. INSULATOR PANEL -->
  <g transform="translate(465, 15)">
    <rect width="200" height="270" rx="8" fill="var(--vp-c-bg)" stroke="#ef4444" stroke-width="1.8"/>
    <text x="100" y="26" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">৩. ইনস্যুলেটর (Insulator)</text>

    <!-- Conduction Band -->
    <rect x="25" y="50" width="150" height="42" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="100" y="75" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">কন্ডাকশন ব্যান্ড (সম্পূর্ণ খালি)</text>

    <!-- Forbidden Energy Gap -->
    <rect x="35" y="100" width="130" height="58" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="3 3"/>
    <text x="100" y="125" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">বিশাল নিষিদ্ধ ব্যবধান</text>
    <text x="100" y="143" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">Eg > 5 eV</text>

    <!-- Valence Band -->
    <rect x="25" y="166" width="150" height="42" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="100" y="191" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ভ্যালেন্স ব্যান্ড (দৃঢ় আবদ্ধ)</text>

    <!-- Note -->
    <rect x="20" y="215" width="160" height="36" rx="5" fill="#fef2f2"/>
    <text x="100" y="230" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">নিষিদ্ধ গ্যাপ > ৫ eV</text>
    <text x="100" y="244" fill="#991b1b" font-size="10" text-anchor="middle" font-family="system-ui">ইলেকট্রন অতিক্রম করতে পারে না</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৪.১: পদার্থের এনার্জি ব্যান্ড তত্ত্বের ডায়াগ্রাম (কন্ডাক্টর, সেমিকন্ডাক্টর ও ইনস্যুলেটর)
</div>
</div>

| বৈশিষ্ট্য | পরিবাহী (Conductor) | অর্ধপরিবাহী (Semiconductor) | অপরিবাহী / ইনস্যুলেটর (Insulator) |
| :--- | :--- | :--- | :--- |
| **মুক্ত ইলেকট্রন সংখ্যা** | প্রচুর পরিমাণে ($10^{28}/\text{m}^3$) | মধ্যম মানের | প্রায় শূন্য |
| **রেজিস্টিভিটি ($\Omega$-m)** | অত্যন্ত কম ($10^{-8}$ থেকে $10^{-6}$) | মাঝারি ($10^{-4}$ থেকে $10^{4}$) | অত্যধিক উচ্চ ($10^{10}$ থেকে $10^{16}$) |
| **তাপমাত্রার প্রভাব** | তাপমাত্রা বাড়লে রোধ বাড়ে (Positive Temp Coeff - PTC) | তাপমাত্রা বাড়লে রোধ কমে (Negative Temp Coeff - NTC) | তাপমাত্রা বাড়লে ইনস্যুলেশন দুর্বল হয় (NTC) |
| **উদাহরণ** | রূপা, তামা, অ্যালুমিনিয়াম | সিলিকন (Si), জার্মেনিয়াম (Ge) | মাইকা, গ্লাস, পোর্সেলিন, পিভিসি |

---

## ৪.২ প্রধান পরিবাহী পদার্থসমূহ ও বৈশিষ্ট্য (Conductor Materials)

### ১. রূপা (Silver - Ag)
- মহাবিশ্বের সর্বোৎকৃষ্ট বিদ্যুৎ পরিবাহী (সর্বোচ্চ কন্ডাক্টিভিটি ও সর্বনিম্ন রোধ)।
- অত্যধিক দামের কারণে সাধারণ লাইনে ব্যবহৃত হয় না; দামি কন্টাক্ট পয়েন্ট, অডিও কেবল টার্মিনাল ও স্পেশাল হাই-স্পিড রিলিজে ব্যবহৃত হয়।

### ২. তামা (Copper - Cu)
- বৈদ্যুতিক কাজে সর্বাধিক ব্যবহৃত কন্ডাক্টর।
- নমনীয়তা (Ductility), টান সহ্য ক্ষমতা (Tensile Strength) এবং সহজ সোল্ডারিং গুণাবলীর কারণে গৃহস্থালি ওয়্যারিং, মোটর ওয়াইন্ডিং ও ক্যাবলে ব্যবহৃত হয়।

### ৩. অ্যালুমিনিয়াম (Aluminum - Al)
- তামার তুলনায় প্রায় ৬০% পরিবাহী ক্ষমতাসম্পন্ন, তবে এটি তামার চেয়ে ৩ গুণ হালকা এবং অনেক সস্তা।
- উচ্চ শক্তি ও হালকা ওজনের কারণে ওভারহেড ট্রান্সমিশন ও ডিস্ট্রিবিউশন লাইনে **ACSR (Aluminum Conductor Steel Reinforced)** ক্যাবল হিসেবে ব্যবহৃত হয়।

### ৪. বিশেষ পরিবাহী সংকর ধাতু
- **নাইক্রোম (Nichrome - 80% Ni + 20% Cr):** উচ্চ রোধ এবং উচ্চ গলনাঙ্ক (প্রায় $1400^\circ\text{C}$); ফলে বৈদ্যুতিক হিটার, আয়রন ও ওভেনের হিটিং এলিমেন্ট হিসেবে ব্যবহৃত হয়।
- **টাংস্টেন (Tungsten):** গলনাঙ্ক অত্যন্ত বেশি (প্রায় $3422^\circ\text{C}$); ইনক্যান্ডেসেন্ট বাল্বের ফিলামেন্টে ব্যবহৃত হয়।

---

## ৪.৩ ইনস্যুলেটর পদার্থ ও তাদের বৈশিষ্ট্য (Insulating Materials)

ইনস্যুলেটরের প্রধান কাজ হলো কারেন্টকে নির্দিষ্ট পথে সীমাবদ্ধ রাখা এবং শর্ট সার্কিট ও বিদ্যুৎস্পৃষ্টতা প্রতিরোধ করা।

### প্রধান ইনস্যুলেটর উপাদান:
1. **মাইকা (Mica / অভ্র):** চমৎকার তাপসহনশীলতা এবং উচ্চ ডাই-ইলেকট্রিক স্ট্রেংথ। ডিসি মোটরের কম্যুটেটর সেগমেন্টের মাঝে ব্যবহৃত হয়।
2. **পোর্সেলিন (Porcelain):** পোড়ামাটির তৈরি চকচকে সিরামিক ইনস্যুলেটর। এটি আর্দ্রতা শোষণ করে না। হাই ভোল্টেজ ওভারহেড লাইনের পিন, ডিস্ক ও পোস্ট ইনস্যুলেটরে ব্যবহৃত হয়।
3. **পিভিসি (Polyvinyl Chloride - PVC):** নমনীয়, সহজে বাঁকানো যায়, আর্দ্রতা ও রাসায়নিক প্রতিরোধী। গৃহস্থালি ওয়্যারিং তারে সর্বাধিক ব্যবহৃত।
4. **ট্রান্সফরমার অয়েল (Mineral Oil):** চমৎকার শীতলীকরণ (Cooling) এবং ইনস্যুলেটিং বৈশিষ্ট্যের কারণে হাই-ভোল্টেজ ট্রান্সফরমার ট্যাঙ্কে ব্যবহৃত হয়।

### ডাই-ইলেকট্রিক স্ট্রেংথ (Dielectric Strength)
কোনো ইনস্যুলেটর উপাদান ক্ষতিগ্রস্ত (Puncture / Breakdown) না হয়ে প্রতি একক পুরুত্বে সর্বোচ্চ যে ভোল্টেজ সহ্য করতে পারে, তাকে তার ডাই-ইলেকট্রিক স্ট্রেংথ বলে। এর একক **kV/mm** বা **kV/cm**।

| উপাদান | ডাই-ইলেকট্রিক স্ট্রেংথ (kV/mm) |
| :--- | :--- |
| বাতাস (Air) | ৩ kV/mm |
| ট্রান্সফরমার অয়েল | ২০ - ২৫ kV/mm |
| পিভিসি (PVC) | ২০ - ৩০ kV/mm |
| মাইকা (Mica) | ৫০ - ১০০ kV/mm |

---

## ৪.৪ তার ও ক্যাবলের গঠন (Construction of Electric Cable)

### তার (Wire) বনাম ক্যাবল (Cable)
- **তার (Wire):** একটিমাত্র কন্ডাক্টর যার উপর কোনো ইনস্যুলেশন নাও থাকতে পারে (Bare Wire) অথবা হালকা ইনস্যুলেশন থাকে।
- **ক্যাবল (Cable):** এক বা একাধিক ইনস্যুলেটেড কন্ডাক্টর যখন যান্ত্রিক আঘাত ও আর্দ্রতা থেকে রক্ষার জন্য একাধিক সুরক্ষামূলক ধাতব ও সিন্থেটিক স্তরে আবৃত থাকে, তখন তাকে ক্যাবল বলে।

### আন্ডারগ্রাউন্ড পাওয়ার ক্যাবলের বিভিন্ন স্তর (Layers of Underground Cable)

একটি আদর্শ হাই-ভোল্টেজ আন্ডারগ্রাউন্ড ক্যাবলের স্তরগুলো ভেতর থেকে বাইরের দিকে ধারাবাহিকভাবে সজ্জিত থাকে:

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 340" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Concentric Cable Cross Section (Left) -->
  <g transform="translate(160, 170)">
    <!-- 6. Serving (Outermost layer) -->
    <circle cx="0" cy="0" r="140" fill="#334155" stroke="#1e293b" stroke-width="2"/>
    
    <!-- 5. Armouring (Steel wires) -->
    <circle cx="0" cy="0" r="122" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
    <!-- Repeating small circles for armouring wires -->
    <g fill="#cbd5e1" stroke="#475569" stroke-width="1">
      <circle cx="0" cy="-115" r="5"/><circle cx="36" cy="-109" r="5"/><circle cx="68" cy="-93" r="5"/>
      <circle cx="93" cy="-68" r="5"/><circle cx="109" cy="-36" r="5"/><circle cx="115" cy="0" r="5"/>
      <circle cx="109" cy="36" r="5"/><circle cx="93" cy="68" r="5"/><circle cx="68" cy="93" r="5"/>
      <circle cx="36" cy="109" r="5"/><circle cx="0" cy="115" r="5"/><circle cx="-36" cy="109" r="5"/>
      <circle cx="-68" cy="93" r="5"/><circle cx="-93" cy="68" r="5"/><circle cx="-109" cy="36" r="5"/>
      <circle cx="-115" cy="0" r="5"/><circle cx="-109" cy="-36" r="5"/><circle cx="-93" cy="-68" r="5"/>
      <circle cx="-68" cy="-93" r="5"/><circle cx="-36" cy="-109" r="5"/>
    </g>

    <!-- 4. Bedding (Jute layer) -->
    <circle cx="0" cy="0" r="102" fill="#d97706" stroke="#b45309" stroke-width="2"/>

    <!-- 3. Metallic Sheath (Lead / Aluminium) -->
    <circle cx="0" cy="0" r="86" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>

    <!-- 2. Insulation (XLPE / Paper / PVC) -->
    <circle cx="0" cy="0" r="68" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>

    <!-- 1. Cores / Conductors (3 Cores - Red, Yellow, Blue) -->
    <!-- Core 1 (Red) -->
    <circle cx="0" cy="-28" r="22" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
    <text x="0" y="-24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">R</text>

    <!-- Core 2 (Yellow) -->
    <circle cx="-24" cy="16" r="22" fill="#eab308" stroke="#a16207" stroke-width="2"/>
    <text x="-24" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">Y</text>

    <!-- Core 3 (Blue) -->
    <circle cx="24" cy="16" r="22" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
    <text x="24" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">B</text>
  </g>

  <!-- Labels on the Right Side with Indicator Lines -->
  <g transform="translate(330, 25)">
    <!-- 1. Core -->
    <g transform="translate(0, 20)">
      <circle cx="10" cy="10" r="6" fill="#ef4444"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">১. কোর বা কন্ডাক্টর (Core)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">তামা বা অ্যালুমিনিয়াম তার (বিদ্যুৎ পরিবাহী)</text>
    </g>

    <!-- 2. Insulation -->
    <g transform="translate(0, 68)">
      <circle cx="10" cy="10" r="6" fill="#38bdf8"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">২. ইনস্যুলেশন (Insulation)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">XLPE বা PVC (কোরগুলোকে বিচ্ছিন্ন রাখে)</text>
    </g>

    <!-- 3. Metallic Sheath -->
    <g transform="translate(0, 116)">
      <circle cx="10" cy="10" r="6" fill="#94a3b8"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">৩. মেটালিক শিথ (Metallic Sheath)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">সিসা/অ্যালুমিনিয়াম (আর্দ্রতা ও অ্যাসিড প্রতিরোধক)</text>
    </g>

    <!-- 4. Bedding -->
    <g transform="translate(0, 164)">
      <circle cx="10" cy="10" r="6" fill="#d97706"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">৪. বেডিং (Bedding)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">হেসিয়ান বা পাটের স্তর (শিথকে আঘাত থেকে রক্ষা করে)</text>
    </g>

    <!-- 5. Armouring -->
    <g transform="translate(0, 212)">
      <circle cx="10" cy="10" r="6" fill="#64748b"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">৫. আর্মারিং (Armouring)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">গ্যালভানাইজড স্টিল তারের বর্ম (যান্ত্রিক আঘাত প্রতিরোধ)</text>
    </g>

    <!-- 6. Serving -->
    <g transform="translate(0, 260)">
      <circle cx="10" cy="10" r="6" fill="#334155"/>
      <text x="25" y="14" fill="var(--vp-c-text-1)" font-size="13" font-weight="bold" font-family="system-ui">৬. সার্ভিং (Serving)</text>
      <text x="25" y="30" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">সর্ববহিঃস্থ সুরক্ষিত স্তর (মরিচা ও ক্ষয় থেকে সুরক্ষা)</text>
    </g>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৪.২: একটি আদর্শ আন্ডারগ্রাউন্ড পাওয়ার ক্যাবলের বিভিন্ন অভ্যন্তরীণ স্তরের প্রস্থচ্ছেদ
</div>
</div>

1. **কোর বা কন্ডাক্টর (Core):** উচ্চ মানের তামা বা অ্যালুমিনিয়াম দিয়ে গঠিত, যা কারেন্ট বহন করে (সিঙ্গেল কোর, ৩ কোর বা ৩.৫ কোর)।
2. **ইনস্যুলেশন (Insulation):** কন্ডাক্টরকে পরস্পর থেকে ও মাটি থেকে বিচ্ছিন্ন রাখে (যেমন XLPE বা PVC)।
3. **মেটালিক শিথ (Metallic Sheath):** সিসা (Lead) বা অ্যালুমিনিয়াম স্তর, যা আর্দ্রতা, এসিড বা মাটির ক্ষতিকারক গ্যাস থেকে ইনস্যুলেশনকে রক্ষা করে।
4. **বেডিং (Bedding):** পাট বা হেসিয়ান টেপের স্তর যা আর্মারিংয়ের চাপ থেকে নরম মেটালিক শিথকে রক্ষা করে।
5. **আর্মারিং (Armouring):** গ্যালভানাইজড স্টিল তারের বর্ম, যা মাটির নিচে ক্যাবলকে বাহ্যিক যান্ত্রিক আঘাত ও চাপ থেকে রক্ষা করে।
6. **সার্ভিং (Serving):** ক্যাবলের সর্ববহিঃস্থ স্তর, যা আর্মারিংকে মরিচা ও পরিবেশের ক্ষয় থেকে সুরক্ষিত রাখে।
