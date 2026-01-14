import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertTriangle, Layers, Lock, GitMerge, Database, Server } from "lucide-react";
import { ReactLenis } from "lenis/react";

interface CaseStudyProps {
  title: string;
  role: string;
  timeline: string;
  stack: string[];
  content: {
    problem: { text: string; constraints: string[] };
    solution: { overview: string; roles: string[]; workflow: string[] };
    architecture: { backend: string[]; schemaDetails: string; diagramUrl?: string };
    auth: { strategy: string; rbac: string; reasoning: string };
    decisions: { decision: string; why: string; tradeoff: string }[];
    challenges: { challenge: string; solution: string }[];
    outcome: { result: string; future: string[] };
  };
}

export function CaseStudyLayout({ data }: { data: CaseStudyProps }) {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans text-camel-dark selection:bg-almond-silk selection:text-camel-dark">
        
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-6 left-6 z-50">
          <Link to="/projects" className="flex items-center gap-2 bg-white/50 backdrop-blur border border-camel/20 px-4 py-2 rounded-full text-sm font-bold text-camel hover:bg-white transition-all">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </nav>

        <div className="container mx-auto px-6 max-w-4xl pt-32 pb-24">
          
          {/* --- HERO HEADER --- */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 border-b border-camel/10 pb-12"
          >
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-camel mb-4">
              <span>{data.role}</span>
              <span>•</span>
              <span>{data.timeline}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark mb-8 leading-tight">
              🧠 Case Study: <br />
              <span className="text-camel italic">{data.title}</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              {data.stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-camel-dark text-parchment text-xs font-bold uppercase tracking-wider rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.header>

          <main className="space-y-24">

            {/* 1️⃣ PROBLEM */}
            <Section number="1" title="The Problem">
              <p className="text-lg leading-relaxed mb-8">{data.content.problem.text}</p>
              <div className="bg-almond-cream/30 p-6 rounded-xl border-l-4 border-camel">
                <h4 className="font-bold text-sm uppercase tracking-widest text-camel mb-4">Core Constraints</h4>
                <ul className="space-y-3">
                  {data.content.problem.constraints.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium opacity-80">
                      <AlertTriangle size={16} className="shrink-0 text-camel" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* 2️⃣ SOLUTION */}
            <Section number="2" title="Solution Overview">
              <p className="text-lg mb-8">{data.content.solution.overview}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl mb-4 text-camel">User Roles</h4>
                  <ul className="space-y-2">
                    {data.content.solution.roles.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm bg-white/50 p-2 rounded border border-camel/10">
                        <UsersIcon className="w-4 h-4 text-camel" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-4 text-camel">Core Workflow</h4>
                  <div className="space-y-0 relative border-l border-camel/20 ml-2">
                    {data.content.solution.workflow.map((step, i) => (
                      <div key={i} className="pl-6 pb-6 relative">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-camel" />
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* 3️⃣ ARCHITECTURE */}
            <Section number="3" title="Architecture">
              <div className="bg-azure-mist/50 p-8 rounded-2xl border border-camel/10 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="text-camel" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Backend Structure</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  {data.content.architecture.backend.map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded border border-camel/10 text-camel-dark/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="text-camel" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Data Layer</h4>
                </div>
                <p className="text-base leading-relaxed">{data.content.architecture.schemaDetails}</p>
                {/* Placeholder for ERD Image */}
                <div className="w-full h-64 bg-camel-dark/5 rounded-xl flex items-center justify-center border-2 border-dashed border-camel/20 text-camel/50 text-sm font-medium">
                  {data.content.architecture.diagramUrl ? (
                    <img src={data.content.architecture.diagramUrl} alt="ERD" className="w-full h-full object-contain" />
                  ) : (
                    "[ Insert ERD / Schema Diagram Here ]"
                  )}
                </div>
              </div>
            </Section>

            {/* 4️⃣ AUTHENTICATION */}
            <Section number="4" title="Authentication & Auth">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Strategy", val: data.content.auth.strategy, icon: Lock },
                  { title: "Enforcement", val: data.content.auth.rbac, icon: ShieldIcon },
                  { title: "Reasoning", val: data.content.auth.reasoning, icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm shadow-camel/5 border border-camel/10">
                    <item.icon className="text-camel mb-3" size={24} />
                    <h4 className="font-bold text-xs uppercase tracking-wider opacity-50 mb-2">{item.title}</h4>
                    <p className="text-sm font-medium leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 5️⃣ KEY DECISIONS */}
            <Section number="5" title="Key Design Decisions">
              <div className="space-y-6">
                {data.content.decisions.map((d, i) => (
                  <div key={i} className="relative pl-6 md:pl-0">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-camel/10" />
                    <div className="md:ml-6">
                      <h4 className="text-lg font-serif font-bold text-camel mb-2">{d.decision}</h4>
                      <p className="mb-2"><strong className="text-xs uppercase tracking-wide opacity-50">Why:</strong> {d.why}</p>
                      <p className="text-sm opacity-70 italic"><strong className="not-italic text-xs uppercase tracking-wide opacity-50">Tradeoff:</strong> {d.tradeoff}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 6️⃣ CHALLENGES */}
            <Section number="6" title="Challenges & Lessons">
              <div className="grid gap-6">
                {data.content.challenges.map((c, i) => (
                  <div key={i} className="bg-camel-dark text-parchment p-6 rounded-xl">
                    <div className="flex gap-3 mb-3 text-almond-silk">
                      <AlertTriangle size={18} />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Challenge: {c.challenge}</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm pl-8 border-l border-white/20">
                      <span className="text-almond-silk font-bold">Solution: </span>
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 7️⃣ OUTCOME */}
            <Section number="7" title="Outcome">
              <div className="bg-azure-mist p-8 rounded-2xl border border-camel/10 text-center mb-8">
                <p className="text-xl md:text-2xl font-serif text-camel-dark leading-relaxed">
                  "{data.content.outcome.result}"
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-xs uppercase tracking-widest text-camel mb-4">Future Improvements</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {data.content.outcome.future.map((f, i) => (
                    <span key={i} className="px-4 py-2 border border-camel/30 rounded-full text-sm hover:bg-white transition-colors cursor-default">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

          </main>

          {/* FOOTER NAV */}
          <div className="mt-32 pt-12 border-t border-camel/20 flex justify-between opacity-60 hover:opacity-100 transition-opacity">
            <Link to="/projects" className="flex items-center gap-2 font-serif italic hover:text-camel">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <span className="font-serif italic text-camel">End of Case Study</span>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}

// Helper Components
function Section({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-4 mb-8 border-b border-camel/10 pb-4">
        <span className="font-serif text-5xl text-camel/20 font-bold">{number}</span>
        <h2 className="font-serif text-3xl text-camel-dark">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function UsersIcon(props: any) { return <Users {...props} size={16} /> }
import { Users, Shield as ShieldIcon } from "lucide-react";