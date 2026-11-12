(()=>{'use strict';
const $=id=>document.getElementById(id), PKR=n=>'PKR '+Number(n).toLocaleString('en-PK'), deliveryFee=300, specificTimeFee=300;

const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categoryData={
 flowers:{types:{
 "Imported roses":{colors:["Red","White","Pink","Blue","Black"],price:6500,icon:"🌹",image:"https://upload.wikimedia.org/wikipedia/commons/8/85/Rose_Bouquet_%28Unsplash%29.jpg"},
 "Pakistani roses":{colors:["Red"],price:3500,icon:"🌹",image:"https://upload.wikimedia.org/wikipedia/commons/8/85/Rose_Bouquet_%28Unsplash%29.jpg"},
 "Sunflowers":{colors:["Yellow"],price:4200,icon:"🌻",image:"https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"},
 "Chrysanthemums":{colors:["White","Pink","Purple","Yellow","Green","Maroon"],price:3800,icon:"🌼",image:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Chrysanthemum_morifolium.jpg"},
 "Baby breath":{colors:["Blue","White","Pink","Purple"],price:3200,icon:"🤍",image:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Gypsophila_paniculata_2007.jpg"},
 "Gladiolus":{colors:["White","Blue","Pink","Purple","Red"],price:4500,icon:"🌺",image:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Gladiolus_hybrid.jpg"},
 "Gerberas":{colors:["Pink","White","Peach"],price:3900,icon:"🌸",image:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Gerbera_jamesonii.jpg"}}},
 cakes:{flavours:["Chocolate","Three Milk","Lotus","Ferrero","Pistachio","Red Velvet","Dry Cake"],cities:["Lahore","Karachi","Islamabad","Rawalpindi"],bakeries:{Lahore:["Layers Bakeshop","Kitchen Cuisine","Cakes & Bakes"],Karachi:["Delizia","Pie in the Sky"],Islamabad:["Tehzeeb Bakers","Layers Bakeshop"],Rawalpindi:["Tehzeeb Bakers","Layers Bakeshop"]},price:3900,image:"https://upload.wikimedia.org/wikipedia/commons/c/c8/ChocolateCake.jpg"},
 chocolates:[{name:"Cadbury Dairy Milk",price:1400,icon:"🍫"},{name:"KitKat Two Finger",price:500,icon:"🍫"},{name:"KitKat Four Finger",price:700,icon:"🍫"},{name:"Bounty",price:1000,icon:"🥥"},{name:"Snickers",price:1000,icon:"🍫"},{name:"Mars",price:1000,icon:"🍫"},{name:"Ferrero Rocher Original Italian (16 pieces)",price:7000,icon:"🍬"},{name:"Lals assorted chocolate box — medium",price:5600,icon:"🎁"}],
 baskets:[
 {name:"Chocolate Celebration Basket",price:6900,description:"Includes 2 KitKat Four Finger bars, 2 Cadbury Dairy Milk bars, 1 Bounty, 1 Snickers, 1 Mars, 1 personalised card and a woven gift basket.",icon:"🍫"},
 {name:"Cake & Chocolate Treat Basket",price:7900,description:"Includes 1 standard 1.5 lb chocolate cake, 2 KitKat Four Finger bars, 2 Dairy Milk bars, 1 Bounty bar, 1 greeting card and gift basket packaging.",icon:"🎂"},
 {name:"Rose & Romance Basket",price:8500,description:"Includes 1 small Pakistani red-rose bouquet (12 stems), 1 medium teddy bear, 2 Dairy Milk bars, 1 personalised card and a decorative basket.",icon:"🌹"},
 {name:"Birthday Surprise Basket",price:9200,description:"Includes 1 small celebration cake (approx. 1.5 lb), 1 balloon bunch (5 balloons), 1 medium teddy bear, 2 KitKat Four Finger bars and a greeting card.",icon:"🎈"},
 {name:"Little Star Kids Basket",price:6500,description:"Includes 1 age-appropriate plush toy, 1 colouring/activity set, 2 small chocolate bars, 1 juice pack, a greeting card and gift basket packaging.",icon:"🧸"}]};
let activeCategory="flowers",cart=[];
function optionSelect(label,id,values,placeholder){return '<label>'+label+'<select id="'+id+'"><option value="">'+placeholder+'</option>'+values.map(v=>'<option>'+safe(v)+'</option>').join('')+'</select></label>';}
function renderCategory(){
 document.querySelectorAll('[data-category]').forEach(b=>b.classList.toggle('active',b.dataset.category===activeCategory));
 const host=$('categoryOptions'),visual=$('categoryVisual'),add=$('addCategoryItem');let out='';
 if(activeCategory==='flowers'){
  out='<h3>Choose your flowers</h3>'+optionSelect('Flower type','flowerType',Object.keys(categoryData.flowers.types),'Select flower type')+'<div id="flowerColorWrap"></div>';
  visual.innerHTML='<img src="'+categoryData.flowers.types["Imported roses"].image+'" alt="Fresh flower bouquet" onerror="this.style.display=\'none\'"><span>🌷</span><b>Fresh flowers, thoughtfully arranged</b>';
 }else if(activeCategory==='cakes'){
  out='<h3>Choose a cake flavour</h3>'+optionSelect('Cake flavour','cakeFlavour',categoryData.cakes.flavours,'Select flavour')+'<div id="cakeCityWrap"></div><div id="cakeBakeryWrap"></div>';
  visual.innerHTML='<img src="'+categoryData.cakes.image+'" alt="Celebration cake" onerror="this.style.display=\'none\'"><span>🎂</span><b>Celebration cakes</b>';
 }else if(activeCategory==='chocolates'){
  out='<h3>Choose chocolates</h3>'+optionSelect('Chocolate','chocolateType',categoryData.chocolates.map(x=>x.name),'Select chocolate')+'<div id="chocolateQtyWrap"></div>';
  visual.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/5/57/White-Box-of-Chocolates.jpg" alt="Chocolate selection" onerror="this.style.display=\'none\'"><span>🍫</span><b>Chocolate favourites</b>';
 }else{
  out='<h3>Choose a gift basket</h3>'+optionSelect('Gift basket','basketType',categoryData.baskets.map(x=>x.name),'Select a basket')+'<div id="basketDescription"></div><label class="basket-check"><input type="checkbox" id="floralDecor"> Add fresh floral decoration <b>+ PKR 2,000</b></label><div class="basket-custom"><h4>Or build a custom basket</h4><p>Select the items to include in your own basket.</p>'+['1.5 lb celebration cake','2 KitKat Four Finger bars','2 Dairy Milk bars','1 Bounty bar','1 Snickers bar','1 Mars bar','12 Pakistani red roses','1 medium teddy bear','1 personalised card'].map((v,i)=>'<label><input type="checkbox" class="custom-basket-item" data-name="'+v+'" data-price="'+[3400,1400,2800,1000,1000,1000,3500,2200,500][i]+'"> '+v+'</label>').join('')+'</div>';
  visual.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Basket_gift.jpg" alt="Gift basket" onerror="this.style.display=\'none\'"><span>🎁</span><b>Gift baskets, made personal</b>';
 }
 host.innerHTML=out;add.disabled=true;$('selectionPrice').textContent='Choose your options to see the price';
 if(activeCategory==='flowers'){
  $('flowerType').onchange=()=>{const type=categoryData.flowers.types[$('flowerType').value];$('flowerColorWrap').innerHTML=type?optionSelect('Flower colour','flowerColor',type.colors,'Select colour'):'';if(type){const photo=visual.querySelector('img');if(photo)photo.src=type.image;$('flowerColor').onchange=()=>{add.disabled=!$('flowerColor').value;$('selectionPrice').textContent=PKR(type.price)+' · '+$('flowerType').value+' / '+$('flowerColor').value;visual.querySelector('b').textContent=$('flowerType').value+' · '+$('flowerColor').value;};}add.disabled=true;};
 }else if(activeCategory==='cakes'){
  $('cakeFlavour').onchange=()=>{const flavour=$('cakeFlavour').value;$('cakeCityWrap').innerHTML=flavour?optionSelect('Delivery city','cakeCity',categoryData.cakes.cities,'Select delivery city'):'';$('cakeBakeryWrap').innerHTML='';if($('cakeCity'))$('cakeCity').onchange=()=>{const city=$('cakeCity').value;$('cakeBakeryWrap').innerHTML=city?optionSelect('Cake bakery','cakeBakery',categoryData.cakes.bakeries[city]||[],'Select bakery'):'';if($('cakeBakery'))$('cakeBakery').onchange=()=>{add.disabled=!$('cakeBakery').value;$('selectionPrice').textContent=PKR(categoryData.cakes.price)+' · '+flavour+' · '+city+' · '+$('cakeBakery').value;};};};
 }else if(activeCategory==='chocolates'){
  $('chocolateType').onchange=()=>{const item=categoryData.chocolates.find(x=>x.name===$('chocolateType').value);$('chocolateQtyWrap').innerHTML=item?'<label>Quantity<input id="chocolateQty" type="number" min="1" max="30" value="1"></label>':'';if(item){const update=()=>{const q=Math.max(1,Math.min(30,Number($('chocolateQty').value)||1));$('selectionPrice').textContent=PKR(item.price*q)+' ('+PKR(item.price)+' each)';add.disabled=false;};$('chocolateQty').oninput=update;update();}};
 }else{
  $('basketType').onchange=()=>{const b=categoryData.baskets.find(x=>x.name===$('basketType').value);$('basketDescription').innerHTML=b?'<p class="basket-description">'+safe(b.description)+'</p><p><b>'+PKR(b.price)+'</b></p>':'';add.disabled=!b;$('selectionPrice').textContent=b?PKR(b.price):'Choose a basket';};
  document.querySelectorAll('.custom-basket-item').forEach(el=>el.addEventListener('change',updateBasketPrice));$('floralDecor').onchange=updateBasketPrice;function updateBasketPrice(){const b=categoryData.baskets.find(x=>x.name===$('basketType').value),chosen=[...document.querySelectorAll('.custom-basket-item:checked')],base=chosen.length?chosen.reduce((n,x)=>n+Number(x.dataset.price),0)+1800:(b?b.price:0);add.disabled=!b&&!chosen.length;$('selectionPrice').textContent=base?PKR(base+($('floralDecor').checked?2000:0)):'Choose a basket';}
 }
}
function renderCart(){
 const host=$('cartItems');if(!cart.length){host.innerHTML='<p class="muted">Your basket is empty. Add something from the collection above.</p>';$('cartTotals').innerHTML='';return;}
 host.innerHTML=cart.map((x,i)=>'<div class="cart-line"><div><b>'+safe(x.name)+'</b><small>'+PKR(x.price)+' each</small><small>'+safe(x.details||'')+'</small></div><div class="qty-control"><button type="button" data-minus="'+i+'">−</button><span>'+x.qty+'</span><button type="button" data-plus="'+i+'">+</button><button type="button" data-remove="'+i+'">×</button></div><strong>'+PKR(x.price*x.qty)+'</strong></div>').join('');
 const subtotal=cart.reduce((n,x)=>n+x.price*x.qty,0),timed=($('deliveryTime').value||'').startsWith('Timed:'),timeFee=timed?specificTimeFee:0;
 $('cartTotals').innerHTML='<div class="totals-line"><span>Items subtotal</span><b>'+PKR(subtotal)+'</b></div><div class="totals-line"><span>Delivery</span><b>'+PKR(deliveryFee)+'</b></div><div class="totals-line"><span>'+(timed?'Selected two-hour delivery window':'Standard delivery')+'</span><b>'+(timed?PKR(timeFee):'Included')+'</b></div><div class="totals-line grand-total"><span>Estimated total</span><b>'+PKR(subtotal+deliveryFee+timeFee)+'</b></div>';
 host.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.minus);cart[i].qty--;if(cart[i].qty<1)cart.splice(i,1);renderCart();});
 host.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>{cart[Number(b.dataset.plus)].qty++;renderCart();});
 host.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.remove),1);renderCart();});
}
function addLine(id,name,price,details){cart.push({id,name,price,qty:1,details:details||''});renderCart();$('order').scrollIntoView({behavior:'smooth'});}
function renderComboPreview(){
 const chosen=[...document.querySelectorAll('[data-addon-price]:checked')],preview=$('comboPreview');
 if(!chosen.length){preview.innerHTML='<div class="combo-empty">✧<strong>Your thoughtfulness,<br>beautifully wrapped.</strong><small>Select items to preview your gift set</small></div>';$('comboTotal').textContent=PKR(0);return;}
 preview.innerHTML='<div class="combo-collage">'+chosen.map(el=>{const icon=el.dataset.icon||'🎁';return '<div class="combo-piece">'+(el.dataset.image?'<img src="'+el.dataset.image+'" alt="'+safe(el.value)+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><span style="display:none">'+icon+'</span>':'<span>'+icon+'</span>')+'<small>'+safe(el.value.split(' (')[0])+'</small></div>';}).join('')+'</div>';
 $('comboTotal').textContent=PKR(chosen.reduce((sum,el)=>sum+Number(el.dataset.addonPrice||0),0));
}
document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;renderCategory();}));
$('addCategoryItem').onclick=()=>{
 let name='',price=0,id='selection-'+Date.now(),details='';
 if(activeCategory==='flowers'){const type=$('flowerType').value,color=$('flowerColor')?.value;if(!type||!color)return;const item=categoryData.flowers.types[type];name=type+' — '+color+' arrangement';price=item.price;details='Flower colour: '+color+'. Fresh seasonal stems, greenery and wrapping; exact stem count confirmed.';}
 if(activeCategory==='cakes'){const flavour=$('cakeFlavour').value,city=$('cakeCity')?.value,bakery=$('cakeBakery')?.value;if(!flavour||!city||!bakery)return;name=flavour+' celebration cake — '+bakery+' ('+city+')';price=categoryData.cakes.price;details='Flavour: '+flavour+'. Standard cake size subject to branch confirmation.';}
 if(activeCategory==='chocolates'){const item=categoryData.chocolates.find(x=>x.name===$('chocolateType').value),qty=Math.max(1,Math.min(30,Number($('chocolateQty')?.value)||1));if(!item)return;name=item.name;price=item.price*qty;details='Quantity: '+qty+'.';}
 if(activeCategory==='baskets'){const basket=categoryData.baskets.find(x=>x.name===$('basketType').value),custom=[...document.querySelectorAll('.custom-basket-item:checked')];if(custom.length){name='Custom gift basket';details=custom.map(x=>x.dataset.name).join(', ');price=custom.reduce((n,x)=>n+Number(x.dataset.price),0)+1800;}else if(basket){name=basket.name;details=basket.description;price=basket.price;}else return;if($('floralDecor').checked){price+=2000;details+=' Includes fresh floral decoration (+ PKR 2,000).';}}
 addLine(id,name,price,details);renderCategory();
};
document.querySelectorAll('[data-addon-price]').forEach(el=>el.addEventListener('change',renderComboPreview));
$('addCustomBtn').onclick=()=>{const chosen=[...document.querySelectorAll('[data-addon-price]:checked')];if(!chosen.length)return;const name='Custom celebration gift combination',details=chosen.map(x=>x.value).join('; '),price=chosen.reduce((sum,x)=>sum+Number(x.dataset.addonPrice||0),0);addLine('combo-'+Date.now(),name,price,details);document.querySelectorAll('[data-addon-price]').forEach(x=>x.checked=false);renderComboPreview();};
$('deliveryTime').addEventListener('change',renderCart);
$('orderForm').addEventListener('submit',async e=>{
 e.preventDefault();const form=e.currentTarget,status=$('orderStatus');if(!cart.length){status.textContent='Please add at least one item to your basket.';return;}if(!form.reportValidity())return;
 const f=new FormData(form),city=f.get('city')||'',deliveryDate=f.get('deliveryDate')||'',deliveryTime=f.get('deliveryTime')||'To be confirmed';
 const subtotal=cart.reduce((n,x)=>n+x.price*x.qty,0),timed=deliveryTime.startsWith('Timed:'),timeFee=timed?specificTimeFee:0,total=subtotal+deliveryFee+timeFee;
 const payload={customerName:f.get('customerName'),email:f.get('email')||'',phone:f.get('phone'),city,address:f.get('address'),recipient:f.get('recipient'),recipientPhone:f.get('recipientPhone')||'',deliveryDate,deliveryTime,occasion:f.get('occasion')||'',message:f.get('message')||'',collectionFrom:f.get('collectionFrom')||'',collectionAddress:f.get('collectionAddress')||'',items:cart.map(x=>({name:x.name+(x.details?' — '+x.details:''),quantity:x.qty,lineTotal:x.price*x.qty})),subtotal,deliveryFee,timeFee,total};
 status.textContent='Sending your order request…';const button=form.querySelector('button[type=submit]');button.disabled=true;
 try{const response=await fetch('/api/order',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.error||'The order could not be submitted.');status.textContent='Order request received. Reference: '+result.reference+'. Our team will contact you to confirm details.';form.reset();cart=[];renderCart();}
 catch(err){status.textContent='Order not submitted: '+err.message+' Please do not assume we received it.';}
 finally{button.disabled=false;}
});
$('contactForm').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,status=$('contactStatus');if(!form.reportValidity())return;const data=Object.fromEntries(new FormData(form).entries());status.textContent='Sending your message…';const button=form.querySelector('button[type=submit]');button.disabled=true;try{const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.error||'Message could not be sent.');status.textContent='Thank you. Your message has been sent.';form.reset();}catch(err){status.textContent='Message not sent: '+err.message;}finally{button.disabled=false;}});
renderCategory();renderComboPreview();renderCart();

})();