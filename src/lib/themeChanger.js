export default async function themeChanger(
    themeName,
    pathToThemeFolder
) {
    const name = themeName.toLowerCase();
    const links = document.querySelectorAll(`link[href*="${pathToThemeFolder}"]`);
    if (name === "default") {
        //remove all link href start with pathToThemeFolder
        if (links.length > 0) {
            links.forEach((link) => link.remove());
        }
    } else {
        const linkElement = document.createElement("link");
        const links = document.querySelectorAll(
            `link[href*="${pathToThemeFolder}"]`
        );
        if (links.length > 0) {
            links.forEach((link) => link.remove());
        }
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = pathToThemeFolder + name + ".css";
        document.head.appendChild(linkElement);
    }
}

export function getCurrentThemeName(pathToThemeFolder) {
    const link = document.querySelector(`link[href*="${pathToThemeFolder}"]`);
    let theme = "default";
    if (link) {
        const linkHref = link.getAttribute("href");
        if (linkHref) {
            theme =
                linkHref.split("/").pop()?.split(".")[0]?.toLowerCase() || "default";
        }
    }
    return theme;
}
