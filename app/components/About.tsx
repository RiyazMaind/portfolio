export default function About() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL"]
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      category: "Deep Learning",
      items: ["Neural Networks (CNNs, RNNs, Transformers)", "Backpropagation"]
    },
    {
      category: "Data Analysis",
      items: ["Excel", "Tableau", "Power BI", "Statistics"]
    },
    {
      category: "Tools & Frameworks",
      items: ["Jupyter Notebooks", "Google Colab", "HuggingFace"]
    },
    {
      category: "Soft Skills",
      items: ["Critical Thinking", "Data Storytelling", "Technical Writing"]
    }
  ];

  return (
    <section id="about" className="w-full bg-slate-950 text-slate-100 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Riyaz Maind</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Final year Computer Science student and Ex Team Lead (Data Science) with hands on experience in data analysis and machine learning. 
            Proficient in building and deploying ML models with a strong focus on real world applications, scalable data pipelines, and data driven decision making.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          <div className="space-y-6 text-gray-300">
            <p className="text-base md:text-lg leading-8">
              I&apos;m passionate about transforming raw data into actionable insights through machine learning and analytics.
              I focus on building end-to-end solutions that bridge the gap between complex models and real-world business impact.
            </p>
            <p className="text-base md:text-lg leading-8">
              My experience spans data science team leadership, predictive modeling, ETL pipeline optimization, and interactive analytics dashboards.
              I&apos;m committed to leveraging data-driven decision making to solve challenging problems across various domains.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-blue-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-blue-500/10">
          <h3 className="text-2xl font-semibold text-white mb-8">Skills & Expertise</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div key={index} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">{skillGroup.category}</p>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
