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

export const adminNav = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Website CMS", href: "/admin/website", icon: Globe2 },
  { name: "Chapters", href: "/admin/chapters", icon: Network },
  { name: "Organization", href: "/admin/team", icon: Users },
  { name: "Applications", href: "/admin/forms", icon: ClipboardList },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Media", href: "/admin/media", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export const dashboardMetrics = [
  { label: "Editable page fields", value: "86", trend: "+18 this week" },
  { label: "Volunteer requests", value: "126", trend: "32 pending" },
  { label: "Active chapters", value: "18", trend: "4 onboarding" },
  { label: "Team records", value: "63", trend: "12 chapter leads" },
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

export const volunteerRequests = [
  { name: "Priya Patel", email: "priya@gmail.com", city: "Mumbai", type: "Volunteer", chapter: "Mumbai", status: "Pending" },
  { name: "Aarav Sharma", email: "aarav@gmail.com", city: "Delhi", type: "Chapter Member", chapter: "Delhi", status: "Approved" },
  { name: "Rohan Verma", email: "rohan@gmail.com", city: "Hyderabad", type: "Partnership", chapter: "Hyderabad", status: "Review" },
  { name: "Ananya Singh", email: "ananya@gmail.com", city: "Bengaluru", type: "Support", chapter: "Bengaluru", status: "Pending" },
];

export const chapterRecords = [
  {
    name: "Delhi",
    state: "Delhi",
    lead: "Aarav Sharma",
    coLead: "Meera Kapoor",
    members: ["Aarav Sharma", "Meera Kapoor", "Ishaan Rao", "Tara Mehta"],
    volunteers: 52,
    status: "Active",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    lead: "Riya Patel",
    coLead: "Kabir Sethi",
    members: ["Riya Patel", "Kabir Sethi", "Naina Shah"],
    volunteers: 41,
    status: "Active",
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    lead: "Rahul Verma",
    coLead: "Anika Reddy",
    members: ["Rahul Verma", "Anika Reddy", "Dev Nair"],
    volunteers: 27,
    status: "Onboarding",
  },
];

export const organizationRows = [
  { level: "Leadership", roles: "Founder, Co-Founder", people: "2", permissions: "Full access" },
  { level: "Core Team", roles: "Operations, Research, Content, Partnerships", people: "8", permissions: "Website + requests" },
  { level: "National Team", roles: "Programs, Events, Media, Training", people: "16", permissions: "Assigned modules" },
  { level: "Chapter Leads", roles: "City leadership", people: "12", permissions: "Chapter management" },
  { level: "Chapter Members", roles: "Volunteer coordination", people: "25", permissions: "Limited chapter access" },
];

export const analyticsRows = [
  { label: "Homepage views", value: "8,420", percent: 82 },
  { label: "Get Involved visits", value: "2,180", percent: 64 },
  { label: "Volunteer conversion", value: "18.4%", percent: 44 },
  { label: "Chapter page engagement", value: "71%", percent: 71 },
];

export const recentActivity = [
  "Homepage hero copy updated",
  "Mumbai chapter lead changed",
  "New volunteer request received",
  "Contact phone number reviewed",
  "Donation campaign kept hidden",
];

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
