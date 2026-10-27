// Navigasi, aksi, dan komponen UI yang dipakai ulang (ProductCard, header, bottom nav)
function go(v,o={}){S.h.push(S.v);Object.assign(S,o,{v});draw()}
function back(){S.v=S.h.pop()||'home';draw()}
function tab(v){S.h=[];S.v=v;draw()}
function toast(m){S.toast=m;draw();setTimeout(()=>{S.toast='';draw()},1600)}
function tf(id){S.fav.has(id)?S.fav.delete(id):S.fav.add(id);draw()}
function add(id,col,q=1){const c=col||Object.keys(pr(id).cols)[0];const x=S.cart.find(i=>i.id==id&&i.col==c);x?x.q+=q:S.cart.push({id,col:c,q,on:1});toast('Ditambahkan ke keranjang')}
function cq(i,d){S.cart[i].q=Math.max(1,S.cart[i].q+d);draw()}
const img=(p,h)=>`<div class="img" style="background:linear-gradient(135deg,${p.g},#e9c4bd);${h?'height:'+h+'px':''}">🧕</div>`;
const card=p=>`<div class="pc" onclick="go('detail',{pid:${p.id},col:null,qty:1})">${img(p)}<button class="hrt" onclick="event.stopPropagation();tf(${p.id})">${S.fav.has(p.id)?'♥':'♡'}</button><div class="in2"><div style="font-size:13px;font-weight:500">${p.n}</div><div class="pr">${rp(p.p)}</div><div class="mu">★ ${p.r} · Terjual ${p.s}+</div><div class="row sp" style="margin-top:6px"><span class="mu">${Object.keys(p.cols).length} warna</span><button class="btn s" onclick="event.stopPropagation();add(${p.id})">+ 🛒</button></div></div></div>`;
const hdr=(t,r='')=>`<div class="hd"><button class="ib" onclick="back()">←</button><div class="t ser">${t}</div>${r||'<span style="width:19px"></span>'}</div>`;
const cartBtn=()=>`<button class="ib" onclick="go('cart')">🛒<span class="bd">${S.cart.length}</span></button>`;
const nav=a=>`<div class="nav">${[['home','🏠','Beranda'],['cats','▦','Kategori'],['orders','📦','Pesanan'],['fav','♡','Favorit'],['acc','👤','Akun']].map(([k,i,l])=>`<div class="${a==k?'on':''}" onclick="tab('${k}')"><b>${i}</b>${l}</div>`).join('')}</div>`;
const list=a=>P.filter(p=>(S.cat=='Semua'||p.c==S.cat)&&p.n.toLowerCase().includes(S.q.toLowerCase())).sort((x,y)=>S.sort=='Harga ↑'?x.p-y.p:S.sort=='Terlaris'?y.r-x.r:y.id-x.id);

