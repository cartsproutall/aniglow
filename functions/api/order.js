import { sendBusinessEmail } from "../_utils/email.js";
const json = (data, status=200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const required = ["customerName","email","phone","city","address","recipient","recipientPhone","deliveryDate","deliveryTime","collectionFrom","collectionAddress"];
    for (const key of required) if (!String(data[key] || "").trim()) return json({ error: "Please complete all required delivery and cash-collection details." }, 400);
    if (!data.policyAccepted) return json({ error: "Please acknowledge the 24-hour advance booking and cash collection policy." }, 400);
    if (!["Lahore","Karachi","Islamabad","Rawalpindi"].includes(data.city)) return json({ error: "Delivery is available only in Lahore, Karachi, Islamabad and Rawalpindi." }, 400);
    if (!Array.isArray(data.items) || !data.items.length || data.items.length > 30) return json({ error: "Your cart is empty or contains too many items." }, 400);
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
    today.setHours(0,0,0,0); today.setDate(today.getDate()+1);
    const minDate = [today.getFullYear(),String(today.getMonth()+1).padStart(2,"0"),String(today.getDate()).padStart(2,"0")].join("-");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.deliveryDate) || data.deliveryDate < minDate) return json({ error: "Please choose a delivery date at least one day ahead." }, 400);
    const reference = "GA-" + Date.now().toString(36).toUpperCase();
    const lines = data.items.map(item => "- " + String(item.name).slice(0,120) + " x " + Math.max(1,Math.min(30,Number(item.quantity)||1)) + " — PKR " + Math.max(0,Number(item.lineTotal)||0).toLocaleString("en-PK")).join("\n");
    const body = [
      "NEW ORDER REQUEST — THE GIFT ATELIER", "Reference: " + reference, "",
      "Customer: " + data.customerName, "Email: " + data.email, "WhatsApp: " + data.phone,
      "Delivery city: " + data.city, "Delivery address: " + data.address,
      "Recipient: " + data.recipient, "Recipient phone: " + data.recipientPhone,
      "Delivery date: " + data.deliveryDate, "Delivery window: " + data.deliveryTime,
      "Occasion: " + (data.occasion || "Not specified"), "Cash collection from: " + data.collectionFrom,
      "Cash collection address: " + data.collectionAddress, "",
      "ORDER ITEMS", lines, "", "Items subtotal: PKR " + Number(data.subtotal||0).toLocaleString("en-PK"),
      "Delivery: PKR " + Number(data.deliveryFee||300).toLocaleString("en-PK"),
      "Timed-window fee: PKR " + Number(data.timeFee||0).toLocaleString("en-PK"),
      "Estimated total: PKR " + Number(data.total||0).toLocaleString("en-PK"),
      "Payment: Cash to be collected one day before delivery.", "",
      "Gift message / instructions: " + (data.message || "None"),
      "", "This is a request only. Confirm supplier availability, final price and collection schedule with the customer."
    ].join("\n");
    await sendBusinessEmail(env, "Gift order " + reference + " — " + String(data.customerName).slice(0,80), body, data.email);
    return json({ ok: true, reference });
  } catch (error) {
    return json({ error: error.message || "Order submission failed." }, 500);
  }
}
