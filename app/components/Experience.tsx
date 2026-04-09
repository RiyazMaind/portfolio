export default function Experience() {
  const experiences = [
    {
      title: "Team Lead - Data Science",
      company: "Honeyee Digital",
      location: "Ahmedabad, India",
      type: "Remote",
      period: "Dec 2025 — Jan 2026",
      highlights: [
        "Leading a team of data science interns to design, build, and deploy end-to-end data-driven solutions.",
        "Owning project planning, task allocation, code reviews, and delivery timelines.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Honeyee Digital",
      location: "Ahmedabad, India",
      type: "Remote",
      period: "Nov 2025 — Jan 2026",
      highlights: [
        "Improved ETL and data automation workflows, achieving a 500%+ performance boost.",
        "Designed and implemented whole workflow of ChatBot.",
        "Designed and implemented backend functionality using Flask.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Carbon Crunch",
      location: "Noida, India",
      type: "Remote",
      period: "March 2025 — May 2025",
      highlights: [
        "At Carbon Crunch my job was to analyze sustainability and ESG data to uncover actionable insights for strategic decision-making, there developed interactive dashboards for BRSR, GRI emissions, and ESG compliance using Power BI and Tableau.",
        "Also Assisted in data collection, validation, and verification for sustainability reporting.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-gray-950 text-slate-100 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Journey</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            My roles and responsibilities across data science, analytics, and team leadership.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-slate-800 bg-slate-900/90 p-8 transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-900"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400">
                    {exp.location} • {exp.type}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold md:text-right mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
