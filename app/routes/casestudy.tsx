import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  Database, 
  Server, 
  Shield,
  ArrowLeft,
  Zap,
  Trophy,
  Activity,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import { getCaseStudy, type CaseStudyData } from "~/data/data";

// --- COMPONENTS ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
        <span className="text-4xl font-plus font-extrabold text-blue-bell/20">{number}</span>
        <h2 className="text-3xl font-plus font-extrabold text-iron-grey">{title}</h2>
        <div className="flex-1 h-px bg-iron-grey/5" />
    </div>
  );
}

function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans text-iron-grey selection:bg-blue-bell/20 pt-32 pb-24">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 space-y-8"
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-bell font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
               <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.2em] text-iron-grey/40">
                    <span className="text-blue-bell">{data.role}</span>
                    <span>•</span>
                    <span>{data.timeline}</span>
                </div>
                <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold">
                  {data.title}<span className="text-blue-bell">.</span>
                </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.stack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-card-bg border border-iron-grey/5 text-iron-grey/60 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:border-blue-bell/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.header>

          <main className="space-y-32">

            {/* 1. Problem */}
            <section>
              <SectionHeader number="01" title="The Challenge" />
              <div className="grid md:grid-cols-5 gap-12 items-start">
                  <div className="md:col-span-3 space-y-6">
                    <p className="text-xl md:text-2xl text-iron-grey/70 leading-relaxed font-medium">
                        {data.content.problem.text}
                    </p>
                  </div>
                  <div className="md:col-span-2 bento-card bg-card-bg/50">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle size={18} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40">Technical Constraints</h4>
                    </div>
                    <ul className="space-y-4">
                      {data.content.problem.constraints.map((c, i) => (
                        <li key={i} className="flex gap-4 text-xs font-bold text-iron-grey/60 leading-snug">
                          <CheckCircle size={14} className="shrink-0 text-blue-bell/40" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </section>

            {/* 2. Solution & Architecture */}
            <section>
              <SectionHeader number="02" title="Architecture" />
              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                 <div className="lg:col-span-2 bento-card h-full">
                    <div className="flex items-center gap-3 mb-8">
                        <Server size={20} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40">Backend Services</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 h-full">
                        {data.content.architecture.backend.map((item, i) => (
                          <div key={i} className="p-6 rounded-[2rem] bg-white border border-iron-grey/5 flex flex-col justify-between group hover:border-blue-bell/10 transition-all">
                             <div className="text-blue-bell/20 mb-4"><Zap size={20} /></div>
                             <span className="text-sm font-bold text-iron-grey/80">{item}</span>
                          </div>
                        ))}
                    </div>
                 </div>
                 <div className="bento-card border-none bg-iron-grey text-white">
                    <div className="flex items-center gap-3 mb-8">
                        <Database size={20} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Data Layer</h4>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-medium mb-12">
                        {data.content.architecture.schemaDetails}
                    </p>
                    <div className="w-full aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center p-8 text-center">
                        <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                            {data.content.architecture.diagramPlaceholder || "Engineering Diagram Loading..."}
                        </span>
                    </div>
                 </div>
              </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bento-card">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40 mb-8">Lifecycle Workflow</h4>
                     <div className="space-y-8 relative border-l border-iron-grey/5 ml-4">
                        {data.content.solution.workflow.map((step, i) => (
                          <div key={i} className="pl-12 relative">
                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-blue-bell z-10" />
                             <span className="text-sm font-bold text-iron-grey/70">{step}</span>
                          </div>
                        ))}
                      </div>
                  </div>
                  <div className="bento-card">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40 mb-8">Access Control (RBAC)</h4>
                     <div className="space-y-6">
                        {[
                          { title: "Identity Strategy", val: data.content.auth.strategy, icon: Lock },
                          { title: "Enforcement", val: data.content.auth.rbac, icon: ShieldCheck },
                          { title: "Engineering Rationale", val: data.content.auth.reasoning, icon: Shield }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-card-bg/50 border border-iron-grey/5">
                             <item.icon className="text-blue-bell shrink-0" size={18} />
                             <div>
                                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-iron-grey/30 mb-1">{item.title}</h5>
                                <p className="text-sm font-bold text-iron-grey/80 leading-snug">{item.val}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. Engineering Decisions */}
            <section>
               <SectionHeader number="03" title="Engineering Decisions" />
               <div className="grid md:grid-cols-2 gap-6">
                 {data.content.decisions.map((d, i) => (
                   <div key={i} className="bento-card group hover:border-blue-bell/10">
                      <div className="p-3 w-fit rounded-xl bg-white shadow-sm text-blue-bell mb-8 group-hover:bg-blue-bell group-hover:text-white transition-all">
                        <GitBranch size={20} />
                      </div>
                      <h4 className="text-2xl font-plus font-bold text-iron-grey mb-4">{d.decision}</h4>
                      <div className="space-y-4">
                         <p className="text-sm font-medium text-iron-grey/60"><strong className="text-[10px] uppercase tracking-widest text-blue-bell block mb-1">Context:</strong> {d.why}</p>
                         <p className="text-sm font-medium text-iron-grey/40 italic"><strong className="text-[10px] uppercase tracking-widest text-iron-grey/20 not-italic block mb-1">Tradeoff:</strong> {d.tradeoff}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* 4. Challenges & Retrospective */}
            <section>
               <SectionHeader number="04" title="Retrospective" />
               <div className="space-y-6 mb-12">
                 {data.content.challenges.map((c, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-card-bg border border-iron-grey/5 flex flex-col md:flex-row gap-8">
                       <div className="shrink-0 p-4 w-fit h-fit rounded-[1.5rem] bg-white text-blue-bell shadow-sm">
                          <Activity size={24} />
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-iron-grey/30">Challenge: {c.challenge}</h4>
                          <p className="text-lg font-bold text-iron-grey/70 leading-relaxed italic">
                             " {c.solution} "
                          </p>
                       </div>
                    </div>
                 ))}
               </div>

               <div className="bg-iron-grey text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
                        <Trophy size={300} strokeWidth={1} />
                    </div>
                   <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                        <h4 className="text-blue-bell font-bold tracking-widest uppercase text-xs">Conclusion</h4>
                        <p className="text-2xl md:text-3xl font-plus font-extrabold leading-tight">
                            {data.content.outcome.result}
                        </p>
                        <div className="pt-8 flex flex-wrap justify-center gap-3">
                            {data.content.outcome.future.map((f, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/40 uppercase tracking-widest">
                                    {f}
                                </span>
                            ))}
                        </div>
                   </div>
               </div>
            </section>

            {/* Final Navigation */}
            <div className="pt-20 flex justify-between items-center">
               <Link to="/projects" className="group inline-flex items-center gap-3 text-iron-grey/40 font-bold text-xs uppercase tracking-widest hover:text-blue-bell transition-colors">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> All Projects
               </Link>
               <Link to="/contact" className="inline-flex items-center gap-4 bg-blue-bell text-white px-8 py-4 rounded-full font-bold hover:bg-iron-grey transition-all shadow-lg shadow-blue-bell/20">
                  Discuss the Build <Activity size={18} />
               </Link>
            </div>

          </main>
        </div>
      </div>
    </ReactLenis>
  );
}

// --- MAIN EXPORT ---

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCaseStudy(slug) : null;

  if (!data) {
    return (
      <div className="bg-white min-h-screen font-plus text-iron-grey flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-extrabold">Case study not found.</h1>
        <Link to="/projects" className="inline-flex items-center gap-2 bg-blue-bell text-white px-8 py-4 rounded-full font-bold hover:bg-iron-grey transition-all">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return <CaseStudyLayout data={data} />;
}