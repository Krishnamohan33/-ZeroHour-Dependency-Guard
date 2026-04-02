# ⚡ ZeroHour Dependency Guard

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/Krishnamohan33/-ZeroHour-Dependency-Guard/tree/main)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#-license)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-brightgreen?logo=node.js)](https://nodejs.org/)
[![Security](https://img.shields.io/badge/Security-Zero--Hour%20Protection-red)](#-why-this-matters)

> 🚫 Block zero-hour npm supply chain attacks before they hit your project.

---

## 🚀 Overview

**ZeroHour Dependency Guard** is a lightweight, security-focused CLI tool designed to protect Node.js projects from **newly published npm package versions**, which are often the highest-risk entry point for supply chain attacks.

Instead of blindly installing dependencies, this tool introduces a **real-time safety check** that evaluates how recently each package version was published — and blocks installations that fall within a risky time window.

---

## 🔥 Why This Matters

Modern npm attacks commonly follow a dangerous pattern:

* ⚡ Malicious package gets published
* 📥 Developers install it within minutes
* 💥 Damage occurs before detection

👉 **ZeroHour Guard protects you during this critical vulnerability window**

---

## ⚙️ Features

* 🔍 Real-time dependency publish-time analysis
* 🚫 Automatic blocking of newly published packages
* ⚡ Lightweight and fast (no external dependencies)
* 🧠 Simple, extensible architecture
* 💻 Works across all Node.js projects

---

## 📦 Usage

Run instantly without installing:

```bash
npx github:Krishnamohan33/-ZeroHour-Dependency-Guard install
```

---

## 🖥️ Example Output

```bash
🔍 Checking dependencies before install...

❌ Unsafe dependencies detected:

- example-package@1.2.3 (2.14 hrs old)

🛑 Install blocked.
```

OR

```bash
✅ Safe. Installing...

added 120 packages
```

---

## ⚙️ How It Works

1. Reads your `package.json`
2. Fetches package metadata from npm registry
3. Extracts publish timestamps for each version
4. Calculates how recently each dependency was published
5. Blocks install if within unsafe threshold

---

## 🧠 Default Policy

* Blocks packages published within the last **6 hours**

---

## 📁 Project Structure

```
zerohour-dep-guard/
├── bin/
│   └── cli.js        # CLI entry point
├── lib/
│   └── checker.js    # Core logic
├── package.json
└── README.md
```

---

## 🛠️ Local Development

```bash
git clone https://github.com/Krishnamohan33/-ZeroHour-Dependency-Guard.git
cd -ZeroHour-Dependency-Guard
node bin/cli.js
```

Or link globally:

```bash
npm link
zerohour install
```

---

## 🛡️ Use Cases

* Secure npm installs in production apps
* CI/CD pipeline protection
* Open-source project safety
* Developer-first security tooling

---

## 🔮 Roadmap

* [ ] `.zerohourrc` configuration support
* [ ] Allowlist trusted packages
* [ ] Custom time thresholds
* [ ] GitHub Action integration
* [ ] CI/CD enforcement
* [ ] Web dashboard (SaaS vision)

---

## ⚠️ Disclaimer

This tool provides an **additional security layer**, not a complete protection system.

Always combine with:

* `npm audit`
* Lockfiles (`package-lock.json`)
* Manual review of dependencies

---

## 👨‍💻 Author

**Krishnamohan Yagneswaran**
CSE Graduate | Indie Developer | Author

---

## 📜 License

MIT License

---

## ⭐ Support

If you found this useful:

* ⭐ Star the repo
* 🔁 Share with developers
* 🛠️ Contribute improvements

---

## 🚀 Vision

> A future where developers never unknowingly install malicious dependencies.

---

## 💡 Tagline

**“Secure your dependencies before they secure your system.”**
