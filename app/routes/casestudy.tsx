import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getCaseStudy, type CaseStudyData } from "~/data/data";

export function meta() {
  return [
    { title: `Case Study | Emmanuel Opoku` },
  ];
}

function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
      <div className="min-h-screen bg-white pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32"
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 font-bold text-xs uppercase tracking-widest transition-colors mb-16">
               <ArrowLeft size={14} /> Back to Projects
            </Link>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-plus font-black text-gray-900 leading-[0.9] tracking-tighter mb-12">
              {data.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-black/[0.06]">
               <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Role</span>
                  <span className="text-xl font-bold text-gray-900">{data.role}</span>
               </div>
               <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Stack</span>
                  <div className="flex flex-wrap gap-2">
                     {data.stack.map(tech => (
                       <span key={tech} className="text-gray-900 font-bold">{tech}</span>
                     ))}
                  </div>
               </div>
            </div>
          </motion.header>

          <main className="space-y-40">
            
            {/* The Challenge */}
            <section>
               <h2 className="text-4xl font-plus font-bold text-gray-300 mb-12 tracking-tight">01 / The Challenge</h2>
               <p className="text-2xl md:text-3xl text-gray-900 leading-tight font-medium mb-16">
                  {data.content.problem.text}
               </p>
               <div className="pl-8 border-l-2 border-black/[0.06]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Constraints</h4>
                  <ul className="space-y-4">
                    {data.content.problem.constraints.map((c, i) => (
                      <li key={i} className="text-lg text-gray-600 font-medium">{c}</li>
                    ))}
                  </ul>
               </div>
            </section>

            <div className="divider-clean" />

            {/* Architecture */}
            <section>
               <h2 className="text-4xl font-plus font-bold text-gray-300 mb-12 tracking-tight">02 / Architecture</h2>
               <div className="space-y-20">
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Data Layer</h3>
                     <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        {data.content.architecture.schemaDetails}
                     </p>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Backend Services</h3>
                     <div className="grid sm:grid-cols-2 gap-8">
                        {data.content.architecture.backend.map((item, i) => (
                          <div key={i} className="p-8 bg-gray-50 border border-gray-100">
                             <span className="text-lg font-bold text-gray-900">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Lifecycle Workflow</h3>
                     <div className="space-y-6">
                        {data.content.solution.workflow.map((step, i) => (
                          <div key={i} className="flex gap-6 items-start">
                             <span className="text-gray-300 font-bold">0{i+1}</span>
                             <p className="text-xl font-medium text-gray-600">{step}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            <div className="divider-clean" />

            {/* Decisions */}
            <section>
               <h2 className="text-4xl font-plus font-bold text-gray-300 mb-12 tracking-tight">03 / Decisions</h2>
               <div className="space-y-16">
                 {data.content.decisions.map((d, i) => (
                   <div key={i}>
                      <h4 className="text-3xl font-plus font-bold text-gray-900 mb-6">{d.decision}</h4>
                      <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-4">
                         <span className="text-gray-900 font-bold">Context:</span> {d.why}
                      </p>
                      <p className="text-xl text-gray-400 leading-relaxed max-w-2xl italic">
                         Tradeoff: {d.tradeoff}
                      </p>
                   </div>
                 ))}
               </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gray-50 p-12 md:p-24 text-center">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">Outcome</h4>
                <p className="text-3xl md:text-5xl font-plus font-black leading-tight text-gray-900 mb-16">
                    {data.content.outcome.result}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {data.content.outcome.future.map((f, i) => (
                        <span key={i} className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                            {f}
                        </span>
                    ))}
                </div>
            </section>

          </main>
        </div>
      </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCaseStudy(slug) : null;

  if (!data) return <div className="min-h-screen pt-40 text-center"><h1 className="text-4xl">Not found</h1></div>;

  return <CaseStudyLayout data={data} />;
}