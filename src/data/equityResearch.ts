export interface EquityReport {
  slug: string;
  company: string;
  title: string;
  sector: string;
  date: string;
  analyst: string;
}

// Add new reports here. Each report also needs a page component under
// src/pages/equityReports/ and a matching route in App.tsx.
export const equityReports: EquityReport[] = [
  {
    slug: "crudechem-technology",
    company: "CrudeChem Technology",
    title:
      "Strategic Positioning, Service Sourcing Dynamics, and Financial Growth Trajectory",
    sector: "Specialty Chemicals",
    date: "June 2026",
    analyst: "Equity Research Division",
  },
];

export const getSectors = (): string[] =>
  Array.from(new Set(equityReports.map((r) => r.sector)));

export const getReportsBySector = (sector: string): EquityReport[] =>
  equityReports.filter((r) => r.sector === sector);
