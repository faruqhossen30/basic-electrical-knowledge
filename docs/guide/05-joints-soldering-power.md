# অধ্যায় ৫: জয়েন্ট, সোল্ডারিং, পাওয়ার ও এনার্জী (Joints, Soldering, Power & Energy)

ইলেকট্রিক্যাল লাইনে তার বা ক্যাবলের দৈর্ঘ্য বৃদ্ধি করতে বা ব্রাঞ্চ লাইন তৈরি করতে বিভিন্ন ধরনের জয়েন্ট তৈরি করা হয়। জয়েন্টের সংযোগ দীর্ঘস্থায়ী, সুদৃঢ় ও কার্বনমুক্ত রাখতে সোল্ডারিং অপরিহার্য। এছাড়া বিদ্যুৎ ব্যবহারের বাণিজ্যিক হিসাবের জন্য পাওয়ার ও এনার্জির সমীকরণ ও হিসাব জানা প্রতিটি প্রকৌশলীর জন্য মৌলিক দক্ষতা।

---

## ৫.১ তারের জয়েন্টসমূহ (Electrical Wire Joints)

একটি আদর্শ বৈদ্যুতিক জয়েন্টের মূল শর্ত হলো:
- এর বৈদ্যুতিক পরিবাহিতা মূল তারের মতো সমান হতে হবে।
- এর যান্ত্রিক শক্তি (Tensile Strength) এমন হতে হবে যেন টানের মুখে সহজে খুলে না যায়।
- এতে যেন স্পার্কিং বা লুজ কন্টাক্ট না থাকে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 680 340" width="100%" style="max-width: 680px;" xmlns="http://www.w3.org/2000/svg">
  <!-- 1. Pig-tail / Rat-tail Joint (Top Left) -->
  <g transform="translate(15, 10)">
    <rect width="315" height="150" rx="8" fill="var(--vp-c-bg)" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="15" y="24" fill="#2563eb" font-size="13" font-weight="bold" font-family="system-ui">১. পিগ-টেইল জয়েন্ট (Rat-tail / Pig-tail)</text>
    
    <!-- Wire lines twisted together -->
    <!-- Insulated parts -->
    <rect x="25" y="55" width="80" height="10" rx="3" fill="#ef4444"/>
    <rect x="25" y="80" width="80" height="10" rx="3" fill="#3b82f6"/>
    <!-- Twisted bare copper wires -->
    <path d="M 105 60 Q 140 70 170 70 Q 210 65 240 70 L 255 70" fill="none" stroke="#d97706" stroke-width="4"/>
    <path d="M 105 85 Q 140 75 170 75 Q 210 80 240 70 L 255 70" fill="none" stroke="#b45309" stroke-width="3.5" stroke-dasharray="8 4"/>
    
    <text x="15" y="125" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">● জংশন বক্স ও সুইচবোর্ডের সংযোগে ব্যবহৃত</text>
    <text x="15" y="140" fill="#dc2626" font-size="10" font-weight="bold" font-family="system-ui">● টানের মুখে রাখা যায় না</text>
  </g>

  <!-- 2. Western Union Joint (Top Right) -->
  <g transform="translate(350, 10)">
    <rect width="315" height="150" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.5"/>
    <text x="15" y="24" fill="#059669" font-size="13" font-weight="bold" font-family="system-ui">২. ওয়েস্টার্ন ইউনিয়ন জয়েন্ট (Western Union)</text>
    
    <!-- Wire Left to Right -->
    <rect x="20" y="65" width="60" height="9" rx="3" fill="#ef4444"/>
    <line x1="80" y1="69" x2="235" y2="69" stroke="#d97706" stroke-width="4"/>
    
    <!-- Wire Right to Left -->
    <rect x="235" y="65" width="60" height="9" rx="3" fill="#3b82f6"/>
    
    <!-- Tight coils wrapped around each other -->
    <g stroke="#b45309" stroke-width="3">
      <line x1="120" y1="60" x2="120" y2="78"/>
      <line x1="128" y1="60" x2="128" y2="78"/>
      <line x1="136" y1="60" x2="136" y2="78"/>
      <line x1="144" y1="60" x2="144" y2="78"/>
      <!-- Interlock cross -->
      <line x1="152" y1="58" x2="162" y2="80"/>
      <line x1="162" y1="58" x2="152" y2="80"/>
      <!-- Right wrapping -->
      <line x1="170" y1="60" x2="170" y2="78"/>
      <line x1="178" y1="60" x2="178" y2="78"/>
      <line x1="186" y1="60" x2="186" y2="78"/>
      <line x1="194" y1="60" x2="194" y2="78"/>
    </g>

    <text x="15" y="125" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">● ওভারহেড লাইনে প্রচণ্ড টান সহ্য করতে পারে</text>
    <text x="15" y="140" fill="#15803d" font-size="10" font-weight="bold" font-family="system-ui">● উচ্চ যান্ত্রিক শক্তি সম্পন্ন</text>
  </g>

  <!-- 3. Tee Joint (Bottom Left) -->
  <g transform="translate(15, 175)">
    <rect width="315" height="150" rx="8" fill="var(--vp-c-bg)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="15" y="24" fill="#d97706" font-size="13" font-weight="bold" font-family="system-ui">৩. টি জয়েন্ট (Tee Joint)</text>
    
    <!-- Main Continuous Line -->
    <rect x="25" y="60" width="50" height="9" rx="3" fill="#ef4444"/>
    <line x1="75" y1="64" x2="240" y2="64" stroke="#d97706" stroke-width="4"/>
    <rect x="240" y="60" width="50" height="9" rx="3" fill="#ef4444"/>

    <!-- Tap / Branch Wire coming down -->
    <rect x="150" y="105" width="9" height="35" rx="3" fill="#3b82f6"/>
    <line x1="154" y1="64" x2="154" y2="105" stroke="#b45309" stroke-width="3.5"/>
    <!-- Wrappings on main line -->
    <g stroke="#b45309" stroke-width="3">
      <line x1="160" y1="57" x2="160" y2="71"/>
      <line x1="167" y1="57" x2="167" y2="71"/>
      <line x1="174" y1="57" x2="174" y2="71"/>
      <line x1="181" y1="57" x2="181" y2="71"/>
    </g>

    <text x="15" y="125" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">● প্রধান লাইন না কেটে শাখা লাইন বের করতে</text>
    <text x="15" y="140" fill="#b45309" font-size="10" font-weight="bold" font-family="system-ui">● সার্ভিস ড্রপ ও ব্রাঞ্চ সার্কিটে ব্যবহৃত</text>
  </g>

  <!-- 4. Britannia Joint (Bottom Right) -->
  <g transform="translate(350, 175)">
    <rect width="315" height="150" rx="8" fill="var(--vp-c-bg)" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="15" y="24" fill="#7c3aed" font-size="13" font-weight="bold" font-family="system-ui">৪. ব্রিটানিয়া জয়েন্ট (Britannia Joint)</text>
    
    <!-- Thick solid conductor 1 -->
    <line x1="30" y1="60" x2="190" y2="60" stroke="#d97706" stroke-width="5"/>
    <line x1="190" y1="60" x2="190" y2="52" stroke="#d97706" stroke-width="5"/> <!-- bent tip -->

    <!-- Thick solid conductor 2 -->
    <line x1="110" y1="70" x2="280" y2="70" stroke="#b45309" stroke-width="5"/>
    <line x1="110" y1="70" x2="110" y2="78" stroke="#b45309" stroke-width="5"/> <!-- bent tip -->

    <!-- Fine binding wire wrapping over both -->
    <rect x="115" y="55" width="70" height="20" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="3 2"/>

    <text x="15" y="125" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">● মোটা নিরেট তারে বাইন্ডিং তার দিয়ে পেঁচানো</text>
    <text x="15" y="140" fill="#6d28d9" font-size="10" font-weight="bold" font-family="system-ui">● ডিসি ট্রলি লাইন ও শক্ত ওভারহেড তারে ব্যবহৃত</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৫.১: ইলেকট্রিক্যাল লাইনে বহুল ব্যবহৃত চারটি মৌলিক তারের জয়েন্ট
</div>
</div>

### প্রধান জয়েন্টসমূহের ধরন ও প্রয়োগ:

| জয়েন্টের নাম | গঠন ও বৈশিষ্ট্য | প্রধান ব্যবহার |
| :--- | :--- | :--- |
| **১. পিগ-টেইল বা র‍্যাট-টেইল জয়েন্ট (Rat-tail / Pig-tail Joint)** | দুটি তারের প্রান্ত ইনস্যুলেশন তুলে পাশাপাশি রেখে প্লায়ার্স দিয়ে শক্তভাবে পেঁচিয়ে মোচড় দেওয়া হয়। | জংশন বক্স, সুইচবোর্ড এবং কনড্যুইট ওয়্যারিংয়ের যেখানে টানের সম্ভাবনা থাকে না। |
| **২. ওয়েস্টার্ন ইউনিয়ন জয়েন্ট (Western Union Joint)** | তার দুটি পরস্পরকে ক্রসিং করে সমকোণে এনে বিপরীতমুখীভাবে টাইট প্যাঁচ দেওয়া হয়। | ওভারহেড লাইনে যেখানে তারের ওপর প্রচুর টান বা টেনসাইল ফোর্স থাকে। |
| **৩. ম্যারিড জয়েন্ট (Married Joint)** | মাল্টি-স্ট্র্যান্ডেড তারের স্ট্র্যান্ডগুলোকে ছাতার কাঠির মতো ছড়িয়ে দিয়ে একে অপরের মধ্যে ইন্টারলক করে প্যাঁচানো হয়। | সোজা তারের টান সহ্য করার পাশাপাশি পুরু স্ট্র্যান্ডেড ক্যাবলের দীর্ঘ সংযোগে। |
| **৪. টি জয়েন্ট (Tee Joint)** | চলমান মূল লাইনকে না কেটে ইনস্যুলেশন ছাড়িয়ে অন্য একটি ব্রাঞ্চ তারকে লম্বালম্বিভাবে পেঁচিয়ে সংযোগ তৈরি। | মেইন লাইন থেকে সার্ভিস লাইন বা সাব-সার্কিটে সংযোগ নেওয়ার জন্য। |
| **৫. ব্রিটানিয়া জয়েন্ট (Britannia Joint)** | মোটা নিরেট (Solid) তার দুটি পাশাপাশি সমান্তরাল রেখে তৃতীয় একটি সরু বাইন্ডিং তার দিয়ে শক্ত করে পেঁচানো হয়। | ওভারহেড টেলিফোন ও ডিসি ট্রলি লাইনের মোটা তারে। |

---

## ৫.২ সোল্ডারিং পদ্ধতি (Soldering Process)

দুটি ধাতব পরিবাহীর সংযোগস্থলকে একটি কম গলনাঙ্কের সংকর ধাতু (Solder) গলিয়ে স্থায়ীভাবে জোড়া লাগানোর পদ্ধতিকে **সোল্ডারিং (Soldering)** বলে।

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 280" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Wires Joint (Base) -->
  <g transform="translate(140, 160)">
    <!-- Insulated wires -->
    <rect x="-80" y="-8" width="80" height="16" rx="4" fill="#ef4444"/>
    <rect x="240" y="-8" width="80" height="16" rx="4" fill="#3b82f6"/>
    <!-- Bare Conductor -->
    <line x1="0" y1="0" x2="240" y2="0" stroke="#d97706" stroke-width="8"/>
    <!-- Molten solder flow layer -->
    <rect x="70" y="-12" width="100" height="24" rx="10" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
    <text x="120" y="30" fill="var(--vp-c-text-1)" font-size="11" font-weight="bold" text-anchor="middle" font-family="system-ui">গলিত সোল্ডার জয়েন্টের ভেতরে প্রবেশ করছে</text>
  </g>

  <!-- Soldering Iron (Approaching from top-left) -->
  <g transform="translate(190, 80) rotate(35)">
    <!-- Handle -->
    <rect x="-120" y="-14" width="90" height="28" rx="6" fill="#1e293b"/>
    <!-- Heating Element Shaft -->
    <rect x="-30" y="-8" width="80" height="16" fill="#94a3b8"/>
    <!-- Copper Bit / Tip -->
    <polygon points="50,-8 90,0 50,8" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
    <text x="-80" y="5" fill="#f8fafc" font-size="10" font-family="system-ui">আয়রন হ্যান্ডেল</text>
  </g>

  <!-- Solder Wire Feed (From top-right) -->
  <g transform="translate(370, 70) rotate(-30)">
    <line x1="0" y1="0" x2="90" y2="0" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="5" fill="#94a3b8"/>
    <text x="45" y="-10" fill="var(--vp-c-text-1)" font-size="11" font-weight="bold" font-family="system-ui">সোল্ডার ওয়্যার (Sn 60% + Pb 40%)</text>
  </g>

  <!-- Flux application callout -->
  <g transform="translate(450, 190)">
    <rect width="180" height="60" rx="6" fill="var(--vp-c-bg)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="12" y="24" fill="#d97706" font-size="12" font-weight="bold" font-family="system-ui">ফ্লাক্স (Flux - রেজিন):</text>
    <text x="12" y="44" fill="var(--vp-c-text-2)" font-size="11" font-family="system-ui">অক্সাইড দূর করে সংযোগ সুদৃঢ় করে</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৫.২: সোল্ডারিং পদ্ধতির মূল বিন্যাস (সোল্ডারিং আয়রন, টিন-লেড সোল্ডার ও ফ্লাক্স প্রয়োগ)
</div>
</div>

### ১. সোল্ডার ধাতু (Solder Metal Alloy)
সোল্ডার সাধারণত **টিন (Tin - Sn)** এবং **সিসা (Lead - Pb)**-এর সংকর:
- সাধারণ কাজের জন্য: ৬০% টিন + ৪০% সিসা (গলনাঙ্ক প্রায় $188^\circ\text{C}$)।
- ইউটেকটিক সোল্ডার (Eutectic): ৬৩% টিন + ৩৭% সিসা (গলনাঙ্ক $183^\circ\text{C}$)।

### ২. ফ্লাক্সের কাজ (Function of Flux)
সোল্ডারিং করার সময় গরম ধাতুর উপরিভাগে দ্রুত বাতাসের অক্সিজেনের সাথে অক্সাইড স্তর তৈরি হয়, যা সোল্ডারকে গলিত অবস্থায় পরিবাহীর সাথে মিশতে বাধা দেয়।
- **ফ্লাক্সের কাজ:** ধাতব পৃষ্ঠের অক্সাইড দূর করা, নতুন অক্সিডেশন রোধ করা এবং গলিত সোল্ডারকে তরলভাবে দ্রুত ছড়িয়ে পড়তে সাহায্য করা।
- **সাধারণ ফ্লাক্স:** রেজিন (Rosin - ইলেকট্রনিক্সে বহুল ব্যবহৃত), জিংক ক্লোরাইড (Zinc Chloride - ভারী কাজে ব্যবহৃত)।

---

## ৫.৩ বৈদ্যুতিক ক্ষমতা বা পাওয়ার (Electric Power - $P$)

কোনো বৈদ্যুতিক সার্কিটে বৈদ্যুতিক শক্তি রূপান্তরিত বা ব্যয়িত হওয়ার হারকে **বৈদ্যুতিক পাওয়ার (Power)** বলে।

$$P = \frac{W}{t} = \frac{V \cdot Q}{t} = V \cdot I$$

ওহমের সূত্র ($V = IR$ এবং $I = \frac{V}{R}$) প্রয়োগ করে পাওয়ারের তিনটি মৌলিক সমীকরণ পাওয়া যায়:

<div style="background-color: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 18px; margin: 24px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<svg viewBox="0 0 660 220" width="100%" style="max-width: 660px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Formula Card 1: P = V * I -->
  <g transform="translate(20, 20)">
    <rect width="195" height="160" rx="8" fill="var(--vp-c-bg)" stroke="#ef4444" stroke-width="1.8"/>
    <rect x="0" y="0" width="195" height="40" rx="8" fill="#fee2e2"/>
    <text x="97" y="26" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">ভোল্টেজ ও কারেন্ট জানা থাকলে</text>
    <text x="97" y="85" fill="#ef4444" font-size="28" font-weight="bold" text-anchor="middle" font-family="system-ui">P = V × I</text>
    <text x="97" y="125" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">একক: ওয়াট (Watt, W)</text>
    <text x="97" y="145" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">সাধারণ সার্কিট বিশ্লেষণ</text>
  </g>

  <!-- Formula Card 2: P = I^2 * R -->
  <g transform="translate(232, 20)">
    <rect width="195" height="160" rx="8" fill="var(--vp-c-bg)" stroke="#10b981" stroke-width="1.8"/>
    <rect x="0" y="0" width="195" height="40" rx="8" fill="#d1fae5"/>
    <text x="97" y="26" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">কারেন্ট ও রোধ জানা থাকলে</text>
    <text x="97" y="85" fill="#059669" font-size="28" font-weight="bold" text-anchor="middle" font-family="system-ui">P = I² × R</text>
    <text x="97" y="125" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">কপার লস / জুলের তাপীয় সূত্র</text>
    <text x="97" y="145" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">তারের অপচয় হিসাব</text>
  </g>

  <!-- Formula Card 3: P = V^2 / R -->
  <g transform="translate(445, 20)">
    <rect width="195" height="160" rx="8" fill="var(--vp-c-bg)" stroke="#3b82f6" stroke-width="1.8"/>
    <rect x="0" y="0" width="195" height="40" rx="8" fill="#dbeafe"/>
    <text x="97" y="26" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">ভোল্টেজ ও রোধ জানা থাকলে</text>
    <text x="97" y="85" fill="#2563eb" font-size="28" font-weight="bold" text-anchor="middle" font-family="system-ui">P = V² ÷ R</text>
    <text x="97" y="125" fill="var(--vp-c-text-2)" font-size="11" text-anchor="middle" font-family="system-ui">হিটার বা বাতির ক্ষমতা হিসাব</text>
    <text x="97" y="145" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle" font-family="system-ui">কনস্ট্যান্ট ভোল্টেজ সিস্টেম</text>
  </g>
</svg>
<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 10px; font-weight: 500;">
  চিত্র ৫.৩: বৈদ্যুতিক পাওয়ারের ($P$) তিনটি মৌলিক সমীকরণ ও প্রয়োগ ক্ষেত্র
</div>
</div>

- **একক:** ওয়াট (Watt, W)
- **বৃহত্তর একক:** 
  - ১ কিলোওয়াট ($\text{kW}$) = ১,০০০ ওয়াট
  - ১ মেগাওয়াট ($\text{MW}$) = $১,০০০,০০০$ ওয়াট
  - ১ হর্সপাওয়ার ($\text{HP}$) = ৭৪৬ ওয়াট (ব্রিটিশ একক) অথবা ৭৩৫.৫ ওয়াট (মেট্রিক একক)

---

## ৫.৪ বৈদ্যুতিক শক্তি বা এনার্জী (Electric Energy - $E$)

নির্দিষ্ট সময় ধরে কোনো সার্কিট বা যন্ত্র যে মোট বৈদ্যুতিক পাওয়ার ব্যবহার বা খরচ করে, তাকে **বৈদ্যুতিক শক্তি বা এনার্জী** বলে।

$$\text{Energy } (E) = \text{Power } (P) \times \text{Time } (t)$$

### বাণিজ্যিক একক: বোর্ড অব ট্রেড (B.O.T) বা কিলোওয়াট-ঘণ্টা (kWh)
বিদ্যুৎ বিতরণ কোম্পানিগুলো গ্রাহকদের বিদ্যুৎ বিলের হিসাব **"ইউনিট (Unit)"**-এ পরিমাপ করে।

$$1 \text{ Unit} = 1 \text{ kWh} = 1000 \text{ Watt} \times 1 \text{ Hour}$$

জুল এককে রূপান্তর:
$$1 \text{ kWh} = 1000\text{ W} \times 3600\text{ s} = 3.6 \times 10^6\text{ Joules} = 3.6\text{ MJ}$$

### ইউনিট গণনার সাধারণ সূত্র:
$$\text{মোট ইউনিট (kWh)} = \frac{\text{মোট লোড (ওয়াট)} \times \text{দৈনিক ব্যবহারের সময় (ঘণ্টা)} \times \text{দিনের সংখ্যা}}{১০০০}$$

---

## ৫.৫ ব্যবহারিক বিদ্যুৎ বিল হিসাব (Solved Example)

**সমস্যা:** একটি বাসা-বাড়িতে নিম্নোক্ত বৈদ্যুতিক লোডগুলো দৈনিক নির্দিষ্ট সময় ধরে পরিচালিত হয়:
- ৫টি ৬০ ওয়াটের ফ্যান দৈনিক ৮ ঘণ্টা
- ১০টি ২০ ওয়াটের এলইডি লাইট দৈনিক ৬ ঘণ্টা
- ১টি ১০০০ ওয়াটের পানির পাম্প দৈনিক ১ ঘণ্টা
- ১টি ২০০ ওয়াটের রেফ্রিজারেটর দৈনিক ১০ ঘণ্টা

প্রতি ইউনিট বিদ্যুতের মূল্য ৭.৫০ টাকা হলে, **৩০ দিনের এক মাসে** ঐ বাড়ির বিদ্যুৎ বিল কত টাকা হবে?

### সমাধান:

১. **দৈনিক মোট বিদ্যুৎ শক্তি খরচ:**
- ফ্যান: $৫ \times ৬০\text{ W} \times ৮\text{ h} = ২৪০০\text{ Wh}$
- লাইট: $১০ \times ২০\text{ W} \times ৬\text{ h} = ১২০০\text{ Wh}$
- পানির পাম্প: $১ \times ১০০০\text{ W} \times ১\text{ h} = ১০০০\text{ Wh}$
- রেফ্রিজারেটর: $১ \times ২০০\text{ W} \times ১০\text{ h} = ২০০০\text{ Wh}$

$$\text{দৈনিক মোট খরচ} = ২৪০০ + ১২০০ + ১০০০ + ২০০০ = ৬৬০০\text{ Wh} = \frac{৬৬০০}{১০০০} = ৬.৬\text{ kWh (ইউনিট)}$$

২. **৩০ দিনে মোট ব্যবহৃত ইউনিট:**
$$\text{মাসিক মোট ইউনিট} = ৬.৬ \times ৩০ = ১৯৮\text{ ইউনিট}$$

৩. **মাসিক বিদ্যুৎ বিল:**
$$\text{মোট বিল} = ১৯৮ \times ৭.৫০\text{ টাকা} = ১৪৮৫\text{ টাকা}$$

**উত্তর:** ঐ বাসার ৩০ দিনের বিদ্যুৎ বিল আসবে **১,৪৮৫ টাকা**।
