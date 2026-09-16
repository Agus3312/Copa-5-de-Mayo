(function(){
  var WA = "522231311554";

  // menu movil
  var burger = document.getElementById('burger'), links = document.getElementById('navlinks');
  burger.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){ links.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
  });

  // total en vivo
  var cat = document.getElementById('categoria'),
      qty = document.getElementById('cantidad'),
      totalEl = document.getElementById('total'),
      detEl = document.getElementById('detalle');

  function parts(){
    var p = cat.value.split('|');
    return { precio: parseInt(p[0],10), nombre: p[1], n: parseInt(qty.value,10) };
  }
  function money(n){ return '$' + n.toLocaleString('es-MX'); }
  function refresh(){
    var d = parts(), t = d.precio * d.n;
    totalEl.innerHTML = money(t) + ' <em>MXN</em>';
    detEl.textContent = d.n + (d.n === 1 ? ' boleto de ' : ' boletos de ') + money(d.precio) + ' — categoría ' + d.nombre;
  }
  cat.addEventListener('change', refresh);
  qty.addEventListener('change', refresh);
  refresh();

  // validacion + envio por WhatsApp
  var form = document.getElementById('form'), done = document.getElementById('done');

  function bad(id, cond){
    var f = document.getElementById(id);
    f.classList.toggle('bad', !cond);
    return cond;
  }
  function clean(v){ return (v||'').replace(/\D/g,''); }

  ['f-nombre','f-correo','f-tel'].forEach(function(id){
    var f = document.getElementById(id);
    f.querySelector('input').addEventListener('input', function(){ f.classList.remove('bad'); });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre').value.trim(),
        correo = document.getElementById('correo').value.trim(),
        tel    = document.getElementById('tel').value.trim();

    var ok = true;
    ok = bad('f-nombre', nombre.length > 2) && ok;
    ok = bad('f-correo', /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(correo)) && ok;
    ok = bad('f-tel', clean(tel).length >= 10) && ok;
    if(!ok){ form.querySelector('.bad input').focus(); return; }

    var d = parts(),
        pago = form.querySelector('input[name="pago"]:checked').value,
        total = money(d.precio * d.n);

    var msg =
      'Hola, quiero registrar mi boleto para la Gran Rifa de Vehículos de la Copa 5 de Mayo Puebla 2027.\n\n' +
      'Nombre: ' + nombre + '\n' +
      'Correo: ' + correo + '\n' +
      'WhatsApp: ' + tel + '\n' +
      'Categoría: ' + d.nombre + '\n' +
      'Boletos: ' + d.n + ' x ' + money(d.precio) + '\n' +
      'Total: ' + total + ' MXN\n' +
      'Forma de pago: ' + pago;

    var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    document.getElementById('walink').href = url;
    window.open(url, '_blank', 'noopener');

    form.style.display = 'none';
    done.classList.add('on');
    done.scrollIntoView({block:'center', behavior:'smooth'});
  });

  function reset(){
    done.classList.remove('on');
    form.reset();
    form.style.display = '';
    refresh();
    document.getElementById('nombre').focus();
  }
  var again = document.getElementById('again');
  again.addEventListener('click', reset);
  again.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); reset(); } });
})();
