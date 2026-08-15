import {
  BarChart3,
  ClipboardList,
  FilePenLine,
  Globe2,
  Image,
  LayoutDashboard,
  Network,
  Settings,
  Users,
} from "lucide-react";
import { chapters, teamGroups } from "@/components/v2/data";

export const adminNav = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Website CMS", href: "/admin/website", icon: Globe2 },
  { name: "Chapters", href: "/admin/chapters", icon: Network },
  { name: "Resources", href: "/admin/resources", icon: FilePenLine },
  { name: "Blog", href: "/admin/blogs", icon: FilePenLine },
  { name: "Press", href: "/admin/press", icon: FilePenLine },
  { name: "Organization", href: "/admin/team", icon: Users },
  { name: "Applications", href: "/admin/forms", icon: ClipboardList },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Media", href: "/admin/media", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export const dashboardMetrics = [
  { label: "Editable page fields", value: "--", trend: "--" },
  { label: "Volunteer requests", value: "--", trend: "--" },
  { label: "Active chapters", value: "--", trend: "--" },
  { label: "Team records", value: "--", trend: "--" },
];

export const editablePages = [
  {
    page: "Homepage",
    route: "/",
    status: "Published",
    fields: [
      "Hero eyebrow",
      "Hero heading",
      "Hero subheading",
      "Hero primary CTA",
      "Hero secondary CTA",
      "Mission heading",
      "Focus area cards",
      "How we work steps",
      "Partner cards",
      "Featured chapters",
      "Recent events",
      "Final CTA",
      "Hero image/visual",
    ],
  },
  {
    page: "About / Our Story",
    route: "/about",
    status: "Published",
    fields: ["Page heading", "Intro paragraph", "Why ASHA started", "Timeline", "Mission", "Vision", "Milestones"],
  },
  {
    page: "Team",
    route: "/team",
    status: "Published",
    fields: ["Leadership heading", "Founder bio", "Co-Founder bio", "Core team", "Chapter leads", "Profile images", "Social links"],
  },
  {
    page: "Chapters",
    route: "/chapters",
    status: "Published",
    fields: ["Page heading", "Search filters", "Chapter cards", "Lead name", "Gallery preview", "Upcoming events", "Volunteer CTA"],
  },
  {
    page: "Get Involved",
    route: "/get-involved",
    status: "Published",
    fields: ["Hero copy", "Volunteer form", "Chapter form", "Partnership form", "Issue report", "FAQ", "Social links"],
  },
  {
    page: "Contact",
    route: "/contact",
    status: "Published",
    fields: ["Email", "Phone", "Address", "Support text", "Social links", "Contact CTA"],
  },
  {
    page: "Donation",
    route: "/donate",
    status: "Hidden",
    fields: ["Campaign cards", "Amounts", "Success page", "Failure page", "Gateway placeholder", "Admin launch status"],
  },
];

export const fieldEditorGroups = [
  {
    title: "Hero Content",
    fields: [
      { label: "Eyebrow", value: "Youth-led action for safer communities" },
      { label: "Heading", value: "Hope that moves from awareness to action." },
      { label: "Subheading", value: "Project ASHA works with students, institutions, NGOs, and partners." },
      { label: "Primary button", value: "Get involved" },
      { label: "Hero visual", value: "Blue-orange mission card" },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { label: "Official email", value: "contact@projectasha.org" },
      { label: "Phone", value: "+91 98765 43210" },
      { label: "Address", value: "Project ASHA, India" },
      { label: "Instagram", value: "Add official handle" },
    ],
  },
  {
    title: "SEO",
    fields: [
      { label: "Meta title", value: "Project ASHA" },
      { label: "Meta description", value: "Youth-led action against trafficking, child labour, and gender inequality." },
      { label: "Open Graph image", value: "Upload brand preview image" },
    ],
  },
];

export const volunteerRequests: { name: string; email: string; city: string; type: string; chapter: string; status: string }[] = [];

export const chapterRecords = chapters.map((chapter) => ({
  name: chapter.city,
  state: chapter.state,
  lead: chapter.lead,
  coLead: "--",
  members: [],
  volunteers: "--",
  status: "Published",
}));

export const organizationRows = teamGroups.map((group) => ({
  level: group.title,
  roles: group.people.map((person) => person.role).join(", "),
  people: String(group.people.length),
  permissions: "--",
}));

export const analyticsRows: { label: string; value: string; percent: number }[] = [];

export const recentActivity: string[] = [];

export const editableChecklist = [
  "Headings and subheadings",
  "Paragraph copy",
  "Buttons and links",
  "Images and gallery items",
  "Team profiles and bios",
  "Chapter leads and members",
  "Contact information",
  "FAQs and form labels",
  "SEO metadata",
  "Hidden donation campaigns",
];

export const AdminEditIcon = FilePenLine;
