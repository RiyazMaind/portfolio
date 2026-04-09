export default function Projects() {
  const projects = [
    {
      title: "CryptoVision: Cryptocurrency Price Prediction using Market Data + News Sentiment",
      description: "Built a hybrid prediction system using historical cryptocurrency price data and real-time market news sentiment. Applied NLP-based sentiment analysis on crypto news and combined it with time-series features for modeling. Achieved 59% prediction accuracy by fusing quantitative market signals with qualitative sentiment scores.",
      tags: ["Python", "NLP", "Machine Learning", "Time-Series"],
      href: "#"
    },
    {
      title: "Personalized Movie Recommendation System",
      description: "Built a content-based movie recommender using TF-IDF and Cosine Similarity on metadata (overview, genres, keywords, tagline). Designed a responsive frontend with HTML, JS, and Tailwind CSS featuring autocomplete search and dynamic movie cards.",
      tags: ["TF-IDF", "Recommendation", "Frontend", "Tailwind CSS"],
      href: "#"
    },
    {
      title: "Customer Insights Model",
      description: "A predictive analytics project using historical data to identify churn risk and growth opportunities.",
      tags: ["Python", "Machine Learning", "Analytics"],
      href: "#"
    }
  ];

  return (
    <section id="projects" className="w-full bg-gray-950 text-slate-100 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A selection of data-driven projects that showcase my work in analytics, visualization, and model-driven insights.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block rounded-[32px] border border-slate-800 bg-slate-900/90 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-slate-900"
            >
              <div className="mb-5">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">Project</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 leading-7 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
