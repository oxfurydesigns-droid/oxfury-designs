import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | OX×MS DESIGNS',
  description: 'Privacy Policy and Content, Copyright & Sharing Policy for OX×MS DESIGNS.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 transition-all duration-200 ease-out hover:text-gray-900 hover:-translate-x-1 active:scale-[0.95] dark:text-gray-400 dark:hover:text-gray-100 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </div>

      <article className="prose prose-gray max-w-none dark:prose-invert">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-10">
          LAST UPDATED: September 23, 2026
        </p>

        <div className="space-y-10 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              Introduction
            </h2>
            <p className="mb-4 leading-relaxed">
              OX×MS DESIGNS ("we", "our", or "this website") provides information, previews, resources, and download links for free HyperOS themes and related design work.
            </p>
            <p className="leading-relaxed">
              We respect the privacy of visitors and aim to be transparent about how this website may process technical information, cookies, advertising-related information, and external links.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              1. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              We do not currently require users to create an account or submit personal information through a registration or contact form.
            </p>
            <p className="mb-4 leading-relaxed">
              When you visit the website, certain technical information may be processed automatically as part of normal website operation, hosting, security, and advertising services. This may include information such as IP address, browser type, device information, pages requested, approximate location derived by service providers, and other technical/request information.
            </p>
            <p className="leading-relaxed">
              We do not intentionally ask users to submit sensitive personal information through this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              2. Cookies and Advertising
            </h2>
            <p className="mb-4 leading-relaxed">
              This website may use Google AdSense and related Google advertising technologies.
            </p>
            <p className="mb-4 leading-relaxed">
              Google and its advertising partners may use cookies, web beacons, IP addresses, or similar technologies to provide, measure, and personalize advertising where permitted.
            </p>
            <p className="mb-4 leading-relaxed">
              Third-party vendors, including Google, may use cookies to serve advertisements based on a user's previous visits to this website or other websites.
            </p>
            <p className="mb-4 leading-relaxed">
              Google's use of advertising cookies may allow Google and its partners to serve ads based on a user's visit to this website and/or other websites.
            </p>
            <p className="mb-4 leading-relaxed">
              Users can manage or opt out of personalized advertising through Google's Ads Settings:{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 break-all">
                https://adssettings.google.com/
              </a>
            </p>
            <p className="mb-4 leading-relaxed">
              Google also provides information about how it uses data on partner sites:{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 break-all">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>
            <p className="leading-relaxed">
              For users in regions where consent is legally required, we may display a consent message or use a Google-certified consent management platform before certain advertising technologies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              3. Third-Party Services
            </h2>
            <p className="mb-4 leading-relaxed">
              This website may use third-party services such as:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Google AdSense for advertising</li>
              <li>Vercel for website hosting and delivery</li>
              <li>Telegram for external communication and community links</li>
              <li>External file-hosting services for theme downloads</li>
              <li>Xiaomi Theme Store links for official theme distribution</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              When you follow an external link, you leave this website and become subject to the privacy policy and terms of that third-party service.
            </p>
            <p className="leading-relaxed">
              We do not control how third-party websites process information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              4. External Links
            </h2>
            <p className="mb-4 leading-relaxed">
              This website contains links to external websites and services.
            </p>
            <p className="mb-4 leading-relaxed">
              These links may include Telegram, Xiaomi Theme Store, file-hosting services, and other third-party resources.
            </p>
            <p className="mb-4 leading-relaxed">
              We are not responsible for the privacy practices, security, availability, or content of external websites.
            </p>
            <p className="leading-relaxed">
              Users should review the privacy policies and terms of those services before using them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              5. Children's Privacy
            </h2>
            <p className="mb-4 leading-relaxed">
              This website is not specifically directed toward children under 13.
            </p>
            <p className="mb-4 leading-relaxed">
              We do not knowingly collect personal information from children through registration or contact forms.
            </p>
            <p className="leading-relaxed">
              If you believe that a child has provided personal information to us, please contact us so that the matter can be reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              6. Data Security
            </h2>
            <p className="leading-relaxed">
              We take reasonable measures to maintain the security of the website and its content. However, no internet transmission or online service can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              7. Changes to this Privacy Policy
            </h2>
            <p className="mb-4 leading-relaxed">
              This Privacy Policy may be updated when the website, advertising services, or applicable requirements change.
            </p>
            <p className="leading-relaxed">
              The "Last Updated" date at the top of this page will be updated when material changes are made.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              8. Contact
            </h2>
            <p className="leading-relaxed">
              For questions regarding this Privacy Policy or the website, users may contact OX×MS DESIGNS through the official Telegram contact links provided in the website footer.
            </p>
          </section>
        </div>

        <hr className="my-16 border-gray-200 dark:border-gray-800" />

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl mb-10">
          Content, Copyright & Sharing Policy
        </h1>

        <div className="space-y-10 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              9. Original Theme Work
            </h2>
            <p className="mb-4 leading-relaxed">
              OX×MS DESIGNS publishes free HyperOS theme designs and related resources.
            </p>
            <p className="mb-4 leading-relaxed">
              Certain original theme work is created collaboratively by Masoud and Osprey under the OX×MS DESIGNS name.
            </p>
            <p className="leading-relaxed">
              Original artwork, design work, theme modifications, screenshots, descriptions, and other material created specifically by OX×MS DESIGNS remain subject to the rights of their respective creators.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              10. Third-Party Material
            </h2>
            <p className="mb-4 leading-relaxed">
              Some themes or design work may contain, adapt, or reference elements originating from third-party themes, designers, resources, or services.
            </p>
            <p className="mb-4 leading-relaxed">
              Where applicable, ownership of third-party material remains with its respective creator or rights holder.
            </p>
            <p className="leading-relaxed">
              Nothing on this website should be interpreted as a transfer of ownership of third-party material to OX×MS DESIGNS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              11. Personal Use
            </h2>
            <p className="mb-4 leading-relaxed">
              Themes and resources provided through this website are intended for personal use unless otherwise stated.
            </p>
            <p className="mb-4 leading-relaxed">
              Users may download and use the themes on their own compatible devices.
            </p>
            <p className="mb-4 leading-relaxed">
              Users must not:
            </p>
            <ul className="list-disc pl-5 leading-relaxed space-y-1">
              <li>Re-upload the theme files to another website or channel.</li>
              <li>Redistribute the downloaded MTZ or backup files.</li>
              <li>Sell or commercially redistribute the theme files.</li>
              <li>Modify and publish the website's resources as if they were their own work.</li>
              <li>Mirror or reproduce the website's downloadable resources on another website.</li>
              <li>Remove creator credits where those credits are included.</li>
              <li>Use the website's resources as a source for another theme distribution platform without appropriate permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              12. Sharing Themes
            </h2>
            <p className="mb-4 leading-relaxed">
              If you want to share or recommend a theme published on this website, please share the URL of the relevant OX×MS DESIGNS website page instead of redistributing the theme file or copying the direct download link.
            </p>
            <p className="mb-2 leading-relaxed font-medium text-gray-900 dark:text-gray-200">
              The preferred method of sharing is:
            </p>
            <ul className="list-none pl-5 mb-4 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2 text-green-500">✓</span> OX×MS DESIGNS website page URL
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">→</span> not the downloaded theme file
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">→</span> not a re-uploaded file
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500">→</span> not a copied standalone download link.
              </li>
            </ul>
            <p className="leading-relaxed">
              This helps keep downloads, updates, creator information, credits, and the latest version connected to the original source.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              13. Website Links and Resources
            </h2>
            <p className="mb-4 leading-relaxed">
              Links provided on this website are intended to be used as part of the website's official distribution and information structure.
            </p>
            <p className="mb-4 leading-relaxed">
              Please do not copy, mirror, scrape, or republish the website's collection of download links, theme resources, or distribution structure on another website or channel.
            </p>
            <p className="leading-relaxed">
              If you want to direct others to a theme, share the corresponding OX×MS DESIGNS website page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              14. Credits and Attribution
            </h2>
            <p className="mb-4 leading-relaxed">
              Where a theme or resource contains third-party material, applicable creator credits or attribution should be preserved.
            </p>
            <p className="leading-relaxed">
              If you believe that material on this website has been used without appropriate authorization or attribution, please contact OX×MS DESIGNS through the official contact channel so the matter can be reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              15. Policy Enforcement
            </h2>
            <p className="leading-relaxed">
              We reserve the right to request removal of unauthorized reuploads, mirrors, redistributions, or misleading copies of material originating from this website, subject to applicable law and the rights of the relevant creators.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              16. Contact
            </h2>
            <p className="leading-relaxed">
              For copyright, attribution, redistribution, or website-content concerns, contact OX×MS DESIGNS through the official Telegram contact links listed in the website footer.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
