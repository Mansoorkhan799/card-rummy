/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://cardrummyapp.com.pk";

/**
 * Schema.org ImageObject properties Google recommends for Image Metadata
 * (Search Console: acquireLicensePage, copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© Card Rummy. All rights reserved.",
  creditText: "Card Rummy",
} as const;
