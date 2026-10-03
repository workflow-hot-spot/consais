# Consais website redesign — consolidated delivery

This package starts from the uploaded Phase 2 repository and consolidates the previously accepted Phase 1 and Phase 2 work with the next implementation pass.

## Phase 1 — Core positioning and homepage
- Positioning focused on fintech engineering, cloud infrastructure and secure systems.
- Homepage experience highlights financial platforms, regulated-environment delivery and reliability engineering.
- Static SVG diagrams retained for lending architecture, CI/CD/cloud delivery and active-passive BCP/DR.
- SEO title and description aligned with the new positioning.

## Phase 2 — Services and capability structure
- Six core capabilities: Fintech Engineering; Lending Platforms; Cloud Infrastructure; DevSecOps & CI/CD; Secure Financial Integrations; Reliability, BCP & DR.
- Legacy generic service catalogue removed from the primary service description.
- Delivery approach emphasizes architecture, security, Infrastructure as Code, approvals/change control, documentation and recovery.

## Consolidation pass — Technology, team and contact experience
- Technology page reorganized around application engineering, cloud/IaC, containerization, CI/CD and workflow automation.
- AWS, Spring Boot/Java, Python, PostgreSQL, Terraform, Jenkins, Git, Docker and Kubernetes are represented as technology options.
- n8n and bespoke workflow automation remain visible as a supporting integration capability.
- Contact form service choices updated to match current capabilities.
- About, Team and How We Work pages updated to reinforce the same positioning and remove unsupported headline metrics from the Team page.
- Terms of Service service-description list aligned with the engineering capabilities.
- Header favicon points to the existing favicon asset.

## Build note
The source files passed TypeScript TSX syntax transpilation. A full Vite production build could not be run in this environment because package installation could not complete from the npm registry; dependencies should be installed in the normal development/CI environment before deployment.
