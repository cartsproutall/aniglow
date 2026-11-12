export async function sendFormspree(endpoint, subject, textBody, replyTo, extraFields = {}) {
  if (!endpoint || !/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(endpoint)) {
    throw new Error("The Formspree endpoint is missing or invalid.");
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      _subject: subject,
      ...(replyTo ? { _replyto: replyTo, email: replyTo } : {}),
      ...extraFields,
      message: textBody
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = Array.isArray(result.errors) ? result.errors.map(item => item.message).join("; ") : "";
    throw new Error(detail || "Formspree could not accept the order. Please try again.");
  }
  return result;
}

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
