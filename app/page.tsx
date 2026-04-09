import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Riyaz Maind",
      "givenName": "Riyaz",
      "familyName": "Maind",
      "url": "https://riyaz.dev",
      "image": "https://riyaz.dev/avatar.jpg",
      "jobTitle": "Data Science Engineer & ML Specialist",
      "email": "riyazmaind@gmail.com",
      "sameAs": [
        "https://www.linkedin.com/in/riyaz-maind-66a108250/",
        "https://github.com/riyazmaind",
        "https://x.com/riyazmaind"
      ],
      "knowsAbout": ["Machine Learning", "Data Science", "Python", "Data Analytics", "Deep Learning", "TensorFlow", "PyTorch", "Data Visualization", "Predictive Analytics"],
      "description": "Riyaz Maind - Data science enthusiast and ML engineer focused on building scalable solutions and transforming data into actionable insights."
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}