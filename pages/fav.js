// Halaman: fav
V.fav=function(){const l=P.filter(p=>S.fav.has(p.id));return[`<div class="hd"><div class="t ser">Favorit</div></div><div class="pad">${l.length?`<div class="grid">${l.map(card).join('')}</div>`:'<div class="empty">Belum ada produk favorit ♡</div>'}</div>`,'fav']};
