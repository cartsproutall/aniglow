export async function sendBusinessEmail(env, subject, textBody, replyTo) {
  const ordersEmail = env.ORDERS_EMAIL || "cartsproutall@gmail.com";
  if (!env.RESEND_API_KEY || !env.RESEND_FROM) {
    throw new Error("Email service is not configured. Set RESEND_API_KEY, ORDERS_EMAIL and RESEND_FROM in Cloudflare Pages environment variables.");
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.RESEND_FROM, to: [ordersEmail], subject, text: textBody, ...(replyTo ? { reply_to: replyTo } : {}) })
  });
  if (!response.ok) throw new Error("Email provider rejected the message: " + (await response.text()).slice(0, 300));
  return response.json();
}
