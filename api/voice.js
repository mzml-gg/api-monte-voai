// api/voice.js

export default async function handler(req, res) {
  const { prompt, voice } = req.query;

  // التحقق من وجود النص والصوت
  if (!prompt || !voice) {
    return res.status(400).json({
      developer: "MONTE 🧊",
      status: "خطأ ❌",
      message: "النص والصوت مطلوبان! 📌 الرجاء كتابة prompt و voice",
      usage: "مثال: /api/voice?prompt=مرحبا&voice=غوكو"
    });
  }

  // هنا ممكن مستقبلاً تربط API خارجية لتوليد الصوت الحقيقي
  // مؤقتاً نخليها ترجع رابط وهمي

  res.status(200).json({
    developer: "MONTE 🧊",
    status: "نجاح ✅",
    voice: voice,
    prompt: prompt,
    url: `https://example.com/audio/${voice}.mp3`,
    message: "تم إنشاء الصوت بنجاح 🎧"
  });
}
