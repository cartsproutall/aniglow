# The Gift Atelier — Managed Gift Ordering Service

This repository was repurposed from the AniGlow prototype into a customer-facing gift and celebration ordering service. The existing dark-purple and pink theme, responsive card layout, glowing accents, navigation and interaction styling have been retained.

## Business model
A managed-order / concierge fulfilment model. Customers anywhere in the world may submit gift requests for delivery only in Lahore, Karachi, Islamabad and Rawalpindi. The operator receives the request, confirms stock, supplier, final price and payment, then manually places the supplier order and coordinates delivery.

## Customer-facing scope in this prototype
- International-style, multi-category gift storefront.
- Categories: flowers and bouquets; cakes and bakery; gift baskets and hampers; chocolates and edible gifts; children's gifts and toys; children's clothing; balloons and add-ons; personalised gifts.
- Search, category, occasion, city and price sorting filters.
- Product reference photographs linked from public ecommerce listings; images remain owned by their respective publishers and must be licensed/approved for commercial use before production launch.
- Cart with quantity controls and estimated totals.
- PKR 1,000 internal service margin included in the customer total but never itemised or named on the storefront; PKR 300 delivery charge is shown at checkout.
- Standard delivery may arrive any time from 10:00 AM to 10:00 PM. A requested specific one-hour window within that period adds PKR 600, subject to confirmation.
- Custom gift add-ons: balloons, bouquet, cake, chocolates, teddy, personalised greeting card, gift wrap and message.
- 24-hour minimum advance booking enforced in the browser date picker.
- Only Lahore, Karachi, Islamabad and Rawalpindi selectable for delivery.
- Order request fields: sender, email, phone, city, full address, recipient, delivery date/time, occasion and message.
- Generates a mailto email draft for the customer to send manually.

## Price and supplier notes
Prices are indicative sample prices. Layers cake references include live online gift-retailer listings; Tehzeeb dry-cake starting price references Tehzeeb's own category page. Flowers, hampers, toys, children's clothing and add-ons use estimates or comparable listings and require direct supplier confirmation. No bakery, florist, retailer or brand is a confirmed supplier or partner. Product availability, exact product, branch-level pricing, delivery coverage and image rights must be agreed before accepting payment.

## Important limitations — not production-ready
- The mailto destination is a placeholder: `orders@YOURDOMAIN.com`. It must be replaced with the real business order inbox.
- The current form does not transmit orders to a server. It opens a draft in the customer's email app; the customer must press Send.
- No admin order inbox, secure database, customer account, payment gateway, supplier API, order status system, refund workflow, delivery tracking, email notifications, analytics or backups.
- Browser-only checks can be bypassed; enforce 24-hour booking and city restrictions on a server before launch.
- No live fulfilment agreement has been established with the named bakeries or other suppliers.

## Recommended production next steps
1. Choose final brand/domain and set up a dedicated business email.
2. Contact suppliers in each city; secure written reseller/fulfilment permission, price lists, lead times, delivery areas, packaging rules, cancellation/refund and image-use permissions.
3. Replace the mailto form with a secure server-backed order form (e.g. Cloudflare Worker + database or Supabase), with admin email notifications and an order dashboard.
4. Add payment only after confirming Pakistan merchant eligibility and a compliant refund process.
5. Add privacy policy, terms, supplier/brand disclaimers, customer support details and tax/accounting process.
6. Test fulfilment end-to-end in all four cities before advertising publicly.

## Deployment
Static prototype: repository root, `index.html` entry point, no build command required. A connected Cloudflare Pages project may deploy automatically after GitHub commit, but deployment must be checked separately.
