export default function Home() {
  const skills = [
    "Java",
    "Spring Boot",
    "Kafka",
    "IBM MQ",
    "Redis",
    "Docker",
    "AWS",
    "Microservices",
    "System Design",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ];

  const experiences = [
    {
      company: "Infosys",
      role: "Associate Consultant",
      period: "Aug 2025 - Present",
      points: [
        "Worked on enterprise-scale payment processing and messaging systems for cross-border transactions.",
        "Developed Spring Boot microservices supporting high-volume payment routing workflows with 99.9% availability.",
        "Designed event-driven architectures using Kafka and IBM MQ for reliable asynchronous processing.",
        "Implemented SWIFT CBPR+ validation and transformation services achieving 95%+ compliance accuracy.",
        "Collaborated with architects and business teams to deliver scalable production-ready solutions."
      ],
    },
    {
      company: "Persistent Systems",
      role: "Senior Software Engineer",
      period: "Jul 2024 - Jul 2025",
      points: [
        "Migrated monolithic applications to microservices.",
        "Implemented API rate limiting.",
        "Integrated Twilio notification services.",
        "Improved observability and production monitoring.",
      ],
    },
    {
      company: "Persistent Systems",
      role: "Software Engineer",
      period: "Jun 2022 - Jun 2024",
      points: [
        "Implemented Redis and Memcached caching.",
        "Reduced API latency and database load.",
        "Increased automated test coverage to 80%+.",
        "Supported high-availability production systems.",
      ],
    },
  ];

  const projects = [
    {
      title: "Monitoring & Alerting System",
      description:
        "Contributed to the backend development and enhancement of SmartBear AlertSite, an enterprise-grade monitoring and observability platform used to track application availability, performance, and reliability.",
        tech: "Java • Spring Boot • Docker • kafka • Redis • Grafana • Dynamodb • AWS( RDS, S3, Ec2, Load Balancer, Route 53 )",
    },
     {
    title: "Payment Traffic Controller",
    description:
      "Developed a rule-based payment routing platform to seamlessly direct incoming payment messages between legacy and next-generation processing engines, enabling controlled traffic migration through a configurable dashboard and real-time routing rules.",
      tech: "Java • Spring Boot • ReactJS • Drools • MySQL • Docker • kafka",
  } ,
  {
      title: "SWIFT ISO 20022 Payment Message Transformation",
      description:
        "Developed address parsing and transformation logic to convert unstructured payment data into ISO 20022-compliant structured formats for SWIFT CBPR+ migration.",
        tech: "Java • Spring Boot • ISO 20022 • SWIFT CBPR+ • IBM MQ • AWS • SQL"
    },
    {
      title: "URL Shortener",
      description:
        "Production-ready URL shortening service with analytics, caching, and rate limiting.",
      tech: "Java • Spring Boot • PostgreSQL • Redis • Docker",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Prashant Shekhar Mishra
          </h1>

          <h2 className="text-2xl text-slate-300 mb-6">
            Backend Engineer | Java | Spring Boot | Kafka
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg">
            Backend Engineer with 4+ years of experience building scalable
            microservices, distributed systems, and enterprise-grade backend
            applications. Specialized in Spring Boot, Kafka, cloud-native
            architectures.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/PrashantShekhar-Mishra"
              className="px-6 py-3 border border-slate-700 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-shekhar-mishra"
              className="px-6 py-3 border border-slate-700 rounded-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/prashantsmishra024/"
              className="px-6 py-3 border border-slate-700 rounded-lg"
            >
              LeetCode
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["4+", "Years Experience"],
            ["500+", "DSA Problems Solved"],
            ["99.9%", "Service Availability"],
            ["3+", "Enterprise Projects"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-900 p-6 rounded-xl text-center"
            >
              <h3 className="text-4xl font-bold">{value}</h3>
              <p className="text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-slate-300 leading-8 text-lg">
          I design and build scalable backend systems using Java, Spring Boot,
          Kafka, Redis, and cloud technologies. My experience includes payment
          processing platforms, event-driven architectures, caching solutions,
          distributed systems, and enterprise integrations. I enjoy solving
          complex engineering problems and building reliable systems at scale.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-slate-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold">{exp.role}</h3>

              <p className="text-slate-400 mt-1">
                {exp.company} • {exp.period}
              </p>

              <ul className="mt-5 space-y-2 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="text-slate-400 mt-4">
                {project.description}
              </p>

              <p className="text-cyan-400 mt-4 text-sm">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-5 rounded-lg">
            Microsoft Azure Fundamentals (AZ-900)
          </div>

          <div className="bg-slate-900 p-5 rounded-lg">
            HackerRank Java
          </div>

          <div className="bg-slate-900 p-5 rounded-lg">
            HackerRank SQL
          </div>

          <div className="bg-slate-900 p-5 rounded-lg">
            Problem Solving Certification
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's Connect
          </h2>

          <p className="text-slate-400">
            Open to backend engineering opportunities and
            interesting technical discussions.
          </p>

          <div className="mt-8 space-y-2">
            <p>prashantsmishra03@gmail.com</p>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </section>
    </main>
  );
}