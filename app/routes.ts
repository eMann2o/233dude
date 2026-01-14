import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/about", "routes/about.tsx"),
    route("/home", "routes/home.tsx"),
    route("/projects", "routes/projects.tsx"),
    route("/case-study", "routes/casestudy.tsx"),
    route("/skills", "routes/skills.tsx"),
    route("/experience", "routes/experience.tsx"),
    route("/process", "routes/process.tsx"),
    route("/contact", "routes/contact.tsx"),

] satisfies RouteConfig;
