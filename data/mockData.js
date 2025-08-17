export const careerRoadmaps = [
  {
    role: "webdeveloper",
    description: "Master full-stack web development from frontend to backend",
    duration: "16 weeks",
    difficulty: "Beginner",
    weeks: [
      {
        week: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        skills: [
          "HTML5 Semantic Elements",
          "CSS3 Styling",
          "Flexbox",
          "Grid Layout",
        ],
        resources: [
          {
            name: "MDN Web Docs - HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS Tricks - Complete Guide",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          },
          {
            name: "freeCodeCamp - Responsive Web Design",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/",
          },
        ],
        milestone: "Build a responsive landing page",
        completed: false,
      },
      {
        week: 2,
        title: "JavaScript Basics",
        description: "Understanding JavaScript fundamentals",
        skills: [
          "Variables & Data Types",
          "Functions",
          "DOM Manipulation",
          "Events",
        ],
        resources: [
          {
            name: "JavaScript.info - The Modern Tutorial",
            url: "https://javascript.info/",
          },
          {
            name: "Eloquent JavaScript - Free Book",
            url: "https://eloquentjavascript.net/",
          },
          {
            name: "MDN JavaScript Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          },
        ],
        milestone: "Create an interactive calculator",
        completed: false,
      },
      {
        week: 3,
        title: "Advanced JavaScript",
        description: "ES6+ features and asynchronous programming",
        skills: ["Arrow Functions", "Promises", "Async/Await", "Modules"],
        resources: [
          {
            name: "ES6 Features - MDN",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla",
          },
          {
            name: "Async JavaScript - JavaScript.info",
            url: "https://javascript.info/async",
          },
          {
            name: "You Don't Know JS - GitHub",
            url: "https://github.com/getify/You-Dont-Know-JS",
          },
        ],
        milestone: "Build a weather app with API integration",
        completed: false,
      },
      {
        week: 4,
        title: "React Fundamentals",
        description: "Introduction to React library",
        skills: ["Components", "Props", "State", "Event Handling"],
        resources: [
          {
            name: "React Official Documentation",
            url: "https://react.dev/learn",
          },
          {
            name: "React Tutorial - Official",
            url: "https://react.dev/learn/tutorial-tic-tac-toe",
          },
          {
            name: "Scrimba React Course",
            url: "https://scrimba.com/learn/learnreact",
          },
        ],
        milestone: "Create a todo list application",
        completed: false,
      },
      {
        week: 5,
        title: "React Advanced Concepts",
        description: "Deep dive into React hooks and performance optimization",
        skills: ["useEffect", "Custom Hooks", "Context API", "React DevTools"],
        resources: [
          {
            name: "React Docs - Hooks",
            url: "https://react.dev/reference/react",
          },
          { name: "Kent C. Dodds Blog", url: "https://kentcdodds.com/blog" },
          {
            name: "React Performance Guide",
            url: "https://react.dev/learn/render-and-commit",
          },
        ],
        milestone: "Build a notes app with light/dark mode toggle",
        completed: false,
      },
      {
        week: 6,
        title: "Routing & Navigation",
        description: "Implement client-side routing using React Router",
        skills: ["React Router v6", "Nested Routes", "Dynamic Routing"],
        resources: [
          { name: "React Router Docs", url: "https://reactrouter.com/en/main" },
          {
            name: "Web Dev Simplified - React Router",
            url: "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
          },
          {
            name: "React Router Tutorial",
            url: "https://reactrouter.com/en/main/start/tutorial",
          },
        ],
        milestone: "Build a multi-page blog website",
        completed: false,
      },
      {
        week: 7,
        title: "State Management",
        description:
          "Manage complex state with tools like Redux and Context API",
        skills: [
          "Redux Basics",
          "Redux Toolkit",
          "Middleware",
          "Context vs Redux",
        ],
        resources: [
          {
            name: "Redux Official Documentation",
            url: "https://redux.js.org/introduction/getting-started",
          },
          {
            name: "Redux Toolkit Quick Start",
            url: "https://redux-toolkit.js.org/tutorials/quick-start",
          },
          {
            name: "Redux Essentials Tutorial",
            url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts",
          },
        ],
        milestone: "Build a shopping cart app",
        completed: false,
      },
      {
        week: 8,
        title: "Backend with Node.js",
        description: "Set up a basic server using Node.js and Express.js",
        skills: [
          "Express Routing",
          "Middleware",
          "REST APIs",
          "Handling Requests",
        ],
        resources: [
          {
            name: "Node.js Official Documentation",
            url: "https://nodejs.org/en/docs/",
          },
          {
            name: "Express.js Documentation",
            url: "https://expressjs.com/en/starter/installing.html",
          },
          {
            name: "Node.js Crash Course - Traversy Media",
            url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
          },
        ],
        milestone: "Create a simple REST API for products",
        completed: false,
      },
      {
        week: 9,
        title: "Databases with MongoDB",
        description:
          "Learn to store and retrieve data using MongoDB and Mongoose",
        skills: ["MongoDB CRUD", "Mongoose Models", "Database Relationships"],
        resources: [
          "MongoDB University",
          "Mongoose Docs",
          "The Net Ninja MongoDB Series",
        ],
        milestone: "Build a backend for a user registration system",
        completed: false,
      },
      {
        week: 10,
        title: "Authentication & Authorization",
        description:
          "Secure your applications with login, JWT tokens, and protected routes",
        skills: [
          "JWT",
          "Cookies & Sessions",
          "Hashing with Bcrypt",
          "Protected Routes",
        ],
        resources: [
          "Auth0 Blog",
          "Traversy Media Auth Tutorial",
          "JWT.io Docs",
        ],
        milestone: "Implement login & signup system with JWT",
        completed: false,
      },
    ],
  },
  {
    role: "ai/mlengineer",
    description: "Build intelligent systems and machine learning models",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Python Programming",
        description: "Master Python for data science and ML",
        skills: ["Python Syntax", "Data Structures", "NumPy", "Pandas"],
        resources: [
          {
            name: "Python.org - Official Tutorial",
            url: "https://docs.python.org/3/tutorial/",
          },
          {
            name: "NumPy Documentation",
            url: "https://numpy.org/doc/stable/user/quickstart.html",
          },
          {
            name: "Pandas Tutorial",
            url: "https://pandas.pydata.org/docs/user_guide/10min.html",
          },
        ],
        milestone: "Complete data manipulation exercises",
        completed: false,
      },
      {
        week: 2,
        title: "Statistics & Mathematics",
        description: "Foundation for machine learning",
        skills: [
          "Descriptive Statistics",
          "Probability",
          "Linear Algebra",
          "Calculus",
        ],
        resources: [
          {
            name: "Khan Academy - Statistics",
            url: "https://www.khanacademy.org/math/statistics-probability",
          },
          {
            name: "StatQuest - YouTube",
            url: "https://www.youtube.com/c/joshstarmer",
          },
          {
            name: "3Blue1Brown - Linear Algebra",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
          },
        ],
        milestone: "Statistical analysis project",
        completed: false,
      },
      {
        week: 3,
        title: "Data Visualization",
        description: "Learn to visualize data effectively",
        skills: ["Matplotlib", "Seaborn", "Plotly", "Correlation Heatmaps"],
        resources: [
          {
            name: "Matplotlib Documentation",
            url: "https://matplotlib.org/stable/tutorials/index.html",
          },
          {
            name: "Seaborn Tutorial",
            url: "https://seaborn.pydata.org/tutorial.html",
          },
          {
            name: "Plotly Express Guide",
            url: "https://plotly.com/python/plotly-express/",
          },
        ],
        milestone: "Create a data report with visual insights",
        completed: false,
      },
      {
        week: 4,
        title: "Supervised Learning Basics",
        description: "Build basic machine learning models",
        skills: [
          "Linear Regression",
          "Logistic Regression",
          "Model Evaluation",
        ],
        resources: [
          {
            name: "Scikit-learn User Guide",
            url: "https://scikit-learn.org/stable/user_guide.html",
          },
          {
            name: "Andrew Ng ML Course - Coursera",
            url: "https://www.coursera.org/learn/machine-learning",
          },
          {
            name: "Kaggle Learn - Intro to ML",
            url: "https://www.kaggle.com/learn/intro-to-machine-learning",
          },
        ],
        milestone: "Predict student scores and loan approvals",
        completed: false,
      },
      {
        week: 5,
        title: "Model Improvement & Evaluation",
        description: "Tune and evaluate models with best practices",
        skills: [
          "Cross-validation",
          "Grid Search",
          "Confusion Matrix",
          "ROC Curve",
        ],
        resources: [
          {
            name: "Scikit-learn Model Evaluation",
            url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
          },
          {
            name: "ML Cheat Sheet",
            url: "https://ml-cheatsheet.readthedocs.io/en/latest/",
          },
          {
            name: "StatQuest - Model Evaluation",
            url: "https://www.youtube.com/watch?v=Kdsp6soqA7o",
          },
        ],
        milestone: "Improve accuracy of a classification model",
        completed: false,
      },
      {
        week: 6,
        title: "Unsupervised Learning",
        description: "Explore clustering and dimensionality reduction",
        skills: ["K-Means", "Hierarchical Clustering", "PCA", "t-SNE"],
        resources: [
          {
            name: "Scikit-learn Clustering",
            url: "https://scikit-learn.org/stable/modules/clustering.html",
          },
          {
            name: "Khan Academy - PCA",
            url: "https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives/quadratic-approximations/a/the-hessian",
          },
          {
            name: "StatQuest - K-Means Clustering",
            url: "https://www.youtube.com/watch?v=4b5d3muPQmA",
          },
        ],
        milestone: "Customer segmentation project",
        completed: false,
      },
      {
        week: 7,
        title: "Natural Language Processing (NLP)",
        description: "Work with text data and language models",
        skills: [
          "Text Cleaning",
          "TF-IDF",
          "Word Embeddings",
          "Text Classification",
        ],
        resources: [
          {
            name: "NLTK Book - Natural Language Processing",
            url: "https://www.nltk.org/book/",
          },
          {
            name: "spaCy Documentation",
            url: "https://spacy.io/usage/spacy-101",
          },
          {
            name: "Kaggle NLP Datasets",
            url: "https://www.kaggle.com/datasets?search=nlp",
          },
        ],
        milestone: "Build a sentiment analysis model",
        completed: false,
      },
      {
        week: 8,
        title: "Neural Networks & Deep Learning",
        description: "Build and train neural networks",
        skills: [
          "Perceptron",
          "Activation Functions",
          "Backpropagation",
          "TensorFlow/Keras",
        ],
        resources: [
          {
            name: "DeepLearning.ai - Neural Networks Course",
            url: "https://www.coursera.org/learn/neural-networks-deep-learning",
          },
          {
            name: "TensorFlow Official Tutorials",
            url: "https://www.tensorflow.org/tutorials",
          },
          {
            name: "3Blue1Brown - Neural Networks",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
          },
        ],
        milestone: "Train a digit classifier with MNIST",
        completed: false,
      },
      {
        week: 9,
        title: "Computer Vision",
        description: "Work with image data using CNNs",
        skills: [
          "Convolution Layers",
          "Pooling",
          "Data Augmentation",
          "Image Classification",
        ],
        resources: [
          {
            name: "PyImageSearch - Computer Vision",
            url: "https://pyimagesearch.com/start-here/",
          },
          {
            name: "Keras Computer Vision Tutorials",
            url: "https://keras.io/examples/vision/",
          },
          {
            name: "FastAI - Practical Deep Learning",
            url: "https://course.fast.ai/",
          },
        ],
        milestone: "Build a cat vs dog image classifier",
        completed: false,
      },
      {
        week: 10,
        title: "Model Deployment",
        description: "Deploy your ML models to production",
        skills: ["Flask API", "Streamlit", "Docker", "Heroku/Render"],
        resources: [
          {
            name: "MLOps - Machine Learning Engineering",
            url: "https://madewithml.com/courses/mlops/",
          },
          {
            name: "Streamlit Documentation",
            url: "https://docs.streamlit.io/",
          },
          {
            name: "Flask for ML Deployment",
            url: "https://flask.palletsprojects.com/en/2.3.x/tutorial/",
          },
        ],
        milestone: "Deploy a machine learning web app",
        completed: false,
      },
    ],
  },
  {
    role: "datascience",
    description:
      "Analyze data and build models to extract insights and drive decisions",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Python for Data Analysis",
        description: "Master data manipulation using Python libraries",
        skills: ["Python Basics", "NumPy", "Pandas", "Jupyter Notebooks"],
        resources: [
          {
            name: "Python.org - Data Analysis",
            url: "https://docs.python.org/3/tutorial/",
          },
          {
            name: "Pandas Documentation",
            url: "https://pandas.pydata.org/docs/user_guide/",
          },
          {
            name: "Kaggle Python Course",
            url: "https://www.kaggle.com/learn/python",
          },
        ],
        milestone: "Perform EDA on a real dataset",
        completed: false,
      },
      {
        week: 2,
        title: "Statistics & Probability",
        description: "Core statistical concepts for analysis and modeling",
        skills: [
          "Mean, Median, Mode",
          "Variance & Standard Deviation",
          "Bayes Theorem",
          "Distributions",
        ],
        resources: [
          {
            name: "Khan Academy - Statistics",
            url: "https://www.khanacademy.org/math/statistics-probability",
          },
          {
            name: "StatQuest - YouTube",
            url: "https://www.youtube.com/c/joshstarmer",
          },
          {
            name: "OpenIntro Statistics",
            url: "https://www.openintro.org/book/os/",
          },
        ],
        milestone: "Write a report interpreting statistical metrics",
        completed: false,
      },
      {
        week: 3,
        title: "Data Cleaning & Preprocessing",
        description: "Prepare real-world data for modeling",
        skills: [
          "Handling Missing Values",
          "Outliers",
          "Scaling",
          "Encoding Categorical Variables",
        ],
        resources: [
          {
            name: "Kaggle - Data Cleaning",
            url: "https://www.kaggle.com/learn/data-cleaning",
          },
          {
            name: "Scikit-learn Preprocessing",
            url: "https://scikit-learn.org/stable/modules/preprocessing.html",
          },
          {
            name: "Towards Data Science - Data Cleaning",
            url: "https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4",
          },
        ],
        milestone: "Clean a messy dataset end-to-end",
        completed: false,
      },
      {
        week: 4,
        title: "Data Visualization",
        description: "Visualize trends and patterns in data",
        skills: ["Matplotlib", "Seaborn", "Plotly", "Interactive Dashboards"],
        resources: [
          {
            name: "Seaborn Tutorial Gallery",
            url: "https://seaborn.pydata.org/examples/index.html",
          },
          {
            name: "Matplotlib Gallery",
            url: "https://matplotlib.org/stable/gallery/index.html",
          },
          {
            name: "Plotly Python Graphing Library",
            url: "https://plotly.com/python/",
          },
        ],
        milestone: "Build a dashboard to explore a dataset",
        completed: false,
      },
      {
        week: 5,
        title: "Exploratory Data Analysis (EDA)",
        description: "Find insights and trends using EDA",
        skills: [
          "Univariate Analysis",
          "Bivariate Plots",
          "Correlation Analysis",
        ],
        resources: [
          {
            name: "Kaggle EDA Notebooks",
            url: "https://www.kaggle.com/code?search=exploratory+data+analysis",
          },
          {
            name: "Krish Naik - EDA Playlist",
            url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPzj1D0i_6ajJ6gyD22b3jh",
          },
          {
            name: "Towards Data Science - EDA",
            url: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15",
          },
        ],
        milestone: "Submit a complete EDA notebook on Kaggle",
        completed: false,
      },
      {
        week: 6,
        title: "Supervised Machine Learning",
        description: "Apply models to predict outcomes",
        skills: [
          "Linear Regression",
          "Decision Trees",
          "Random Forest",
          "Model Evaluation",
        ],
        resources: [
          {
            name: "Scikit-learn Supervised Learning",
            url: "https://scikit-learn.org/stable/supervised_learning.html",
          },
          {
            name: "Kaggle Machine Learning Course",
            url: "https://www.kaggle.com/learn/machine-learning",
          },
          {
            name: "Google ML Crash Course",
            url: "https://developers.google.com/machine-learning/crash-course",
          },
        ],
        milestone: "Predict housing prices using regression",
        completed: false,
      },
      {
        week: 7,
        title: "Unsupervised Learning",
        description: "Cluster and reduce data dimensions",
        skills: [
          "K-Means Clustering",
          "PCA",
          "DBSCAN",
          "Hierarchical Clustering",
        ],
        resources: [
          {
            name: "Scikit-learn Clustering",
            url: "https://scikit-learn.org/stable/modules/clustering.html",
          },
          {
            name: "Analytics Vidhya - Clustering",
            url: "https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/",
          },
          {
            name: "StatQuest - Clustering",
            url: "https://www.youtube.com/watch?v=4b5d3muPQmA",
          },
        ],
        milestone: "Perform customer segmentation project",
        completed: false,
      },
      {
        week: 8,
        title: "Time Series Analysis",
        description: "Work with temporal data and trends",
        skills: ["Moving Averages", "ARIMA", "Seasonality", "Forecasting"],
        resources: [
          {
            name: "Kaggle Time Series Course",
            url: "https://www.kaggle.com/learn/time-series",
          },
          {
            name: "Statsmodels Documentation",
            url: "https://www.statsmodels.org/stable/user-guide.html",
          },
          {
            name: "Codebasics - Time Series",
            url: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uuKaU2nBDwr6zrSOTzNCs0l",
          },
        ],
        milestone: "Build a stock price predictor",
        completed: false,
      },
      {
        week: 9,
        title: "Natural Language Processing for Data Science",
        description: "Use text data for prediction and insights",
        skills: [
          "Tokenization",
          "TF-IDF",
          "Text Classification",
          "Basic NLP Models",
        ],
        resources: [
          {
            name: "NLTK Book - Processing Raw Text",
            url: "https://www.nltk.org/book/ch03.html",
          },
          {
            name: "Kaggle NLP Datasets",
            url: "https://www.kaggle.com/datasets?search=nlp",
          },
          {
            name: "TextBlob Documentation",
            url: "https://textblob.readthedocs.io/en/dev/",
          },
        ],
        milestone: "Classify news headlines by topic",
        completed: false,
      },
      {
        week: 10,
        title: "Capstone Project & Model Deployment",
        description: "Apply everything in a real-world project",
        skills: [
          "Data Pipeline",
          "Model Building",
          "Flask/Streamlit App",
          "GitHub Hosting",
        ],
        resources: [
          {
            name: "Streamlit Documentation",
            url: "https://docs.streamlit.io/library/get-started",
          },
          {
            name: "Flask Mega-Tutorial",
            url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
          },
          {
            name: "Render Deployment Guide",
            url: "https://render.com/docs/deploy-flask",
          },
        ],
        milestone: "Deploy a data science project with dashboard",
        completed: false,
      },
    ],
  },
  {
    role: "CybersecurityAnalyst",
    description:
      "Protect systems and data from cyber threats and vulnerabilities",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Introduction to Cybersecurity",
        description: "Understand core concepts, threats, and the CIA triad",
        skills: [
          "CIA Triad",
          "Threat Modeling",
          "Types of Attacks",
          "Security Terminology",
        ],
        resources: [
          "Cybrary Intro Course",
          "Khan Academy",
          "NIST Cybersecurity Framework",
        ],
        milestone: "Create a threat model for a web app",
        completed: false,
      },
      {
        week: 2,
        title: "Networking Fundamentals",
        description: "Understand how data moves across the internet",
        skills: ["OSI Model", "TCP/IP", "IP Addressing", "Ports & Protocols"],
        resources: [
          "Cisco Networking Basics",
          "Professor Messer",
          "NetworkChuck YouTube",
        ],
        milestone: "Map and document a home network layout",
        completed: false,
      },
      {
        week: 3,
        title: "Operating Systems Security",
        description: "Study OS-level vulnerabilities and protections",
        skills: [
          "Windows Security",
          "Linux Permissions",
          "File Systems",
          "User Roles",
        ],
        resources: ["OverTheWire Wargames", "TryHackMe", "Linux Journey"],
        milestone: "Harden a Linux VM and enable basic firewall rules",
        completed: false,
      },
      {
        week: 4,
        title: "Cryptography Basics",
        description: "Learn encryption, hashing, and digital signatures",
        skills: [
          "Symmetric & Asymmetric Encryption",
          "Hashing Algorithms",
          "SSL/TLS",
        ],
        resources: ["Crypto101.io", "Khan Academy", "SSL Labs Docs"],
        milestone: "Implement a simple Caesar cipher and hash checker",
        completed: false,
      },
      {
        week: 5,
        title: "Web Application Security",
        description: "Identify and mitigate web-based attacks",
        skills: ["XSS", "SQL Injection", "CSRF", "Authentication Flaws"],
        resources: [
          "OWASP Top 10",
          "PortSwigger Labs",
          "HackTheBox Web Challenges",
        ],
        milestone: "Perform XSS and SQLi in a test lab",
        completed: false,
      },
      {
        week: 6,
        title: "Penetration Testing Basics",
        description: "Explore ethical hacking and vulnerability scanning",
        skills: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite"],
        resources: [
          "TryHackMe Pentesting Path",
          "Hack The Box Academy",
          "OffSec Blog",
        ],
        milestone: "Scan and exploit a vulnerable VM in a safe lab",
        completed: false,
      },
      {
        week: 7,
        title: "Security Information & Event Management (SIEM)",
        description: "Use tools to monitor and analyze system logs",
        skills: [
          "Splunk Basics",
          "Log Analysis",
          "Alerting & Rules",
          "Incident Response",
        ],
        resources: [
          "Splunk Tutorials",
          "Security Onion Docs",
          "Blue Team Labs Online",
        ],
        milestone: "Create alerts and dashboards in Splunk",
        completed: false,
      },
      {
        week: 8,
        title: "Incident Response & Forensics",
        description: "Handle and investigate security breaches",
        skills: [
          "Incident Lifecycle",
          "Disk Forensics",
          "Memory Analysis",
          "Chain of Custody",
        ],
        resources: [
          "DFIR Training Labs",
          "Autopsy Tool Docs",
          "CERT Guidelines",
        ],
        milestone: "Document and report a simulated incident",
        completed: false,
      },
      {
        week: 9,
        title: "Cloud Security",
        description: "Secure cloud services and infrastructure",
        skills: [
          "IAM Policies",
          "S3 Bucket Security",
          "Cloud Misconfigurations",
          "Encryption at Rest",
        ],
        resources: [
          "AWS Security Essentials",
          "Azure Defender Docs",
          "Cloud Academy",
        ],
        milestone: "Set up IAM roles and secure an S3 bucket",
        completed: false,
      },
      {
        week: 10,
        title: "Capstone Project & Resume Building",
        description: "Complete a real-world scenario and build your portfolio",
        skills: [
          "Vulnerability Assessment",
          "Report Writing",
          "Security Documentation",
          "Portfolio Projects",
        ],
        resources: [
          "TryHackMe Final Rooms",
          "GitHub Pages for Portfolio",
          "Infosec Writeups",
        ],
        milestone:
          "Complete a full penetration test report and publish a portfolio project",
        completed: false,
      },
    ],
  },
  {
    role: "MobileAppDeveloper",
    description:
      "Design and build high-performance mobile applications for Android and iOS",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Mobile App Basics & Setup",
        description:
          "Understand mobile ecosystem, install tools, and set up environment",
        skills: [
          "Flutter Setup",
          "Android Studio",
          "Emulator & Real Device Testing",
        ],
        resources: [
          "Flutter Docs",
          "Android Developers Guide",
          "YouTube - CodeWithChris",
        ],
        milestone: "Set up Flutter and run Hello World app",
        completed: false,
      },
      {
        week: 2,
        title: "Dart Programming Fundamentals",
        description: "Learn the Dart language used in Flutter",
        skills: [
          "Variables",
          "Functions",
          "OOP in Dart",
          "Collections & Async",
        ],
        resources: [
          "Dart.dev Tutorials",
          "Flutter YouTube Playlist",
          "freeCodeCamp Dart",
        ],
        milestone: "Create a command-line app in Dart",
        completed: false,
      },
      {
        week: 3,
        title: "Flutter UI Components",
        description:
          "Design interfaces using Flutter widgets and layout systems",
        skills: [
          "Stateless vs Stateful Widgets",
          "Row & Column",
          "Container",
          "Text, Image, Buttons",
        ],
        resources: [
          "Flutter Widget Catalog",
          "Reso Coder Tutorials",
          "Flutter.dev UI Guide",
        ],
        milestone: "Design a profile card UI",
        completed: false,
      },
      {
        week: 4,
        title: "Navigation & Routing",
        description: "Add multiple screens and manage app routes",
        skills: ["Navigator", "Named Routes", "Route Arguments"],
        resources: [
          "Flutter Routing Docs",
          "Flutter.dev Cookbook",
          "Fireship Flutter Routing",
        ],
        milestone: "Create a multi-screen quiz app",
        completed: false,
      },
      {
        week: 5,
        title: "State Management in Flutter",
        description: "Handle UI state using various management techniques",
        skills: ["setState", "Provider", "Riverpod Basics", "State Lifecycle"],
        resources: [
          "Flutter State Management Guide",
          "Provider Docs",
          "YouTube - Reso Coder",
        ],
        milestone: "Build a todo app using Provider",
        completed: false,
      },
      {
        week: 6,
        title: "User Input & Forms",
        description: "Accept, validate, and submit user input via forms",
        skills: ["TextField", "Form Validation", "Controllers", "Snackbar"],
        resources: [
          "Flutter Forms Docs",
          "FilledStacks Tutorials",
          "Official Cookbook",
        ],
        milestone: "Build a login/register UI with validation",
        completed: false,
      },
      {
        week: 7,
        title: "Networking & APIs",
        description: "Fetch and send data over the internet",
        skills: ["HTTP Package", "FutureBuilder", "JSON Parsing", "REST APIs"],
        resources: [
          "Flutter Networking Guide",
          "Dio Docs",
          "Postman API Practice",
        ],
        milestone: "Build a weather app using OpenWeatherMap API",
        completed: false,
      },
      {
        week: 8,
        title: "Firebase Integration",
        description: "Use Firebase for backend services like auth and database",
        skills: [
          "Firebase Auth",
          "Cloud Firestore",
          "Push Notifications",
          "Firebase Setup",
        ],
        resources: [
          "Firebase Docs",
          "FlutterFire Plugins",
          "Fireship.io Firebase",
        ],
        milestone: "Create a real-time chat app",
        completed: false,
      },
      {
        week: 9,
        title: "App Deployment & Store Publishing",
        description: "Package and publish your app to Play Store and App Store",
        skills: [
          "App Bundles",
          "Signing Keys",
          "Play Console",
          "iOS App Store Basics",
        ],
        resources: [
          "Flutter Deployment Docs",
          "Play Console Help",
          "App Store Submission Guide",
        ],
        milestone: "Publish a test app to Google Play (internal track)",
        completed: false,
      },
      {
        week: 10,
        title: "Capstone Project",
        description:
          "Combine all skills into a real-world, full-featured mobile app",
        skills: [
          "UI/UX Design",
          "Authentication",
          "State Management",
          "API Integration",
        ],
        resources: [
          "Your previous projects",
          "Dribbble for Design Ideas",
          "GitHub for Version Control",
        ],
        milestone:
          "Build and deploy a full mobile app (e.g., Expense Tracker or Task Manager)",
        completed: false,
      },
    ],
  },

  {
    role: "CloudDevOpsEngineer",
    description:
      "Design, deploy, and manage cloud infrastructure and automate deployments",
    duration: "20 weeks",
    difficulty: "Advanced",
    weeks: [
      {
        week: 1,
        title: "Cloud Computing Fundamentals",
        description: "Understand the basics of cloud services and providers",
        skills: [
          "IaaS, PaaS, SaaS",
          "Public vs Private Cloud",
          "Virtualization",
          "Cloud Advantages",
        ],
        resources: [
          "AWS Cloud Practitioner Essentials",
          "Microsoft Learn - Cloud Basics",
          "Coursera Cloud 101",
        ],
        milestone: "Compare services between AWS, Azure, and GCP",
        completed: false,
      },
      {
        week: 2,
        title: "Getting Started with AWS",
        description: "Work with core AWS services and the console",
        skills: ["EC2", "S3", "IAM", "AWS CLI"],
        resources: [
          "AWS Free Tier",
          "AWS Getting Started Docs",
          "YouTube - freeCodeCamp AWS",
        ],
        milestone: "Launch a web server using EC2 and store files in S3",
        completed: false,
      },
      {
        week: 3,
        title: "Linux & Command Line Basics",
        description: "Operate cloud servers via CLI and remote access",
        skills: [
          "Bash Commands",
          "SSH",
          "User Permissions",
          "Package Managers",
        ],
        resources: [
          "LinuxCommand.org",
          "OverTheWire: Bandit",
          "DigitalOcean Tutorials",
        ],
        milestone: "SSH into an EC2 instance and install a web app",
        completed: false,
      },
      {
        week: 4,
        title: "Networking & Load Balancing in Cloud",
        description: "Understand cloud networking and scalability",
        skills: ["VPC", "Subnets", "Load Balancers", "Security Groups"],
        resources: [
          "AWS VPC Docs",
          "Azure Networking Concepts",
          "GCP Networking Guide",
        ],
        milestone: "Create a public VPC and configure a load balancer",
        completed: false,
      },
      {
        week: 5,
        title: "Storage & Databases in the Cloud",
        description: "Use managed cloud storage and database services",
        skills: [
          "S3 Buckets",
          "EBS",
          "RDS (MySQL/PostgreSQL)",
          "Backup & Snapshots",
        ],
        resources: [
          "AWS RDS Docs",
          "Cloud Academy DB Courses",
          "DigitalOcean Managed DB Guide",
        ],
        milestone: "Host a blog on EC2 with a cloud database backend",
        completed: false,
      },
      {
        week: 6,
        title: "Containers with Docker",
        description: "Package applications using Docker",
        skills: [
          "Dockerfile",
          "Volumes",
          "Docker Compose",
          "Container Networking",
        ],
        resources: [
          "Docker Docs",
          "Play With Docker",
          "YouTube - TechWorld with Nana",
        ],
        milestone: "Containerize a Node.js or Python Flask app",
        completed: false,
      },
      {
        week: 7,
        title: "Orchestration with Kubernetes",
        description: "Manage containers at scale using Kubernetes",
        skills: ["Pods", "Deployments", "Services", "Helm"],
        resources: ["Kubernetes Docs", "Katacoda K8s Scenarios", "Learnk8s.io"],
        milestone: "Deploy a multi-container app on Minikube or EKS",
        completed: false,
      },
      {
        week: 8,
        title: "CI/CD Pipelines",
        description: "Automate build and deployment using CI/CD tools",
        skills: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "YAML Workflows"],
        resources: [
          "GitHub Actions Docs",
          "Jenkins Tutorials",
          "freeCodeCamp CI/CD Playlist",
        ],
        milestone: "Build and deploy a Docker app using GitHub Actions",
        completed: false,
      },
      {
        week: 9,
        title: "Infrastructure as Code (IaC)",
        description: "Manage cloud resources using code",
        skills: ["Terraform Basics", "AWS CDK", "CloudFormation Templates"],
        resources: [
          "Terraform Docs",
          "HashiCorp Learn",
          "YouTube - DevOps Toolkit",
        ],
        milestone: "Create infrastructure using Terraform on AWS",
        completed: false,
      },
      {
        week: 10,
        title: "Monitoring, Logging & Capstone Project",
        description: "Monitor cloud apps and complete a real-world deployment",
        skills: ["CloudWatch", "Grafana", "Prometheus", "ELK Stack"],
        resources: ["AWS Monitoring Docs", "Grafana Labs", "Prometheus Docs"],
        milestone:
          "Deploy a containerized app with CI/CD, IaC, and monitoring dashboard",
        completed: false,
      },
    ],
  },
  {
    role: "GameDeveloper",
    description:
      "Design and build interactive games using game engines and programming logic",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Introduction to Game Development",
        description:
          "Understand the basics of how games are made and what tools are used",
        skills: ["Game Genres", "Game Loop Concept", "Game Engines Overview"],
        resources: ["GDC Talks", "GameDev.tv Blog", "Coursera Game Dev Intro"],
        milestone: "Explore Unity/Unreal interface and build a basic 2D scene",
        completed: false,
      },
      {
        week: 2,
        title: "C# Programming for Unity",
        description:
          "Learn the fundamentals of C# programming language for game logic",
        skills: [
          "Variables & Data Types",
          "Conditionals",
          "Loops",
          "Classes & Methods",
        ],
        resources: [
          "Microsoft C# Docs",
          "Brackeys YouTube C# Series",
          "Unity Learn C#",
        ],
        milestone: "Build a basic console game like number guesser",
        completed: false,
      },
      {
        week: 3,
        title: "Unity Engine Basics",
        description: "Learn to work with the Unity interface and game objects",
        skills: ["Scenes", "GameObjects", "Components", "Inspector"],
        resources: [
          "Unity Learn Pathways",
          "YouTube - Brackeys Unity Basics",
          "Official Unity Docs",
        ],
        milestone: "Create a 2D platformer scene with character and terrain",
        completed: false,
      },
      {
        week: 4,
        title: "Player Controls & Scripting",
        description: "Add interactivity and user input to control characters",
        skills: [
          "Input Handling",
          "Character Movement",
          "Physics",
          "Rigidbodies",
        ],
        resources: [
          "Unity Input System",
          "Code Monkey Tutorials",
          "Brackeys - Player Movement",
        ],
        milestone: "Add jump and move features to your character",
        completed: false,
      },
      {
        week: 5,
        title: "Game Physics & Collisions",
        description: "Implement realistic behavior using physics engine",
        skills: ["Colliders", "Triggers", "Gravity", "Force Application"],
        resources: [
          "Unity Physics Docs",
          "Physics & Rigidbody Videos",
          "Raycasting",
        ],
        milestone: "Create obstacles and win/lose conditions using physics",
        completed: false,
      },
      {
        week: 6,
        title: "UI, Health & Scoring Systems",
        description: "Build game interfaces and logic for score/health",
        skills: ["Canvas System", "Health Bar", "Score Counter", "Menus"],
        resources: [
          "Unity UI Toolkit",
          "YouTube UI Tutorials",
          "GameDev.tv Courses",
        ],
        milestone: "Add score counter and health bar with game over screen",
        completed: false,
      },
      {
        week: 7,
        title: "Sound & Animation",
        description: "Make games engaging with visuals and audio",
        skills: [
          "Animator Controller",
          "Transitions",
          "2D/3D Animation",
          "Sound Effects",
        ],
        resources: [
          "Mixamo for 3D Animations",
          "OpenGameArt.org",
          "Unity Audio Docs",
        ],
        milestone: "Animate player actions and add sound effects",
        completed: false,
      },
      {
        week: 8,
        title: "Level Design & Game Mechanics",
        description: "Design levels and introduce gameplay elements",
        skills: ["Tilemaps", "Object Pooling", "Power-ups", "AI Enemies"],
        resources: [
          "Unity Tilemap Tutorials",
          "Game Design Patterns Book",
          "Sebastian Lague AI",
        ],
        milestone: "Design two playable levels with increasing difficulty",
        completed: false,
      },
      {
        week: 9,
        title: "Polishing & Optimization",
        description: "Improve user experience and performance",
        skills: [
          "Lighting",
          "Particles",
          "Mobile Optimization",
          "Frame Rate Tuning",
        ],
        resources: [
          "Unity Profiler Docs",
          "Performance Tips - Unity Blog",
          "Polishing Game UX",
        ],
        milestone: "Make your game smooth and visually appealing",
        completed: false,
      },
      {
        week: 10,
        title: "Capstone Project & Publishing",
        description: "Finish your game and publish to a platform",
        skills: [
          "Building APK or WebGL",
          "Play Store Submission",
          "Itch.io Upload",
        ],
        resources: [
          "Unity Build & Export Docs",
          "Google Play Console Guide",
          "Itch.io Docs",
        ],
        milestone:
          "Publish your final game project to itch.io or Android device",
        completed: false,
      },
    ],
  },
  {
    role: "BlockchainDeveloper",
    description:
      "Build decentralized applications and smart contracts using blockchain technology",
    duration: "20 weeks",
    difficulty: "Advanced",
    weeks: [
      {
        week: 1,
        title: "Blockchain Fundamentals",
        description: "Understand how blockchain works and why it matters",
        skills: [
          "Distributed Ledger",
          "Consensus Mechanisms",
          "Hashing",
          "Blocks & Mining",
        ],
        resources: [
          "Bitcoin Whitepaper",
          "Blockchain Revolution Book",
          "Coursera Blockchain Basics",
        ],
        milestone: "Simulate a basic blockchain using Python or JavaScript",
        completed: false,
      },
      {
        week: 2,
        title: "Cryptography & Wallets",
        description: "Explore cryptography and wallet generation principles",
        skills: [
          "Public/Private Key",
          "Digital Signatures",
          "Hash Functions",
          "Wallet Types",
        ],
        resources: ["Khan Academy Cryptography", "CryptoZombies", "ChainShot"],
        milestone: "Generate wallet keys and sign a transaction",
        completed: false,
      },
      {
        week: 3,
        title: "Ethereum & Smart Contracts",
        description: "Dive into Ethereum and write your first smart contract",
        skills: [
          "Ethereum Virtual Machine (EVM)",
          "Gas & Transactions",
          "Remix IDE",
        ],
        resources: ["Ethereum.org", "Remix IDE Docs", "Dapp University"],
        milestone: "Deploy a Hello World contract on Remix",
        completed: false,
      },
      {
        week: 4,
        title: "Solidity Programming Language",
        description: "Master the language used to write smart contracts",
        skills: [
          "Data Types",
          "Functions",
          "Mappings",
          "Modifiers",
          "Inheritance",
        ],
        resources: [
          "Solidity Docs",
          "CryptoZombies.io",
          "Smart Contract Best Practices",
        ],
        milestone: "Build a simple voting contract",
        completed: false,
      },
      {
        week: 5,
        title: "Smart Contract Deployment",
        description: "Deploy contracts to testnets and work with real networks",
        skills: ["Truffle/Hardhat", "Ganache", "Metamask", "Testnet Faucets"],
        resources: ["Hardhat Docs", "Truffle Suite", "Alchemy Quickstart"],
        milestone: "Deploy a contract on Goerli or Sepolia testnet",
        completed: false,
      },
      {
        week: 6,
        title: "Interacting with Contracts using Web3.js",
        description: "Build frontend DApps that interact with blockchain",
        skills: ["Web3.js", "Ether.js", "Contract ABI", "Metamask Integration"],
        resources: [
          "Web3.js Docs",
          "Dapp University Frontend Guide",
          "Buildspace",
        ],
        milestone: "Create a Web3 login and token balance viewer",
        completed: false,
      },
      {
        week: 7,
        title: "Tokens & Standards (ERC-20, ERC-721)",
        description: "Create your own tokens and NFTs using Solidity",
        skills: ["ERC-20 Tokens", "NFTs (ERC-721)", "OpenZeppelin Libraries"],
        resources: ["OpenZeppelin Docs", "NFT School", "Alchemy NFT Tutorials"],
        milestone: "Deploy a custom ERC-20 token and NFT",
        completed: false,
      },
      {
        week: 8,
        title: "DeFi & Smart Contract Security",
        description:
          "Explore DeFi protocols and secure smart contract development",
        skills: ["Flash Loans", "Oracles", "Reentrancy Attacks", "Audit Tools"],
        resources: [
          "Ethernaut Challenges",
          "OpenZeppelin Security",
          "DefiLlama",
        ],
        milestone: "Patch a reentrancy bug in a test contract",
        completed: false,
      },
      {
        week: 9,
        title: "Decentralized Storage & Identity",
        description: "Implement Web3 storage and decentralized authentication",
        skills: ["IPFS", "Filecoin", "ENS", "SSI (Self-Sovereign Identity)"],
        resources: ["IPFS.io", "Textile Docs", "Ethereum Name Service Docs"],
        milestone: "Build a DApp to upload and retrieve files from IPFS",
        completed: false,
      },
      {
        week: 10,
        title: "Final Capstone DApp",
        description:
          "Combine all skills to build and deploy a full-stack blockchain app",
        skills: ["Frontend + Smart Contracts + Web3 Integration + Hosting"],
        resources: [
          "Fleek.co for Hosting",
          "Hardhat Full DApp Guide",
          "Buildspace Projects",
        ],
        milestone:
          "Deploy a full DApp (e.g., crowdfunding, NFT minting, DAO voting) to testnet or mainnet",
        completed: false,
      },
    ],
  },
  {
    role: "UI/UXDesigner",
    description:
      "Design intuitive and visually appealing user experiences for web and mobile apps",
    duration: "20 weeks",
    difficulty: "Intermediate",
    weeks: [
      {
        week: 1,
        title: "Introduction to UI/UX Design",
        description: "Understand what UI/UX is and why it’s important",
        skills: [
          "UI vs UX",
          "Design Process",
          "Design Thinking",
          "User-Centered Design",
        ],
        resources: [
          "NNGroup.com",
          "Interaction Design Foundation",
          "YouTube - Jesse Showalter",
        ],
        milestone: "Define and document the UI/UX process in your own words",
        completed: false,
      },
      {
        week: 2,
        title: "UX Research & User Personas",
        description: "Research user behavior and build user personas",
        skills: ["User Interviews", "Surveys", "Empathy Maps", "Personas"],
        resources: ["UX Planet", "Miro Templates", "NNGroup User Research"],
        milestone: "Create 2 detailed user personas for a fictional product",
        completed: false,
      },
      {
        week: 3,
        title: "Information Architecture & User Flows",
        description: "Plan the structure and flow of an app or website",
        skills: ["Sitemaps", "User Flows", "Card Sorting", "Task Flows"],
        resources: ["UXBooth.com", "Figma Flow Tools", "Lucidchart"],
        milestone:
          "Create a sitemap and user flow diagram for a login-based app",
        completed: false,
      },
      {
        week: 4,
        title: "Wireframing & Low-Fidelity Prototypes",
        description: "Sketch and structure interface layout ideas",
        skills: [
          "Lo-fi Wireframes",
          "Sketching",
          "Wireframing Tools",
          "UX Heuristics",
        ],
        resources: ["Balsamiq", "Figma Wireframes", "UXPin"],
        milestone: "Build a wireframe for a landing page and signup flow",
        completed: false,
      },
      {
        week: 5,
        title: "UI Design Principles",
        description: "Learn key design principles for interfaces",
        skills: [
          "Color Theory",
          "Typography",
          "Spacing & Layout",
          "Visual Hierarchy",
        ],
        resources: [
          "Refactoring UI",
          "Canva Design School",
          "Google Material Design",
        ],
        milestone: "Design a mobile login screen using design principles",
        completed: false,
      },
      {
        week: 6,
        title: "Figma for UI Design",
        description: "Master a key industry tool for UI design and prototyping",
        skills: [
          "Auto Layout",
          "Components",
          "Design Systems",
          "Interactive Prototypes",
        ],
        resources: [
          "Figma Learn Page",
          "YouTube - Figma Crash Course",
          "Design+Code",
        ],
        milestone: "Create a reusable design system in Figma",
        completed: false,
      },
      {
        week: 7,
        title: "High-Fidelity Prototypes",
        description:
          "Build detailed, clickable prototypes to simulate real apps",
        skills: [
          "Screen Linking",
          "Microinteractions",
          "Transitions",
          "Animations",
        ],
        resources: ["Figma Prototyping Docs", "Adobe XD Tutorials", "Framer"],
        milestone: "Build a high-fidelity prototype of an e-commerce app",
        completed: false,
      },
      {
        week: 8,
        title: "Usability Testing & Feedback",
        description: "Test your design with users and improve it",
        skills: [
          "A/B Testing",
          "Usability Sessions",
          "Feedback Forms",
          "Observation",
        ],
        resources: ["Maze.co", "Lookback.io", "Usability.gov"],
        milestone:
          "Conduct a usability test on your prototype and revise based on feedback",
        completed: false,
      },
      {
        week: 9,
        title: "UX Writing & Accessibility",
        description: "Improve product clarity and usability for all users",
        skills: [
          "Microcopy",
          "Error Messaging",
          "WCAG Guidelines",
          "Alt Text & ARIA",
        ],
        resources: ["UX Writing Hub", "W3 Accessibility", "Google UX Writing"],
        milestone: "Write microcopy and improve accessibility for a login form",
        completed: false,
      },
      {
        week: 10,
        title: "Capstone Design Project",
        description: "Apply all your skills in a final end-to-end project",
        skills: ["Research + Wireframes + UI + Prototype + Testing"],
        resources: ["Dribbble", "Behance", "Figma Community Files"],
        milestone:
          "Design a full app (e.g., Recipe App, Finance Tracker) and upload to Behance/Portfolio",
        completed: false,
      },
    ],
  },
];
