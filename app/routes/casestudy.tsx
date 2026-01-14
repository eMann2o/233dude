import { CaseStudyLayout } from "~/components/casestudylayout";

const DATA = {
  title: "Travel With KB",
  role: "Lead Full-Stack Developer",
  timeline: "Dec 2025 - Present",
  stack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
  content: {
    problem: {
      text: "The goal was to build a modern, scalable booking engine that separates the data layer from the presentation layer. I needed to move away from tightly coupled monolithic patterns (like EJS) to a decoupled API architecture.",
      constraints: [
        "Handle relational-style data (Users ↔ Reviews) in NoSQL.",
        "Secure authentication without storing JWTs in localStorage (XSS risk).",
        "Strict REST API standards for mobile/web consumption."
      ]
    },
    solution: {
      overview: "I architected a MERN Stack application functioning as a booking platform where the backend handles all business logic (price calculation, availability) before writing to the database.",
      roles: ["User (Browse/Book)", "Admin (Manage Tours/Stats)", "Guide (Assigned to Tours)"],
      workflow: [
        "User Authenticates via HTTP-Only Cookie",
        "Browses Filtered Tours (API Query Params)",
        "Books a Tour (Stripe Integration)",
        "Leaves a Review (Linked to User & Tour)"
      ]
    },
    architecture: {
      backend: [
        "Models: Mongoose Schemas & Validation",
        "Controllers: Request/Response Logic",
        "Routes: Endpoint Definitions",
        "Utils: APIFeatures (Sort, Filter, Paginate)"
      ],
      schemaDetails: "I used Parent Referencing to manage relationships. Tours are the core entity. Reviews are child documents linked to both a Tour and a User. Users store encrypted passwords and role data."
    },
    auth: {
      strategy: "JWT via HTTP-Only Cookies",
      rbac: "Middleware: restrictTo('admin', 'lead-guide')",
      reasoning: "Storing tokens in localStorage leaves them vulnerable to XSS. HTTP-Only cookies prevent client-side script access, significantly hardening the auth layer."
    },
    decisions: [
      {
        decision: "Fat Models, Thin Controllers",
        why: "Moved validation and pre-save hooks (hashing) into Mongoose Schemas.",
        tradeoff: "Models become larger, but controllers remain readable and focused purely on HTTP logic."
      },
      {
        decision: "Global Error Handling Middleware",
        why: "Replaced try/catch blocks with a centralized error controller.",
        tradeoff: "Requires custom AppError class, but ensures consistent JSON error responses across the entire API."
      }
    ],
    challenges: [
      {
        challenge: "Managing Deeply Nested Data",
        solution: "Used Mongoose .populate() to simulate SQL Joins only when necessary to keep query performance high."
      },
      {
        challenge: "Handling CORS in Dev vs Prod",
        solution: "Configured backend to explicitly whitelist the frontend origin, preventing browser security blocks."
      }
    ],
    outcome: {
      result: "The result is a robust, production-ready REST API capable of supporting high-traffic loads. The separation of concerns allows for independent scaling of the frontend and backend.",
      future: ["Add Two-Factor Authentication (2FA)", "Implement Redis caching for frequently accessed Tour data"]
    }
  }
};

export default function TravelWithKB() {
  return <CaseStudyLayout data={DATA} />;
}