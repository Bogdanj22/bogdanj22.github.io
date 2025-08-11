// tailwind.config nije potreban ovde, jer se koristi CDN tailwind

const socialLinks = [
  {
    href: "https://github.com/Bogdanj22",
    icon: "fab fa-github",
    color: "text-teal-400 hover:text-teal-300",
  },
  {
    href: "https://linkedin.com", // Dodaj pravi LinkedIn link
    icon: "fab fa-linkedin",
    color: "text-teal-400 hover:text-teal-300",
  },
  {
    href: "mailto:your.email@example.com", // Dodaj pravi email
    icon: "fas fa-envelope",
    color: "text-teal-400 hover:text-teal-300",
  },
];

const skills = [
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Terraform", icon: "fas fa-server" },
  { name: "Ansible", icon: "fas fa-code-branch" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Git", icon: "fab fa-git" },
  { name: "CI/CD", icon: "fas fa-code" },
  { name: "Kubernetes", icon: "fas fa-cubes" },
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Helm", icon: "fas fa-ship" },
  { name: "Grafana", icon: "fas fa-chart-line" },
  { name: "ArgoCD", icon: "fas fa-project-diagram" },
];

const experience = [
  {
    title: "DevOps Engineer – 12/2024 – 07/2025",
    type: "Full-time DevOps role",
    details: [
      "Docker-based containerization and automated image builds using JFrog Artifactory.",
      "Extensive Terraform use to provision and configure EC2 instances (including SQL, Web, Carrier and Graylog servers), fully automate server setup, manage networking resources, and develop a reusable S3 module.",
      "CI/CD pipeline automation, including implementation of Checkov for Terraform policy enforcement and security scanning.",
      "AWS infrastructure provisioning and monitoring (VPC, EC2, EKS, Lambda, S3, IAM, CloudWatch, SNS...)",
      "Implemented ScoutSuite for automated cloud infrastructure security audits and compliance checks.",
      "Used ArgoCD for GitOps-based continuous delivery and declarative application deployment on Kubernetes.",
      "Helm chart development and deployment management with regular updates and rollback support.",
      "Managing Kubernetes clusters on AWS (EKS), including upgrades and node maintenance.",
      "Monitoring and observability setup using CloudWatch and Grafana.",
      "Version control and collaboration using Git and GitLab.",
    ],
  },
  {
    title: "DevOps Engineer – 08/2024 – 10/2024",
    type: "Freelance DevOps role",
    details: [
      "Deployed and managed AWS EC2 instances, including GPU-accelerated instances.",
      "Installed and configured GPU drivers and other essential software to optimize instance performance.",
      "Diagnosed and resolved issues related to instance performance, connectivity, and application compatibility.",
      "Worked closely with development and operations teams to improve deployment processes.",
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");

  // Render skills
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skills.forEach((skill) => {
      const skillCard = document.createElement("div");
      skillCard.className =
        "flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:bg-gray-800/40 transition-colors";
      skillCard.innerHTML = `
        <i class="${skill.icon} text-2xl text-teal-400"></i>
        <span>${skill.name}</span>
      `;
      skillsGrid.appendChild(skillCard);
    });
  }

  // Render social links
  const socialLinksContainer = document.getElementById("social-links");
  if (socialLinksContainer) {
    socialLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.className = `${link.color} transition-colors`;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.innerHTML = `<i class="${link.icon} text-xl"></i>`;
      socialLinksContainer.appendChild(anchor);
    });
  }

  // Render experience section
  const experienceSection = document.createElement("section");
  experienceSection.id = "experience";
  experienceSection.className = "max-w-5xl mx-auto px-4 my-12";
  experienceSection.innerHTML = `
    <h2 class="text-3xl font-bold text-center mb-6">💼 Experience</h2>
    <div class="bg-gray-800/30 p-6 rounded-lg space-y-6 text-gray-300">
      <!-- Removed summary and Technologies -->
    </div>
  `;

  // Append jobs dynamically inside that div
  const container = experienceSection.querySelector("div");
  experience.forEach((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.innerHTML = `
      <h3 class="text-xl font-bold">${job.title}</h3>
      <p class="italic">${job.type}</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        ${job.details.map((d) => `<li>${d}</li>`).join("")}
      </ul>
    `;
    container.appendChild(jobDiv);
  });

  mainElement.appendChild(experienceSection);

  // Footer
  const footer = document.createElement("footer");
  footer.className = "text-center py-4 text-gray-500 md:pt-0";
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Bogdan. All rights reserved.`;
  mainElement.appendChild(footer);
});
