# service_dial-parth-ca

Production Next.js B2B platform for Service Dial Talent Management Private Limited.

## Features & Architecture

- **Next.js 16 (App Router)**: Blazing fast SSR & Static Pre-rendering
- **Tailwind CSS**: Modern light theme with responsive design tokens
- **Brand Identity**: Authentic Service Dial logo, typography, and color palette
- **SEO & GEO Optimization**:
  - `llms.txt` for AI model ingestion (ChatGPT, Perplexity, Claude)
  - `robots.txt` explicitly permitting AI crawlers
  - `sitemap.xml` with canonical indexing
  - Schema.org `Organization` JSON-LD structured data
- **4 Core Service Pillars**: Staffing & Recruitment, HRMS & Payroll, Finance & Audit, Compliance Services
- **Documented Case Studies**: High-value leadership mandates and placement turnaround data

## Deployment Architecture

Automated CI/CD pipeline via GitHub Actions on push to `main`:
- **Droplet Host:** `134.209.157.238`
- **Process Manager:** PM2 (`ecosystem.config.cjs`)
- **Web Server:** Nginx Reverse Proxy (Port 80 → Port 3000)

### GitHub Actions Secrets
To enable automated deployments, set these repository secrets under **Settings > Secrets and variables > Actions**:

| Secret Name | Value |
|---|---|
| `DROPLET_SSH_KEY` | Private SSH Key (`cat ~/.ssh/id_droplet_new`) |
| `DROPLET_HOST` | `134.209.157.238` |
| `DROPLET_USER` | `root` |
