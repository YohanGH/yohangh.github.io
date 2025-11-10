# Security Policy

## Supported Versions

This project is a static documentation website. Security updates are applied to the latest version available on the `main` branch.

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | ✅ Yes |
| Older versions | ❌ No |

## Reporting a Vulnerability

We take the security of our project seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities.
2. Send an email to: **YohanGH@proton.me**
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if you have one)

### What to Expect

- **Initial Response**: You will receive an acknowledgment within 48 hours.
- **Investigation**: We will investigate the issue and determine its severity.
- **Resolution Timeline**:
  - Critical vulnerabilities: Patched within 7 days
  - High severity: Patched within 14 days
  - Medium/Low severity: Patched within 30 days
- **Disclosure**: Once the vulnerability is fixed, we will coordinate disclosure timing with you.

## Security Best Practices

This project follows these security principles:

### For Users
- All external links open in new tabs with `rel="noopener noreferrer"` to prevent tabnabbing attacks.
- No user data is collected or stored.
- No cookies are used.
- All resources are loaded over HTTPS when deployed.

### For Contributors
- Validate all external URLs before adding them to the arborescence.
- Ensure all new links point to legitimate, trusted sources.
- Do not include links to sites with known security issues.
- Follow the contribution guidelines in README.md.

## Dependencies

This project uses minimal external dependencies:

- **D3.js v3** (for visualization)
  - Loaded from local copy to reduce external dependencies
  - Consider updating to latest D3.js version for security patches

### Recommended Actions

Contributors should:
1. Regularly check for updates to D3.js
2. Review external links periodically for validity and security
3. Report any suspicious or compromised links immediately

## Content Security

### Link Validation

All external links in the arborescence should:
- Point to legitimate, trusted sources
- Use HTTPS where available
- Be verified before inclusion
- Be reported if compromised or malicious

### Reporting Malicious Links

If you encounter a malicious or compromised link in the arborescence:

1. Open an issue on GitHub with the tag `[SECURITY]` in the title
2. Include the URL and description of the issue
3. We will review and remove the link within 24 hours

## License

This project is licensed under GPL-3.0. See [LICENCE.GPL](LICENCE.GPL) for details.

## Contact

For security-related inquiries:
- **Email**: YohanGH@proton.me
- **LinkedIn**: [Yohan Regnier](https://www.linkedin.com/in/yohan-regnier-5a2505254)
- **GitHub**: [@YohanGH](https://github.com/YohanGH)

---

*Last Updated: November 2025*

