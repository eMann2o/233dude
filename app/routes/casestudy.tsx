import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudy, type CaseStudyData } from "~/data/data";

export function meta() {
  return [
    { title: `Case Study | Emmanuel Opoku` },
  ];
}

function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
      <div className="min-h-screen bg-page-bg pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32"
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors mb-16">
               <ArrowLeft size={14} /> Back to Projects
            </Link>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-plus font-black text-white leading-[1] tracking-tighter mb-12">
              {data.title}
            </h1>

            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/[0.06]">
               <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Role</span>
                  <span className="text-lg font-bold text-white">{data.role}</span>
               </div>
               <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Timeline</span>
                  <span className="text-lg font-bold text-white">{data.timeline}</span>
               </div>
               <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Stack</span>
                  <div className="flex flex-wrap gap-2">
                     {data.stack.map(tech => (
                       <span key={tech} className="text-sm font-bold text-white border border-gray-200 px-3 py-1 rounded-full">{tech}</span>
                     ))}
                  </div>
               </div>
            </div>
          </motion.header>

          <main className="space-y-40">
            
            {/* 01 — The Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl font-plus font-bold text-gray-700 mb-12 tracking-tight">01 / The Challenge</h2>
               <p className="text-2xl md:text-3xl text-white leading-snug font-medium mb-16">
                  {data.content.problem.text}
               </p>
               <div className="pl-8 border-l-2 border-white/[0.06]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Constraints</h4>
                  <ul className="space-y-4">
                    {data.content.problem.constraints.map((c, i) => (
                      <li key={i} className="text-lg text-gray-600 font-medium">— {c}</li>
                    ))}
                  </ul>
               </div>
            </motion.section>

            <div className="divider-clean" />

            {/* 02 — Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl font-plus font-bold text-gray-700 mb-12 tracking-tight">02 / Architecture</h2>
               <div className="space-y-20">
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-8">Data Layer</h3>
                     <p className="text-xl text-gray-500 leading-relaxed">
                        {data.content.architecture.schemaDetails}
                     </p>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-white mb-8">Backend Services</h3>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {data.content.architecture.backend.map((item, i) => (
                          <div key={i} className="p-6 bg-[#111111] border border-gray-100">
                             <span className="text-base font-bold text-white">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-white mb-8">Lifecycle Workflow</h3>
                     <div className="space-y-6">
                        {data.content.solution.workflow.map((step, i) => (
                          <div key={i} className="flex gap-6 items-start">
                             <span className="text-gray-700 font-bold shrink-0">0{i+1}</span>
                             <p className="text-lg font-medium text-gray-600">{step}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.section>

            <div className="divider-clean" />

            {/* 03 — Security & Auth */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl font-plus font-bold text-gray-700 mb-12 tracking-tight">03 / Security & Auth</h2>
               <div className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Strategy</h4>
                        <p className="text-xl font-bold text-white">{data.content.auth.strategy}</p>
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Access Control</h4>
                        <p className="text-xl font-bold text-white">{data.content.auth.rbac}</p>
                     </div>
                  </div>
                  <p className="text-xl text-gray-500 leading-relaxed">
                     {data.content.auth.reasoning}
                  </p>
               </div>
            </motion.section>

            <div className="divider-clean" />

            {/* 04 — Decisions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl font-plus font-bold text-gray-700 mb-12 tracking-tight">04 / Engineering Decisions</h2>
               <div className="space-y-16">
                 {data.content.decisions.map((d, i) => (
                   <div key={i} className="border-l-2 border-blue-500/20 pl-8">
                      <h4 className="text-2xl font-plus font-bold text-white mb-4">{d.decision}</h4>
                      <p className="text-lg text-gray-500 leading-relaxed mb-3">
                         <span className="text-white font-bold">Context:</span> {d.why}
                      </p>
                      <p className="text-lg text-gray-400 leading-relaxed italic">
                         Tradeoff: {d.tradeoff}
                      </p>
                   </div>
                 ))}
               </div>
            </motion.section>

            <div className="divider-clean" />

            {/* 05 — Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl font-plus font-bold text-gray-700 mb-12 tracking-tight">05 / Challenges Solved</h2>
               <div className="space-y-16">
                  {data.content.challenges.map((c, i) => (
                    <div key={i}>
                       <h4 className="text-2xl font-bold text-white mb-6">{c.challenge}</h4>
                       <p className="text-lg text-gray-500 leading-relaxed pl-8 border-l-2 border-green-500/20">
                          {c.solution}
                       </p>
                    </div>
                  ))}
               </div>
            </motion.section>

            {/* Outcome */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-12 md:p-20"
            >
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">Outcome</h4>
                <p className="text-2xl md:text-3xl font-plus font-bold leading-snug text-white mb-16">
                    {data.content.outcome.result}
                </p>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Future Roadmap</h4>
                    <div className="flex flex-wrap gap-3">
                        {data.content.outcome.future.map((f, i) => (
                            <span key={i} className="text-sm font-bold text-gray-600 bg-page-bg px-4 py-2 border border-gray-200 rounded-full">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-20">
               <Link to="/projects" className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-blue-500 transition-colors">
                 <ArrowLeft size={20} /> All Projects
               </Link>
               <Link to="/contact" className="btn-primary">
                 Discuss This Architecture <ArrowRight size={18} />
               </Link>
            </div>

          </main>
        </div>
      </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCaseStudy(slug) : null;

  if (!data) return (
    <div className="min-h-screen bg-page-bg pt-40 text-center px-6">
       <h1 className="text-massive text-gray-200 mb-8">404</h1>
       <p className="text-2xl font-bold text-white mb-12">Case study not found.</p>
       <Link to="/projects" className="btn-outline">Back to Projects</Link>
    </div>
  );

  return <CaseStudyLayout data={data} />;
}