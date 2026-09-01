import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

/** Matches the homepage hero “200K+ Ratings” claim. */
export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.5",
  ratingCount: "200000",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_DOWNLOAD_URL =
  "https://pkcardrummy.com/?from_gameid=6276686&channelCode=6191689";

export const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/share/1at8tjJcje/";

export const ORGANIZATION_SAME_AS = [FACEBOOK_PROFILE_URL] as const;

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}/card-rummy.webp`,
  `${SITE_ORIGIN}/card-rummy-game-interface.webp`,
  `${SITE_ORIGIN}/card-rummy-games.webp`,
  `${SITE_ORIGIN}/card-rummy-earn-bonus.webp`,
] as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Card Rummy",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/card-rummy.webp`,
  description:
    "Card Rummy is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
  sameAs: [...ORGANIZATION_SAME_AS],
};
