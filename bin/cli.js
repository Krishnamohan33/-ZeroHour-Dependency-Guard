#!/usr/bin/env node

const { checkDependencies } = require("../lib/checker");
const { execSync } = require("child_process");

async function run() {
    console.log("🔍 ZeroHour Dependency Guard Running...\n");

    const result = await checkDependencies();

    if (!result.safe) {
        console.log("❌ Unsafe dependencies detected:\n");

        result.issues.forEach(pkg => {
            console.log(
                `- ${pkg.name}@${pkg.version} (published ${pkg.ageHours.toFixed(2)} hrs ago)`
            );
        });

        console.log("\n🛑 Install blocked for safety.");
        process.exit(1);
    }

    console.log("✅ All dependencies are safe.\n");

    execSync("npm install", { stdio: "inherit" });
}

run();