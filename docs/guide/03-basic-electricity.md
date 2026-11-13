# অধ্যায় ৩: মৌলিক ইলেকট্রিসিটি ও সার্কিট (Basic Electricity & Circuits)

ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ের মূল ভিত্তি হলো মৌলিক পদার্থবিজ্ঞান ও তড়িৎ তত্ত্ব। পরমাণুর গঠন, ইলেকট্রনের গতিবিধি, বৈদ্যুতিক রাশিসমূহের আন্তঃসম্পর্ক এবং সার্কিটের আচরণ বোঝার মাধ্যমে বিদ্যুৎ প্রকৌশলের মূল ধারণা স্পষ্ট হয়।

---

## ৩.১ পরমাণুর গঠন ও ইলেকট্রন তত্ত্ব (Atomic Structure & Electron Theory)

মহাবিশ্বের প্রতিটি পদার্থ ক্ষুদ্রাতিক্ষুদ্র কণা দ্বারা গঠিত যাকে **পরমাণু (Atom)** বলা হয়। একটি পরমাণুর দুটি প্রধান অংশ থাকে:
1. **নিউক্লিয়াস (Nucleus):** পরমাণুর কেন্দ্রবিন্দু, যাতে ধনাত্মক চার্জযুক্ত **প্রোটন (Proton)** এবং চার্জহীন **নিউট্রন (Neutron)** দৃঢ় বন্ধনে আবদ্ধ থাকে।
2. **কক্ষপথ (Orbit / Shell):** নিউক্লিয়াসের চারদিকে নির্দিষ্ট উপবৃত্তাকার পথে ঋণাত্মক চার্জযুক্ত **ইলেকট্রন (Electron)** অবিরাম পরিভ্রমণ করে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 350" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients -->
    <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.2"/>
    </radialGradient>
    <radialGradient id="freeElectronGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.1"/>
    </radialGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Orbits -->
  <circle cx="240" cy="175" r="55" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="240" cy="175" r="95" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="240" cy="175" r="135" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>

  <!-- Nucleus Glow & Core -->
  <circle cx="240" cy="175" r="32" fill="url(#nucleusGlow)"/>
  
  <!-- Protons (+) & Neutrons (n) -->
  <circle cx="232" cy="167" r="9" fill="#ef4444"/>
  <text x="232" y="171" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">+</text>
  
  <circle cx="248" cy="167" r="9" fill="#64748b"/>
  <text x="248" y="171" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">n</text>
  
  <circle cx="240" cy="183" r="9" fill="#ef4444"/>
  <text x="240" y="187" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">+</text>
  
  <circle cx="225" cy="181" r="8" fill="#64748b"/>
  <text x="225" y="185" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="system-ui">n</text>

  <circle cx="253" cy="181" r="8" fill="#ef4444"/>
  <text x="253" y="185" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">+</text>

  <!-- K-Shell Electrons (2) -->
  <circle cx="240" cy="120" r="6" fill="#3b82f6"/>
  <text x="240" y="123" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="240" cy="230" r="6" fill="#3b82f6"/>
  <text x="240" y="233" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>

  <!-- L-Shell Electrons (8) -->
  <circle cx="173" cy="175" r="6" fill="#3b82f6"/>
  <text x="173" y="178" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="307" cy="175" r="6" fill="#3b82f6"/>
  <text x="307" y="178" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="193" cy="108" r="6" fill="#3b82f6"/>
  <text x="193" y="111" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="287" cy="108" r="6" fill="#3b82f6"/>
  <text x="287" y="111" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="193" cy="242" r="6" fill="#3b82f6"/>
  <text x="193" y="245" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>
  <circle cx="287" cy="242" r="6" fill="#3b82f6"/>
  <text x="287" y="245" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">-</text>

  <!-- M-Shell (Valence) Electron & Detachment Path -->
  <circle cx="105" cy="175" r="7" fill="#f59e0b"/>
  <text x="105" y="179" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">-</text>

  <!-- Escape trajectory for Free Electron -->
  <path d="M 335 80 Q 420 50 510 70" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow)"/>
  
  <!-- Escaped Free Electron -->
  <circle cx="530" cy="75" r="16" fill="url(#freeElectronGlow)"/>
  <circle cx="530" cy="75" r="9" fill="#2563eb"/>
  <text x="530" y="79" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">-</text>
  
  <text x="530" y="110" fill="#2563eb" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">মুক্ত ইলেকট্রন (Free Electron)</text>
  <text x="530" y="128" fill="#64748b" font-size="11" text-anchor="middle" font-family="system-ui">বাহ্যিক বল/তাপে বিচ্যুত</text>

  <!-- Shell Labels -->
  <text x="240" y="325" fill="#64748b" font-size="12" text-anchor="middle" font-family="system-ui">K-শেল (২e) | L-শেল (৮e) | ভ্যালেন্স শেল (১e)</text>

  <!-- Explanatory Box on Right -->
  <g transform="translate(430, 160)">
    <rect width="210" height="150" rx="8" fill="var(--vp-c-bg)" stroke="var(--vp-c-divider)" stroke-width="1"/>
    <text x="15" y="25" fill="#ef4444" font-size="12" font-weight="bold" font-family="system-ui">● প্রোটন (+): ধনাত্মক চার্জ</text>
    <text x="15" y="47" fill="#64748b" font-size="12" font-weight="bold" font-family="system-ui">● নিউট্রন (n): চার্জহীন</text>
    <text x="15" y="69" fill="#3b82f6" font-size="12" font-weight="bold" font-family="system-ui">● ইলেকট্রন (-): ঋণাত্মক চার্জ</text>
    <line x1="15" y1="80" x2="195" y2="80" stroke="var(--vp-c-divider)" stroke-width="1"/>
    <text x="15" y="100" fill="#f59e0b" font-size="11" font-weight="bold" font-family="system-ui">ভ্যালেন্স শেল (Valence Shell):</text>
    <text x="15" y="118" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">সর্ববহিঃস্থ শক্তিস্তর</text>
    <text x="15" y="136" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">এখান থেকেই ইলেকট্রন মুক্ত হয়</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.১: পরমাণুর অভ্যন্তরীণ গঠন, ভ্যালেন্স শেল এবং মুক্ত ইলেকট্রন তৈরি হওয়ার প্রক্রিয়া
</div>
</div>

### মুক্ত ইলেকট্রন (Free Electrons)
পরমাণুর সর্ববহিঃস্থ কক্ষপথকে **ভ্যালেন্স শেল (Valence Shell)** এবং এর ইলেকট্রনগুলোকে **ভ্যালেন্স ইলেকট্রন** বলা হয়। ধাতব পরিবাহীতে (যেমন তামা, রূপা, অ্যালুমিনিয়াম) ভ্যালেন্স ইলেকট্রনগুলো নিউক্লিয়াসের সাথে খুব দুর্বল আকর্ষণে যুক্ত থাকে। সামান্য তাপীয় শক্তি বা বাহ্যিক বৈদ্যুতিক বল প্রয়োগ করলে এগুলো পরমাণু থেকে মুক্ত হয়ে ধাতুর অভ্যন্তরে স্বাধীনভাবে চলাচল করে। এদেরকে **মুক্ত ইলেকট্রন (Free Electron)** বলা হয়। 

> [!IMPORTANT]
> মুক্ত ইলেকট্রনের সুশৃঙ্খল ও নির্দিষ্ট অভিমুখে প্রবাহই হলো **বৈদ্যুতিক প্রবাহ (Electric Current)**। যে পদার্থে মুক্ত ইলেকট্রনের ঘনত্ব যত বেশি, সেই পদার্থ ততো ভালো বিদ্যুৎ পরিবাহী।

---

## ৩.২ বৈদ্যুতিক রাশিসমূহ ও একক (Fundamental Electrical Quantities)

### ১. বৈদ্যুতিক চার্জ (Electric Charge - $Q$)
চার্জ হলো পদার্থের একটি মৌলিক ভৌত বৈশিষ্ট্য।
- প্রতীক: $Q$ বা $q$
- একক: **কুলম্ব (Coulomb, C)**
- ১ কুলম্ব চার্জ $= 6.242 \times 10^{18}$ সংখ্যক ইলেকট্রনের সমষ্টিগত চার্জ।
- একটি ইলেকট্রনের চার্জ $= -1.602 \times 10^{-19}\text{ C}$।

### ২. কারেন্ট বা তড়িৎ প্রবাহ (Electric Current - $I$)
কোনো পরিবাহীর যেকোনো প্রস্থচ্ছেদের মধ্য দিয়ে একক সময়ে যে পরিমাণ বৈদ্যুতিক চার্জ প্রবাহিত হয়, তাকে কারেন্ট বলে।
$$I = \frac{Q}{t}$$
- যেখানে:
  - $I$ = কারেন্ট (অ্যাম্পিয়ার, A)
  - $Q$ = চার্জ (কুলম্ব, C)
  - $t$ = সময় (সেকেন্ড, s)
- **১ অ্যাম্পিয়ার (1 Ampere):** কোনো পরিবাহীর মধ্য দিয়ে প্রতি সেকেন্ডে ১ কুলম্ব চার্জ প্রবাহিত হলে তাকে ১ অ্যাম্পিয়ার কারেন্ট বলে ($1\text{ A} = 1\text{ C/s}$)।

### ৩. কারেন্ট প্রবাহের দিক বনাম ইলেকট্রন প্রবাহের দিক
বিদ্যুৎ প্রবাহের ধারণায় দুটি বিপরীতমুখী দিক প্রচলিত রয়েছে:
1. **প্রথাগত বা কনভেনশনাল কারেন্ট (Conventional Current):** ঐতিহাসিকভাবে বিজ্ঞানী বেঞ্জামিন ফ্র্যাঙ্কলিনের সময় থেকে ধরা হয় বিদ্যুৎ ব্যাটারির ধনাত্মক ($+$) প্রান্ত থেকে লোডের মধ্য দিয়ে ঋণাত্মক ($-$) প্রান্তে প্রবাহিত হয়। সার্কিট ডায়াগ্রামে তীরচিহ্ন দিয়ে এটিই নির্দেশ করা হয়।
2. **ইলেকট্রন প্রবাহ (Electron Flow):** আধুনিক পরমাণু তত্ত্বানুসারে পরিবাহীতে ঋণাত্মক চার্জযুক্ত মুক্ত ইলেকট্রনগুলো ব্যাটারির ঋণাত্মক ($-$) প্রান্ত কর্তৃক বিকর্ষিত হয়ে ধনাত্মক ($+$) প্রান্তের দিকে ধাবিত হয়।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 300" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/>
    </marker>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
    </marker>
    <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
      <stop offset="60%" stop-color="#facc15" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Circuit Loop Wire -->
  <rect x="90" y="50" width="480" height="190" rx="14" fill="none" stroke="#64748b" stroke-width="4"/>

  <!-- DC Battery (Left) -->
  <g transform="translate(90, 145)">
    <!-- Positive Terminal (Long bar) -->
    <line x1="-24" y1="-22" x2="24" y2="-22" stroke="#ef4444" stroke-width="5"/>
    <text x="32" y="-18" fill="#ef4444" font-size="18" font-weight="bold" font-family="system-ui">+</text>
    <!-- Negative Terminal (Short bar) -->
    <line x1="-14" y1="0" x2="14" y2="0" stroke="#3b82f6" stroke-width="7"/>
    <text x="24" y="5" fill="#3b82f6" font-size="20" font-weight="bold" font-family="system-ui">-</text>
    <text x="-40" y="-8" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="end" font-family="system-ui">ব্যাটারি (DC)</text>
  </g>

  <!-- Glowing Load Bulb (Right) -->
  <g transform="translate(570, 145)">
    <!-- Glow -->
    <circle cx="0" cy="0" r="32" fill="url(#bulbGlow)"/>
    <!-- Bulb Glass -->
    <circle cx="0" cy="0" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <!-- Filament -->
    <path d="M -7 5 L -3 -6 L 3 -6 L 7 5" fill="none" stroke="#b45309" stroke-width="1.8"/>
    <!-- Base -->
    <rect x="-8" y="18" width="16" height="8" rx="2" fill="#94a3b8"/>
    <text x="35" y="5" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">লোড (বাল্ব)</text>
  </g>

  <!-- Conventional Current Path (Red Arrows, Clockwise) -->
  <path d="M 120 30 L 320 30" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
  <path d="M 340 30 L 540 30" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
  <rect x="220" y="12" width="220" height="24" rx="5" fill="#fee2e2"/>
  <text x="330" y="28" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">প্রথাগত কারেন্ট প্রবাহ (+ থেকে -)</text>

  <!-- Electron Flow Path (Blue Arrows, Counter-Clockwise inside bottom) -->
  <path d="M 540 260 L 340 260" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowBlue)"/>
  <path d="M 320 260 L 120 260" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowBlue)"/>
  <rect x="220" y="265" width="220" height="24" rx="5" fill="#dbeafe"/>
  <text x="330" y="281" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">ইলেকট্রন প্রবাহের দিক (- থেকে +)</text>

  <!-- Moving Electrons Dots along bottom -->
  <circle cx="480" cy="240" r="4" fill="#3b82f6"/>
  <circle cx="420" cy="240" r="4" fill="#3b82f6"/>
  <circle cx="360" cy="240" r="4" fill="#3b82f6"/>
  <circle cx="300" cy="240" r="4" fill="#3b82f6"/>
  <circle cx="240" cy="240" r="4" fill="#3b82f6"/>
  <circle cx="180" cy="240" r="4" fill="#3b82f6"/>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.২: একটি বন্ধ সার্কিটে প্রথাগত কারেন্ট (Conventional Current) ও ইলেকট্রন প্রবাহের (Electron Flow) বিপরীতমুখী দিক
</div>
</div>

### ৪. ইলেকট্রোমোটিভ ফোর্স বা ইএমএফ (EMF) বনাম বিভব পার্থক্য (Potential Difference - $V$)

| বৈশিষ্ট্য | ইলেকট্রোমোটিভ ফোর্স (EMF) | বিভব পার্থক্য (Potential Difference / PD) |
| :--- | :--- | :--- |
| **সংজ্ঞা** | যে বাহ্যিক বল বা চাপের কারণে কোনো উৎসে চার্জ স্থানান্তরিত হয়ে বিভব তৈরি হয়। | সার্কিটের যে কোনো দুটি বিন্দুর মধ্যে প্রতি একক চার্জ স্থানান্তরে কৃতকাজ। |
| **উৎপত্তি** | এটি একটি কারণ (Cause)। বিদ্যুৎ উৎস (যেমন ব্যাটারী বা জেনারেটর) দ্বারা উৎপন্ন হয়। | এটি একটি ফলাফল (Effect)। সার্কিটের কোনো লোডে কারেন্ট চলার ফলে তৈরি হয়। |
| **সার্কিট অবস্থা** | ওপেন সার্কিটে এর মান সবচেয়ে বেশি পরিমাপ করা যায়। | কেবল ক্লোজড সার্কিটে কারেন্ট প্রবাহ থাকলেই এটি বিদ্যমান থাকে। |
| **একক** | ভোল্ট (Volt, V) | ভোল্ট (Volt, V) |

---

## ৩.৩ বৈদ্যুতিক রেজিস্ট্যান্স বা রোধ (Resistance - $R$)

বিদ্যুৎ পরিবাহীর মধ্য দিয়ে কারেন্ট প্রবাহিত হওয়ার সময় পরিবাহী পদার্থের অণু-পরমাণু মুক্ত ইলেকট্রনের গতিতে যে বাধা বা প্রতিবন্ধকতার সৃষ্টি করে, তাকে **রেজিস্ট্যান্স বা রোধ (Resistance)** বলে।
- প্রতীক: $R$
- একক: **ওহম ($\Omega$, Ohm)**

### রোধের নির্ভরশীলতার নিয়মাবলী (Laws of Resistance)

একটি সুষম পরিবাহীর রোধ চারটি বিষয়ের ওপর নির্ভর করে:
1. **দৈর্ঘ্য ($L$):** পরিবাহীর রোধ তার দৈর্ঘ্যের সমানুপাতিক ($R \propto L$)। তার যত লম্বা হবে, ইলেকট্রন চলার পথে তত বেশি বাধার মুখে পড়বে।
2. **প্রস্থচ্ছেদের ক্ষেত্রফল ($A$):** পরিবাহীর রোধ তার প্রস্থচ্ছেদের ব্যস্তানুপাতিক ($R \propto \frac{1}{A}$)। তার যত মোটা হবে, ইলেকট্রন তত সহজে প্রবাহিত হতে পারবে, অর্থাৎ রোধ কমবে।
3. **উপাদান ($\rho$):** পরিবাহীর উপাদান বা আপেক্ষিক রোধের (Resistivity) ওপর নির্ভরশীল। যেমন— তামার রোধ নাইক্রোম তারের চেয়ে অনেক কম।
4. **তাপমাত্রা ($T$):** সাধারণ ধাতব পরিবাহীতে তাপমাত্রা বৃদ্ধি পেলে অণুগুলোর কম্পন বৃদ্ধি পায়, ফলে ইলেকট্রনের গতিরোধ বেড়ে যায় ($R$ বৃদ্ধি পায়)।

উপরের সূত্র দুটিকে একত্রিত করলে পাওয়া যায়:
$$R = \rho \frac{L}{A}$$

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 300" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Case 1: Length Effect -->
  <g transform="translate(30, 20)">
    <text x="0" y="15" fill="var(--vp-c-text-1)" font-size="14" font-weight="bold" font-family="system-ui">১. দৈর্ঘ্যের প্রভাব (R ∝ L)</text>
    
    <!-- Short wire -->
    <rect x="0" y="30" width="180" height="24" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    <text x="90" y="46" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ছোট তার (স্বল্প দৈর্ঘ্য L₁)</text>
    <rect x="195" y="32" width="90" height="20" rx="3" fill="#dcfce7"/>
    <text x="240" y="46" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">কম রোধ (Low R)</text>

    <!-- Long wire -->
    <rect x="0" y="70" width="340" height="24" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    <text x="170" y="86" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">লম্বা তার (দ্বিগুণ দৈর্ঘ্য L₂ = 2L₁)</text>
    <rect x="355" y="72" width="100" height="20" rx="3" fill="#fee2e2"/>
    <text x="405" y="86" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">দ্বিগুণ রোধ (2R)</text>
  </g>

  <!-- Divider -->
  <line x1="30" y1="135" x2="630" y2="135" stroke="var(--vp-c-divider)" stroke-width="1.5"/>

  <!-- Case 2: Area Effect -->
  <g transform="translate(30, 150)">
    <text x="0" y="20" fill="var(--vp-c-text-1)" font-size="14" font-weight="bold" font-family="system-ui">২. প্রস্থচ্ছেদের ক্ষেত্রফলের প্রভাব (R ∝ 1/A)</text>
    
    <!-- Thin wire -->
    <rect x="0" y="38" width="220" height="12" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
    <text x="110" y="48" fill="#c2410c" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">চিকন তার (সরু ক্ষেত্রফল A₁)</text>
    <rect x="235" y="34" width="100" height="20" rx="3" fill="#fee2e2"/>
    <text x="285" y="48" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">উচ্চ রোধ (High R)</text>

    <!-- Thick wire -->
    <rect x="0" y="70" width="220" height="38" rx="4" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
    <text x="110" y="94" fill="#c2410c" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">মোটা তার (প্রশস্ত ক্ষেত্রফল A₂)</text>
    <rect x="235" y="79" width="105" height="20" rx="3" fill="#dcfce7"/>
    <text x="287" y="93" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">কম রোধ (Low R)</text>

    <!-- Formula Summary Box on the right -->
    <g transform="translate(420, 20)">
      <rect width="180" height="90" rx="8" fill="var(--vp-c-bg)" stroke="#6366f1" stroke-width="2"/>
      <text x="90" y="28" fill="#4f46e5" font-size="15" font-weight="bold" text-anchor="middle" font-family="system-ui">রোধের সমীকরণ</text>
      <text x="90" y="58" fill="var(--vp-c-text-1)" font-size="18" font-weight="bold" text-anchor="middle" font-family="serif">R = ρ × (L / A)</text>
      <text x="90" y="78" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">L = দৈর্ঘ্য, A = ক্ষেত্রফল, ρ = উপাদান</text>
    </g>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.৩: পরিবাহীর দৈর্ঘ্য ($L$) এবং প্রস্থচ্ছেদের ক্ষেত্রফলের ($A$) সাথে রোধের ($R$) সম্পর্ক
</div>
</div>

---

## ৩.৪ ওহমের সূত্র (Ohm's Law)

জার্মান পদার্থবিজ্ঞানী জর্জ সাইমন ওহম ১৮২৬ সালে ভোল্টেজ, কারেন্ট ও রোধের মধ্যে একটি মৌলিক গাণিতিক সম্পর্ক আবিষ্কার করেন:

> **সূত্র:** নির্দিষ্ট তাপমাত্রায় কোনো পরিবাহীর মধ্য দিয়ে প্রবাহিত তড়িৎ প্রবাহ (Current) পরিবাহীটির দুই প্রান্তের বিভব পার্থক্যের (Voltage) সমানুপাতিক এবং এর রোধের (Resistance) ব্যস্তানুপাতিক।

গাণিতিকভাবে:
$$I = \frac{V}{R} \quad \Longleftrightarrow \quad V = I \cdot R \quad \Longleftrightarrow \quad R = \frac{V}{I}$$

### ওহম ট্রায়াঙ্গেল (Ohm's Law Triangle)
ওহমের সূত্রের তিনটি রূপ সহজে মনে রাখার জন্য ওহম ট্রায়াঙ্গেল বিশ্বজুড়ে ব্যবহার করা হয়। যেকোনো একটি রাশি হাত দিয়ে ঢেকে রাখলে বাকি দুটির সম্পর্ক দৃশ্যমান হয়।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 250" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle Structure (Left) -->
  <g transform="translate(40, 20)">
    <!-- Base Triangle Outline -->
    <polygon points="130,10 20,200 240,200" fill="none" stroke="#64748b" stroke-width="3"/>
    
    <!-- Top Region: Voltage V -->
    <polygon points="130,12 68,110 192,110" fill="#fef3c7"/>
    <text x="130" y="80" fill="#d97706" font-size="36" font-weight="bold" text-anchor="middle" font-family="system-ui">V</text>
    <text x="130" y="100" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">ভোল্টেজ (ভোল্ট)</text>

    <!-- Dividing Horizontal Line -->
    <line x1="65" y1="110" x2="195" y2="110" stroke="#b45309" stroke-width="4"/>

    <!-- Bottom Left Region: Current I -->
    <polygon points="68,112 24,198 128,198 128,112" fill="#dcfce7"/>
    <text x="80" y="165" fill="#16a34a" font-size="34" font-weight="bold" text-anchor="middle" font-family="system-ui">I</text>
    <text x="80" y="188" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">কারেন্ট (অ্যাম্পিয়ার)</text>

    <!-- Dividing Vertical Line -->
    <line x1="130" y1="110" x2="130" y2="200" stroke="#64748b" stroke-width="4"/>

    <!-- Bottom Right Region: Resistance R -->
    <polygon points="132,112 132,198 236,198 192,112" fill="#dbeafe"/>
    <text x="180" y="165" fill="#2563eb" font-size="34" font-weight="bold" text-anchor="middle" font-family="system-ui">R</text>
    <text x="180" y="188" fill="#1d4ed8" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">রোধ (ওহম)</text>
  </g>

  <!-- Formula Boxes (Right) -->
  <g transform="translate(340, 25)">
    <!-- Box 1: V = I * R -->
    <rect x="0" y="0" width="280" height="55" rx="8" fill="var(--vp-c-bg)" stroke="#f59e0b" stroke-width="1.8"/>
    <text x="20" y="34" fill="#d97706" font-size="20" font-weight="bold" font-family="system-ui">V = I × R</text>
    <text x="150" y="33" fill="var(--vp-c-text-2)" font-size="12" font-family="system-ui">ভোল্টেজ নির্ণয় করতে</text>

    <!-- Box 2: I = V / R -->
    <rect x="0" y="68" width="280" height="55" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <text x="20" y="102" fill="#059669" font-size="20" font-weight="bold" font-family="system-ui">I = V ÷ R</text>
    <text x="150" y="101" fill="var(--vp-c-text-2)" font-size="12" font-family="system-ui">কারেন্ট নির্ণয় করতে</text>

    <!-- Box 3: R = V / I -->
    <rect x="0" y="136" width="280" height="55" rx="8" fill="var(--vp-c-bg)" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="20" y="170" fill="#2563eb" font-size="20" font-weight="bold" font-family="system-ui">R = V ÷ I</text>
    <text x="150" y="169" fill="var(--vp-c-text-2)" font-size="12" font-family="system-ui">রোধ নির্ণয় করতে</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.৪: ওহমের সূত্রের ম্যাজিক ট্রায়াঙ্গেল (Ohm's Law Triangle)
</div>
</div>

### ওহমের সূত্রের সীমাবদ্ধতা:
- **তাপমাত্রা পরিবর্তন:** পরিবাহীর তাপমাত্রা বৃদ্ধি বা হ্রাস পেলে ওহমের সূত্র প্রযোজ্য হয় না।
- **লিনিয়ার উপাদান:** এটি কেবল **লিনিয়ার উপাদান** (যেমন রেজিস্টর, সাধারণ ধাতব পরিবাহী)-এর জন্য প্রযোজ্য।
- **নন-লিনিয়ার উপাদান:** ডায়োড, ট্রানজিস্টর, ভ্যাকুয়াম টিউব এবং গ্যাস ডিসচার্জ ল্যাম্পে ওহমের সূত্র খাটে না।
- **এসি সার্কিট:** এসি সার্কিটে ইন্ডাক্ট্যান্স ($L$) ও ক্যাপাসিট্যান্স ($C$) থাকলে সরাসরি $R$ দিয়ে কাজ হয় না, সেখানে ইম্পিড্যান্স ($Z$) ব্যবহার করতে হয়।

---

## ৩.৫ একটি আদর্শ বৈদ্যুতিক সার্কিটের ৫টি মূল উপাদান (5 Essential Elements of an Electric Circuit)

একটি পরিপূর্ণ এবং কার্যকর বৈদ্যুতিক সার্কিট গঠন করতে **৫টি মৌলিক উপাদান** অপরিহার্য:

1. **বিদ্যুৎ উৎস (Power Source):** যা সার্কিটে ইলেকট্রোমোটিভ ফোর্স বা ভোল্টেজ সরবরাহ করে (যেমন: ব্যাটারি, ডিসি জেনারেটর বা এসি অল্টারনেটর)।
2. **পরিবাহী তার (Conductors):** বিদ্যুৎ উৎস থেকে লোডে বিদ্যুৎ প্রবাহ পৌঁছানোর সুপরিবাহী ধাতব পথ (যেমন: কপার বা অ্যালুমিনিয়াম ক্যাবল)।
3. **নিয়ন্ত্রণ যন্ত্র (Controlling Device):** যার মাধ্যমে সার্কিটকে প্রয়োজন অনুযায়ী চালু বা বন্ধ করা যায় (যেমন: সুইচ, পুশ বাটন, রিলে)।
4. **ব্যবহারকারী যন্ত্র বা লোড (Load):** যা বৈদ্যুতিক শক্তি গ্রহণ করে অন্য কোনো শক্তিতে (যেমন আলো, তাপ বা যান্ত্রিক শক্তি) রূপান্তর করে (যেমন: বাতি, হিটার, বৈদ্যুতিক পাখা, মোটর)।
5. **রক্ষণ যন্ত্র (Protection Device):** কোনো কারণে অতিরিক্ত কারেন্ট বা শর্ট সার্কিট হলে সার্কিট স্বয়ংক্রিয়ভাবে বিচ্ছিন্ন করে যন্ত্রপাতিকে পুড়ে যাওয়ার হাত থেকে রক্ষা করে (যেমন: ফিউজ বা সার্কিট ব্রেকার)।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 340" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Circuit Wires -->
  <path d="M 120 180 L 120 70 L 260 70" fill="none" stroke="#64748b" stroke-width="4"/>
  <path d="M 330 70 L 460 70" fill="none" stroke="#64748b" stroke-width="4"/>
  <path d="M 520 70 L 590 70 L 590 145" fill="none" stroke="#64748b" stroke-width="4"/>
  <path d="M 590 205 L 590 280 L 120 280 L 120 220" fill="none" stroke="#64748b" stroke-width="4"/>

  <!-- 1. SOURCE: Battery (Left) -->
  <g transform="translate(120, 200)">
    <rect x="-35" y="-35" width="70" height="70" rx="8" fill="var(--vp-c-bg)" stroke="#ef4444" stroke-width="2"/>
    <line x1="-18" y1="-10" x2="18" y2="-10" stroke="#ef4444" stroke-width="4"/>
    <line x1="-10" y1="10" x2="10" y2="10" stroke="#3b82f6" stroke-width="5"/>
    <text x="24" y="-7" fill="#ef4444" font-size="14" font-weight="bold">+</text>
    <text x="18" y="14" fill="#3b82f6" font-size="14" font-weight="bold">-</text>
    <!-- Badge -->
    <rect x="-55" y="45" width="110" height="26" rx="5" fill="#fee2e2"/>
    <text x="0" y="62" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">১. উৎস (Source)</text>
  </g>

  <!-- 2. PROTECTION: Fuse (Top Left) -->
  <g transform="translate(295, 70)">
    <rect x="-32" y="-14" width="64" height="28" rx="6" fill="var(--vp-c-bg)" stroke="#f59e0b" stroke-width="2"/>
    <line x1="-25" y1="0" x2="25" y2="0" stroke="#d97706" stroke-width="2" stroke-dasharray="3 2"/>
    <circle cx="-25" cy="0" r="3" fill="#64748b"/>
    <circle cx="25" cy="0" r="3" fill="#64748b"/>
    <!-- Badge -->
    <rect x="-55" y="-45" width="110" height="26" rx="5" fill="#fef3c7"/>
    <text x="0" y="-28" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">৫. রক্ষণ যন্ত্র (Fuse)</text>
  </g>

  <!-- 3. CONTROL: Switch (Top Right) -->
  <g transform="translate(490, 70)">
    <circle cx="-25" cy="0" r="4" fill="#64748b"/>
    <circle cx="25" cy="0" r="4" fill="#64748b"/>
    <!-- Knife / lever closed -->
    <line x1="-24" y1="0" x2="22" y2="0" stroke="#10b981" stroke-width="3.5"/>
    <!-- Badge -->
    <rect x="-55" y="-45" width="110" height="26" rx="5" fill="#d1fae5"/>
    <text x="0" y="-28" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">৩. নিয়ন্ত্রণ (Switch)</text>
  </g>

  <!-- 4. LOAD: Light Bulb (Right) -->
  <g transform="translate(590, 175)">
    <circle cx="0" cy="0" r="28" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
    <path d="M -10 6 L -4 -10 L 4 -10 L 10 6" fill="none" stroke="#b45309" stroke-width="2"/>
    <!-- Badge -->
    <rect x="-50" y="40" width="100" height="26" rx="5" fill="#fef9c3"/>
    <text x="0" y="57" fill="#854d0e" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">৪. লোড (Load)</text>
  </g>

  <!-- 5. CONDUCTOR: Wire Indicator (Bottom) -->
  <g transform="translate(350, 280)">
    <circle cx="0" cy="0" r="6" fill="#3b82f6"/>
    <!-- Badge -->
    <rect x="-65" y="16" width="130" height="26" rx="5" fill="#dbeafe"/>
    <text x="0" y="33" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">২. পরিবাহী (Conductor)</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.৫: একটি পূর্ণাঙ্গ কার্যকর বৈদ্যুতিক সার্কিটের ৫টি অপরিহার্য উপাদান
</div>
</div>

---

## ৩.৬ বৈদ্যুতিক সার্কিটের অবস্থা (Circuit Conditions)

একটি সার্কিট মূলত তিনটি ভিন্ন অবস্থায় থাকতে পারে:

1. **ক্লোজড সার্কিট (Closed Circuit):** উৎস থেকে লোড পর্যন্ত কারেন্ট চলাচলের পথ সম্পূর্ণ নিরবচ্ছিন্ন থাকে। সুইচ অন থাকে এবং লোড (যেমন বাতি বা মোটর) স্বাভাবিকভাবে চলতে থাকে।
2. **ওপেন সার্কিট (Open Circuit):** সার্কিটের কোনো অংশ বিচ্ছিন্ন বা সুইচ অফ থাকলে কারেন্ট চলাচলের পথ অসম্পূর্ণ হয়ে যায়। ফলে কারেন্ট প্রবাহ শূন্য ($I = 0$) হয় এবং লোড বন্ধ থাকে। তবে ওপেন প্রান্তদ্বয়ে সম্পূর্ণ ভোল্টেজ বিদ্যমান থাকে।
3. **শর্ট সার্কিট (Short Circuit):** কোনো লোড ছাড়াই শূন্য বা অতি নগণ্য রোধের কোনো পথ দিয়ে ফেজ ও নিউট্রাল (বা পজিটিভ ও নেগেটিভ) পরস্পরের সংস্পর্শে এলে রোধ প্রায় শূন্য ($R \approx 0$) হয়ে যায়। ওহমের সূত্রানুযায়ী কারেন্ট $I = \frac{V}{R} \to \infty$ অর্থাৎ অতিমাত্রায় বৃদ্ধি পায়। ফলে তাৎক্ষণিক প্রচণ্ড তাপ, স্পার্কিং এবং অগ্নিকাণ্ড ঘটে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 270" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- 1. Closed Circuit Panel -->
  <g transform="translate(10, 10)">
    <rect width="210" height="240" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <text x="105" y="25" fill="#059669" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">১. ক্লোজড সার্কিট (Closed)</text>
    
    <!-- Wire loop -->
    <rect x="35" y="55" width="140" height="110" rx="6" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <!-- Closed Switch -->
    <circle cx="70" cy="55" r="3" fill="#64748b"/>
    <circle cx="110" cy="55" r="3" fill="#64748b"/>
    <line x1="70" y1="55" x2="110" y2="55" stroke="#10b981" stroke-width="3"/>
    <!-- Battery -->
    <line x1="28" y1="105" x2="42" y2="105" stroke="#ef4444" stroke-width="3"/>
    <line x1="32" y1="115" x2="38" y2="115" stroke="#3b82f6" stroke-width="4"/>
    <!-- Glowing Bulb -->
    <circle cx="175" cy="110" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 162 95 L 157 89 M 188 95 L 193 89 M 190 110 L 197 110 M 160 110 L 153 110" stroke="#eab308" stroke-width="1.5"/>
    
    <!-- Status Note -->
    <text x="105" y="190" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">● সুইচ অন, বাতি জ্বলছে</text>
    <text x="105" y="210" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">স্বাভাবিক কারেন্ট (I > 0)</text>
  </g>

  <!-- 2. Open Circuit Panel -->
  <g transform="translate(235, 10)">
    <rect width="210" height="240" rx="8" fill="var(--vp-c-bg)" stroke="#94a3b8" stroke-width="1.8"/>
    <text x="105" y="25" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">২. ওপেন সার্কিট (Open)</text>
    
    <!-- Wire loop -->
    <rect x="35" y="55" width="140" height="110" rx="6" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <!-- Open Switch -->
    <rect x="65" y="52" width="50" height="8" fill="var(--vp-c-bg)"/>
    <circle cx="70" cy="55" r="3" fill="#64748b"/>
    <circle cx="110" cy="55" r="3" fill="#64748b"/>
    <line x1="70" y1="55" x2="105" y2="40" stroke="#ef4444" stroke-width="3"/>
    <!-- Battery -->
    <line x1="28" y1="105" x2="42" y2="105" stroke="#ef4444" stroke-width="3"/>
    <line x1="32" y1="115" x2="38" y2="115" stroke="#3b82f6" stroke-width="4"/>
    <!-- Off Bulb -->
    <circle cx="175" cy="110" r="14" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Status Note -->
    <text x="105" y="190" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">● সুইচ অফ বা তার কাটা</text>
    <text x="105" y="210" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">কারেন্ট শূন্য (I = 0)</text>
  </g>

  <!-- 3. Short Circuit Panel -->
  <g transform="translate(460, 10)">
    <rect width="210" height="240" rx="8" fill="var(--vp-c-bg)" stroke="#ef4444" stroke-width="1.8"/>
    <text x="105" y="25" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">৩. শর্ট সার্কিট (Short)</text>
    
    <!-- Wire loop -->
    <rect x="35" y="55" width="140" height="110" rx="6" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <!-- Battery -->
    <line x1="28" y1="105" x2="42" y2="105" stroke="#ef4444" stroke-width="3"/>
    <line x1="32" y1="115" x2="38" y2="115" stroke="#3b82f6" stroke-width="4"/>
    <!-- Short Path bypassing load -->
    <line x1="120" y1="55" x2="120" y2="165" stroke="#ef4444" stroke-width="3.5"/>
    <!-- Spark icon -->
    <polygon points="120,100 126,108 135,110 127,115 129,124 120,118 111,124 113,115 105,110 114,108" fill="#f59e0b" stroke="#dc2626" stroke-width="1"/>
    <!-- Off Bulb -->
    <circle cx="175" cy="110" r="14" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Status Note -->
    <text x="105" y="190" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">● রোধ শূন্য (R ≈ 0)</text>
    <text x="105" y="210" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">বিপজ্জনক অতিরিক্ত কারেন্ট (I → ∞)</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.৬: বৈদ্যুতিক সার্কিটের তিনটি মৌলিক অবস্থা: ক্লোজড, ওপেন এবং শর্ট সার্কিট
</div>
</div>

---

## ৩.৭ সার্কিটের সংযোগ পদ্ধতি: সিরিজ ও প্যারালাল সার্কিট (Series & Parallel Circuits)

বৈদ্যুতিক সার্কিটে একাধিক লোড (রেজিস্টর বা বাতি) মূলত দুটি প্রধান পদ্ধতিতে সংযুক্ত থাকে:

### ১. সিরিজ সার্কিট (Series Circuit)
একাধিক রোধ বা লোডকে যদি এমনভাবে পর পর সংযোগ করা হয় যেন কারেন্ট চলাচলের জন্য **একটি মাত্র পথ** থাকে, তাকে সিরিজ সার্কিট বলে।

- **বৈশিষ্ট্যসমূহ:**
  1. সার্কিটের প্রতিটি উপাদানের মধ্য দিয়ে **একই পরিমাণ কারেন্ট** প্রবাহিত হয় ($I_T = I_1 = I_2 = I_3$)।
  2. মোট সাপ্লাই ভোল্টেজ প্রতিটি লোডের আড়াআড়িতে ভাগ হয়ে যায় ($V_T = V_1 + V_2 + V_3$)।
  3. মোট বা সমতুল্য রোধ প্রতিটি লোডের রোধের যোগফলের সমান:
     $$R_{eq} = R_1 + R_2 + R_3$$
  4. যেকোনো একটি লোড কেটে গেলে বা বিচ্ছিন্ন হলে সম্পূর্ণ সার্কিট বন্ধ হয়ে যায়।

---

### ২. প্যারালাল সার্কিট (Parallel Circuit)
একাধিক রোধ বা লোডের সবগুলো এক প্রান্ত একটি সাধারণ বিন্দুতে এবং অপর প্রান্তগুলো অন্য একটি সাধারণ বিন্দুতে সংযুক্ত থাকে, যাতে কারেন্ট প্রবাহের **একাধিক পৃথক পথ** থাকে, তাকে প্যারালাল সার্কিট বলে।

- **বৈশিষ্ট্যসমূহ:**
  1. প্রতিটি লোডের দুই প্রান্তে **একই ভোল্টেজ** বিদ্যমান থাকে ($V_T = V_1 = V_2 = V_3$)।
  2. মোট কারেন্ট প্রতিটি শাখায় বিভক্ত হয়ে যায় ($I_T = I_1 + I_2 + I_3$)।
  3. সমতুল্য রোধ সার্কিটের ক্ষুদ্রতম রোধের চেয়েও কম হয়:
     $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$$
     *(দুটি রোধের জন্য: $R_{eq} = \frac{R_1 \times R_2}{R_1 + R_2}$)*
  4. একটি লোড নষ্ট বা বন্ধ হলেও অন্য লোডগুলো সম্পূর্ণ স্বাভাবিকভাবে চালু থাকে। এজন্য বাসা-বাড়ি ও কলকারখানার সমস্ত ওয়্যারিং প্যারালালে করা হয়।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 320" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Series Circuit (Left) -->
  <g transform="translate(15, 10)">
    <rect width="310" height="290" rx="8" fill="var(--vp-c-bg)" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="155" y="26" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">সিরিজ সার্কিট (Series Circuit)</text>
    
    <!-- Wire loop -->
    <path d="M 40 160 L 40 60 L 270 60 L 270 160 L 270 210 L 40 210 Z" fill="none" stroke="#64748b" stroke-width="3"/>
    
    <!-- Battery (Left) -->
    <line x1="30" y1="130" x2="50" y2="130" stroke="#ef4444" stroke-width="3.5"/>
    <line x1="34" y1="140" x2="46" y2="140" stroke="#3b82f6" stroke-width="4.5"/>
    <text x="20" y="138" fill="var(--vp-c-text-1)" font-size="11" font-weight="bold">V</text>

    <!-- Resistors / Bulbs in Series (Top) -->
    <!-- Bulb 1 -->
    <circle cx="110" cy="60" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="110" y="40" fill="var(--vp-c-text-1)" font-size="10" font-weight="bold" text-anchor="middle">R₁</text>
    <!-- Bulb 2 -->
    <circle cx="200" cy="60" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="200" y="40" fill="var(--vp-c-text-1)" font-size="10" font-weight="bold" text-anchor="middle">R₂</text>

    <!-- Flow Arrow -->
    <path d="M 60 75 L 85 75" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="155" y="105" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">কারেন্ট চলাচলের ১টি মাত্র পথ</text>

    <!-- Formula Box -->
    <g transform="translate(20, 125)">
      <rect width="270" height="75" rx="6" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-divider)" stroke-width="1"/>
      <text x="15" y="24" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">● কারেন্ট সমান: I = I₁ = I₂</text>
      <text x="15" y="44" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">● ভোল্টেজ ভাগ: V = V₁ + V₂</text>
      <text x="15" y="64" fill="#2563eb" font-size="12" font-weight="bold" font-family="system-ui">● মোট রোধ: R_eq = R₁ + R₂</text>
    </g>
  </g>

  <!-- Parallel Circuit (Right) -->
  <g transform="translate(355, 10)">
    <rect width="310" height="290" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <text x="155" y="26" fill="#059669" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">প্যারালাল সার্কিট (Parallel Circuit)</text>
    
    <!-- Wire loop Main -->
    <path d="M 40 160 L 40 60 L 140 60" fill="none" stroke="#64748b" stroke-width="3"/>
    <path d="M 40 160 L 40 210 L 140 210" fill="none" stroke="#64748b" stroke-width="3"/>

    <!-- Battery (Left) -->
    <line x1="30" y1="130" x2="50" y2="130" stroke="#ef4444" stroke-width="3.5"/>
    <line x1="34" y1="140" x2="46" y2="140" stroke="#3b82f6" stroke-width="4.5"/>
    <text x="20" y="138" fill="var(--vp-c-text-1)" font-size="11" font-weight="bold">V</text>

    <!-- Branch 1 (Bulb 1) -->
    <line x1="140" y1="60" x2="230" y2="60" stroke="#64748b" stroke-width="3"/>
    <line x1="140" y1="60" x2="140" y2="210" stroke="#64748b" stroke-width="3"/>
    <circle cx="185" cy="60" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="185" y="40" fill="var(--vp-c-text-1)" font-size="10" font-weight="bold" text-anchor="middle">R₁ (শাখা ১)</text>

    <!-- Branch 2 (Bulb 2) -->
    <line x1="230" y1="60" x2="230" y2="210" stroke="#64748b" stroke-width="3"/>
    <line x1="140" y1="210" x2="230" y2="210" stroke="#64748b" stroke-width="3"/>
    <circle cx="185" cy="115" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <line x1="140" y1="115" x2="230" y2="115" stroke="#64748b" stroke-width="3"/>
    <text x="185" y="98" fill="var(--vp-c-text-1)" font-size="10" font-weight="bold" text-anchor="middle">R₂ (শাখা ২)</text>

    <!-- Formula Box -->
    <g transform="translate(20, 145)">
      <rect width="270" height="75" rx="6" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-divider)" stroke-width="1"/>
      <text x="15" y="24" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">● ভোল্টেজ সমান: V = V₁ = V₂</text>
      <text x="15" y="44" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">● কারেন্ট বিভক্ত: I = I₁ + I₂</text>
      <text x="15" y="64" fill="#059669" font-size="12" font-weight="bold" font-family="system-ui">● সমতুল্য রোধ: 1/R_eq = 1/R₁ + 1/R₂</text>
    </g>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৩.৭: সিরিজ ও প্যারালাল সার্কিটের সংযোগ বিন্যাস, কারেন্ট-ভোল্টেজ বণ্টন ও সমতুল্য রোধের তুলনা
</div>
</div>

---

## ৩.৮ গাণিতিক উদাহরণ (Solved Examples)

**উদাহরণ ১ (ওহমের সূত্র):** একটি বৈদ্যুতিক হিটারের রোধ $48.4\ \Omega$। এটিকে ২২০ ভোল্ট সাপ্লাই লাইনে সংযুক্ত করলে হিটারটি কত কারেন্ট গ্রহণ করবে?

**সমাধান:**
প্রদত্ত:
- বিভব পার্থক্য, $V = 220\text{ V}$
- রোধ, $R = 48.4\ \Omega$

ওহমের সূত্রানুসারে:
$$I = \frac{V}{R} = \frac{220}{48.4} = 4.545\text{ A}$$
**উত্তর:** হিটারটি $4.55\text{ A}$ কারেন্ট গ্রহণ করবে।

---

**উদাহরণ ২ (রোধের নির্ভরশীলতা):** একটি তামার তারের দৈর্ঘ্য $100\text{ m}$ এবং প্রস্থচ্ছেদের ক্ষেত্রফল $1.5\text{ mm}^2$। তামার আপেক্ষিক রোধ $1.72 \times 10^{-8}\ \Omega\text{-m}$ হলে তারটির মোট রোধ কত হবে?

**সমাধান:**
প্রদত্ত:
- দৈর্ঘ্য, $L = 100\text{ m}$
- ক্ষেত্রফল, $A = 1.5\text{ mm}^2 = 1.5 \times 10^{-6}\text{ m}^2$
- রেজিস্টিভিটি, $\rho = 1.72 \times 10^{-8}\ \Omega\text{-m}$

রোধের সূত্র:
$$R = \rho \frac{L}{A} = \frac{1.72 \times 10^{-8} \times 100}{1.5 \times 10^{-6}} = \frac{1.72 \times 10^{-6}}{1.5 \times 10^{-6}} \approx 1.147\ \Omega$$
**উত্তর:** তারটির রোধ হবে $1.15\ \Omega$।

---

**উদাহরণ ৩ (সিরিজ ও প্যারালাল সার্কিট):** দুটি রোধ $R_1 = 10\ \Omega$ এবং $R_2 = 15\ \Omega$। 
ক) এদের সিরিজে যুক্ত করলে সমতুল্য রোধ কত হবে? 
খ) এদের প্যারালালে যুক্ত করলে সমতুল্য রোধ কত হবে?

**সমাধান:**
**ক) সিরিজ সংযোগে:**
$$R_{series} = R_1 + R_2 = 10 + 15 = 25\ \Omega$$

**খ) প্যারালাল সংযোগে:**
$$\frac{1}{R_{parallel}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{10} + \frac{1}{15} = \frac{3 + 2}{30} = \frac{5}{30} = \frac{1}{6}$$
$$R_{parallel} = 6\ \Omega$$

**উত্তর:** সিরিজে সমতুল্য রোধ $25\ \Omega$ এবং প্যারালালে সমতুল্য রোধ $6\ \Omega$।
