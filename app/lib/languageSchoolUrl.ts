// Maps a country slug to its language school course URL.
// Countries with no matching course (e.g. English-only programs)
// fall back to the school homepage.

const LANGUAGE_SCHOOL_BASE = "https://dashlanguageschool.com.ng";

const slugToLanguagePath: Record<string, string> = {
  germany:     "/german",
  austria:     "/german",     
  switzerland: "/german",      
  france:      "/french",
  belgium:     "/french",     
  spain:       "/spanish",
  portugal:    "/portuguese",
  netherlands: "/dutch",
  // English-taught countries — no specific course, link to homepage
  sweden:      "",
  finland:     "",
  denmark:     "",
};

export function getLanguageSchoolUrl(countrySlug: string): string {
  const path = slugToLanguagePath[countrySlug] ?? "";
  return `${LANGUAGE_SCHOOL_BASE}${path}`;
}