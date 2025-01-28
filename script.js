const projectsContainer = document.getElementById("projects");

const projectTitle = ["Tribute Page", "Technical Documentation Page", "Landing Page", "Signature Creator","Palindrome Checker","Roman Number Converter","Telephone Number Validator","Cash Register","Pokémon Search App","Portfolio Webpage"];

const projectDescription = [
  `Welcome to our tribute page for Dr. APJ Abdul Kalam, India's "Missile Man" and 11th President. Explore his journey from humble beginnings to becoming a visionary leader, his pioneering work in missile technology, and his impactful presidency. Discover his enduring legacy through his writings, speeches, and initiatives like PURA. Dr. Kalam's life of dedication, education, and service continues to inspire millions worldwide.`,
  `Welcome to our comprehensive guide to the former Presidents of India. This page offers a detailed look into the lives and contributions of India's Presidents, from Dr. Rajendra Prasad to Smt. Droupadi Murmu. Explore their biographies, achievements, and the historical contexts in which they served, highlighting their roles in shaping modern India. Learn about their early lives, careers, presidencies, and lasting legacies that continue to inspire the nation. Dive into the rich tapestry of India's leadership history and discover the impact each President has made.`,
  `Welcome to CodeMinds, my live coding practice space! Join me as I tackle coding challenges, work on projects, and improve my skills in real-time. Watch, learn, and code along with me. Engage with an interactive community, experience live coding sessions, and explore my project showcase. Whether you're a fellow coder or just curious, there's something here for everyone. Let's connect, collaborate, and grow together!`,
  `Welcome to the Signature Creator! This interactive web application allows users to design and customize their digital signatures with ease. Whether you need a signature for personal or professional purposes, this tool lets you experiment with different fonts, colors, and styles to create a unique and elegant design. The user-friendly interface ensures a seamless experience, and the final signature can be downloaded for use in documents, emails, or anywhere you need a personalized touch. Explore creativity and professionalism combined in this simple yet powerful tool!`,
  `Test your words and phrases with the Palindrome Checker! This intuitive web application lets you quickly determine whether a given input reads the same forwards and backwards. It's designed with a clean interface and handles phrases, sentences, and even cases where punctuation or spaces might cause confusion. Perfect for language enthusiasts, coders, or anyone curious about palindromes, this tool simplifies the process of identifying these fascinating patterns. Give it a try and explore the magic of symmetry in words!`,
  `Convert numbers with ease using the Roman Number Converter! This web application allows users to seamlessly translate between modern Arabic numerals and Roman numerals. Whether you're working with historical references, designing creative projects, or just exploring ancient number systems, this tool provides accurate and instant conversions. With a simple and user-friendly interface, it's perfect for students, hobbyists, and professionals alike. Dive into the world of Roman numerals and simplify your conversions today!`,
  `Ensure the accuracy of phone numbers with the Telephone Number Validator! This web application verifies whether a given input meets the format of a valid US telephone number. It supports multiple formats, including those with country codes, parentheses, hyphens, or spaces, ensuring flexibility and reliability. Whether you're validating input for forms or simply testing for correctness, this tool provides instant results in a clean, user-friendly interface. Simplify your phone number validation process effortlessly!`,
  `Manage transactions effortlessly with the Cash Register! This web application calculates the exact change to be returned based on the given payment and purchase amount. It breaks down the change into specific denominations, ensuring accuracy and efficiency. Perfect for business owners, students, or anyone looking to streamline cash handling, the tool offers a clean interface and precise functionality. Simplify your calculations and stay organized with this handy application!`,
  `Dive into the world of Pokémon with the Pokémon Search App! This interactive web application allows users to search for their favorite Pokémon and discover detailed information, including stats, abilities, and types. With a sleek and user-friendly interface, it’s perfect for Pokémon enthusiasts, casual fans, or anyone curious about the Pokémon universe. Explore the vast Pokémon database and find everything you need to know about these iconic creatures—all in one place!`,
  `Welcome to my portfolio! Here, you can explore my diverse range of projects, each highlighting my expertise and creativity. My portfolio reflects my dedication to Web Development. Additionally, you will find a comprehensive list of my certifications that demonstrate my commitment to continuous learning and professional development. Each certification represents a milestone in my journey to stay updated with industry standards and expand my skill set. I am always open to new opportunities and collaborations. Whether you have a project in mind, want to discuss ideas, or just want to connect, feel free to reach out. Let's work together and create something amazing!`];

const visitsiteLink = ["https://srinivasrao28.github.io/Tribute-Page/",
"https://srinivasrao28.github.io/Technical-Documentation-Page/",
  "https://srinivasrao28.github.io/Landing-Page/",
  "https://srinivasrao28.github.io/Signature-Creator/",
  "https://srinivasrao28.github.io/Palindrome-Checker/","https://srinivasrao28.github.io/Roman-Number-Converter/","https://srinivasrao28.github.io/Telephone-Number-Validator/","https://srinivasrao28.github.io/Cash-Register/","https://srinivasrao28.github.io/Pokemon-Search-App/",
"https://srinivasrao28.github.io/Portfolio-Begginer/"];

const viewCodeLink = ["https://github.com/Srinivasrao28"];

const projectThumnail = ["Screenshot_14-7-2024_113541_.jpeg", "Screenshot_14-7-2024_113611_.jpeg", "Screenshot_14-7-2024_113645_.jpeg",
  "Screenshot4.png","Screenshot5.png","Screenshot6.png","Screenshot7.png","Screenshot8.png","Screenshot9.png","Screenshot_10-7-2024_163446_.jpeg"
];

for (let i = 0; i < projectTitle.length; i++){
    projectsContainer.innerHTML += `
        <div class="project-tile">
        <div class="project-img">
          <img src=${projectThumnail[i]} alt="Image" />
        </div>
        <div class="project-content right">
          <h1>${projectTitle[i]}</h1>
          <p>${projectDescription[i]}</p>
          <div class="buttons">
            <a href=${visitsiteLink[i]}>Visit Site</a>
            <a href=${viewCodeLink[0]} id="profile-link">View Code</a>
          </div>
        </div>
      </div>
    `
}