// Data contoh, state aplikasi, dan fungsi hitung
const rp=n=>'Rp'+n.toLocaleString('id-ID');
const P=[
{id:1,n:'Mukena Abaya Premium',c:'Abaya',p:189000,r:4.9,s:'1.5K',cols:{'Cream':'#f3e3d3','Dusty Pink':'#d98e8b','Lilac':'#c3a6c9','Navy':'#4a5578'},g:'#f6e8de'},
{id:2,n:'Mukena Two Piece',c:'Two Piece',p:159000,r:4.8,s:'1.2K',cols:{'Cream':'#f3e3d3','Mocca':'#b99a86','Sage':'#a9b8a0'},g:'#f2d9d4'},
{id:3,n:'Mukena Rayon Premium',c:'Abaya',p:179000,r:4.8,s:'990',cols:{'Lilac':'#c3a6c9','Dusty Pink':'#d98e8b'},g:'#e9d4e2'},
{id:4,n:'Mukena Daily Cream',c:'Two Piece',p:139000,r:4.7,s:'760',cols:{'Cream':'#f3e3d3','Putih':'#fff'},g:'#f8eadf'},
{id:5,n:'Ponco Travel Ringan',c:'Travel',p:129000,r:4.7,s:'540',cols:{'Navy':'#4a5578','Mocca':'#b99a86'},g:'#e4dde6'},
{id:6,n:'Hijab Voal Premium',c:'Hijab',p:79000,r:4.9,s:'2.1K',cols:{'Dusty Pink':'#d98e8b','Cream':'#f3e3d3','Sage':'#a9b8a0'},g:'#f9e1dc'}];
const CATS=[['Abaya','👘'],['Two Piece','🧕'],['Ponco','🧣'],['Travel','🧳'],['Hijab','🌸'],['Aksesori','💍']];
const S={v:'splash',h:[],cart:[{id:1,col:'Dusty Pink',q:1,on:1},{id:2,col:'Cream',q:1,on:1}],fav:new Set([1,3]),pid:1,col:null,qty:1,cat:'Semua',q:'',sort:'Terbaru',pay:'Transfer Bank',tab:'Semua',oid:0,toast:'',
orders:[{no:'YNHJ24050123',d:'02 Mei 2024',st:'Menunggu Pembayaran',pay:'Transfer Bank',it:[{id:1,col:'Dusty Pink',q:2},{id:6,col:'Cream',q:2}]},
{no:'YNHJ24043098',d:'28 Apr 2024',st:'Diproses',pay:'COD',it:[{id:2,col:'Cream',q:1}]},
{no:'YNHJ24042577',d:'25 Apr 2024',st:'Dikirim',pay:'Transfer Bank',it:[{id:3,col:'Lilac',q:1}]},
{no:'YNHJ24041200',d:'12 Apr 2024',st:'Selesai',pay:'COD',it:[{id:4,col:'Cream',q:1}]}]};
const pr=id=>P.find(x=>x.id==id);
const tot=it=>it.reduce((a,x)=>a+pr(x.id).p*x.q,0);
const ONGKIR=15000;
const MAIN=['home','cats','orders','fav','acc'];
