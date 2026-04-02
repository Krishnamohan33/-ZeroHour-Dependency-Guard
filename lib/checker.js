const https = require("https");
const fs = require("fs");

const MAX_AGE_HOURS = 6;

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

async function checkDependencies() {
    const pkgJson = JSON.parse(fs.readFileSync("package.json"));

    const deps = {
        ...pkgJson.dependencies,
        ...pkgJson.devDependencies
    };

    const issues = [];

    for (let [name, version] of Object.entries(deps || {})) {
        try {
            const data = await fetchPackageData(name);

            const cleanVersion = version.replace("^", "").replace("~", "");
            const publishTime = data.time[cleanVersion];

            if (!publishTime) continue;

            const ageHours =
                (Date.now() - new Date(publishTime)) / (1000 * 60 * 60);

            if (ageHours < MAX_AGE_HOURS) {
                issues.push({
                    name,
                    version: cleanVersion,
                    ageHours
                });
            }
        } catch (err) {
            console.log(`⚠️ Could not check ${name}`);
        }
    }

    return {
        safe: issues.length === 0,
        issues
    };
}

module.exports = { checkDependencies };