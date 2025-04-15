import './style.css';

// My portfolio

document.getElementById('app').innerHTML = `
  <!-- Navbar -->
  <nav class="bg-white shadow-md fixed w-full top-0 z-10">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-600">My Portfolio</div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#home" class="hover:text-blue-600">Home</a>
        <a href="#projects" class="hover:text-blue-600">Projects</a>
        <a href="#contact" class="hover:text-blue-600">Contact</a>
      </div>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button id="menu-toggle" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" 
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Links -->
    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4">
      <a href="#home" class="block py-2 text-gray-700 hover:text-blue-600">Home</a>
      <a href="#projects" class="block py-2 text-gray-700 hover:text-blue-600">Projects</a>
      <a href="#contact" class="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
    </div>
  </nav>

  <!-- Page Content -->
  <main class="pt-16">
    <!-- Home Section -->
    <section id="home" class="text-center py-20 bg-blue-100">
      <h1 class="text-4xl font-bold mb-4">Hi, I'm Alec Sosa</h1>
      <p class="text-lg">A web developer passionate about clean design and simple code.</p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold mb-6">Projects</h2>
      <div id="projects-list" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-100 py-12 px-4 text-center">
      <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p>Email: <a href="mailto:you@example.com" class="text-blue-600">you@example.com</a></p>
    </section>
  </main>
`;

const projects = [
  {
    title: "Portfolio Website",
    description: "Built with Vite, Tailwind CSS, and vanilla JS.",
    image: "/images/portfolio.png", // Place this image in public/images/
    liveLink: "https://your-portfolio-link.com",
    githubLink: "https://github.com/your-username/portfolio"
  },
  {
    title: "Weather App",
    description: "Simple weather app using OpenWeatherMap API.",
    image: "/images/weather-app-v2.png",
    liveLink: "https://gentle-belekoy-a2742f.netlify.app/",
    githubLink: "https://github.com/asosa223/Weather-App-V2#"
  }
];

const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = "bg-white rounded-lg shadow overflow-hidden flex flex-col";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-xl font-bold mb-2">${project.title}</h3>
      <p class="mb-4 flex-grow">${project.description}</p>
      <div class="flex space-x-4 mt-auto">
        <a href="${project.liveLink}" target="_blank"
           class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" 
           title="View Live">
          🔗
        </a>
        <a href="${project.githubLink}" target="_blank"
           class="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition" 
           title="View GitHub">
          🐙
        </a>
    </div>
  `;
  projectsList.appendChild(card);
});

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
