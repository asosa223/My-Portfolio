import './style.css';

// My portfolio

document.getElementById('app').innerHTML = `
  <!-- Navbar -->
  <nav class="bg-white w-full top-0 z-50 sticky shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-lg font-bold">Alec Sosa</div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#home" class="hover:text-blue-600">Home</a>
        <a href="#projects" class="hover:text-blue-600">Projects</a>
        <a href="#about" class="hover:text-blue-600">About</a>
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
  <main class="">
    <!-- Home Section -->
    <section id="home" class="bg-white relative w-full h-screen bg-[url('/images/circle-scatter-haikei.svg')] bg-no-repeat bg-bottom bg-cover">
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center gap-4">
        <h1 class="text-5xl font-bold mb-4">Hey, I'm Alec</h1>
        <p class="text-xl max-w-xl">I'm a web developer passionate about crafting clean, secure, and responsive experiences.</p>
        <button class="bg-indigo-500 text-white font-bold p-4  rounded-full" type="">Connect With Me</button>
      </div>
    </section>


    <!-- Projects Section -->
    <section id="projects" class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold mb-6">Projects</h2>
      <div id="projects-list" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
    </section>

    <!-- Tech Used Section -->
    <section id="tech" class="bg-indigo-500 text-white px-4 py-12">
      <h2 class="text-2xl font-bold mb-4 text-center">Tech Stack</h2>
      <div id="tech-icons" class="flex flex-wrap justify-center gap-6 text-4xl">
        <!-- JS will inject tech icons here -->
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="text-center px-4 py-12 bg-white">
      <h1 class="text-4xl font-bold mb-8">About Me</h1>
        <div id="about-container" class="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          <p class="text-lg sm:w-1/2 text-left sm:text-left">Hi, I'm Alec Sosa — a web developer with a growing foundation in cybersecurity and 
          a background in the banking industry. I enjoy creating clean, 
          responsive websites and web apps that focus on user experience and functionality. 
          I work with HTML, CSS, and JavaScript, and I'm always looking to sharpen my skills and explore new technologies. 
          Currently finishing my Associate's in Cybersecurity, I bring a security-conscious mindset to every project. 
          Bilingual in English and Spanish, 
          I thrive on collaboration and building solutions that make a real impact.
          </p>
          <img class="rounded-full w-64 h-64 object-cover shadow-lg" src="/images/alec.jpeg">
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-200 py-12 px-4 text-center">
      <div  id="contact-container" class="sm:flex flex-row-reverse justify-between px-4 py-12 text-left">
        <div id="contact-info" class="p-4 w-full">
          <h2 class="text-2xl font-semibold mb-4 uppercase">Get in Touch</h2>
          <p class="mb-4">Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Eu volutpat odio facilisis mauris sit amet massa. Sit amet est placerat in egestas</p>
          <span class="text-2xl block mb-4 uppercase"> Address </span>
          <a href class="block mb-4">228 NW 25th ST <br> Oklahoma City, OK 73103</a>
          <span class="text-2xl block mb-4 uppercase"> Email </span>
          <a href="mailto:sosadev223@gmail.com" class="text-blue-600 block mb-4">sosadev223@gmail.com</a>
          <span class="text-2xl block mb-4 uppercase"> Phone </span>
          <a href class="block mb-4">(405)431-9398</a>
        </div>
        <form id="contact-form" class=" w-full p-4 rounded-md border-gray-300 border-1 bg-gray-100 shadow-lg">
          <label id="cs-label" class="flex flex-col mb-4">
              Name
              <input id="cs-input" class="p-4" required type="text" name="name" placeholder="John/Jane Doe">
          </label>
          <label id="cs-label" class="flex flex-col mb-4">
              Email
              <input id="cs-input" class="p-4" required type="text" name="email" placeholder="you@example.com">
          </label>
          <label id="cs-label" class="flex flex-col mb-4">
              Phone
              <input id="cs-input" class="p-4" required type="text" name="phone" placeholder="555-555-5555">
          </label>
          <label id="cs-label-message" class="flex flex-col mb-4">
                Message
                <textarea id="cs-input" class="p-4" required name="Message" placeholder="Hello, I'm interested in..."></textarea>
          </label>
          <button id="cs-button" class="bg-indigo-500 text-white font-bold p-4 w-full rounded-sm" type="submit">Submit Message Now</button>
        </form>
      </div>
    </section>
  <footer class="mt-12 bg-gray-100 text-center text-sm text-gray-600 py-6">
    <p>&copy; 2025 Alec Sosa. All rights reserved.</p>
    <div class="flex justify-center gap-4 mt-2">
      <a href="https://github.com/asosa223" target="_blank" class="hover:text-black transition">GitHub</a>
      <a href="mailto:alecsosa223@gmail.com" class="hover:text-black transition">Email</a>
      <a href="www.linkedin.com/in/alec-sosa-0a3a60261" target="_blank" class="hover:text-black transition">LinkedIn</a>
    </div>
  </footer>
  </main>
`;

const projects = [
  {
    title: "Match A Gif",
    description: "Matching game built with HTML, CSS, and vanilla JS.",
    image: "/images/Match-a-gif.png", 
    liveLink: "https://match-a-gif.netlify.app/",
    githubLink: "https://github.com/asosa223/match-a-gif"
  },
  {
    title: "Weather App",
    description: "Simple weather app using OpenWeatherMap API.",
    image: "/images/weather-app-v2.png",
    liveLink: "https://alecsosa-weatherapp.netlify.app/",
    githubLink: "https://github.com/asosa223/Weather-App-V2#"
  }
];

const techIcons = [
  "devicon-javascript-plain",
  "devicon-html5-plain",
  "devicon-css3-plain",
  "devicon-tailwindcss-plain",
  "devicon-git-plain",
  "devicon-github-original",
  "devicon-linux-plain",
];

const techContainer = document.getElementById('tech-icons');

techIcons.forEach(iconClass => {
  const icon = document.createElement('i');
  icon.className = `${iconClass} text-white hover:text-blue-500 transition-colors duration-200 p-4`;
  techContainer.appendChild(icon);
});

const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = "relative group rounded-lg overflow-hidden shadow-lg";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="w-full h-68 object-cover" />

    <div class="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 class="text-xl font-bold mb-2">${project.title}</h3>
      <p class="text-sm mb-4">${project.description}</p>
      <div class="flex gap-4">
        <a href="${project.liveLink}" target="_blank"
           class="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition">
          🔗
        </a>
        <a href="${project.githubLink}" target="_blank"
           class=" devicon-github-original w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition">
        </a>
      </div>
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


// // Dark mode logic
// const toggleBtn = document.getElementById('theme-toggle');
// const htmlEl = document.documentElement;

// toggleBtn.addEventListener('click', () => {
//   htmlEl.classList.toggle('dark');
//   // Optionally: Save preference to localStorage
//   localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
// });

// // Optional: Load saved preference on page load
// if (localStorage.getItem('theme') === 'dark') {
//   htmlEl.classList.add('dark');
// }