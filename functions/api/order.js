import { sendBusinessEmail } from "../_utils/email.js";
const json = (data, status=200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const required = ["customerName","phone","address","recipient"];
    for (const key of required) if (!String(data[key] || "").trim()) return json({ error: "Please complete all required delivery and cash-collection details." }, 400);
    
    if (data.city && !["Lahore","Karachi","Islamabad","Rawalpindi"].includes(data.city)) return json({ error: "Delivery is available only in Lahore, Karachi, Islamabad and Rawalpindi." }, 400);
    if (!Array.isArray(data.items) || !data.items.length || data.items.length > 30) return json({ error: "Your cart is empty or contains too many items." }, 400);
    if (data.deliveryDate) {
      const timeMatch = String(data.deliveryTime || "Standard: 10 AM–5 PM").match(/(?:Standard: )?(\d{1,2}) (AM|PM)/i);
      const startHour = timeMatch ? (Number(timeMatch[1]) % 12) + (timeMatch[2].toUpperCase() === "PM" ? 12 : 0) : 10;
      const deliveryStart = new Date(data.deliveryDate + "T" + String(startHour).padStart(2,"0") + ":00:00+05:00");
      const earliest = Date.now() + 24 * 60 * 60 * 1000;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.deliveryDate) || !Number.isFinite(deliveryStart.getTime()) || deliveryStart.getTime() < earliest) return json({ error: "Please choose a delivery date at least 24 hours from now." }, 400);
    }
    const reference = "GA-" + Date.now().toString(36).toUpperCase();
    const lines = data.items.map(item => "- " + String(item.name).slice(0,120) + " x " + Math.max(1,Math.min(30,Number(item.quantity)||1)) + " — PKR " + Math.max(0,Number(item.lineTotal)||0).toLocaleString("en-PK")).join("\n");
    const body = [
      "NEW ORDER REQUEST — THE GIFT ATELIER", "Reference: " + reference, "",
      "Sender full name: " + data.customerName, "Sender email: " + (data.email || "Not provided"), "Sender contact: " + data.phone,
      "Delivery city: " + (data.city || "To be confirmed"), "Delivery address: " + data.address,
      "Receiver full name: " + data.recipient, "Receiver phone: " + (data.recipientPhone || "Not provided"),
      "Delivery date: " + (data.deliveryDate || "To be confirmed"), "Delivery window: " + (data.deliveryTime || "To be confirmed"),
      "Occasion: " + (data.occasion || "Not specified"), "Cash collection from: " + (data.collectionFrom || "To be arranged"),
      "Cash collection address: " + (data.collectionAddress || "To be arranged"), "",
      "ORDER ITEMS", lines, "", "Items subtotal: PKR " + Number(data.subtotal||0).toLocaleString("en-PK"),
      "Delivery: PKR " + Number(data.deliveryFee||300).toLocaleString("en-PK"),
      "Timed-window fee: PKR " + Number(data.timeFee||0).toLocaleString("en-PK"),
      "Customer selling total: PKR " + Number(data.total||0).toLocaleString("en-PK"),
      "Payment: Cash to be collected one day before delivery.", "",
      "Gift message / instructions: " + (data.message || "None"),
      "", "This is a request only. Confirm supplier availability, final price and collection schedule with the customer."
    ].join("\n");
    await sendBusinessEmail(env, "Gift order " + reference + " — " + String(data.customerName).slice(0,80), body, data.email || undefined);
    return json({ ok: true, reference });
  } catch (error) {
    return json({ error: error.message || "Order submission failed." }, 500);
  }
}
