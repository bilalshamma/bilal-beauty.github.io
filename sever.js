const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // مجلد فيه ملفات HTML و CSS و JS

app.post('/submit-order', (req, res) => {
  const { phone, cart } = req.body;

  if (!phone || !Array.isArray(cart)) {
    return res.status(400).json({ message: 'بيانات غير مكتملة' });
  }

  console.log('📦 طلب جديد:');
  console.log('📱 رقم الهاتف:', phone);
  console.log('🛍️ المنتجات:', cart);

  // لاحقًا ممكن تحفظ الطلب بملف أو قاعدة بيانات
  res.json({ message: 'تم استلام الطلب بنجاح!' });
});

app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});