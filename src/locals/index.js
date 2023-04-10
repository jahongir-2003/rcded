export const SITE_LANGUAGE = "SITE_LANGUAGE";
export function getLang() {
    return localStorage.getItem(SITE_LANGUAGE);
}
