export default function App() {

  const projects = [
    {
      title: "Production Server Outage Diagnostics Tool",
      desc: "An automated Linux-based troubleshooting system that diagnoses server failures, monitors active services, and analyzes network connectivity logs.",
      tech: "Linux • Bash • Networking • System Logs",
      link: "https://github.com/Usman-Ghani-Devops/Simulate_Production_Outage",
    },
    {
      title: "Multi-Server Infrastructure Audit",
      desc: "A centralized automation script designed to perform security configuration audits and health checks across multiple remote Linux servers simultaneously via SSH.",
      tech: "SSH • Bash • Linux Security • Automation",
      link: "https://github.com/Usman-Ghani-Devops/Multi-Server-Infrastructure-Audit",
    },
    {
      title: "Dockerized Multi-Tier Application",
      desc: "Containerized a Flask web application with a MySQL database backend using custom Dockerfiles to ensure seamless communication between service tiers.",
      tech: "Docker • Docker-Compose • MySQL • Flask",
      link: "https://github.com/Usman-Ghani-Devops/flask_mysql_tier_app",
    },
    {
      title: "SSH Intrusion Detection System",
      desc: "A security monitoring tool that analyzes failed authentication attempts in system logs and automatically flags suspicious IP addresses.",
      tech: "Bash • Linux Security • Log Analysis",
      link: "https://github.com/Usman-Ghani-Devops/SSH-Intrusion-Detection-Project",
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="px-6 md:px-24 py-28 text-center flex flex-col items-center">
        
        {/* --- THIS IS THE PHOTO CODE --- */}
        <div className="mb-8">
          <img 
            src="/profile.png" 
            alt="Usman Ghani" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/20 object-cover"
          />
        </div>
        {/* ------------------------------ */}

        <h1 className="text-5xl md:text-6xl font-bold mb-6">Usman Ghani</h1>
        <p className="text-xl text-cyan-400 mb-6 font-medium text-balance">
          Software Engineering Student | DevOps & Cloud Enthusiast
        </p>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
          BS Software Engineering student at University of the Punjab (2024–2028) with CGPA 3.64. 
          Specializing in Infrastructure Automation, Linux Systems, and Containerization. 
          Currently focusing on AWS Cloud Fundamentals and building resilient DevOps solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold transition shadow-lg shadow-cyan-500/20">
            View Projects
          </a>
          <a href="/resume.pdf" download className="border border-gray-600 hover:border-cyan-400 px-8 py-3 rounded-full transition font-medium">
            Download CV
          </a>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://github.com/Usman-Ghani-Devops" target="_blank" className="p-3 bg-slate-900 rounded-full border border-gray-700 hover:border-cyan-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/usman-ghani-832722392" target="_blank" className="p-3 bg-slate-900 rounded-full border border-gray-700 hover:border-cyan-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="px-6 md:px-24 py-20 border-t border-b border-gray-800 bg-slate-900/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="font-bold text-white mb-4 border-b border-cyan-500 pb-2">Cloud & DevOps</h3>
            <ul className="text-gray-400 space-y-2">
              <li>AWS Fundamentals</li>
              <li>Docker & Containerization</li>
              <li>Linux System Administration</li>
              <li>CI/CD Fundamentals</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="font-bold text-white mb-4 border-b border-cyan-500 pb-2">Automation</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Bash / Shell Scripting</li>
              <li>Git & GitHub Workflows</li>
              <li>System Monitoring</li>
              <li>Networking Basics</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="font-bold text-white mb-4 border-b border-cyan-500 pb-2">Problem Solving</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Data Structures & Algorithms</li>
              <li>C++ / Python Programming</li>
              <li>90+ LeetCode Solved</li>
              <li>Technical Debugging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 md:px-24 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400 text-balance">Infrastructure & Cloud Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all group shadow-lg">
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">{p.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{p.desc}</p>
              <div className="text-cyan-500 text-xs font-mono mb-6 uppercase tracking-wider">{p.tech}</div>
              <a href={p.link} target="_blank" className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition">
                VIEW REPOSITORY <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 bg-slate-900/30 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Academic Background</h2>
        <div className="inline-block bg-slate-900 p-8 rounded-3xl border border-gray-800 shadow-2xl">
          <h3 className="text-xl font-bold">BS Software Engineering</h3>
          <p className="text-gray-400 mt-2">University of the Punjab (2024 – 2028)</p>
          <div className="mt-4 inline-block px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 font-bold font-mono text-sm">
            Current CGPA: 3.64 / 4.00
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-gray-800">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Available for DevOps & Cloud Internships</p>
        <p className="text-gray-300 mt-3 font-semibold text-lg">usman328ghani@gmail.com</p>
        <div className="mt-8 text-gray-600 text-[10px] uppercase tracking-tighter">
          © {new Date().getFullYear()} Usman Ghani • React + Tailwind CSS
        </div>
      </footer>

    </div>
  );
}
