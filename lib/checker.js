const https = require("https");
const fs = require("fs");

const MAX_AGE_HOURS = 6;
const CACHE_FILE = ".zerohour-cache.json";

function fetchPackageData(pkg) {
    return new Promise((resolve, reject) => {
        https.get(`https://registry.npmjs.org/${pkg}`, (res) => {
            let data = "";

            res.on("data", chunk => data += chunk);
            res.on("end", () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on("error", reject);
    });
}

function getCurrentDeps() {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    return {
        ...pkg.dependencies,
        ...pkg.devDependencies
    };
}

function getPreviousDeps() {
    if (!fs.existsSync(CACHE_FILE)) return {};
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
}

function saveDeps(deps) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(deps, null, 2));
}

async function checkNewDependencies() {
    const current = getCurrentDeps();
    const previous = getPreviousDeps();

    const newDeps = Object.keys(current).filter(pkg => !previous[pkg]);

    const warnings = [];

    for (let name of newDeps) {
        try {
            const data = await fetchPackageData(name);

            let version = current[name].replace("^", "").replace("~", "");

            if (version === "latest" || version === "*") {
                version = data["dist-tags"].latest;
            }

            const publishTime = data.time[version];
            if (!publishTime) continue;

            const ageHours =
                (Date.now() - new Date(publishTime)) / (1000 * 60 * 60);

            if (ageHours < MAX_AGE_HOURS) {
                warnings.push({ name, version, ageHours });
            }

        } catch (err) {
            console.log(`⚠️ Could not check ${name}`);
        }
    }

    saveDeps(current);

    return warnings;
}

module.exports = { checkNewDependencies };