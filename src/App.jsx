export default function App() {

  const projects = [
    {
      title: "SSH Intrusion Detection System",
      desc: "Automated monitoring of failed SSH login attempts using Linux log parsing and anomaly detection.",
      tech: "Linux • Bash • Networking",
      link: "https://github.com/Usman-Ghani-Devops/SSH-Intrusion-Detection-Project",
    },
    {
      title: "Multi-Server Infrastructure Audit",
      desc: "Automated auditing tool to inspect security configurations across remote Linux servers.",
      tech: "Linux • SSH • Bash",
      link: "https://github.com/Usman-Ghani-Devops/Multi-Server-Infrastructure-Audit",
    },
    {
      title: "Dockerized Multi-Tier Application",
      desc: "Containerized Flask and MySQL application ensuring consistent and scalable deployment.",
      tech: "Docker • Flask • MySQL",
      link: "https://github.com/Usman-Ghani-Devops/Docker-Projects.git",
    },
    {
      title: "Sales Data Analysis Project",
      desc: "Performed exploratory data analysis and created visual insights using Python libraries.",
      tech: "Python • Pandas • Matplotlib • Seaborn",
      link: "#",
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold text-cyan-400">Usman Ghani</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="px-6 md:px-20 py-28 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Software Engineering Student
        </h2>

        <p className="text-cyan-400 text-xl mb-6">
          DevOps & Data Analytics Enthusiast
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed mb-10">
          BS Software Engineering student at the University of the Punjab (2024–2028) 
          with CGPA 3.64. Passionate about Linux automation, containerization, 
          infrastructure reliability, and Python-based data analysis. 
          Solved 90+ LeetCode problems to strengthen analytical thinking.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition">
            View Projects
          </a>

          <a href="/resume.pdf" download
            className="border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-full transition">
            Download CV
          </a>

          <a href="https://github.com/Usman-Ghani-Devops" target="_blank"
            className="border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-full transition">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/usman-ghani-832722392" target="_blank"
            className="border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-full transition">
            LinkedIn
          </a>

        </div>
      </section>


      {/* PROFILE IMAGE */}
<div className="mb-8">
  <img 
    src="/profile.png"      {/* <--- Change this from .jpg to .png */}
    alt="Usman Ghani" 
    className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/20 object-cover mx-auto"
  />
</div>
      

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-20 border-t border-b border-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Core Competencies
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-300">

          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h4 className="text-white font-semibold mb-4">DevOps</h4>
            <ul className="space-y-2">
              <li>Linux Administration</li>
              <li>Bash Automation</li>
              <li>Docker</li>
              <li>Git & GitHub</li>
              <li>CI/CD Basics</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h4 className="text-white font-semibold mb-4">Data Analytics</h4>
            <ul className="space-y-2">
              <li>Python</li>
              <li>Pandas & NumPy</li>
              <li>Matplotlib & Seaborn</li>
              <li>Data Cleaning</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h4 className="text-white font-semibold mb-4">Problem Solving</h4>
            <ul className="space-y-2">
              <li>C++</li>
              <li>Data Structures</li>
              <li>90+ LeetCode Solved</li>
            </ul>
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-400 transition">

              <h4 className="text-xl font-semibold mb-4">{project.title}</h4>

              <p className="text-gray-400 mb-4">{project.desc}</p>

              <p className="text-cyan-400 text-sm mb-4">{project.tech}</p>

              <a href={project.link} target="_blank"
                className="text-cyan-400 hover:underline">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* EDUCATION */}
      <section id="education" className="px-6 md:px-20 py-20 border-t border-b border-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">Education</h3>

        <p className="text-lg font-semibold">
          BS Software Engineering
        </p>

        <p className="text-gray-400">
          University of the Punjab (2024 – 2028)
        </p>

        <p className="text-gray-400">
          CGPA: 3.64 / 4.00
        </p>
      </section>


      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">
          Contact
        </h3>

        <p className="text-gray-400 mb-4">
          Open to DevOps & Data Analytics Internship Opportunities
        </p>

        <p className="text-gray-300">Email: usman328ghani@gmail.com</p>
      </section>


      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © 2026 Usman Ghani
      </footer>

    </div>
  );
}
