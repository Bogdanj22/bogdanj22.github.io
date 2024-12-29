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
    href: "#",
    icon: "fab fa-github",
    color: "text-teal-400 hover:text-teal-300",
  },
  {
    href: "#",
    icon: "fab fa-linkedin",
    color: "text-teal-400 hover:text-teal-300",
  },
  {
    href: "#",
    icon: "fas fa-envelope",
    color: "text-teal-400 hover:text-teal-300",
  },
];

const skills = [
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Git", icon: "fab fa-git" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Ansible", icon: "fas fa-code-branch" },
  { name: "Terraform", icon: "fas fa-server" },
  { name: "Jenkins", icon: "fas fa-tools" },
  { name: "Kubernetes", icon: "fas fa-cubes" },
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Nginx", icon: "fas fa-network-wired" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "MongoDB", icon: "fas fa-leaf" },
  { name: "GitLab", icon: "fab fa-gitlab" },
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
  socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.className = `${link.color} transition-colors`;
    anchor.innerHTML = `<i class="${link.icon} text-xl"></i>`;
    socialLinksContainer.appendChild(anchor);
  });

  // Add footer with copyright information
  const footer = document.createElement("footer");
  footer.className = "text-center py-4 text-gray-500 md:pt-0";
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Bogdan. All rights reserved.`;
  mainElement.appendChild(footer);
});
