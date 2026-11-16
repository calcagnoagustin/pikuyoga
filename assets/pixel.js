/* Píxel de Meta de Piku Yoga (PIXEL PIKU YOGA · 425937122766057) — 16/11/2026
   Va en todas las páginas, en el <head>, sin defer:
   <script src="/assets/pixel.js" data-producto="Nombre del producto" data-id="slug" data-valor="precio en ARS"></script>
   Eventos, todos con el producto de la página (content_name / content_ids), para separar por producto en Meta:
   - PageView en todas.
   - ViewContent en las páginas de producto.
   - Contact + ConsultaWhatsApp al tocar un botón de WhatsApp (un link puede llevar su propio data-producto / data-id).
   - InitiateCheckout al tocar un link de Mercado Pago.
   La página de inscripción suma Lead y Purchase cuando la persona confirma. */
(function () {
  var s = document.currentScript || {}, d = s.dataset || {};
  var P = d.producto || '', I = d.id || '', V = d.valor ? Number(d.valor) : undefined, C = d.cat || 'Piku Yoga';
  !function (f, b, e, v, n, t, x) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; x = b.getElementsByTagName(e)[0]; x.parentNode.insertBefore(t, x) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '425937122766057');
  fbq('track', 'PageView');
  var datos = function (extra) { var o = { content_name: P || 'General', content_ids: [I || 'general'], content_type: 'product', content_category: C, currency: 'ARS' }; if (V) o.value = V; for (var k in (extra || {})) o[k] = extra[k]; return o; };
  if (P) fbq('track', 'ViewContent', datos());
  window.PIKU_PRODUCTO = { nombre: P, id: I, valor: V };
  window.pikuPixel = datos;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null; if (!a) return;
    var h = a.href || '', pr = a.getAttribute('data-producto') || P || 'General', id = a.getAttribute('data-id') || I || 'general';
    if (/wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/.test(h)) {
      fbq('track', 'Contact', datos({ content_name: pr, content_ids: [id] }));
      fbq('trackCustom', 'ConsultaWhatsApp', { producto: pr, producto_id: id });
    } else if (/mercadopago\.com|mpago\.la/.test(h)) {
      fbq('track', 'InitiateCheckout', datos({ content_name: pr, content_ids: [id] }));
    }
  }, true);
})();
