// import type { Metadata } from "next";
// import { Manrope, DM_Sans } from "next/font/google";
// import "./globals.css";

// // Manrope — headings
// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["500", "600", "700", "800"],
//   variable: "--font-display",
//   display: "swap",
//   preload: true,
// });

// // DM Sans — body text
// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-body",
//   display: "swap",
//   preload: true,
// });

// export const metadata: Metadata = {
//   title: {
//     default: "DLS — Your Pathway to Global Opportunities",
//     template: "%s | DLS",
//   },
//   description:
//     "DLS guides ambitious Africans through every step of international travel, study, and relocation across Europe.",
//   metadataBase: new URL("https://yourdomain.com"),
//   openGraph: { type: "website", locale: "en_NG", siteName: "DLS" },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
//       <body className="antialiased bg-white text-[#0a0a2e] font-body">
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "DLS — Your Pathway to Global Opportunities",
    template: "%s | DLS",
  },
  description:
    "DLS guides ambitious Africans through every step of international travel, study, and relocation across Europe.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: { type: "website", locale: "en_NG", siteName: "DLS" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        {/*
          STEP 1 of 2 for Google Translate:
          This callback runs as soon as the Google Translate script loads.
          It creates a TranslateElement instance on the hidden div below.
          - pageLanguage: the language your site is written in
          - autoDisplay: false = don't show Google's own popup widget
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en', autoDisplay: false },
                  'google_translate_element'
                );
              }
            `,
          }}
        />

        {/*
          STEP 2 of 2 for Google Translate:
          Load the Google Translate library async.
          It will call googleTranslateElementInit() when ready.
        */}
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>

      <body className="antialiased bg-white text-[#0a0a2e] font-body">
        {/*
          Hidden div required by Google Translate.
          The library targets this element by id.
          Do NOT remove it even though it's invisible.
        */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {children}
      </body>
    </html>
  );
}