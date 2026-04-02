#!/usr/bin/env node

const { checkNewDependencies } = require("../lib/checker");

async function run() {
    console.log("🔍 ZeroHour: Checking new dependencies...\n");

    const warnings = await checkNewDependencies();

    if (warnings.length > 0) {
        console.log("⚠️ Newly added risky packages:\n");

        warnings.forEach(pkg => {
            console.log(
                `- ${pkg.name}@${pkg.version} (${pkg.ageHours.toFixed(2)} hrs old)`
            );
        });

        console.log("\n⚠️ Review before using.\n");
    } else {
        console.log("✅ No risky new dependencies.\n");
    }

    process.exit(0);
}

run();