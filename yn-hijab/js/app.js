// Aksi pesanan + render utama
function mk(){const it=S.cart.filter(x=>x.on).map(({id,col,q})=>({id,col,q})),no='YNHJ'+Date.now().toString().slice(-8);S.orders.unshift({no,d:'Hari ini',st:S.pay=='COD'?'Menunggu Konfirmasi':'Menunggu Pembayaran',pay:S.pay,it});S.cart=S.cart.filter(x=>!x.on);S.h=['home'];S.v='od';S.oid=no;draw();toast('Pesanan simulasi dibuat (belum terhubung ke layanan)')}
function chs(no,st){S.orders.find(o=>o.no==no).st=st;draw();toast('Status diubah (simulasi)')}
function draw(keep){const f=document.activeElement&&document.activeElement.id=='q';const [body,act,foot]=V[S.v]();
document.getElementById('app').innerHTML=`<div id="main">${body}</div>${foot||''}${act?nav(act):''}${S.toast?`<div class="toast">${S.toast}</div>`:''}`;
if(f){const q=document.getElementById('q');q.focus();q.setSelectionRange(99,99)}}
draw();
