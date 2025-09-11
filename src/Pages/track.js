// pages/api/track.js

let clicks = 0; // هذا مجرد مثال بسيط للتوضيح، مش مناسب للإنتاج

export default function handler(req, res) {
  clicks++;  // زيادة عدد الضغطات
  console.log(`تم الضغط ${clicks} مرة`);

  // ممكن تخزن الضغطات في قاعدة بيانات أو ملف لو عندك
  // هنا بنحول المستخدم للرابط الأصلي
  res.redirect('https://example.com/page');
}
