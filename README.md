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
- Standard delivery is 10:00 AM–5:00 PM. A selected two-hour delivery window from 10:00 AM–10:00 PM adds PKR 300, subject to confirmation.
- Custom gift add-ons: balloons, bouquet, cake, chocolates, teddy, personalised greeting card, gift wrap and message.
- 24-hour minimum advance booking enforced in the browser date picker.
- Only Lahore, Karachi, Islamabad and Rawalpindi selectable for delivery.
- Order request fields: sender, email, phone, city, full address, recipient, delivery date/time, occasion and message.
- Uses Cloudflare Pages Functions and Resend for server-backed order and contact email notifications; requires email environment variables.

## Price and supplier notes
Prices are indicative sample prices. Layers cake references include live online gift-retailer listings; Tehzeeb dry-cake starting price references Tehzeeb's own category page. Flowers, hampers, toys, children's clothing and add-ons use estimates or comparable listings and require direct supplier confirmation. No bakery, florist, retailer or brand is a confirmed supplier or partner. Product availability, exact product, branch-level pricing, delivery coverage and image rights must be agreed before accepting payment.

## Important limitations — not production-ready
- Email delivery is not active until `RESEND_API_KEY`, `ORDERS_EMAIL` and `RESEND_FROM` are configured in Cloudflare Pages. The sender domain in `RESEND_FROM` must be verified with Resend.
- No admin order dashboard, order database, customer account, payment gateway, supplier API, order status system, refund workflow, delivery tracking, analytics or backups. Email notifications require the Resend variables listed above.
- The server-side email endpoints validate required fields, allowed delivery cities and the 24-hour delivery lead time; production should additionally add rate limiting and persistent order storage.
- No live fulfilment agreement has been established with the named bakeries or other suppliers.

## Recommended production next steps
1. Choose final brand/domain and set up a dedicated business email.
2. Contact suppliers in each city; secure written reseller/fulfilment permission, price lists, lead times, delivery areas, packaging rules, cancellation/refund and image-use permissions.
3. Configure Resend and Cloudflare Pages environment variables for server-backed order and contact email notifications; add an order database and admin dashboard before scaling.
4. Add payment only after confirming Pakistan merchant eligibility and a compliant refund process.
5. Add privacy policy, terms, supplier/brand disclaimers, customer support details and tax/accounting process.
6. Test fulfilment end-to-end in all four cities before advertising publicly.

## Deployment
Static prototype: repository root, `index.html` entry point, no build command required. A connected Cloudflare Pages project may deploy automatically after GitHub commit, but deployment must be checked separately.


## Updated delivery and payment rules
- Minimum one-day advance booking; the customer acknowledges that the request is not instantly confirmed.
- Standard delivery: 10:00 AM–5:00 PM, preselected.
- Timed delivery: selectable two-hour windows from 10:00 AM to 10:00 PM, PKR 300 additional.
- Cash is collected one day before the scheduled delivery from the sender's collection address or the recipient's delivery address.
- No card payment is advertised or collected in this release.
- Product and supplier prices are indicative reference prices, not supplier quotations. Verify branch-level availability, product size, exact contents and final price before confirming an order.
- The internal PKR 1,000 service margin remains included in the estimate but is not displayed as a separate checkout line.
