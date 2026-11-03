# stored: merchant pitch lines

Each line is a merchant benefit backed by code in `~/Development/stored` (paths below are relative to that repo). stored isn't public yet, so present these as what it does, not as an invitation to use it.

1. **Sell before you spend.** There's no platform subscription. You run stored on your own server and pay only the Stripe, EasyPost and Mailgun accounts you connect.
   Evidence: `Dockerfile`; `.github/workflows/publish.yml` (multi-arch images, linux/amd64 + linux/arm64); provider credentials live in your own database, `lib/stripe-integrations.js`, `lib/easypost-integrations.js`, `lib/mailgun-integrations.js`.

2. **Your books and your stock count, in one place.** Products carry price and inventory. Stock is checked before payment and taken off when the order commits, so you never sell a copy you don't have without knowing it.
   Evidence: `views/pages/products/editor.edge` (Inventory field); `lib/store.js` `insertOrderFromCart` (decrements stock in the order transaction, flags `oversold`); `views/pages/orders/index.edge` (oversold badge).

3. **Real shipping prices at checkout, and the label in one click.** Customers pick from live carrier rates, or flat-rate methods you set. After the sale you buy the label from the order page and get tracking.
   Evidence: `lib/checkout.js` (rates step; `flat_rate` mode or EasyPost, priced server-side by `resolveShippingRate`); `lib/easypost.js` `formatShippingRates`, `buyShipmentLabel`; `lib/store.js` `buyOrderLabel`; `views/pages/orders/editor.edge` (Get Shipping Rates / Buy Label / View Label).

4. **Every order is a confirmed payment.** An order exists only after stored has checked with Stripe that the charge succeeded for the exact amount, so the orders list is your real sales.
   Evidence: `lib/checkout.js` `completeCheckout` (retrieves the PaymentIntent, requires `succeeded`/`processing`, matching amount and currency); `docs/launch-plan.md` decision D1.

5. **Customer emails that look like your brand.** Design order confirmations and other emails in a block editor and choose which store events send them.
   Evidence: `views/pages/emails/editor.edge` (structures, blocks, Trigger Events); `lib/email-html.js` `generateEmailHtml`; `lib/email-templates.js`; `lib/events.js` (sends templates whose `trigger_events` match, through Mailgun).

6. **A mailing list that grows with every sale.** Paying customers join your customers list on their own, ready for the next book's launch.
   Evidence: `lib/checkout.js` (`addCustomerToMailingList` on `order.paid`); `lib/mailing-lists.js`; `views/pages/mailing-lists/index.edge`.

7. **Your data stays yours.** Export the whole store (products, orders, customers, emails, settings) as one bundle and import it anywhere stored runs.
   Evidence: `lib/data-bundles.js` `exportBundle` / `importBundle`; `views/pages/settings/index.edge` (Export Bundle, Import Bundle).
