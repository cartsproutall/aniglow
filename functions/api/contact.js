import { sendFormspree } from "../_utils/email.js";
const json = (data, status=200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    if (data.website) return json({ ok: true });
    if (!String(data.name||"").trim() || !String(data.email||"").trim() || !String(data.message||"").trim()) return json({ error: "Please provide your name, email and message." }, 400);
    if (String(data.message).length > 2000) return json({ error: "Your message is too long." }, 400);
    await sendFormspree("https://formspree.io/f/mzerbkrv", "Website enquiry — " + String(data.name).slice(0,80), "Name: " + data.name + "\nEmail: " + data.email + "\n\nMessage:\n" + data.message, data.email);
    return json({ ok: true });
  } catch (error) { return json({ error: error.message || "Message submission failed." }, 500); }
}
