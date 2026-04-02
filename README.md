# ⚡ ZeroHour Dependency Guard

> Block zero-hour npm supply chain attacks before they hit your project.

---

## 🚀 Overview

**ZeroHour Dependency Guard** is a lightweight CLI tool that protects your project from **freshly published npm packages**, which are often the highest-risk window for supply chain attacks.

Instead of blindly installing dependencies, this tool checks how recently a package version was published — and blocks installs if they fall within a dangerous time window.

---

## 🔥 Why This Matters

Many real-world npm attacks follow this pattern:

* Malicious package gets published
* Developers install it within minutes/hours
* Damage happens before detection

👉 This tool protects you during that **critical “zero-hour” window**

---

## ⚙️ Features

* 🔍 Checks publish time of dependencies
* 🚫 Blocks installation of recently published versions
* ⚡ Fast and lightweight (no heavy dependencies)
* 🧠 Simple logic, easy to extend
* 💻 Works with any Node.js project

---

## 📦 Usage

Run instantly without installation:

```bash
npx github:YOUR_USERNAME/zerohour-dep-guard install
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
2. Fetches metadata from npm registry
3. Checks publish timestamps for each dependency
4. Calculates age in hours
5. Blocks install if below threshold

---

## 🧠 Default Policy

* Blocks packages published within last **6 hours**

This can be extended in future versions.

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

Clone and test:

```bash
git clone https://github.com/YOUR_USERNAME/zerohour-dep-guard.git
cd zerohour-dep-guard
node bin/cli.js
```

Or link globally:

```bash
npm link
zerohour install
```

---

## 🔮 Roadmap

* [ ] Config file (`.zerohourrc`)
* [ ] Allowlist trusted packages
* [ ] Custom time thresholds
* [ ] GitHub Action integration
* [ ] CI/CD enforcement
* [ ] Dashboard (SaaS)

---

## 🛡️ Use Cases

* Secure npm installs in production projects
* CI/CD pipeline protection
* Open-source maintainers
* Security-conscious teams

---

## ⚠️ Disclaimer

This tool provides an **additional layer of safety**, not a complete security solution.

Always combine with:

* `npm audit`
* Lockfiles (`package-lock.json`)
* Code reviews

---

## 👨‍💻 Author

**Krishnamohan Yagneswaran**
CSE Graduate | Indie Developer | Author

---

## 📜 License

MIT License

---

## ⭐ Support

If you found this useful, consider giving a ⭐ on GitHub and sharing it.

---

## 🚀 Vision

> A future where developers never unknowingly install malicious code.

---

## 💡 Tagline

**“Secure your dependencies before they secure your system.”**
