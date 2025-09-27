let cart = [];

// إضافة منتج للسلة
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// تحديث عرض السلة وعدد المنتجات
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item}`;
    cartList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

// إرسال الطلب إلى واتساب
function sendWhatsApp() {
  const phone = document.getElementById('phone').value.trim();

  // رقمك الحقيقي على واتساب بصيغة دولية بدون صفر بالبداية
  const yourWhatsAppNumber = '9630964732389'; // ← غيّر هذا الرقم لرقمك الحقيقي

  if (phone === '' || !/^09\d{8}$/.test(phone)) {
    alert('📱 يرجى إدخال رقم هاتف صالح!');
    return;
  }

  if (cart.length === 0) {
    alert('🛒 السلة فارغة! يرجى اختيار المنتجات أولاً.');
    return;
  }

  const message = `طلب جديد من الزبون:\n📞 رقم الهاتف: ${phone}\n🛍️ المنتجات:\n- ${cart.join('\n- ')}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}