export function getLocaleFromPathname(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function getAlternateLocalePath(pathname) {
  const cleanPathname = pathname.split("?")[0].split("#")[0] || "/";

  if (getLocaleFromPathname(cleanPathname) === "en") {
    const portuguesePath = cleanPathname.replace(/^\/en(?=\/|$)/, "");
    return portuguesePath || "/";
  }

  return cleanPathname === "/" ? "/en" : `/en${cleanPathname}`;
}
