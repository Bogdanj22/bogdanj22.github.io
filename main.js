tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#845EC2",
        accent: "#4D8076",
        neutral: "#4B4453",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      agbalumo: ["Agbalumo", "sans-serif"],
    },
  },
};

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
      const skillCard = document.createElement("di
