# Consais website redesign — Phase 1

## Scope

This phase establishes the new homepage story around:

- Fintech engineering
- Lending platforms
- Cloud infrastructure
- DevSecOps / CI/CD
- Secure integrations
- Reliability, BCP and DR

## Experience wording

The homepage deliberately distinguishes team experience from Consais client delivery:

- Senior members of the team have worked on core banking systems at Citibank.
- The team has experience working on reliability applications for DRDO.
- Consais teams have built loan origination and loan management systems for Giraaf and Power2SME.
- The site refers to audits against requirements applicable to NBFCs without claiming RBI certification.

## Static diagrams added

- `public/images/consais-lending-platform.svg`
- `public/images/consais-cicd-cloud.svg`
- `public/images/consais-bcp-dr.svg`

These are intentionally static SVG assets and are not interactive diagrams.

## Files changed

- `src/components/Hero.tsx`
- `src/pages/Home.tsx`
- `src/components/Footer.tsx`
- `index.html`
- `public/images/consais-lending-platform.svg`
- `public/images/consais-cicd-cloud.svg`
- `public/images/consais-bcp-dr.svg`

## Validation

The source was reviewed after editing. A production Vite build could not be completed in the working environment because dependency installation did not finish within the available execution window; no application dependency versions were intentionally changed.
