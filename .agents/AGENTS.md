# Project Rules & Post-Deploy Checklist

## Post-Deploy Checklist

Whenever validating a deployment or preparing for live release, verify the live Vercel URL against this checklist:

### Core Functionality
- **Hero**: Loads with profile photo, SVG illustration, and ambient particle layer — zero console errors in browser DevTools.
- **Intent Router**: Type "projects" (or other key terms), confirm routing animation and smooth scroll.
- **Navbar**: All links scroll correctly to their respective sections, and the active-section indicator pill slides smoothly.
- **Skills → Projects**: Click a skill tag, confirm highlight/dimming behavior and smooth scroll.

### Production Environment Checks (Most likely to break in Prod)
- **GitHub Contributions**: Verify it displays real contribution data, not fallback UI (ensures Vercel environment variables are set up).
- **Resume Button**: Confirm clicking it opens/downloads the PDF (ensures `public/resume.pdf` was committed to git repository).
- **Favicon**: Confirm favicon renders in the browser tab.
- **LinkedIn / Social Links**: Confirm links resolve to real profile URLs instead of placeholders (`PLACEHOLDER_LINKEDIN_URL`).

### Mobile Verification
- **Real Device Rendering**: Test the live URL on an actual mobile device.
- **Mobile Menu**: Hamburger menu toggles open/close properly and navigation links function correctly.

### Final Polish
- **Tab Title**: Reads `"SVS Praveen — AI/ML Engineer & Agentic AI Developer"`.
- **Open Graph (OG) Preview**: Share link in chat app to confirm social link preview unfurls correctly.
