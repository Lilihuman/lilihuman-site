import LeafDot from '@/components/LeafDot';

export default function Terms() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-5 md:px-8 pt-20 pb-6">
        <span className="section-eyebrow">
          <LeafDot /> Legal
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-brown mt-2 leading-tight">
          Terms & Conditions
        </h1>
        <p className="font-body text-sm text-mocha/50 mt-3">Last updated: May 2025</p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="prose-lili">
          <h2>Acceptance of terms</h2>
          <p>
            By accessing or using lilihuman.com, purchasing products, or engaging with any content on this
            site, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use
            this site.
          </p>

          <h2>Digital downloads</h2>
          <p>
            All digital products (including PDF workout programs, printables, and art files) are delivered
            electronically following payment. By purchasing a digital product, you agree to the following:
          </p>
          <ul>
            <li><strong>Personal use only.</strong> Digital files are licensed for personal, non-commercial use only. You may not resell, redistribute, share, or reproduce the files for commercial purposes.</li>
            <li><strong>No physical product.</strong> Digital purchases do not include any physical goods unless explicitly stated.</li>
            <li><strong>Instant delivery.</strong> Download links are provided immediately after purchase and also emailed to the address used at checkout.</li>
            <li><strong>File access.</strong> You are responsible for downloading and saving your files. I recommend saving them immediately after purchase.</li>
          </ul>

          <h2>Fitness disclaimer</h2>
          <p>
            <strong>Important — please read carefully.</strong>
          </p>
          <p>
            The fitness programs, workout guides, and exercise content on this site are provided for
            informational and educational purposes only. They are not a substitute for professional medical
            advice, diagnosis, or treatment.
          </p>
          <ul>
            <li>Consult your doctor or a qualified healthcare provider before beginning any exercise program, particularly if you are pregnant, postpartum, have a medical condition, or have been inactive.</li>
            <li>You participate in all exercise activities at your own risk.</li>
            <li>Lili Human is not responsible for any injury, illness, or adverse outcome resulting from following the exercise content on this site.</li>
            <li>If you experience pain, dizziness, shortness of breath, or any concerning symptoms during exercise, stop immediately and seek medical attention.</li>
          </ul>

          <h2>Refund policy</h2>
          <h3>Digital products</h3>
          <p>
            Due to the nature of digital downloads, <strong>all digital product sales are final</strong> once
            the download link has been accessed. If you have a technical issue accessing your download, please
            contact me at <a href="mailto:lili@lilihuman.com">lili@lilihuman.com</a> within 7 days of purchase
            and I will do my best to help.
          </p>
          <p>
            Exceptions may be made at my discretion in cases where the file is corrupted or significantly
            different from the product description.
          </p>
          <h3>Physical products</h3>
          <p>
            Physical products may be returned within 14 days of delivery, provided they are unused and in
            original condition. Return shipping costs are the buyer's responsibility. To initiate a return,
            contact me at <a href="mailto:lili@lilihuman.com">lili@lilihuman.com</a>.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this site — including text, images, printable designs, workout programs, blog posts,
            and branding — is the intellectual property of Lili Human. You may not reproduce, distribute, or
            create derivative works from any content without written permission.
          </p>

          <h2>User conduct</h2>
          <p>When using this site, you agree not to:</p>
          <ul>
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the site</li>
            <li>Reproduce or redistribute any content without permission</li>
            <li>Misrepresent yourself or your affiliation</li>
          </ul>

          <h2>Payment and pricing</h2>
          <p>
            All prices are listed in USD unless otherwise stated. Payments are processed securely through
            Stripe. Lili Human reserves the right to change prices at any time. Orders are confirmed at the
            price listed at the time of purchase.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Lili Human shall not be liable for any indirect,
            incidental, special, or consequential damages arising from the use of this site or the purchase of
            products.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of Australia. Any disputes shall be resolved in the courts of
            Australia.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            I reserve the right to update these terms at any time. Changes will be posted on this page. Your
            continued use of the site after changes constitutes acceptance.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:lili@lilihuman.com">lili@lilihuman.com</a> or use the{' '}
            <a href="/contact">contact form</a>.
          </p>
        </div>
      </section>
    </>
  );
}
