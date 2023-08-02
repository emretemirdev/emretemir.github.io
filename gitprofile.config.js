// gitprofile.config.js

const config = {
  github: {
    username: 'emretemirdev', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['emretemirdev','programming-2-homework-for-my-college','labapp',], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'emretemirr',
    twitter: 'emretemirr',
    medium: 'emretemir',
    dev: 'emretemirdev',
    stackoverflow: '', // format: userid/username
    hackerrank: 'emre_temir',
    telegram: '',
    phone: '',
    email: 'emretemirdev@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/196J2FyX6L3ufw-Kyh_7ikqG2FBjgkpBJ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java EE',
    'Spring Boot',
    'JavaScript',
    'React.js',
    'Hibernate',
    'Kubernetes',
    'MySQL',
    'Swing',
    'Git',
    'Docker',
    'Apache Camel',
    'Junit',
    'C',
    'C++',
    'Apache Kafka',
  ],
  experiences: [
    {
      company: 'Tecpro',
      position: 'Technical Intern',
      from: 'July 2022',
      to: 'September 2022',
      companyLink: 'https://www.tecpro.com.tr/',
    },
    {
      company: 'Harpide Jewellery & CO.',
      position: 'Co Founder',
      from: 'March 2021',
      to: 'December 2021',
      companyLink: 'https://harpidae.com',
    },
  ],
   certifications: [
    {
      name: 'Java101',
      body: 'Learn Java101 Programming Language',
      year: '2023',
      link: 'https://drive.google.com/file/d/1_BvktBn6T9ZXcuIkyZo6rboN3YiA5WM1/view'
    },
    {
      name: 'Java Backend',
      body: 'GIT, OOP, DATA STRUCTURES, ALGORITHMS, DATABASES, SPRING BOOT, RESTFUL API, UNIT TESTING, DEPLOYMENT',
      year: '2023',
      link: 'https://app.patika.dev/certificates/c5c36a23'
    },
  ], 
  education: [
    {
      institution: 'Atlas University',
      degree: 'Undergraduate',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Ecole 42',
      degree: 'Piscine',
      from: '2021',
      to: 'present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'TUBITAK ',
      description:'I applied to TUBITAK 2209-A University Students Research Projects Support Program in 2021/2 term with my project'
      +'titled ’Smart Cane for the Visually Impaired’ and received support from TUBITAK. Through this project, I had the'
      +'opportunity to develop my research skills and gain experience in the field of assistive technology. The project aimed'
      +' to create an innovative smart cane that can assist visually impaired individuals in their daily lives. As a team'
      +' member, I participated in the design, prototyping, and testing phases of the project. We successfully developed a'
      +'prototype that can detect obstacles and provide haptic feedback to the user. This experience has strengthened my'
      +' passion for research and innovation and helped me develop valuable skills in project management,'
      +'problem-solving, and teamwork.',
      imageUrl: '',
      link: '/',
    },
    {
      title: 'TEKNOFEST',
      description:
        'The project aims to prevent falls in individuals who are at risk of falling. Falls can lead to injuries, functional loss'
        +'extended hospital stays, increased treatment costs, decreased quality of life, and anxiety and fear in the patient'
        +' family members, caregivers, and hospital staff. The system will use sensors to detect the risk of falling and provide an'
        +' alarm to warn the individual before a fall occurs. If the risk persists, an airbag mechanism will engage to prevent thefall.'
        +' The Atlas Airbag system is a unique solution that provides individuals with the chance to correct their posture or'
        +' hold on before the airbag mechanism activates to prevent a fall. The system’s novelty lies in its ability to warn'
        +' individuals of the risk of falling before they actually fall and its ability to prevent falls through the airbag mechanism.'
        ,
      imageUrl: '',
      link: '/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'emretemir', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-CTL1GTN5CF', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
};

export default config;
