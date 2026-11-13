# অধ্যায় ৬: চুম্বক ও চৌম্বকত্ব (Magnet & Magnetism)

ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ের সবচেয়ে গুরুত্বপূর্ণ প্রাকৃতিক শক্তিগুলোর একটি হলো বিদ্যুৎ ও চুম্বকত্বের যুগলবন্ধন—যাকে **তড়িৎচৌম্বকত্ব (Electromagnetism)** বলা হয়। আধুনিক যুগের সমস্ত ইলেকট্রিক জেনারেটর, মোটর, ট্রান্সফরমার এবং রিলে এই চৌম্বকীয় নীতির ওপর ভিত্তি করেই কাজ করে।

---

## ৬.১ চুম্বক ও চৌম্বক পদার্থের মৌলিক ধারণা (Magnet Fundamentals)

যেসব বস্তু লোহা, নিকেল, কোবাল্ট বা এদের সংকরকে আকর্ষণ করে এবং অবাধে ঝুলিয়ে দিলে সর্বদা উত্তর-দক্ষিণমুখী হয়ে স্থির থাকে, তাকে **চুম্বক (Magnet)** বলে।

### চুম্বকের মৌলিক ধর্মাবলী:
1. **দ্বি-মেরু বিশিষ্ট:** প্রতিটি চুম্বকের সর্বদা দুটি মেরু থাকে—উত্তর মেরু (North Pole - N) এবং দক্ষিণ মেরু (South Pole - S)। চুম্বককে যত ছোট টুকরোই করা হোক না কেন, কখনোই একক মেরু (Magnetic Monopole) সৃষ্টি করা যায় না।
2. **আকর্ষণ ও বিকর্ষণ নিয়ম:** সমমেরু পরস্পরকে বিকর্ষণ করে এবং বিপরীত মেরু পরস্পরকে আকর্ষণ করে ($N-N$ বা $S-S$ বিকর্ষণ; $N-S$ আকর্ষণ)।
3. **দিকদর্শী ধর্ম:** চুম্বককে সুতো দিয়ে ঝুলিয়ে দিলে তা ভৌগোলিক উত্তর-দক্ষিণ বরাবর অবস্থান নেয়।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 280" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowMag" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Bar Magnet Center -->
  <g transform="translate(240, 115)">
    <!-- North Pole (Red) -->
    <rect x="0" y="0" width="100" height="50" rx="3" fill="#ef4444"/>
    <text x="50" y="32" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle" font-family="system-ui">N (উত্তর)</text>
    
    <!-- South Pole (Blue) -->
    <rect x="100" y="0" width="100" height="50" rx="3" fill="#3b82f6"/>
    <text x="150" y="32" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle" font-family="system-ui">S (দক্ষিণ)</text>
  </g>

  <!-- Magnetic Field Lines (Loops from N to S outside) -->
  <!-- Top Loop 1 -->
  <path d="M 280 115 C 280 40, 400 40, 400 115" fill="none" stroke="#3b82f6" stroke-width="2" marker-mid="url(#arrowMag)"/>
  <!-- Top Loop 2 (Wider) -->
  <path d="M 260 115 C 260 0, 420 0, 420 115" fill="none" stroke="#3b82f6" stroke-width="1.8"/>

  <!-- Bottom Loop 1 -->
  <path d="M 280 165 C 280 240, 400 240, 400 165" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <!-- Bottom Loop 2 (Wider) -->
  <path d="M 260 165 C 260 280, 420 280, 420 165" fill="none" stroke="#3b82f6" stroke-width="1.8"/>

  <!-- Left Lines out from North -->
  <path d="M 240 130 C 180 130, 120 100, 80 50" fill="none" stroke="#ef4444" stroke-width="1.8"/>
  <path d="M 240 140 L 120 140" fill="none" stroke="#ef4444" stroke-width="2"/>
  <path d="M 240 150 C 180 150, 120 180, 80 230" fill="none" stroke="#ef4444" stroke-width="1.8"/>

  <!-- Right Lines in to South -->
  <path d="M 600 50 C 560 100, 500 130, 440 130" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
  <path d="M 560 140 L 440 140" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M 600 230 C 560 180, 500 150, 440 150" fill="none" stroke="#3b82f6" stroke-width="1.8"/>

  <!-- Direction Note -->
  <rect x="230" y="240" width="220" height="26" rx="5" fill="var(--vp-c-bg)" stroke="var(--vp-c-divider)" stroke-width="1"/>
  <text x="340" y="258" fill="var(--vp-c-text-1)" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">বাইরে: N → S | ভেতরে: S → N</text>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৬.১: একটি বার ম্যাগনেটের চারপাশের অদৃশ্য চৌম্বক বলরেখা (Magnetic Field Lines)
</div>
</div>

### চৌম্বক পদার্থের প্রকারভেদ:
- **ডায়াম্যাগনেটিক (Diamagnetic):** চুম্বক দ্বারা সামান্য বিকর্ষিত হয় (যেমন তামা, রূপা, সোনা, বিসমাথ, সীসা)।
- **প্যারাম্যাগনেটিক (Paramagnetic):** চুম্বক দ্বারা সামান্য আকৃষ্ট হয় (যেমন অ্যালুমিনিয়াম, প্লাটিনাম, বাতাস, অক্সিজেন)।
- **ফেরোম্যাগনেটিক (Ferromagnetic):** চুম্বক দ্বারা অত্যন্ত প্রবলভাবে আকৃষ্ট হয় এবং সহজে শক্তিশালী কৃত্রিম চুম্বকে পরিণত করা যায় (যেমন লোহা, স্টিল, নিকেল, কোবাল্ট ও তাদের সংকর)।

---

## ৬.২ চৌম্বকীয় রাশিসমূহ ও একক (Magnetic Quantities)

### ১. চৌম্বক ফ্লাক্স (Magnetic Flux - $\Phi$)
চুম্বকের উত্তর মেরু থেকে উৎপন্ন হয়ে দক্ষিণ মেরুতে প্রবেশকারী মোট চৌম্বক বলরেখার সমষ্টিকে **চৌম্বক ফ্লাক্স** বলে।
- প্রতীক: $\Phi$ (ফাই)
- এস.আই. একক: **ওয়েবার (Weber, Wb)**
- সিজিএস একক: ম্যাক্সওয়েল ($1\text{ Wb} = 10^8\text{ Maxwell}$)।

### ২. ফ্লাক্স ডেনসিটি বা চৌম্বক ঘনত্ব (Magnetic Flux Density - $B$)
চৌম্বক বলরেখার সাথে লম্বভাবে স্থাপিত প্রতি একক ক্ষেত্রফলের মধ্য দিয়ে অতিক্রান্ত চৌম্বক ফ্লাক্সের পরিমাণকে **ফ্লাক্স ডেনসিটি** বলে।
$$B = \frac{\Phi}{A}$$
- যেখানে:
  - $\Phi$ = চৌম্বক ফ্লাক্স (Wb)
  - $A$ = প্রস্থচ্ছেদের ক্ষেত্রফল ($\text{m}^2$)
- একক: **টেসলা (Tesla, T)** অথবা $\text{Wb/m}^2$।

### ৩. ম্যাগনেটোমোটিভ ফোর্স (MMF)
যে চৌম্বকীয় চাপ বা বল চৌম্বক সার্কিটে ফ্লাক্স তৈরি বা বজায় রাখতে কাজ করে, তাকে **ম্যাগনেটোমোটিভ ফোর্স (MMF)** বলে (এটি বৈদ্যুতিক সার্কিটের EMF-এর অনুরূপ)।
$$\text{MMF} = N \cdot I$$
- যেখানে: $N$ = কয়েলের প্যাঁচ সংখ্যা, $I$ = কারেন্ট (অ্যাম্পিয়ার)।
- একক: **অ্যাম্পিয়ার-টার্ন (Ampere-Turn, AT)**।

### ৪. রিল্যাকট্যান্স (Reluctance - $\mathcal{R}$)
চৌম্বক সার্কিটে চৌম্বক ফ্লাক্স প্রবাহে যে বাধা তৈরি হয়, তাকে **রিল্যাকট্যান্স** বলে (এটি বৈদ্যুতিক সার্কিটের রোধ বা রেজিস্ট্যান্সের অনুরূপ)।
$$\mathcal{R} = \frac{l}{\mu A} = \frac{\text{MMF}}{\Phi}$$
- একক: $\text{AT/Wb}$।

---

## ৬.৩ তড়িৎচৌম্বকত্ব ও ডান হাতের নিয়ম (Electromagnetism & Right-Hand Rule)

কোনো পরিবাহীর মধ্য দিয়ে কারেন্ট প্রবাহিত হলে তার চারদিকে একটি চক্রাকার চৌম্বক ক্ষেত্র তৈরি হয়। একে **তড়িৎচৌম্বকত্ব (Electromagnetism)** বলে।

### ডান হাতের মুষ্টি নিয়ম (Right-Hand Grip Rule):
ডান হাত দিয়ে পরিবাহী তারকে এমনভাবে মুষ্টিবদ্ধ করলে যেন প্রসারিত **বৃদ্ধাঙ্গুলি কারেন্ট প্রবাহের দিক** ($I$) নির্দেশ করে, তবে বাকি আঙুলগুলোর অগ্রভাগ পরিবাহীকে ঘিরে থাকা **চক্রাকার চৌম্বক ক্ষেত্রের আবর্তনীয় দিক** ($B$) নির্দেশ করবে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 280" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/>
    </marker>
    <marker id="arrowCirc" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Straight Vertical Conductor (Center) -->
  <g transform="translate(240, 20)">
    <line x1="0" y1="240" x2="0" y2="20" stroke="#d97706" stroke-width="8"/>
    <!-- Current Arrow -->
    <line x1="0" y1="180" x2="0" y2="40" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowUp)"/>
    <text x="18" y="45" fill="#ef4444" font-size="14" font-weight="bold" font-family="system-ui">কারেন্ট (I) উর্ধ্বমুখী</text>

    <!-- Circular Magnetic Field Lines -->
    <ellipse cx="0" cy="140" rx="90" ry="25" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <ellipse cx="0" cy="140" rx="130" ry="36" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="6 4"/>
    
    <!-- Direction arrows on field line -->
    <path d="M 80 148 L 90 140" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrowCirc)"/>
    <path d="M -80 132 L -90 140" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrowCirc)"/>
  </g>

  <!-- Rule Explanation Card (Right) -->
  <g transform="translate(420, 50)">
    <rect width="220" height="170" rx="8" fill="var(--vp-c-bg)" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
    <text x="110" y="30" fill="#2563eb" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">ডান হাতের মুষ্টি নিয়ম</text>
    <line x1="20" y1="42" x2="200" y2="42" stroke="var(--vp-c-divider)" stroke-width="1"/>
    
    <text x="15" y="70" fill="#ef4444" font-size="12" font-weight="bold" font-family="system-ui">👍 বৃদ্ধাঙ্গুলি (Thumb):</text>
    <text x="35" y="90" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">কারেন্ট প্রবাহের দিক (I)</text>
    
    <text x="15" y="120" fill="#3b82f6" font-size="12" font-weight="bold" font-family="system-ui">🔄 অন্য আঙুলগুলো (Fingers):</text>
    <text x="35" y="140" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">চৌম্বক ক্ষেত্রের আবর্তন দিক (B)</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৬.২: সোজা পরিবাহীতে কারেন্ট ও তার চারপাশের চক্রাকার চৌম্বক ক্ষেত্রের দিক (ডান হাতের মুষ্টি নিয়ম)
</div>
</div>

---

## ৬.৪ ফ্যারাডের তড়িৎচৌম্বকীয় আবেশের সূত্রাবলী (Faraday's Induction Laws)

১৮৩১ সালে মাইকেল ফ্যারাডে আবিষ্কার করেন যে চৌম্বক ক্ষেত্র এবং পরিবাহীর আপেক্ষিক গতির মাধ্যমে বৈদ্যুতিক ভোল্টেজ উৎপন্ন করা সম্ভব।

> **১ম সূত্র:** যখনই কোনো পরিবাহী একটি চৌম্বক ক্ষেত্রকে কর্তন (Cut) করে অথবা কোনো কয়েলের সাথে জড়িত চৌম্বক ফ্লাক্সের পরিবর্তন ঘটে, তখন পরিবাহী বা কয়েলে একটি **ইলেকট্রোমোটিভ ফোর্স (EMF)** আবিষ্ট হয়।
>
> **২য় সূত্র:** আবিষ্ট ইএমএফের মান কয়েলটির সাথে জড়িত চৌম্বক ফ্লাক্স পরিবর্তনের হারের সরাসরি সমানুপাতিক।

গাণিতিকভাবে:
$$e = -N \frac{d\Phi}{dt}$$

> [!NOTE]
> সমীকরণের ঋণাত্মক ($-$) চিহ্নটি **লেঞ্জের সূত্র (Lenz's Law)** নির্দেশ করে: আবিষ্ট কারেন্টের দিক এমন হয় যে এটি তার সৃষ্টির মূল কারণকেই (ফ্লাক্সের পরিবর্তন) বাধা দেয়।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 260" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Bar Magnet in Motion -->
  <g transform="translate(60, 80)">
    <rect x="0" y="0" width="70" height="35" rx="3" fill="#ef4444"/>
    <text x="35" y="24" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">N</text>
    <rect x="70" y="0" width="70" height="35" rx="3" fill="#3b82f6"/>
    <text x="105" y="24" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">S</text>
    
    <!-- Motion Arrow -->
    <path d="M 155 17 L 210 17" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arrowUp)"/>
    <text x="180" y="42" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">গতি (v →)</text>
  </g>

  <!-- Solenoid / Coil -->
  <g transform="translate(290, 60)">
    <!-- Core Cylinder outline -->
    <rect x="0" y="10" width="160" height="55" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- Wire loops -->
    <path d="M 20 5 L 20 70 M 50 5 L 50 70 M 80 5 L 80 70 M 110 5 L 110 70 M 140 5 L 140 70" stroke="#d97706" stroke-width="4"/>
    <text x="80" y="100" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui">কয়েল (N প্যাঁচ)</text>
  </g>

  <!-- Galvanometer Connection -->
  <g transform="translate(290, 150)">
    <!-- Connecting wires -->
    <path d="M 20 -20 L 20 40 L 80 40" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <path d="M 140 -20 L 140 40 L 120 40" fill="none" stroke="#64748b" stroke-width="2.5"/>

    <!-- Meter Circle -->
    <g transform="translate(100, 40)">
      <circle cx="0" cy="0" r="28" fill="var(--vp-c-bg)" stroke="#6366f1" stroke-width="2"/>
      <text x="0" y="7" fill="#4f46e5" font-size="16" font-weight="bold" text-anchor="middle" font-family="system-ui">G</text>
      <!-- Deflected needle -->
      <line x1="0" y1="0" x2="16" y2="-16" stroke="#ef4444" stroke-width="2.5"/>
      <text x="0" y="45" fill="#4f46e5" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">গ্যালভানোমিটারে কাঁটার বিক্ষেপ</text>
    </g>
  </g>

  <!-- Formula Callout (Right) -->
  <g transform="translate(480, 70)">
    <rect width="180" height="100" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.5"/>
    <text x="90" y="30" fill="#047857" font-size="13" font-weight="bold" text-anchor="middle" font-family="system-ui">আবিষ্ট ইএমএফ</text>
    <text x="90" y="65" fill="#ef4444" font-size="18" font-weight="bold" text-anchor="middle" font-family="serif">e = -N (dΦ / dt)</text>
    <text x="90" y="85" fill="var(--vp-c-text-2)" font-size="10" text-anchor="middle" font-family="system-ui">ফ্লাক্স পরিবর্তনের হার</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৬.৩: ফ্যারাডের তড়িৎচৌম্বকীয় আবেশের পরীক্ষা (চুম্বক ও কয়েলের আপেক্ষিক গতিতে বিদ্যুৎ উৎপাদন)
</div>
</div>

---

## ৬.৫ ফ্লেমিংয়ের ডান হাত ও বাম হাত নিয়ম (Fleming's Hand Rules)

বৈদ্যুতিক মোটর ও জেনারেটরে বল, চৌম্বক ক্ষেত্র এবং কারেন্টের পারস্পরিক ৯০° সমকোণীয় সম্পর্ক নির্ণয়ে ফ্লেমিংয়ের নিয়ম দুটি সর্বাধিক ব্যবহৃত:

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 280" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Hand Rule: Generator (Left Card) -->
  <g transform="translate(15, 10)">
    <rect width="315" height="250" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <rect x="0" y="0" width="315" height="40" rx="8" fill="#d1fae5"/>
    <text x="157" y="26" fill="#065f46" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">১. ডান হাত নিয়ম: জেনারেটর (Generator)</text>

    <!-- 3 Axes representation -->
    <g transform="translate(80, 140)">
      <!-- Thumb (Up) -->
      <line x1="0" y1="0" x2="0" y2="-65" stroke="#ef4444" stroke-width="4" marker-end="url(#arrowUp)"/>
      <text x="-10" y="-72" fill="#ef4444" font-size="11" font-weight="bold">F (গতি / Motion)</text>

      <!-- Forefinger (Right) -->
      <line x1="0" y1="0" x2="70" y2="0" stroke="#3b82f6" stroke-width="4" marker-end="url(#arrowCirc)"/>
      <text x="78" y="4" fill="#3b82f6" font-size="11" font-weight="bold">B (চৌম্বক ক্ষেত্র)</text>

      <!-- Middle finger (Down-Right diagonal) -->
      <line x1="0" y1="0" x2="45" y2="45" stroke="#10b981" stroke-width="4"/>
      <text x="48" y="60" fill="#059669" font-size="11" font-weight="bold">I (আবিষ্ট কারেন্ট)</text>
    </g>

    <text x="210" y="90" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">উদ্দেশ্য:</text>
    <text x="210" y="110" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">জেনারেটরে উৎপন্ন</text>
    <text x="210" y="128" fill="#047857" font-size="11" font-weight="bold" font-family="system-ui">কারেন্টের দিক নির্ণয়</text>
  </g>

  <!-- Left Hand Rule: Motor (Right Card) -->
  <g transform="translate(350, 10)">
    <rect width="315" height="250" rx="8" fill="var(--vp-c-bg)" stroke="#3b82f6" stroke-width="1.8"/>
    <rect x="0" y="0" width="315" height="40" rx="8" fill="#dbeafe"/>
    <text x="157" y="26" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">২. বাম হাত নিয়ম: মোটর (Motor)</text>

    <!-- 3 Axes representation -->
    <g transform="translate(80, 140)">
      <!-- Thumb (Up) -->
      <line x1="0" y1="0" x2="0" y2="-65" stroke="#ef4444" stroke-width="4" marker-end="url(#arrowUp)"/>
      <text x="-10" y="-72" fill="#ef4444" font-size="11" font-weight="bold">F (ঘূর্ণন বল / Force)</text>

      <!-- Forefinger (Right) -->
      <line x1="0" y1="0" x2="70" y2="0" stroke="#3b82f6" stroke-width="4" marker-end="url(#arrowCirc)"/>
      <text x="78" y="4" fill="#3b82f6" font-size="11" font-weight="bold">B (চৌম্বক ক্ষেত্র)</text>

      <!-- Middle finger (Down-Right diagonal) -->
      <line x1="0" y1="0" x2="45" y2="45" stroke="#f59e0b" stroke-width="4"/>
      <text x="48" y="60" fill="#b45309" font-size="11" font-weight="bold">I (প্রযুক্ত কারেন্ট)</text>
    </g>

    <text x="210" y="90" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" font-family="system-ui">উদ্দেশ্য:</text>
    <text x="210" y="110" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">মোটরে কন্ডাক্টরের</text>
    <text x="210" y="128" fill="#1d4ed8" font-size="11" font-weight="bold" font-family="system-ui">ঘূর্ণনের দিক নির্ণয়</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৬.৪: ফ্লেমিংয়ের ডান হাত নিয়ম (জেনারেটরে কারেন্ট নির্ণয়) ও বাম হাত নিয়ম (মোটরে বল নির্ণয়)
</div>
</div>

| নিয়ম | হাতের আঙুলসমূহের অবস্থান | প্রধান প্রয়োগ ক্ষেত্র |
| :--- | :--- | :--- |
| **ফ্লেমিংয়ের ডান হাত নিয়ম (Fleming's Right-Hand Rule)** | ডান হাতের বৃদ্ধাঙ্গুলি, তর্জনী এবং মধ্যমাকে পরস্পরের সমকোণে প্রসারিত করলে:<br>• **বৃদ্ধাঙ্গুলি (Thumb):** পরিবাহীর গতির দিক (Motion / Force)<br>• **তর্জনী (Forefinger):** চৌম্বক ক্ষেত্রের দিক (Field: N $\to$ S)<br>• **মধ্যমা (Middle Finger):** আবিষ্ট কারেন্টের দিক (Induced Current) | **জেনারেটর (Generator)**-এ উৎপন্ন কারেন্টের দিক নির্ণয়ে। |
| **ফ্লেমিংয়ের বাম হাত নিয়ম (Fleming's Left-Hand Rule)** | বাম হাতের তিন আঙুল সমকোণে প্রসারিত করলে:<br>• **তর্জনী (Forefinger):** চৌম্বক ক্ষেত্রের দিক (Field: N $\to$ S)<br>• **মধ্যমা (Middle Finger):** প্রযুক্ত কারেন্টের দিক (Applied Current)<br>• **বৃদ্ধাঙ্গুলি (Thumb):** কন্ডাক্টরের ওপর প্রযুক্ত যান্ত্রিক বল বা ঘূর্ণনের দিক (Thrust / Force) | **মোটর (Motor)**-এর আর্মেচার ঘূর্ণনের দিক নির্ণয়ে। |

> [!TIP]
> **সহজে মনে রাখার FBI কৌশল:**
> - **F** (Force/Thrust) = **বৃদ্ধাঙ্গুলি (Thumb)**
> - **B** (Magnetic Field) = **তর্জনী (Forefinger)**
> - **I** (Current) = **মধ্যমা (Middle Finger)**
> - মনে রাখুন: **ডান হাত = জেনারেটর** এবং **বাম হাত = মোটর**।
