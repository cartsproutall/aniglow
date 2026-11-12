import { sendFormspree, sendBusinessEmail } from "../_utils/email.js";
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
export async function onRequestPost({request,env}){
 try{
  const data=await request.json();
  const required=["phone","city","address","recipient","recipientPhone","deliveryDate","collectionFrom"];
  for(const key of required)if(!String(data[key]||"").trim())return json({error:"Please complete all mandatory sender, receiver and delivery fields."},400);
  if(!["Lahore","Karachi","Islamabad","Rawalpindi"].includes(data.city))return json({error:"Delivery is available only in Lahore, Karachi, Islamabad and Rawalpindi."},400);
  if(!Array.isArray(data.items)||!data.items.length||data.items.length>40)return json({error:"Your cart is empty or contains too many items."},400);
  if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(data.deliveryDate))return json({error:"Please choose a valid delivery date."},400);
  const deliveryStart=new Date(data.deliveryDate+"T10:00:00+05:00"),earliest=Date.now()+86400000;
  if(!Number.isFinite(deliveryStart.getTime())||deliveryStart.getTime()<earliest)return json({error:"Please choose a delivery date at least 24 hours from now."},400);
  if(!["Sender's address","Another collection address","Recipient delivery address"].includes(data.collectionFrom))return json({error:"Please select a cash collection location."},400);
  if(data.collectionFrom==="Another collection address"&&!String(data.collectionAddress||"").trim())return json({error:"Please provide the separate cash collection address."},400);
  const reference="GA-"+Date.now().toString(36).toUpperCase();
  const lines=data.items.map(item=>"- "+String(item.name||"Gift item").slice(0,180)+" × "+Math.max(1,Math.min(99,Number(item.quantity)||1))+" — PKR "+Math.max(0,Number(item.lineTotal)||0).toLocaleString("en-PK")).join("\n");
  const body=["NEW ORDER REQUEST — THE GIFT ATELIER","Reference: "+reference,"","Sender name: "+(data.customerName||"Not provided"),"Sender email: "+(data.email||"Not provided"),"Sender contact: "+data.phone,"Delivery city: "+data.city,"Delivery address: "+data.address,"Receiver name: "+data.recipient,"Receiver contact: "+data.recipientPhone,"Delivery date: "+data.deliveryDate,"Delivery time: "+(data.deliveryTime||"Standard: 10 AM–5 PM"),"Cash collection from: "+data.collectionFrom,"Cash collection address: "+(data.collectionAddress||"Same as selected address"),"","ORDER ITEMS",lines,"","Items subtotal: PKR "+Number(data.subtotal||0).toLocaleString("en-PK"),"Delivery: PKR 300","Timed delivery fee: PKR "+Number(data.timeFee||0).toLocaleString("en-PK"),"Estimated total: PKR "+Number(data.total||0).toLocaleString("en-PK"),"Payment: Cash collected one day before delivery.","","Gift message / instructions: "+(data.message||"None"),"","This is an order request. Confirm stock, supplier availability and final price before accepting."].join("\n");
  const subject="Gift order "+reference+" — "+(data.customerName||data.phone);
  if(env.RESEND_API_KEY&&env.RESEND_FROM){await sendBusinessEmail(env,subject,body,data.email||undefined);}
  else{await sendFormspree("https://formspree.io/f/xzerbkev",subject,body,data.email||undefined,{order_reference:reference,order_type:"The Gift Atelier customer order",customer_name:String(data.customerName||"").slice(0,120),customer_phone:String(data.phone).slice(0,60),customer_email:String(data.email||"").slice(0,160),delivery_city:data.city,delivery_address:String(data.address).slice(0,500),recipient_name:String(data.recipient).slice(0,120),recipient_phone:String(data.recipientPhone).slice(0,60),delivery_date:data.deliveryDate,delivery_window:String(data.deliveryTime||"Standard"),order_total_pkr:String(Number(data.total||0))});}
  return json({ok:true,reference});
 }catch(error){return json({error:error.message||"Order submission failed. Please try again."},500);}
}