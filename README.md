# The Gift Atelier — Managed Gift Ordering Service

This repository was repurposed from the AniGlow prototype into a customer-facing gift and celebration ordering service. The existing dark-purple and pink theme, responsive card layout, glowing accents, navigation and interaction styling have been retained.

## Business model
A managed-order / concierge fulfilment model. Customers anywhere in the world may submit gift requests for delivery only in Lahore, Karachi, Islamabad and Rawalpindi. The operator receives the request, confirms stock, supplier, final price and payment, then manually places the supplier order and coordinates delivery.

## Customer-facing scope in this prototype
- International-style, multi-category gift storefront.
- Categories: flowers and bouquets; cakes and bakery; gift baskets and hampers; chocolates and edible gifts; children's gifts and toys; children's clothing; balloons and add-ons; personalised gifts.
- Search, category, occasion, city and price sorting filters.
- Product photography uses selected public-domain / CC0 representative images where available; product photographs are illustrative and do not guarantee an exact supplier item.
- Cart with quantity controls and estimated totals.
- A PKR 1,000 margin is included in each paid product and paid add-on selling price; it is not shown as a separate fee. Complimentary message add-ons remain free. PKR 300 delivery is shown separately.
- Standard delivery is 10:00 AM–5:00 PM. A selected two-hour delivery window from 10:00 AM–10:00 PM adds PKR 300, subject to confirmation.
- Custom gift add-ons: balloons, bouquet, cake, chocolates, teddy, personalised greeting card, gift wrap and message.
- 24-hour minimum advance booking enforced in the browser date picker.
- Only Lahore, Karachi, Islamabad and Rawalpindi selectable for delivery.
- Order request fields: sender, email, phone, city, full address, recipient, delivery date/time, occasion and message.
- Uses Cloudflare Pages Functions. Order notifications are sent through the configured Formspree order form; contact notifications remain on the existing Resend route until a separate Formspree contact endpoint is supplied.

## Price and supplier notes
Prices are indicative sample prices. Layers cake references include live online gift-retailer listings; Tehzeeb dry-cake starting price references Tehzeeb's own category page. Flowers, hampers, toys, children's clothing and add-ons use estimates or comparable listings and require direct supplier confirmation. No bakery, florist, retailer or brand is a confirmed supplier or partner. Product availability, exact product, branch-level pricing, delivery coverage and image rights must be agreed before accepting payment.

## Important limitations — not production-ready
- Order email delivery depends on the Formspree order form being active and its recipient email being configured/verified in Formspree. Contact email still requires the existing Resend configuration until its Formspree endpoint is added.
- No admin order dashboard, order database, customer account, payment gateway, supplier API, order status system, refund workflow, delivery tracking, analytics or backups. Contact email still requires the Resend variables until the separate Formspree contact form is integrated.
- The server-side email endpoints validate required fields, allowed delivery cities and the 24-hour delivery lead time; production should additionally add rate limiting and persistent order storage.
- No live fulfilment agreement has been established with the named bakeries or other suppliers.

## Recommended production next steps
1. Choose final brand/domain and set up a dedicated business email.
2. Contact suppliers in each city; secure written reseller/fulfilment permission, price lists, lead times, delivery areas, packaging rules, cancellation/refund and image-use permissions.
3. Configure Formspree recipient verification for orders and connect the separate contact endpoint; add an order database and admin dashboard before scaling.
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
- The PKR 1,000 margin is included in each paid product/add-on selling price; there is no separate service-margin line.


## Retail pricing rule
- Each catalogue product and paid gift extra is displayed at its selected base cost plus PKR 1,000.
- Free handwritten message add-on remains PKR 0.
- Delivery and timed delivery charges are separate. No extra PKR 1,000 service fee is added at checkout.
- The site uses representative photography; confirm actual supplier item, branch and availability before accepting payment.


## Guided catalogue and checkout
- Four guided categories: flowers, cakes, chocolates and gift baskets.
- Flowers include imported roses, Pakistani roses, sunflowers, chrysanthemums, baby breath, gladiolus and gerberas with the requested colour choices.
- Cakes follow flavour, delivery city, then bakery selection.
- Individual chocolates support quantity selection and calculate quantity totals; bar prices are doubled from the chosen base estimates.
- Five defined gift baskets list their included contents. Custom baskets allow item selection and floral decoration for an additional PKR 2,000.
- The custom celebration set previews selected items together in a collage.
- Only sender full name, sender contact number, receiver full name and complete delivery address are mandatory. Other checkout details are optional.
- Order notifications use the Formspree endpoint configured in `functions/api/order.js` (or `FORMSPREE_ORDER_ENDPOINT` in Cloudflare Pages). Set the Formspree recipient to `cartsproutall@gmail.com` and complete any email verification. Contact notifications still use Resend pending the separate contact endpoint.


## Latest storefront changes (November 2026)
- The catalogue is now a guided four-category selector: Flowers, Cakes, Chocolates and Gift baskets.
- Flowers include imported roses, Pakistani roses, sunflowers, chrysanthemums, baby breath, gladiolus and gerberas with the requested colour choices.
- Cakes follow the sequence flavour, delivery city, then bakery.
- Individual chocolates support quantity selection and quantity-based totals. Listed chocolate bar selling prices are set at roughly twice the selected base estimate.
- Five gift baskets display itemised contents. Custom baskets support selected items and an additional PKR 2,000 for fresh floral decoration.
- Custom celebration combinations show a combined visual preview of the selected bouquet, balloons, cake, chocolates, teddy, greeting card, gift wrap and handwritten message.
- Only sender full name, sender contact number, receiver full name and complete delivery address are mandatory on the order form. Email, city, date, timing, recipient phone, occasion, gift message, collection details and policy acknowledgement are optional.
- The order endpoint sends a request only after Formspree accepts it. Configure and verify `cartsproutall@gmail.com` as the recipient in the Formspree order form. The separate contact endpoint still uses Resend until its Formspree endpoint is integrated.
