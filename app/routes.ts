import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/about", "routes/about.tsx"),
    route("/projects", "routes/projects.tsx"),
    route("/case-studies/:slug", "routes/casestudy.tsx"),
    route("/skills", "routes/skills.tsx"),
    route("/experience", "routes/experience.tsx"),
    route("/process", "routes/process.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("*", "routes/404.tsx"),
] satisfies RouteConfig;
