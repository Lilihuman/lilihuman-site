import LeafDot from '@/components/LeafDot';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-20 pb-6">
        <span className="section-eyebrow">
          <LeafDot /> Legal
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-mocha/50 mt-3">Last updated: May 2025</p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="prose-lili">
          <h2>Introduction</h2>
          <p>
            Lili Human ("I", "me", "my") operates lilihuman.com. This Privacy Policy explains how I collect,
            use, and protect your personal information when you use this website, purchase products, or
            subscribe to my email list.
          </p>

          <h2>Information I collect</h2>
          <p>I may collect the following information:</p>
          <ul>
            <li><strong>Contact information:</strong> Name and email address when you fill out the contact form or subscribe to my newsletter.</li>
            <li><strong>Purchase information:</strong> When you buy through this site, your payment is processed by Stripe. I do not store your credit card details. I receive your name, email address, and the products you purchased.</li>
            <li><strong>Usage data:</strong> Anonymous analytics about how you use the site (pages visited, time on site). This is collected through privacy-respecting analytics tools.</li>
          </ul>

          <h2>How I use your information</h2>
          <ul>
            <li>To deliver digital products you've purchased</li>
            <li>To send transactional emails (order confirmations, download links)</li>
            <li>To send my newsletter, if you've opted in</li>
            <li>To respond to contact form submissions</li>
            <li>To improve the website and understand what content is helpful</li>
          </ul>

          <h2>Payment processing — Stripe</h2>
          <p>
            All payments are processed securely through <strong>Stripe</strong>, a PCI-DSS compliant payment
            processor. When you purchase something on this site, you are directed to Stripe's secure checkout
            page. Stripe's own Privacy Policy governs the data they collect. You can review it at{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.
          </p>
          <p>
            I do not have access to your full card number. Stripe transmits only the information necessary to
            fulfil your order (your email address, name, and what you purchased).
          </p>

          <h2>Email marketing</h2>
          <p>
            If you subscribe to my email list, you can unsubscribe at any time using the link at the bottom of
            every email. I will not sell or share your email address with third parties.
          </p>

          <h2>Cookies</h2>
          <p>
            This site may use essential cookies to ensure the site works correctly. If I use analytics, those
            tools may set cookies to track anonymous usage patterns. You can disable cookies in your browser
            settings at any time.
          </p>

          <h2>Third-party services</h2>
          <p>This site may use the following third-party services:</p>
          <ul>
            <li><strong>Stripe</strong> — payment processing</li>
            <li><strong>Google Calendar</strong> — embedded calendar display</li>
            <li><strong>Email service providers</strong> — for newsletter delivery</li>
          </ul>

          <h2>Your rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data I hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from my email list at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please email me at{' '}
            <a href="mailto:lili@lilihuman.com">lili@lilihuman.com</a>.
          </p>

          <h2>Children's privacy</h2>
          <p>
            This site is not directed at children under 13. I do not knowingly collect personal information
            from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Changes will be posted on this page with an
            updated date. Continued use of the site after changes constitutes acceptance.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email me at{' '}
            <a href="mailto:lili@lilihuman.com">lili@lilihuman.com</a> or use the{' '}
            <a href="/contact">contact form</a>.
          </p>
        </div>
      </section>
    </>
  );
}
