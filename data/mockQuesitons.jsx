export const mcqsWebdev = [
  // ---------- WEEK 1: HTML & CSS Fundamentals ----------
  // {
  //   week: 1,
  //   topic: "HTML",
  //   question: "Which tag defines the main content of an HTML document?",
  //   options: ["<body>", "<main>", "<div>", "<section>"],
  //   answer: "<main>",
  //   explanation: "<main> is a semantic HTML5 tag used to wrap the main content. Source: MDN Web Docs."
  // },
  // {
  //   week: 1,
  //   topic: "HTML",
  //   question: "Which attribute is used to provide alternative text for images?",
  //   options: ["alt", "src", "title", "desc"],
  //   answer: "alt",
  //   explanation: "The 'alt' attribute provides alternative text for accessibility. Source: MDN."
  // },
  // {
  //   week: 1,
  //   topic: "HTML",
  //   question: "Which tag is used to create a hyperlink?",
  //   options: ["<link>", "<href>", "<a>", "<nav>"],
  //   answer: "<a>",
  //   explanation: "<a> tag with 'href' is used to define hyperlinks. Source: freeCodeCamp."
  // },
  // {
  //   week: 1,
  //   topic: "CSS",
  //   question: "Which CSS property sets the background color of an element?",
  //   options: ["color", "bgcolor", "background-color", "background"],
  //   answer: "background-color",
  //   explanation: "'background-color' sets the background color. Source: MDN CSS Reference."
  // },
  // {
  //   week: 1,
  //   topic: "CSS",
  //   question: "Which unit is relative to the font size of the element?",
  //   options: ["px", "em", "%", "vh"],
  //   answer: "em",
  //   explanation: "'em' is relative to the element’s font-size. Source: CSS Tricks."
  // },
  // {
  //   week: 1,
  //   topic: "Flexbox",
  //   question: "Which property defines how items are spaced along the main axis in Flexbox?",
  //   options: ["align-items", "justify-content", "flex-direction", "align-content"],
  //   answer: "justify-content",
  //   explanation: "'justify-content' controls main axis spacing. Source: MDN Flexbox Guide."
  // },
  // {
  //   week: 1,
  //   topic: "Flexbox",
  //   question: "What does 'flex-direction: row-reverse;' do?",
  //   options: ["Reverses item order horizontally", "Aligns items to bottom", "Stacks items vertically", "Removes flexbox"],
  //   answer: "Reverses item order horizontally",
  //   explanation: "'row-reverse' lays out items right-to-left. Source: CSS Tricks Flexbox Cheatsheet."
  // },
  // {
  //   week: 1,
  //   topic: "Grid",
  //   question: "Which CSS property starts a Grid layout?",
  //   options: ["display: grid", "grid-template", "grid-start", "layout: grid"],
  //   answer: "display: grid",
  //   explanation: "'display: grid' initiates CSS Grid layout. Source: MDN Grid Layout Docs."
  // },
  // {
  //   week: 1,
  //   topic: "Grid",
  //   question: "What does 'repeat(3, 1fr)' mean in CSS Grid?",
  //   options: ["3 rows of equal height", "3 columns of equal width", "1 column repeated 3 times", "Grid lines repeated 3 times"],
  //   answer: "3 columns of equal width",
  //   explanation: "'repeat(3, 1fr)' defines 3 equal fractional columns. Source: CSS Grid Guide."
  // },
  {
    week: 1,
    topic: "HTML",
    question: "Which element is used to define navigation links?",
    options: ["<nav>", "<section>", "<footer>", "<aside>"],
    answer: "<nav>",
    explanation: "The <nav> element is semantic for navigation. Source: MDN.",
  },

  // ---------- WEEK 2: JavaScript Basics ----------
  {
    week: 2,
    topic: "JavaScript",
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "static"],
    answer: "const",
    explanation:
      "'const' declares a variable with constant value. Source: JavaScript.info.",
  },
  {
    week: 2,
    topic: "Data Types",
    question: "What is the output of typeof null in JavaScript?",
    options: ["null", "object", "undefined", "boolean"],
    answer: "object",
    explanation:
      "typeof null returns 'object' due to a historical JS bug. Source: MDN.",
  },
  {
    week: 2,
    topic: "Variables",
    question:
      "Which variable declaration allows reassigning values but is block-scoped?",
    options: ["const", "var", "let", "final"],
    answer: "let",
    explanation:
      "'let' allows reassignment and is block-scoped. Source: JS Fundamentals (JavaScript.info).",
  },
  {
    week: 2,
    topic: "Functions",
    question: "Which of the following defines a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "let function = myFunc() {}",
      "def myFunc()",
      "new function myFunc()",
    ],
    answer: "function myFunc() {}",
    explanation:
      "That's the correct syntax for function declaration. Source: freeCodeCamp JS Course.",
  },
  {
    week: 2,
    topic: "DOM",
    question: "Which method adds a new HTML element to the DOM?",
    options: ["innerHTML", "createElement", "appendChild", "All of the above"],
    answer: "All of the above",
    explanation:
      "All are used in creating and inserting DOM nodes. Source: MDN DOM API.",
  },
  {
    week: 2,
    topic: "Events",
    question: "Which event is triggered when a user clicks on an element?",
    options: ["hover", "keydown", "click", "focus"],
    answer: "click",
    explanation:
      "'click' is triggered on mouse click. Source: JavaScript Event Reference.",
  },
  {
    week: 2,
    topic: "Operators",
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22",
    explanation:
      "JS performs string concatenation when one operand is a string. Source: JS Type Coercion (MDN).",
  },
  {
    week: 2,
    topic: "Scope",
    question: "Which variable type is NOT block-scoped?",
    options: ["var", "let", "const", "None of the above"],
    answer: "var",
    explanation:
      "'var' is function-scoped, not block-scoped. Source: JavaScript.info - Scope.",
  },
  {
    week: 2,
    topic: "DOM",
    question: "What does document.getElementById('title') return?",
    options: [
      "An array of elements with ID 'title'",
      "A single element with ID 'title'",
      "A NodeList",
      "An error if not found",
    ],
    answer: "A single element with ID 'title'",
    explanation:
      "It returns the first matching element or null. Source: MDN DOM Guide.",
  },
  {
    week: 2,
    topic: "Functions",
    question: "What is the correct way to call a function named greet?",
    options: ["call greet()", "greet;", "greet()", "function greet"],
    answer: "greet()",
    explanation:
      "greet() calls the function. Source: freeCodeCamp JavaScript Basics.",
  },
  // ---------- WEEK 3: Advanced JavaScript ----------
  {
    week: 3,
    topic: "Arrow Functions",
    question:
      "What is a key difference between arrow functions and regular functions?",
    options: [
      "Arrow functions cannot return values",
      "Arrow functions have their own 'this'",
      "Arrow functions inherit 'this' from the parent scope",
      "Arrow functions are not valid in ES6",
    ],
    answer: "Arrow functions inherit 'this' from the parent scope",
    explanation:
      "Arrow functions don't bind their own 'this'; they use lexical scoping. Source: MDN JavaScript Reference.",
  },
  {
    week: 3,
    topic: "ES6 Modules",
    question: "Which keyword is used to import a module in ES6?",
    options: ["require", "include", "import", "use"],
    answer: "import",
    explanation:
      "The ES6 syntax for modules uses 'import' and 'export'. Source: JavaScript.info - Modules.",
  },
  {
    week: 3,
    topic: "Promises",
    question: "What is the default state of a Promise when it's created?",
    options: ["pending", "fulfilled", "rejected", "executed"],
    answer: "pending",
    explanation:
      "A Promise starts in a pending state before it settles. Source: MDN Promise Guide.",
  },
  {
    week: 3,
    topic: "Async/Await",
    question: "Which keyword is required before calling await?",
    options: ["then", "new", "async", "promise"],
    answer: "async",
    explanation:
      "'await' can only be used inside an 'async' function. Source: MDN Async Functions.",
  },
  {
    week: 3,
    topic: "Promises",
    question: "What does .then() return?",
    options: ["undefined", "a value", "a new Promise", "a function"],
    answer: "a new Promise",
    explanation:
      ".then() always returns a new Promise, enabling chaining. Source: JavaScript.info - Promises.",
  },
  {
    week: 3,
    topic: "Modules",
    question:
      "Which statement is used to export a single function from a file?",
    options: [
      "export default functionName;",
      "exports functionName;",
      "require functionName;",
      "module.exports = functionName;",
    ],
    answer: "export default functionName;",
    explanation:
      "ES6 uses 'export default' for single module exports. Source: MDN Modules.",
  },
  {
    week: 3,
    topic: "Async/Await",
    question: "What does async function always return?",
    options: ["String", "Boolean", "Promise", "Object"],
    answer: "Promise",
    explanation:
      "An async function always returns a Promise, even if you return a value. Source: JavaScript.info - Async.",
  },

  // ---------- WEEK 4: React Fundamentals ----------
  {
    week: 4,
    topic: "React Components",
    question:
      "Which of the following is a valid functional component in React?",
    options: [
      "function App() { return <h1>Hello</h1>; }",
      "<App>function() {}<App>",
      "React.createComponent(App)",
      "component App() {}",
    ],
    answer: "function App() { return <h1>Hello</h1>; }",
    explanation:
      "Functional components are simple JS functions returning JSX. Source: React Docs.",
  },
  {
    week: 4,
    topic: "JSX",
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON Syntax Exchange",
      "JSX isn't an acronym",
    ],
    answer: "JavaScript XML",
    explanation:
      "JSX allows writing HTML-like code in JavaScript. Source: React Docs - JSX.",
  },
  {
    week: 4,
    topic: "Props",
    question: "Props in React are:",
    options: [
      "Mutable",
      "Used for styling only",
      "Read-only",
      "Accessible globally",
    ],
    answer: "Read-only",
    explanation:
      "Props are immutable and used to pass data to components. Source: React Docs.",
  },
  {
    week: 4,
    topic: "State",
    question: "Which hook is used to declare state in functional components?",
    options: ["useState", "useEffect", "useReducer", "useHook"],
    answer: "useState",
    explanation:
      "useState is the primary hook for managing state. Source: React Hooks API Reference.",
  },
  {
    week: 4,
    topic: "Event Handling",
    question: "How do you handle a button click in React?",
    options: [
      "onClick='handleClick()'",
      "click='handleClick'",
      "onClick={handleClick}",
      "onclick=handleClick",
    ],
    answer: "onClick={handleClick}",
    explanation:
      "React uses camelCase and JSX syntax for events. Source: React Docs - Events.",
  },
  {
    week: 4,
    topic: "Rendering",
    question: "Which method is used to render a React component to the DOM?",
    options: [
      "ReactDOM.render()",
      "renderReact()",
      "App.render()",
      "componentRender()",
    ],
    answer: "ReactDOM.render()",
    explanation:
      "ReactDOM.render() is used to mount components. Source: ReactDOM Docs.",
  },
  {
    week: 4,
    topic: "JSX",
    question: "Which syntax is correct for rendering a variable in JSX?",
    options: ["{{title}}", "{title}", "[title]", "<title>"],
    answer: "{title}",
    explanation:
      "JSX uses {} to embed JS expressions. Source: React JSX Guide.",
  },

  // ---------- WEEK 5: React Advanced ----------
  {
    week: 5,
    topic: "Hooks",
    question: "Which hook runs side effects in React?",
    options: ["useState", "useEffect", "useReducer", "useMemo"],
    answer: "useEffect",
    explanation:
      "useEffect handles side effects like data fetching. Source: React Docs - useEffect.",
  },
  {
    week: 5,
    topic: "Context API",
    question: "What is Context API mainly used for?",
    options: [
      "Styling",
      "Data sharing across components",
      "Routing",
      "Animations",
    ],
    answer: "Data sharing across components",
    explanation:
      "Context allows passing data without prop drilling. Source: React Docs - Context.",
  },
  {
    week: 5,
    topic: "Hooks",
    question: "What does useEffect return?",
    options: ["A function", "JSX", "Nothing", "A cleanup function (optional)"],
    answer: "A cleanup function (optional)",
    explanation:
      "useEffect can optionally return a cleanup function. Source: React Docs - useEffect.",
  },
  {
    week: 5,
    topic: "Custom Hooks",
    question: "What is a custom hook in React?",
    options: [
      "A hook from a library",
      "A reusable function using hooks",
      "A styled component",
      "A lifecycle method",
    ],
    answer: "A reusable function using hooks",
    explanation:
      "Custom hooks are functions using built-in hooks for reuse. Source: React Docs - Custom Hooks.",
  },
  {
    week: 5,
    topic: "React DevTools",
    question: "Which browser extension helps debug React components?",
    options: [
      "Redux Logger",
      "React DevTools",
      "Chrome Inspector",
      "JSX Linter",
    ],
    answer: "React DevTools",
    explanation:
      "React DevTools shows component tree, props, and state. Source: React DevTools GitHub.",
  },
  {
    week: 5,
    topic: "Performance",
    question: "Which hook is used to memoize values?",
    options: ["useState", "useRef", "useMemo", "useEffect"],
    answer: "useMemo",
    explanation:
      "useMemo caches computed values to avoid recalculations. Source: React Docs - useMemo.",
  },
  {
    week: 5,
    topic: "Hooks",
    question: "When does useEffect run by default?",
    options: [
      "Only after unmounting",
      "On every re-render",
      "Only once after mount",
      "Before component renders",
    ],
    answer: "On every re-render",
    explanation:
      "useEffect runs after every render unless a dependency array is provided. Source: React Docs.",
  },
  {
    week: 6,
    topic: "React Router",
    question: "Which package is commonly used for routing in React?",
    options: [
      "react-dom-router",
      "react-router-dom",
      "react-navigation",
      "react-router",
    ],
    answer: "react-router-dom",
    explanation:
      "react-router-dom is the standard library for routing in web-based React apps. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Routing",
    question:
      "Which hook is used to navigate programmatically in React Router v6?",
    options: ["useLocation", "useRoute", "useNavigate", "useHistory"],
    answer: "useNavigate",
    explanation:
      "useNavigate replaces useHistory in React Router v6. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Routes",
    question:
      "What is the correct syntax to define a route in React Router v6?",
    options: [
      "<Route path='/about' component={About} />",
      "<Route exact path='/about' component={About} />",
      "<Route path='/about' element={<About />} />",
      "<Router path='/about' render={About} />",
    ],
    answer: "<Route path='/about' element={<About />} />",
    explanation:
      "React Router v6 uses the 'element' prop instead of 'component'. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Nested Routes",
    question: "How do you render a nested route inside a component?",
    options: ["<Nested />", "<RouteOutlet />", "<Outlet />", "<Child />"],
    answer: "<Outlet />",
    explanation:
      "<Outlet /> is used as a placeholder for nested routes in React Router. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Dynamic Routing",
    question: "How do you define a dynamic route parameter in React Router?",
    options: ["/user/:id", "/user/*", "/user?$id", "/user[id]"],
    answer: "/user/:id",
    explanation:
      "Colon syntax is used to define dynamic route segments. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Navigation",
    question: "Which hook gives access to the current URL in React Router v6?",
    options: ["usePath", "useLocation", "useURL", "useRoute"],
    answer: "useLocation",
    explanation:
      "useLocation returns info about the current route's location object. Source: React Router Docs",
  },
  {
    week: 6,
    topic: "Routing Patterns",
    question: "What is code splitting in routing used for?",
    options: [
      "Reducing component nesting",
      "Loading routes as needed",
      "Optimizing route speed",
      "Caching route content",
    ],
    answer: "Loading routes as needed",
    explanation:
      "Code splitting helps load route components only when required. Source: Web Dev Simplified",
  },

  // ---------- WEEK 7: State Management ----------
  {
    week: 7,
    topic: "Redux",
    question: "In Redux, what is a reducer?",
    options: [
      "Function to dispatch actions",
      "Function to update state",
      "Component for UI updates",
      "Redux middleware",
    ],
    answer: "Function to update state",
    explanation:
      "A reducer takes the previous state and an action, and returns the next state. Source: Redux Docs",
  },
  {
    week: 7,
    topic: "Redux Toolkit",
    question: "Which function from Redux Toolkit helps create reducers easily?",
    options: ["createSlice", "createReducer", "useReducer", "makeReducer"],
    answer: "createSlice",
    explanation:
      "createSlice automatically generates reducer and actions. Source: Redux Toolkit Docs",
  },
  {
    week: 7,
    topic: "Context API",
    question: "When should you use Context API instead of Redux?",
    options: [
      "For routing",
      "For form handling",
      "For small to medium state needs",
      "For database operations",
    ],
    answer: "For small to medium state needs",
    explanation:
      "Context is good for sharing global state across a few components. Source: React Docs",
  },
  {
    week: 7,
    topic: "Redux Basics",
    question: "Which hook connects a component to the Redux store?",
    options: ["useSelector", "useContext", "useState", "useStore"],
    answer: "useSelector",
    explanation:
      "useSelector is used to read values from the Redux store. Source: Redux Docs",
  },
  {
    week: 7,
    topic: "Redux Middleware",
    question: "What is the role of middleware in Redux?",
    options: [
      "Modify actions before reducers",
      "Connect reducers to components",
      "Style Redux components",
      "Replace useState",
    ],
    answer: "Modify actions before reducers",
    explanation:
      "Middleware like redux-thunk can intercept and modify actions. Source: Redux Docs",
  },
  {
    week: 7,
    topic: "Redux Toolkit",
    question: "Which hook dispatches actions in Redux Toolkit?",
    options: ["useState", "useDispatch", "useAction", "dispatchHook"],
    answer: "useDispatch",
    explanation:
      "useDispatch allows you to trigger actions to modify state. Source: Redux Toolkit Docs",
  },
  {
    week: 7,
    topic: "Redux vs Context",
    question: "Which of the following is TRUE about Redux vs Context API?",
    options: [
      "Context is better for large apps",
      "Redux has built-in async support",
      "Redux uses global immutable state",
      "Context uses middleware by default",
    ],
    answer: "Redux uses global immutable state",
    explanation:
      "Redux state is immutable and centralized, unlike Context. Source: Redux vs Context comparison – Academind",
  },

  // ---------- WEEK 8: Backend with Node.js ----------
  {
    week: 8,
    topic: "Node.js",
    question: "Which module is used to build servers in Node.js?",
    options: ["fs", "http", "url", "path"],
    answer: "http",
    explanation:
      "The built-in 'http' module is used to create HTTP servers. Source: Node.js Docs",
  },
  {
    week: 8,
    topic: "Express",
    question: "What does Express.js simplify in Node?",
    options: [
      "Filesystem operations",
      "Building RESTful APIs",
      "Database querying",
      "Running scripts",
    ],
    answer: "Building RESTful APIs",
    explanation:
      "Express provides a clean syntax for building APIs. Source: Express.js Docs",
  },
  {
    week: 8,
    topic: "Express Routing",
    question: "What method handles GET requests in Express?",
    options: ["app.get()", "app.route()", "app.getRoute()", "get.route()"],
    answer: "app.get()",
    explanation:
      "app.get() is used to define routes for GET requests. Source: Express.js Routing Docs",
  },
  {
    week: 8,
    topic: "Middleware",
    question: "What is middleware in Express?",
    options: [
      "UI component",
      "Database connector",
      "Function that runs between request and response",
      "Client-side validator",
    ],
    answer: "Function that runs between request and response",
    explanation:
      "Middleware functions can log, validate, or modify requests. Source: Express Docs - Middleware",
  },
  {
    week: 8,
    topic: "REST APIs",
    question: "Which HTTP method is used to update data?",
    options: ["GET", "PUT", "DELETE", "OPTIONS"],
    answer: "PUT",
    explanation:
      "PUT is used to fully update an existing resource. Source: MDN Web Docs - HTTP Methods",
  },
  {
    week: 8,
    topic: "Express Setup",
    question: "Which command installs Express in a Node.js project?",
    options: [
      "npm add express",
      "npm install express",
      "node install express",
      "express init",
    ],
    answer: "npm install express",
    explanation:
      "Express is installed via npm using this command. Source: Express.js Docs",
  },
  {
    week: 8,
    topic: "Handling Requests",
    question: "How do you parse JSON request bodies in Express?",
    options: [
      "req.getBody()",
      "express.body()",
      "app.use(express.json())",
      "app.readJSON()",
    ],
    answer: "app.use(express.json())",
    explanation:
      "express.json() middleware is used to parse JSON data. Source: Express Docs - Request handling",
  },
  {
    week: 9,
    topic: "MongoDB",
    question: "Which data format is primarily used in MongoDB?",
    options: ["XML", "YAML", "JSON", "CSV"],
    answer: "JSON",
    explanation:
      "MongoDB stores data in BSON, which is a binary-encoded format of JSON. Source: MongoDB Docs",
  },
  {
    week: 9,
    topic: "MongoDB CRUD",
    question:
      "Which command is used to insert a document into a MongoDB collection?",
    options: ["insert()", "create()", "add()", "insertOne()"],
    answer: "insertOne()",
    explanation:
      "`insertOne()` is used to add a single document to a collection. Source: MongoDB CRUD Docs",
  },
  {
    week: 9,
    topic: "Mongoose",
    question: "What is a Mongoose schema?",
    options: [
      "A query language",
      "A database",
      "Blueprint for a document",
      "A route definition",
    ],
    answer: "Blueprint for a document",
    explanation:
      "A schema defines the structure of documents in a collection. Source: Mongoose Docs",
  },
  {
    week: 9,
    topic: "MongoDB CRUD",
    question: "Which method retrieves all documents from a MongoDB collection?",
    options: ["findOne()", "select()", "queryAll()", "find()"],
    answer: "find()",
    explanation:
      "`find()` returns all matching documents. Source: MongoDB University",
  },
  {
    week: 9,
    topic: "Mongoose Models",
    question: "Which function creates a model from a schema in Mongoose?",
    options: [
      "mongoose.model()",
      "mongoose.schema()",
      "model.create()",
      "schema.build()",
    ],
    answer: "mongoose.model()",
    explanation:
      "`mongoose.model()` compiles a model from a schema. Source: Mongoose Docs",
  },
  {
    week: 9,
    topic: "Database Relationships",
    question: "What is population in Mongoose used for?",
    options: [
      "Aggregating data",
      "Referencing documents",
      "Sorting collections",
      "Schema validation",
    ],
    answer: "Referencing documents",
    explanation:
      "`populate()` allows referencing documents in other collections. Source: Mongoose Docs",
  },
  {
    week: 9,
    topic: "MongoDB",
    question: "Which of the following is a NoSQL database?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
    explanation:
      "MongoDB is a popular NoSQL database that uses a document-oriented approach. Source: MongoDB Docs",
  },

  // ---------- WEEK 10: Authentication & Authorization ----------
  {
    week: 10,
    topic: "JWT",
    question: "What does JWT stand for?",
    options: [
      "Java Web Token",
      "JSON Web Token",
      "JavaScript Web Tool",
      "Joined Web Token",
    ],
    answer: "JSON Web Token",
    explanation:
      "JWT is an open standard for secure token-based authentication. Source: JWT.io",
  },
  {
    week: 10,
    topic: "Cookies & Sessions",
    question: "Where are session cookies typically stored?",
    options: ["LocalStorage", "Server memory", "Client's browser", "MongoDB"],
    answer: "Client's browser",
    explanation:
      "Cookies are stored in the browser and sent with each request. Source: Auth0 Blog",
  },
  {
    week: 10,
    topic: "JWT",
    question: "Which part of a JWT contains the signature?",
    options: ["Header", "Payload", "Footer", "Third segment"],
    answer: "Third segment",
    explanation:
      "A JWT has three parts: header, payload, and signature. Source: JWT.io Docs",
  },
  {
    week: 10,
    topic: "Hashing",
    question:
      "Which library is commonly used for hashing passwords in Node.js?",
    options: ["jsonwebtoken", "bcrypt", "hashlib", "cryptoJS"],
    answer: "bcrypt",
    explanation:
      "bcrypt is widely used for password hashing and salting. Source: bcrypt NPM Docs",
  },
  {
    week: 10,
    topic: "Authorization",
    question:
      "What is the main difference between authentication and authorization?",
    options: [
      "Auth = check identity, Authz = grant access",
      "Auth = access level, Authz = identity",
      "No difference",
      "Auth = frontend, Authz = backend",
    ],
    answer: "Auth = check identity, Authz = grant access",
    explanation:
      "Authentication verifies identity; Authorization grants access rights. Source: Auth0 Blog",
  },
  {
    week: 10,
    topic: "Protected Routes",
    question: "What is the purpose of protected routes in a web app?",
    options: [
      "To display ads",
      "To restrict access to authorized users only",
      "To redirect all traffic",
      "To cache the pages",
    ],
    answer: "To restrict access to authorized users only",
    explanation:
      "Protected routes require users to be authenticated before access. Source: React Router & Auth0 Docs",
  },
  {
    week: 10,
    topic: "JWT",
    question:
      "Where should JWT tokens be stored in the client-side app for security?",
    options: [
      "LocalStorage",
      "IndexedDB",
      "Cookies (HttpOnly)",
      "JavaScript variable",
    ],
    answer: "Cookies (HttpOnly)",
    explanation:
      "HttpOnly cookies prevent access via JavaScript and mitigate XSS. Source: JWT.io Security Best Practices",
  },
];

export const aiMlMcqs = [
  // ---------------- WEEK 1: Python Programming ----------------
  {
    week: 1,
    topic: "Python Basics",
    question: "What is the output of: `print(type([]))`?",
    options: [
      "<class 'list'>",
      "<class 'dict'>",
      "<class 'set'>",
      "<class 'tuple'>",
    ],
    answer: "<class 'list'>",
    explanation: "`[]` represents an empty list in Python. Source: Python.org",
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which data structure in Python is immutable?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: "Tuple",
    explanation: "Tuples cannot be changed once created. Source: Python.org",
  },
  {
    week: 1,
    topic: "NumPy",
    question: "What is the primary purpose of NumPy?",
    options: [
      "Web development",
      "Symbolic computation",
      "Numerical computing",
      "GUI development",
    ],
    answer: "Numerical computing",
    explanation:
      "NumPy is used for high-performance numerical computations. Source: NumPy Docs",
  },
  {
    week: 1,
    topic: "Pandas",
    question: "Which Pandas object is used to store tabular data?",
    options: ["DataFrame", "Array", "Series", "Dict"],
    answer: "DataFrame",
    explanation:
      "DataFrame is a 2D labeled data structure in Pandas. Source: Pandas Docs",
  },
  {
    week: 1,
    topic: "Python Syntax",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "define", "def", "lambda"],
    answer: "def",
    explanation: "`def` is used to define a function. Source: Python.org",
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which operation removes the last item from a list?",
    options: [".pop()", ".remove()", ".delete()", ".clear()"],
    answer: ".pop()",
    explanation:
      "`.pop()` removes and returns the last item. Source: Python Docs",
  },
  {
    week: 1,
    topic: "NumPy",
    question: "What does `np.array([1,2,3])` do?",
    options: [
      "Creates a list",
      "Creates a dictionary",
      "Creates a NumPy array",
      "Creates a Pandas series",
    ],
    answer: "Creates a NumPy array",
    explanation:
      "NumPy's array() function converts a list into an ndarray. Source: NumPy Docs",
  },
  {
    week: 1,
    topic: "Pandas",
    question: "What does `df.head()` return in Pandas?",
    options: [
      "Last 5 rows of DataFrame",
      "First 5 rows of DataFrame",
      "Column names",
      "Summary statistics",
    ],
    answer: "First 5 rows of DataFrame",
    explanation:
      "`head()` shows the first 5 rows by default. Source: Pandas Docs",
  },
  {
    week: 1,
    topic: "Python Basics",
    question: "Which of these is not a valid Python data type?",
    options: ["int", "float", "char", "bool"],
    answer: "char",
    explanation:
      "Python does not have a `char` type; characters are strings. Source: Python.org",
  },
  {
    week: 1,
    topic: "Data Structures",
    question: "Which method is used to add an item to a set?",
    options: [".add()", ".append()", ".insert()", ".extend()"],
    answer: ".add()",
    explanation: "`add()` is used for sets, not lists. Source: Python.org",
  },

  // ---------------- WEEK 2: Statistics & Mathematics ----------------
  {
    week: 2,
    topic: "Statistics",
    question: "What is the mean of the numbers 2, 4, 6, 8, 10?",
    options: ["6", "5", "7", "8"],
    answer: "6",
    explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Probability",
    question: "What is the probability of getting heads in a fair coin toss?",
    options: ["0.25", "0.5", "1", "0.75"],
    answer: "0.5",
    explanation:
      "A fair coin has two equally likely outcomes: heads or tails. Source: StatQuest",
  },
  {
    week: 2,
    topic: "Linear Algebra",
    question: "What is the dot product of [1, 2] and [3, 4]?",
    options: ["7", "11", "10", "14"],
    answer: "11",
    explanation:
      "1×3 + 2×4 = 3 + 8 = 11. Source: Khan Academy - Linear Algebra",
  },
  {
    week: 2,
    topic: "Calculus",
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x^2", "1"],
    answer: "2x",
    explanation: "d/dx(x²) = 2x. Source: Khan Academy - Derivatives",
  },
  {
    week: 2,
    topic: "Descriptive Statistics",
    question: "Which measure represents the middle value in a dataset?",
    options: ["Mean", "Mode", "Range", "Median"],
    answer: "Median",
    explanation:
      "Median is the central value in an ordered dataset. Source: StatQuest",
  },
  {
    week: 2,
    topic: "Probability",
    question: "If two events A and B are independent, what is P(A ∩ B)?",
    options: ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A)/P(B)"],
    answer: "P(A) × P(B)",
    explanation:
      "For independent events, joint probability is the product. Source: StatQuest",
  },
  {
    week: 2,
    topic: "Linear Algebra",
    question: "A 3x2 matrix has how many rows and columns?",
    options: [
      "3 rows, 2 columns",
      "2 rows, 3 columns",
      "3 columns, 2 rows",
      "6 rows",
    ],
    answer: "3 rows, 2 columns",
    explanation:
      "Matrix dimensions are written as rows × columns. Source: 3Blue1Brown",
  },
  {
    week: 2,
    topic: "Descriptive Statistics",
    question: "Which is NOT a measure of central tendency?",
    options: ["Mean", "Mode", "Median", "Standard Deviation"],
    answer: "Standard Deviation",
    explanation:
      "Standard deviation measures spread, not central tendency. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Calculus",
    question: "The area under a curve is calculated using:",
    options: ["Derivative", "Gradient", "Integral", "Tangent"],
    answer: "Integral",
    explanation:
      "Integrals are used to find area under curves. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Probability",
    question: "What is the range of any probability value?",
    options: ["-1 to 1", "0 to ∞", "0 to 1", "Any real number"],
    answer: "0 to 1",
    explanation:
      "Probability values range from 0 (impossible) to 1 (certain). Source: StatQuest",
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "Which function is used to display a plot in Matplotlib?",
    options: ["show()", "display()", "plot()", "render()"],
    answer: "show()",
    explanation:
      "`plt.show()` displays the plot window. Source: Matplotlib Docs",
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "Which argument changes the line style in Matplotlib?",
    options: ["linewidth", "linestyle", "marker", "style"],
    answer: "linestyle",
    explanation:
      "`linestyle='--'` creates dashed lines. Source: Matplotlib Docs",
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which Seaborn function creates box plots?",
    options: [
      "sns.boxplot()",
      "sns.histplot()",
      "sns.scatterplot()",
      "sns.lineplot()",
    ],
    answer: "sns.boxplot()",
    explanation:
      "Box plots visualize distribution and outliers. Source: Seaborn Docs",
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which parameter in Seaborn heatmap displays correlation values?",
    options: ["show=True", "annot=True", "label=True", "value=True"],
    answer: "annot=True",
    explanation:
      "`annot=True` shows numbers on the heatmap. Source: Seaborn Docs",
  },
  {
    week: 3,
    topic: "Plotly",
    question: "Plotly is mainly used for:",
    options: [
      "Static plots",
      "3D modeling",
      "Interactive plots",
      "Mathematical analysis",
    ],
    answer: "Interactive plots",
    explanation:
      "Plotly allows zooming, hovering, and saving interactively. Source: Plotly Express",
  },
  {
    week: 3,
    topic: "Matplotlib",
    question: "What does `plt.xlabel('X')` do?",
    options: [
      "Labels x-axis",
      "Changes x limits",
      "Sets title",
      "Draws x-line",
    ],
    answer: "Labels x-axis",
    explanation: "Adds 'X' label to x-axis. Source: Matplotlib Docs",
  },
  {
    week: 3,
    topic: "Seaborn",
    question: "Which Seaborn function is used for distribution plots?",
    options: [
      "sns.histplot()",
      "sns.scatterplot()",
      "sns.barplot()",
      "sns.kdeplot()",
    ],
    answer: "sns.histplot()",
    explanation: "Used to plot histograms. Source: Seaborn Docs",
  },
  {
    week: 3,
    topic: "Correlation",
    question: "Correlation heatmaps help in:",
    options: [
      "Detecting outliers",
      "Training models",
      "Visualizing variable relationships",
      "Data splitting",
    ],
    answer: "Visualizing variable relationships",
    explanation:
      "Heatmaps show correlation between numerical features. Source: StatQuest",
  },
  {
    week: 3,
    topic: "Plotly",
    question: "Which of the following is NOT a Plotly chart?",
    options: ["Treemap", "Scatter", "Boxplot", "Histogram2DContour"],
    answer: "Histogram2DContour",
    explanation:
      "It's a real chart, trick option—Plotly supports all. Source: Plotly Docs",
  },
  {
    week: 3,
    topic: "General",
    question: "Which library uses `fig = px.bar()` syntax?",
    options: ["Matplotlib", "Seaborn", "Plotly", "Pandas"],
    answer: "Plotly",
    explanation:
      "Plotly Express uses `px` interface. Source: Plotly Express Docs",
  },

  // -------------------- WEEK 4: Supervised Learning Basics --------------------
  {
    week: 4,
    topic: "Linear Regression",
    question: "Which of the following is a regression algorithm?",
    options: [
      "Linear Regression",
      "Logistic Regression",
      "K-Means",
      "Naive Bayes",
    ],
    answer: "Linear Regression",
    explanation: "Used for predicting continuous values. Source: scikit-learn",
  },
  {
    week: 4,
    topic: "Linear Regression",
    question: "What does the slope in a regression line represent?",
    options: ["Intercept", "Change in X", "Change in Y per unit X", "Error"],
    answer: "Change in Y per unit X",
    explanation: "Slope shows how much Y changes with X. Source: StatQuest",
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Logistic regression outputs:",
    options: ["Integer", "Probability", "Class name", "Slope"],
    answer: "Probability",
    explanation:
      "It estimates the probability of a class. Source: scikit-learn Docs",
  },
  {
    week: 4,
    topic: "Model Evaluation",
    question: "Which metric is NOT used for classification?",
    options: ["Accuracy", "Precision", "Recall", "RMSE"],
    answer: "RMSE",
    explanation: "RMSE is for regression tasks. Source: scikit-learn Metrics",
  },
  {
    week: 4,
    topic: "Linear Regression",
    question: "What is the loss function used in linear regression?",
    options: [
      "Binary cross-entropy",
      "Mean squared error",
      "Hinge loss",
      "Log loss",
    ],
    answer: "Mean squared error",
    explanation: "MSE measures squared differences. Source: StatQuest",
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Which function is used in logistic regression?",
    options: ["Linear", "Sigmoid", "ReLU", "Softmax"],
    answer: "Sigmoid",
    explanation:
      "Sigmoid converts scores to probability. Source: Andrew Ng ML Course",
  },
  {
    week: 4,
    topic: "Model Evaluation",
    question: "Which metric is most useful when dealing with imbalanced data?",
    options: ["Accuracy", "Recall", "Precision", "F1-Score"],
    answer: "F1-Score",
    explanation: "F1 balances precision and recall. Source: scikit-learn",
  },
  {
    week: 4,
    topic: "Model Training",
    question: "Which method splits data into training and test sets?",
    options: [
      "train_test_split()",
      "split_data()",
      "data_split()",
      "make_split()",
    ],
    answer: "train_test_split()",
    explanation: "Used from `sklearn.model_selection`. Source: scikit-learn",
  },
  {
    week: 4,
    topic: "Regression",
    question: "Which of the following causes underfitting?",
    options: [
      "High complexity",
      "Too much training",
      "Too simple model",
      "Large dataset",
    ],
    answer: "Too simple model",
    explanation: "Simple models can't capture patterns. Source: StatQuest",
  },
  {
    week: 4,
    topic: "Logistic Regression",
    question: "Logistic regression is best suited for:",
    options: [
      "Continuous output",
      "Clustering",
      "Binary classification",
      "Regression only",
    ],
    answer: "Binary classification",
    explanation: "It's used for 0/1 outcome problems. Source: scikit-learn",
  },

  // -------------------- WEEK 5: Model Improvement & Evaluation --------------------
  {
    week: 5,
    topic: "Cross-validation",
    question: "What does k in k-fold cross-validation represent?",
    options: [
      "Number of rows",
      "Number of columns",
      "Number of folds",
      "Number of features",
    ],
    answer: "Number of folds",
    explanation:
      "Dataset is divided into k parts for validation. Source: scikit-learn Docs",
  },
  {
    week: 5,
    topic: "Grid Search",
    question: "Grid search is used for:",
    options: [
      "Data cleaning",
      "Model tuning",
      "Visualization",
      "Regularization",
    ],
    answer: "Model tuning",
    explanation:
      "It finds the best hyperparameters. Source: scikit-learn GridSearchCV",
  },
  {
    week: 5,
    topic: "Confusion Matrix",
    question: "Which value in a confusion matrix represents false negatives?",
    options: ["Top-left", "Top-right", "Bottom-left", "Bottom-right"],
    answer: "Bottom-left",
    explanation: "FN = predicted negative, actual positive. Source: StatQuest",
  },
  {
    week: 5,
    topic: "ROC Curve",
    question: "The ROC curve plots:",
    options: [
      "True Positive Rate vs False Positive Rate",
      "Accuracy vs Recall",
      "Precision vs Recall",
      "F1 Score vs Recall",
    ],
    answer: "True Positive Rate vs False Positive Rate",
    explanation: "Used to assess classifier performance. Source: scikit-learn",
  },
  {
    week: 5,
    topic: "Model Evaluation",
    question: "AUC stands for:",
    options: [
      "Average under computation",
      "Area under confusion",
      "Area under curve",
      "Accuracy under crossval",
    ],
    answer: "Area under curve",
    explanation: "Measures ROC curve area. Source: scikit-learn Docs",
  },
  {
    week: 5,
    topic: "Confusion Matrix",
    question: "High false positives can lead to:",
    options: [
      "Missed positives",
      "Unnecessary actions",
      "More accuracy",
      "No effect",
    ],
    answer: "Unnecessary actions",
    explanation:
      "False alarms increase unnecessary interventions. Source: StatQuest",
  },
  {
    week: 5,
    topic: "Grid Search",
    question: "Which method performs exhaustive search over parameters?",
    options: ["Random Search", "Bayesian Tuning", "Grid Search", "AutoML"],
    answer: "Grid Search",
    explanation: "Tries every combination of parameters. Source: scikit-learn",
  },
  {
    week: 5,
    topic: "Cross-validation",
    question: "Why is cross-validation important?",
    options: [
      "Increases dataset size",
      "Prevents overfitting",
      "Decreases memory usage",
      "Speeds up training",
    ],
    answer: "Prevents overfitting",
    explanation:
      "It tests model on different data splits. Source: Andrew Ng ML Course",
  },
  {
    week: 5,
    topic: "ROC Curve",
    question: "A perfect classifier has AUC of:",
    options: ["0", "0.5", "1.0", "0.75"],
    answer: "1.0",
    explanation: "Perfect separation gives AUC = 1. Source: scikit-learn",
  },
  {
    week: 5,
    topic: "Evaluation Metrics",
    question: "Which metric is best for imbalanced classification?",
    options: ["Accuracy", "F1-Score", "Recall", "RMSE"],
    answer: "F1-Score",
    explanation:
      "Balances false positives and false negatives. Source: scikit-learn",
  },
  //week6
  {
    week: 6,
    topic: "K-Means",
    question: "Which metric does K-Means minimize?",
    options: [
      "Inter-cluster distance",
      "Euclidean distance",
      "Centroid variance",
      "Within-cluster sum of squares",
    ],
    answer: "Within-cluster sum of squares",
    explanation:
      "K-Means minimizes the sum of squared distances within each cluster. Source: scikit-learn",
  },
  {
    week: 6,
    topic: "K-Means",
    question: "K in K-Means refers to:",
    options: [
      "# of features",
      "# of clusters",
      "Iterations",
      "Distance metric",
    ],
    answer: "# of clusters",
    explanation:
      "K specifies how many clusters to divide the data into. Source: StatQuest",
  },
  {
    week: 6,
    topic: "Hierarchical Clustering",
    question: "What is a dendrogram used for?",
    options: [
      "Predicting labels",
      "Reducing dimensions",
      "Showing cluster hierarchy",
      "Plotting distributions",
    ],
    answer: "Showing cluster hierarchy",
    explanation:
      "Dendrogram is a tree diagram representing clusters. Source: Khan Academy",
  },
  {
    week: 6,
    topic: "Hierarchical Clustering",
    question: "Which linkage is used in hierarchical clustering?",
    options: ["Average", "Single", "Complete", "All of the above"],
    answer: "All of the above",
    explanation:
      "All are linkage strategies for clustering. Source: scikit-learn docs",
  },
  {
    week: 6,
    topic: "PCA",
    question: "PCA stands for:",
    options: [
      "Partial Component Analysis",
      "Principal Component Analysis",
      "Projected Clustering Algorithm",
      "Principal Clustering Algorithm",
    ],
    answer: "Principal Component Analysis",
    explanation:
      "PCA is a dimensionality reduction technique. Source: 3Blue1Brown",
  },
  {
    week: 6,
    topic: "PCA",
    question: "PCA reduces dimensions by:",
    options: [
      "Deleting low-variance features",
      "Linear projection",
      "Clustering",
      "Removing nulls",
    ],
    answer: "Linear projection",
    explanation:
      "PCA projects data to lower dimensions linearly. Source: StatQuest",
  },
  {
    week: 6,
    topic: "t-SNE",
    question: "t-SNE is mainly used for:",
    options: [
      "Clustering",
      "Dimensionality reduction for visualization",
      "Prediction",
      "Classification",
    ],
    answer: "Dimensionality reduction for visualization",
    explanation:
      "t-SNE is a nonlinear visualizer for high-dimensional data. Source: YouTube - StatQuest",
  },
  {
    week: 6,
    topic: "t-SNE",
    question: "t-SNE stands for:",
    options: [
      "Tree-Structured Nearest Encoder",
      "T-distributed Stochastic Neighbor Embedding",
      "Tensor Similarity Network Embedding",
      "Temporal Signal Noise Encoder",
    ],
    answer: "T-distributed Stochastic Neighbor Embedding",
    explanation:
      "t-SNE models similarity between points in lower dimensions. Source: sklearn",
  },
  {
    week: 6,
    topic: "Unsupervised Learning",
    question: "Unsupervised learning differs from supervised because it:",
    options: [
      "Uses labeled data",
      "Doesn't use any data",
      "Uses unlabeled data",
      "Predicts outputs",
    ],
    answer: "Uses unlabeled data",
    explanation:
      "It finds patterns without known outputs. Source: DeepLearning.ai",
  },
  {
    week: 6,
    topic: "Clustering",
    question: "Which method requires predefined number of clusters?",
    options: ["DBSCAN", "K-Means", "Agglomerative", "Mean Shift"],
    answer: "K-Means",
    explanation: "K-Means requires you to specify k. Source: scikit-learn docs",
  },
  //week 7
  {
    week: 7,
    topic: "Text Preprocessing",
    question: "Which step is usually performed first in NLP?",
    options: ["POS tagging", "Tokenization", "TF-IDF", "Embedding"],
    answer: "Tokenization",
    explanation:
      "Tokenization splits text into words/tokens. Source: NLTK Book",
  },
  {
    week: 7,
    topic: "Text Cleaning",
    question: "Removing stopwords helps to:",
    options: [
      "Improve accuracy",
      "Remove noise",
      "Normalize text",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Stopwords (like 'the', 'is') carry less meaning. Source: spaCy Docs",
  },
  {
    week: 7,
    topic: "TF-IDF",
    question: "TF-IDF combines:",
    options: [
      "Frequency and order",
      "Term frequency and inverse document frequency",
      "Length and context",
      "Bag of Words and Embeddings",
    ],
    answer: "Term frequency and inverse document frequency",
    explanation:
      "It down-weights frequent terms and boosts rare ones. Source: scikit-learn",
  },
  {
    week: 7,
    topic: "Word Embeddings",
    question: "Word2Vec is a type of:",
    options: ["Tokenizer", "Preprocessing", "Word Embedding", "POS Tagger"],
    answer: "Word Embedding",
    explanation:
      "Word2Vec represents words as dense vectors. Source: Google Research",
  },
  {
    week: 7,
    topic: "Word Embeddings",
    question: "What is a key benefit of embeddings?",
    options: [
      "Faster tokenization",
      "Better visualization",
      "Captures semantic meaning",
      "Creates bag-of-words",
    ],
    answer: "Captures semantic meaning",
    explanation:
      "Word embeddings encode similarity and context. Source: DeepLearning.ai NLP",
  },
  {
    week: 7,
    topic: "Text Classification",
    question: "Which is a common task in NLP?",
    options: [
      "Sentiment Analysis",
      "Sorting Arrays",
      "Image Classification",
      "Regression",
    ],
    answer: "Sentiment Analysis",
    explanation:
      "Classifies text as positive/negative/etc. Source: Kaggle NLP Datasets",
  },
  {
    week: 7,
    topic: "NLP Libraries",
    question: "spaCy is used for:",
    options: [
      "Web scraping",
      "Visualizations",
      "NLP tasks like parsing and tagging",
      "Deep learning",
    ],
    answer: "NLP tasks like parsing and tagging",
    explanation: "spaCy provides NLP pipeline tools. Source: spaCy Docs",
  },
  {
    week: 7,
    topic: "Tokenization",
    question: "Which library uses `word_tokenize()`?",
    options: ["scikit-learn", "spaCy", "NLTK", "TensorFlow"],
    answer: "NLTK",
    explanation:
      "`word_tokenize()` is from NLTK for breaking text. Source: NLTK Book",
  },
  {
    week: 7,
    topic: "TF-IDF",
    question: "A high TF-IDF score means:",
    options: [
      "Word is rare in a document",
      "Word is frequent in corpus",
      "Word is common across documents",
      "Document is too long",
    ],
    answer: "Word is rare in a document",
    explanation:
      "TF-IDF boosts rare yet meaningful terms. Source: sklearn docs",
  },
  {
    week: 7,
    topic: "NLP Applications",
    question: "Which is NOT an NLP application?",
    options: ["Spam detection", "Translation", "Face detection", "Chatbots"],
    answer: "Face detection",
    explanation:
      "Face detection is from computer vision, not NLP. Source: DeepLearning.ai",
  },
  //week 8
  {
    week: 8,
    topic: "Neurons",
    question: "A perceptron is:",
    options: [
      "Data type",
      "Activation function",
      "Single-layer neural model",
      "Loss function",
    ],
    answer: "Single-layer neural model",
    explanation:
      "Perceptrons are the foundation of neural nets. Source: 3Blue1Brown",
  },
  {
    week: 8,
    topic: "Activation Functions",
    question: "Which activation is used most in hidden layers?",
    options: ["Sigmoid", "Softmax", "ReLU", "Linear"],
    answer: "ReLU",
    explanation:
      "ReLU helps avoid vanishing gradients. Source: DeepLearning.ai",
  },
  {
    week: 8,
    topic: "Backpropagation",
    question: "Backpropagation computes:",
    options: ["Forward loss", "Gradient of loss", "Neuron count", "Batch size"],
    answer: "Gradient of loss",
    explanation: "It helps update weights using gradients. Source: StatQuest",
  },
  {
    week: 8,
    topic: "Loss Functions",
    question: "Binary classification uses which loss?",
    options: [
      "MSE",
      "Categorical Crossentropy",
      "Binary Crossentropy",
      "Hinge Loss",
    ],
    answer: "Binary Crossentropy",
    explanation:
      "Binary tasks use cross-entropy for two classes. Source: TensorFlow Docs",
  },
  {
    week: 8,
    topic: "Neural Nets",
    question: "What does an epoch mean?",
    options: [
      "One batch",
      "One forward pass",
      "One full pass over dataset",
      "Single weight update",
    ],
    answer: "One full pass over dataset",
    explanation:
      "Epoch = training over entire dataset once. Source: DeepLearning.ai",
  },
  {
    week: 8,
    topic: "Keras",
    question: "Which library is used to build deep networks easily?",
    options: ["NumPy", "scikit-learn", "Keras", "OpenCV"],
    answer: "Keras",
    explanation:
      "Keras simplifies neural net creation. Source: TensorFlow Docs",
  },
  {
    week: 8,
    topic: "TensorFlow",
    question: "TensorFlow is primarily used for:",
    options: ["Web apps", "Image editing", "Deep learning", "Visualization"],
    answer: "Deep learning",
    explanation:
      "TensorFlow is a popular ML framework. Source: TensorFlow Docs",
  },
  {
    week: 8,
    topic: "Activation Functions",
    question: "Sigmoid outputs values between:",
    options: ["0 and 1", "-1 and 1", "-∞ and ∞", "0 and ∞"],
    answer: "0 and 1",
    explanation: "Sigmoid squashes output between 0 and 1. Source: StatQuest",
  },
  {
    week: 8,
    topic: "Neural Networks",
    question: "Too many layers can cause:",
    options: [
      "Overfitting",
      "Underfitting",
      "Better accuracy",
      "Faster training",
    ],
    answer: "Overfitting",
    explanation:
      "Deep models may memorize training data. Source: DeepLearning.ai",
  },
  {
    week: 8,
    topic: "MNIST",
    question: "MNIST is a dataset for:",
    options: [
      "Sentiment",
      "Time series",
      "Digit classification",
      "Object detection",
    ],
    answer: "Digit classification",
    explanation:
      "MNIST contains images of handwritten digits. Source: Yann LeCun",
  },
  //week 9
  {
    week: 9,
    topic: "Image Basics",
    question: "In computer vision, an image is usually represented as:",
    options: ["Text array", "1D list", "2D matrix or 3D array", "Dictionary"],
    answer: "2D matrix or 3D array",
    explanation:
      "Grayscale images use 2D arrays, RGB uses 3D. Source: OpenCV docs",
  },
  {
    week: 9,
    topic: "Convolution",
    question: "What does a convolution operation do?",
    options: [
      "Subtracts layers",
      "Compresses image",
      "Extracts features",
      "Classifies image",
    ],
    answer: "Extracts features",
    explanation:
      "It uses filters to capture patterns like edges. Source: CS231n",
  },
  {
    week: 9,
    topic: "Filters",
    question: "What is a kernel in image processing?",
    options: ["Label", "Image size", "Filter matrix", "Color map"],
    answer: "Filter matrix",
    explanation:
      "Kernel is a small matrix used to extract features. Source: OpenCV",
  },
  {
    week: 9,
    topic: "Pooling",
    question: "Max pooling is used to:",
    options: [
      "Increase image size",
      "Downsample feature maps",
      "Train faster",
      "Convert grayscale to RGB",
    ],
    answer: "Downsample feature maps",
    explanation:
      "It reduces dimensions and retains important features. Source: DeepLearning.ai",
  },
  {
    week: 9,
    topic: "CNN",
    question: "CNN stands for:",
    options: [
      "Computational Neural Network",
      "Convolutional Neural Network",
      "Compact Node Network",
      "Content Neural Net",
    ],
    answer: "Convolutional Neural Network",
    explanation:
      "CNNs are used mainly in image classification. Source: CS231n Stanford",
  },
  {
    week: 9,
    topic: "CNN",
    question: "Why are CNNs better than MLPs for images?",
    options: [
      "Faster GPU training",
      "Handles sequential data",
      "Weight sharing & spatial hierarchies",
      "More loss functions",
    ],
    answer: "Weight sharing & spatial hierarchies",
    explanation:
      "CNNs efficiently capture spatial features. Source: DeepLearning.ai",
  },
  {
    week: 9,
    topic: "OpenCV",
    question: "Which function is used to read an image in OpenCV?",
    options: ["cv2.image()", "cv2.open()", "cv2.imread()", "cv2.load_image()"],
    answer: "cv2.imread()",
    explanation: "cv2.imread() loads an image into memory. Source: OpenCV Docs",
  },
  {
    week: 9,
    topic: "OpenCV",
    question: "cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) is used to:",
    options: [
      "Blur image",
      "Resize image",
      "Convert to grayscale",
      "Invert image",
    ],
    answer: "Convert to grayscale",
    explanation: "cv2.cvtColor changes color space. Source: OpenCV Docs",
  },
  {
    week: 9,
    topic: "CNN Layers",
    question: "Which layers are typical in CNNs?",
    options: [
      "Input, Hidden, Output",
      "Convolution, Pooling, FC",
      "Conv, ReLU, RNN",
      "Dropout, GRU",
    ],
    answer: "Convolution, Pooling, FC",
    explanation:
      "These layers help extract and classify features. Source: Stanford CS231n",
  },
  {
    week: 9,
    topic: "Edge Detection",
    question: "Which filter detects edges?",
    options: ["Sobel", "Gaussian", "Median", "Average"],
    answer: "Sobel",
    explanation:
      "Sobel detects gradients for edge detection. Source: OpenCV Docs",
  },
  {
    week: 9,
    topic: "Object Detection",
    question: "YOLO stands for:",
    options: [
      "You Only Learn Once",
      "You Only Look Once",
      "Your Object Learning Output",
      "Yield Output Layer Optimization",
    ],
    answer: "You Only Look Once",
    explanation:
      "YOLO is a real-time object detection model. Source: YOLO Paper",
  },
  {
    week: 9,
    topic: "Data Augmentation",
    question: "Augmentation is used to:",
    options: [
      "Reduce model size",
      "Add noise",
      "Increase data diversity",
      "Fix overfitting",
    ],
    answer: "Increase data diversity",
    explanation: "Helps model generalize better. Source: Keras Docs",
  },
  {
    week: 9,
    topic: "Transfer Learning",
    question: "In transfer learning, we usually:",
    options: [
      "Use old weights",
      "Train from scratch",
      "Freeze all layers",
      "Reuse pretrained models",
    ],
    answer: "Reuse pretrained models",
    explanation:
      "Speeds up training and improves accuracy. Source: TensorFlow Hub",
  },
  {
    week: 9,
    topic: "Image Classification",
    question: "MNIST images are:",
    options: [
      "Colored objects",
      "Dogs vs Cats",
      "28x28 grayscale digits",
      "High-res satellite images",
    ],
    answer: "28x28 grayscale digits",
    explanation: "MNIST is a popular benchmark dataset. Source: Yann LeCun",
  },
  {
    week: 9,
    topic: "Image Shapes",
    question: "An RGB image of 128x128 has shape:",
    options: ["128", "128x3", "128x128", "128x128x3"],
    answer: "128x128x3",
    explanation: "Each pixel has 3 color channels. Source: OpenCV Basics",
  },

  //week 10
  {
    week: 10,
    topic: "Audio Basics",
    question: "An audio signal is a:",
    options: ["Text", "Image", "Time-series waveform", "Matrix"],
    answer: "Time-series waveform",
    explanation:
      "Audio is represented as time-dependent signals. Source: Librosa Docs",
  },
  {
    week: 10,
    topic: "Sampling",
    question: "Sampling rate of 44.1kHz means:",
    options: [
      "44.1K samples per second",
      "44.1K seconds per sample",
      "Bits per file",
      "Volume level",
    ],
    answer: "44.1K samples per second",
    explanation:
      "It's how frequently the signal is measured. Source: Audacity Docs",
  },
  {
    week: 10,
    topic: "Audio Features",
    question: "MFCC is used to:",
    options: [
      "Filter noise",
      "Plot waveform",
      "Extract frequency features",
      "Adjust tempo",
    ],
    answer: "Extract frequency features",
    explanation: "MFCCs mimic human auditory perception. Source: Librosa Docs",
  },
  {
    week: 10,
    topic: "Speech Recognition",
    question: "Which library is popular for speech recognition?",
    options: ["cv2", "transformers", "speech_recognition", "openai-whisper"],
    answer: "speech_recognition",
    explanation: "This Python library recognizes speech via APIs. Source: PyPI",
  },
  {
    week: 10,
    topic: "Speech Models",
    question: "Whisper is developed by:",
    options: ["Google", "OpenAI", "Meta", "Apple"],
    answer: "OpenAI",
    explanation:
      "Whisper is OpenAI’s speech-to-text model. Source: [OpenAI Whisper](https://openai.com/research/whisper)",
  },
  {
    week: 10,
    topic: "Audio Visualization",
    question: "Librosa is used for:",
    options: [
      "Image processing",
      "Signal denoising",
      "Audio processing",
      "Neural networks",
    ],
    answer: "Audio processing",
    explanation: "Librosa helps analyze audio signals. Source: librosa.org",
  },
  {
    week: 10,
    topic: "Model Deployment",
    question: "Flask is used for:",
    options: [
      "Creating datasets",
      "Web hosting models",
      "Training networks",
      "Data labeling",
    ],
    answer: "Web hosting models",
    explanation:
      "Flask provides lightweight APIs for ML deployment. Source: Flask docs",
  },
  {
    week: 10,
    topic: "Deployment",
    question: "Which platform is best for free ML model deployment?",
    options: ["Kaggle", "Colab", "Hugging Face Spaces", "Scikit-learn"],
    answer: "Hugging Face Spaces",
    explanation:
      "Spaces host ML apps using Gradio/Streamlit. Source: huggingface.co/spaces",
  },
  {
    week: 10,
    topic: "Docker",
    question: "Docker helps to:",
    options: [
      "Train models",
      "Run models in containers",
      "Write Python code",
      "Clean data",
    ],
    answer: "Run models in containers",
    explanation:
      "Docker packages code and dependencies together. Source: docker.com",
  },
  {
    week: 10,
    topic: "ONNX",
    question: "ONNX is used to:",
    options: [
      "Convert images",
      "Deploy NLP models",
      "Make models interoperable",
      "Compress models",
    ],
    answer: "Make models interoperable",
    explanation:
      "ONNX supports exporting models between frameworks. Source: [ONNX.ai](https://onnx.ai/)",
  },
  {
    week: 10,
    topic: "Gradio",
    question: "Gradio helps to:",
    options: [
      "Build ML models",
      "Deploy models with UI",
      "Train large datasets",
      "Do version control",
    ],
    answer: "Deploy models with UI",
    explanation:
      "Gradio creates easy interfaces for ML apps. Source: [gradio.app](https://www.gradio.app)",
  },
  {
    week: 10,
    topic: "Streaming Models",
    question: "Which tool is used for real-time ML inference?",
    options: ["TensorBoard", "Streamlit", "Kafka", "Pandas"],
    answer: "Kafka",
    explanation:
      "Kafka handles real-time data pipelines. Source: Apache Kafka Docs",
  },
  {
    week: 10,
    topic: "Web Deployment",
    question: "To expose a model via API, use:",
    options: ["FastAPI", "NumPy", "PyTorch", "PIL"],
    answer: "FastAPI",
    explanation:
      "FastAPI builds high-performance APIs. Source: [fastapi.tiangolo.com](https://fastapi.tiangolo.com/)",
  },
  {
    week: 10,
    topic: "Speech Models",
    question: "Which of these is a speech-to-text model?",
    options: ["BERT", "YOLO", "Whisper", "GPT-4"],
    answer: "Whisper",
    explanation: "Whisper transcribes audio to text. Source: OpenAI",
  },
  {
    week: 10,
    topic: "Final Step",
    question: "What's the last step in an ML project lifecycle?",
    options: ["Data cleaning", "Deployment", "Model building", "Evaluation"],
    answer: "Deployment",
    explanation: "Model is finally pushed to production. Source: Google MLOps",
  },
];

export const DataAnaMCQ = [
  {
    week: 1,
    topic: "Python Basics",
    question: "Which function is used to display output in Python?",
    options: ["echo()", "display()", "print()", "output()"],
    answer: "print()",
    explanation:
      "In Python, the print() function outputs data to the console. Source: Python.org",
  },
  {
    week: 1,
    topic: "Python Basics",
    question: "Which of these is a valid Python variable name?",
    options: ["2data", "data_2", "data-2", "data 2"],
    answer: "data_2",
    explanation:
      "Variable names can include letters, numbers, and underscores but cannot start with a number. Source: Python.org",
  },
  {
    week: 1,
    topic: "NumPy",
    question: "Which function creates a NumPy array?",
    options: ["np.make()", "np.array()", "np.create()", "np.newarray()"],
    answer: "np.array()",
    explanation:
      "np.array() converts lists or tuples into NumPy arrays. Source: NumPy Documentation",
  },
  {
    week: 1,
    topic: "NumPy",
    question: "What does NumPy primarily provide?",
    options: [
      "Text processing",
      "2D game design",
      "Numerical computing",
      "Web development",
    ],
    answer: "Numerical computing",
    explanation:
      "NumPy is a core library for numerical and matrix operations in Python. Source: NumPy Documentation",
  },
  {
    week: 1,
    topic: "Pandas",
    question: "Which Pandas function reads a CSV file?",
    options: ["pd.load_csv()", "pd.read()", "pd.read_csv()", "pd.csv_read()"],
    answer: "pd.read_csv()",
    explanation:
      "pd.read_csv() loads CSV data into a Pandas DataFrame. Source: Pandas Documentation",
  },
  {
    week: 1,
    topic: "Pandas",
    question: "What is a DataFrame in Pandas?",
    options: [
      "A 3D array",
      "A tabular data structure",
      "An image container",
      "A JSON object",
    ],
    answer: "A tabular data structure",
    explanation:
      "A DataFrame is a 2D, labeled data structure with rows and columns. Source: Pandas Documentation",
  },
  {
    week: 1,
    topic: "Jupyter Notebooks",
    question: "What file extension does a Jupyter Notebook use?",
    options: [".ipynb", ".py", ".nb", ".txt"],
    answer: ".ipynb",
    explanation:
      "Jupyter Notebook files are saved with the .ipynb extension. Source: Jupyter.org",
  },
  {
    week: 1,
    topic: "Jupyter Notebooks",
    question: "Which shortcut runs the current cell in Jupyter Notebook?",
    options: ["Shift + Enter", "Ctrl + R", "Alt + Run", "Tab + Enter"],
    answer: "Shift + Enter",
    explanation:
      "In Jupyter, Shift + Enter executes the current cell and moves to the next. Source: Jupyter.org",
  },
  {
    week: 1,
    topic: "EDA",
    question: "What does EDA stand for in data analysis?",
    options: [
      "Extended Data Application",
      "Exploratory Data Analysis",
      "Encoded Data Arrangement",
      "External Data Algorithm",
    ],
    answer: "Exploratory Data Analysis",
    explanation:
      "EDA is the process of summarizing and visualizing data to uncover patterns. Source: Kaggle Python Course",
  },
  {
    week: 1,
    topic: "EDA",
    question:
      "Which Pandas function gives quick statistics of numeric columns?",
    options: ["df.info()", "df.describe()", "df.stats()", "df.summary()"],
    answer: "df.describe()",
    explanation:
      "df.describe() returns count, mean, std, min, max, and quartile values for numerical columns. Source: Pandas Documentation",
  },
  {
    week: 2,
    topic: "Central Tendency",
    question:
      "Which measure of central tendency is most affected by extreme values?",
    options: ["Mean", "Median", "Mode", "All are equally affected"],
    answer: "Mean",
    explanation:
      "Mean changes significantly with outliers. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Median",
    question: "Median is best described as:",
    options: [
      "Average of values",
      "Middle value",
      "Most frequent value",
      "Square root of variance",
    ],
    answer: "Middle value",
    explanation:
      "Median splits the dataset into two equal halves. Source: StatQuest",
  },
  {
    week: 2,
    topic: "Mode",
    question: "Mode represents:",
    options: [
      "Highest value",
      "Most common value",
      "Middle value",
      "Lowest value",
    ],
    answer: "Most common value",
    explanation:
      "Mode is the most frequently occurring observation. Source: OpenIntro Stats",
  },
  {
    week: 2,
    topic: "Variance",
    question: "Variance measures:",
    options: ["Central tendency", "Data spread", "Probability", "Data type"],
    answer: "Data spread",
    explanation:
      "Variance quantifies dispersion from the mean. Source: OpenIntro Stats",
  },
  {
    week: 2,
    topic: "Standard Deviation",
    question: "Standard deviation is:",
    options: [
      "Square root of variance",
      "Variance squared",
      "Mean deviation",
      "Probability sum",
    ],
    answer: "Square root of variance",
    explanation:
      "It measures average deviation from the mean. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Bayes Theorem",
    question: "Bayes Theorem is used to:",
    options: [
      "Find variance",
      "Update probabilities",
      "Find mean",
      "Plot distributions",
    ],
    answer: "Update probabilities",
    explanation:
      "Bayes Theorem calculates conditional probability. Source: StatQuest",
  },
  {
    week: 2,
    topic: "Normal Distribution",
    question: "Normal distribution is:",
    options: ["Bell-shaped", "Uniform", "Skewed right", "Bimodal"],
    answer: "Bell-shaped",
    explanation:
      "Normal distribution is symmetric around the mean. Source: OpenIntro Stats",
  },
  {
    week: 2,
    topic: "Probability",
    question: "If a coin is fair, probability of heads is:",
    options: ["0.25", "0.5", "0.75", "1.0"],
    answer: "0.5",
    explanation: "Equal chance for heads or tails. Source: Khan Academy",
  },
  {
    week: 2,
    topic: "Uniform Distribution",
    question: "In a uniform distribution:",
    options: [
      "All outcomes have equal probability",
      "Outcomes follow a bell curve",
      "One outcome dominates",
      "No probabilities exist",
    ],
    answer: "All outcomes have equal probability",
    explanation:
      "Uniform means every event is equally likely. Source: OpenIntro Stats",
  },
  {
    week: 2,
    topic: "Z-score",
    question: "Z-score represents:",
    options: ["Mean", "How many SDs away from mean", "Mode", "Variance"],
    answer: "How many SDs away from mean",
    explanation: "Z-score standardizes data for comparison. Source: StatQuest",
  },
  {
    week: 3,
    topic: "Missing Values",
    question: "Which method is NOT used to handle missing values?",
    options: [
      "Drop rows",
      "Imputation",
      "Interpolation",
      "Model fitting without change",
    ],
    answer: "Model fitting without change",
    explanation:
      "Models usually need missing values handled first. Source: Scikit-learn Docs",
  },
  {
    week: 3,
    topic: "Mean Imputation",
    question: "Replacing missing numeric values with mean is called:",
    options: ["Scaling", "Mean imputation", "Encoding", "Binning"],
    answer: "Mean imputation",
    explanation:
      "Mean imputation fills missing values with the column mean. Source: Kaggle",
  },
  {
    week: 3,
    topic: "Outliers",
    question: "Boxplots are used to detect:",
    options: [
      "Scaling issues",
      "Outliers",
      "Missing values",
      "Encoding problems",
    ],
    answer: "Outliers",
    explanation:
      "Outliers are extreme values outside the whiskers. Source: Medium Tutorials",
  },
  {
    week: 3,
    topic: "IQR",
    question: "IQR is calculated as:",
    options: ["Q3 - Q1", "Mean - Median", "Max - Min", "Variance × SD"],
    answer: "Q3 - Q1",
    explanation: "IQR measures middle 50% spread. Source: Kaggle",
  },
  {
    week: 3,
    topic: "Scaling",
    question: "StandardScaler in scikit-learn:",
    options: [
      "Shifts data to mean 0, SD 1",
      "Removes outliers",
      "Encodes text",
      "Drops nulls",
    ],
    answer: "Shifts data to mean 0, SD 1",
    explanation:
      "Standardization transforms features to standard scale. Source: Scikit-learn Docs",
  },
  {
    week: 3,
    topic: "Normalization",
    question: "Normalization typically rescales values to:",
    options: ["0 to 1", "-1 to 1", "Mean", "Variance"],
    answer: "0 to 1",
    explanation:
      "Normalization brings all features into the same scale. Source: Medium Tutorials",
  },
  {
    week: 3,
    topic: "Encoding",
    question: "One-hot encoding converts:",
    options: [
      "Text to lowercase",
      "Categorical to binary columns",
      "Numbers to text",
      "Nulls to mean",
    ],
    answer: "Categorical to binary columns",
    explanation:
      "Each category becomes its own binary column. Source: Scikit-learn Docs",
  },
  {
    week: 3,
    topic: "Label Encoding",
    question: "Label encoding converts categories to:",
    options: ["Scaled numbers", "Integer labels", "Binary", "Float values"],
    answer: "Integer labels",
    explanation: "Each unique category gets a numeric code. Source: Kaggle",
  },
  {
    week: 3,
    topic: "Data Leakage",
    question: "Data leakage means:",
    options: [
      "Training data contains info from test set",
      "Missing values",
      "Encoding errors",
      "Random noise",
    ],
    answer: "Training data contains info from test set",
    explanation:
      "Leakage leads to overly optimistic results. Source: Medium Tutorials",
  },
  {
    week: 3,
    topic: "Pipeline",
    question: "Pipelines in scikit-learn help:",
    options: [
      "Automate preprocessing + modeling",
      "Store datasets",
      "Create APIs",
      "Deploy models",
    ],
    answer: "Automate preprocessing + modeling",
    explanation:
      "Pipelines chain preprocessing and modeling steps. Source: Scikit-learn Docs",
  },
  // Week 4: Data Visualization (10 MCQs)
  {
    week: 4,
    topic: "Matplotlib",
    question: "Which matplotlib function is used to create a line plot?",
    options: ["plt.bar()", "plt.plot()", "plt.scatter()", "plt.hist()"],
    answer: "plt.plot()",
    explanation:
      "plt.plot() is the primary function for creating line plots in matplotlib. [Matplotlib Documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html)",
  },
  {
    week: 4,
    topic: "Matplotlib",
    question: "What does plt.xlabel() do in matplotlib?",
    options: [
      "Sets the plot title",
      "Labels the x-axis",
      "Creates a legend",
      "Sets axis limits",
    ],
    answer: "Labels the x-axis",
    explanation:
      "plt.xlabel() adds a descriptive label to the x-axis of the plot. [Matplotlib Pyplot Tutorial](https://matplotlib.org/stable/tutorials/introductory/pyplot.html)",
  },
  {
    week: 4,
    topic: "Seaborn",
    question:
      "Which seaborn function is best for visualizing the distribution of a single variable?",
    options: [
      "sns.scatterplot()",
      "sns.boxplot()",
      "sns.histplot()",
      "sns.lineplot()",
    ],
    answer: "sns.histplot()",
    explanation:
      "sns.histplot() creates histograms to show the distribution of a single continuous variable. [Seaborn Documentation](https://seaborn.pydata.org/generated/seaborn.histplot.html)",
  },
  {
    week: 4,
    topic: "Seaborn",
    question: "What is the main advantage of seaborn over matplotlib?",
    options: [
      "Faster performance",
      "Better statistical visualizations with less code",
      "More color options",
      "Smaller file size",
    ],
    answer: "Better statistical visualizations with less code",
    explanation:
      "Seaborn provides high-level statistical visualization functions that require less code than matplotlib. [Seaborn Introduction](https://seaborn.pydata.org/introduction.html)",
  },
  {
    week: 4,
    topic: "Plotly",
    question:
      "What is the main advantage of Plotly over matplotlib and seaborn?",
    options: [
      "Better colors",
      "Interactive plots",
      "Faster rendering",
      "Smaller memory usage",
    ],
    answer: "Interactive plots",
    explanation:
      "Plotly creates interactive plots that users can zoom, pan, and hover over for additional information. [Plotly Documentation](https://plotly.com/python/)",
  },
  {
    week: 4,
    topic: "Plotly",
    question:
      "Which Plotly function is used to create interactive scatter plots?",
    options: ["px.line()", "px.scatter()", "px.bar()", "px.histogram()"],
    answer: "px.scatter()",
    explanation:
      "px.scatter() from plotly.express creates interactive scatter plots with hover information. [Plotly Express Scatter](https://plotly.com/python/line-and-scatter/)",
  },
  {
    week: 4,
    topic: "Interactive Dashboards",
    question:
      "Which Python library is commonly used for creating web-based data dashboards?",
    options: ["Flask", "Django", "Dash", "FastAPI"],
    answer: "Dash",
    explanation:
      "Dash by Plotly is specifically designed for creating interactive web applications and dashboards for data visualization. [Dash Documentation](https://dash.plotly.com/)",
  },
  {
    week: 4,
    topic: "Interactive Dashboards",
    question: "What is the purpose of callbacks in Dash applications?",
    options: [
      "To style components",
      "To make plots interactive and responsive to user input",
      "To load data",
      "To save files",
    ],
    answer: "To make plots interactive and responsive to user input",
    explanation:
      "Callbacks in Dash connect user interface components to update plots and components based on user interactions. [Dash Callbacks](https://dash.plotly.com/basic-callbacks)",
  },
  {
    week: 4,
    topic: "Data Visualization",
    question:
      "Which type of plot is best for showing the relationship between two continuous variables?",
    options: ["Bar chart", "Histogram", "Scatter plot", "Pie chart"],
    answer: "Scatter plot",
    explanation:
      "Scatter plots effectively show relationships, correlations, and patterns between two continuous variables. [Data Visualization Principles](https://serialmentor.com/dataviz/)",
  },
  {
    week: 4,
    topic: "Data Visualization",
    question:
      "What should you avoid when creating effective data visualizations?",
    options: [
      "Clear axis labels",
      "Appropriate chart types",
      "Too many colors and unnecessary 3D effects",
      "Consistent scaling",
    ],
    answer: "Too many colors and unnecessary 3D effects",
    explanation:
      "Excessive colors and 3D effects can distract from the data and make visualizations harder to interpret. [Visualization Best Practices](https://www.storytellingwithdata.com/)",
  },

  // Week 5: Exploratory Data Analysis (EDA) (10 MCQs)
  {
    week: 5,
    topic: "Univariate Analysis",
    question: "What does univariate analysis examine?",
    options: [
      "Multiple variables together",
      "One variable at a time",
      "Only categorical variables",
      "Only numerical variables",
    ],
    answer: "One variable at a time",
    explanation:
      "Univariate analysis focuses on examining the distribution and characteristics of individual variables. [EDA Fundamentals](https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15)",
  },
  {
    week: 5,
    topic: "Univariate Analysis",
    question: "Which measure of central tendency is most affected by outliers?",
    options: ["Mean", "Median", "Mode", "Range"],
    answer: "Mean",
    explanation:
      "The mean is sensitive to extreme values (outliers) as it includes all values in its calculation. [Descriptive Statistics](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)",
  },
  {
    week: 5,
    topic: "Bivariate Plots",
    question:
      "Which plot is best for comparing distributions between different categories?",
    options: ["Scatter plot", "Line plot", "Box plot", "Pie chart"],
    answer: "Box plot",
    explanation:
      "Box plots effectively compare distributions across different categories by showing quartiles and outliers. [Seaborn Box Plots](https://seaborn.pydata.org/generated/seaborn.boxplot.html)",
  },
  {
    week: 5,
    topic: "Bivariate Plots",
    question: "What does a heatmap typically show in bivariate analysis?",
    options: [
      "Individual data points",
      "Correlation between variables",
      "Time series trends",
      "Categorical frequencies",
    ],
    answer: "Correlation between variables",
    explanation:
      "Heatmaps visualize correlation matrices, showing the strength of relationships between pairs of variables. [Correlation Heatmaps](https://seaborn.pydata.org/examples/many_pairwise_correlations.html)",
  },
  {
    week: 5,
    topic: "Correlation Analysis",
    question: "What does a correlation coefficient of -0.85 indicate?",
    options: [
      "Weak positive correlation",
      "Strong positive correlation",
      "Strong negative correlation",
      "No correlation",
    ],
    answer: "Strong negative correlation",
    explanation:
      "A correlation of -0.85 indicates a strong negative relationship where one variable increases as the other decreases. [Correlation Interpretation](https://www.statisticshowto.com/probability-and-statistics/correlation-coefficient-formula/)",
  },
  {
    week: 5,
    topic: "Correlation Analysis",
    question:
      "Which pandas function calculates correlation between all numerical columns?",
    options: ["df.describe()", "df.corr()", "df.info()", "df.value_counts()"],
    answer: "df.corr()",
    explanation:
      "df.corr() computes pairwise correlation of columns in a DataFrame, excluding NA/null values. [Pandas Correlation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html)",
  },
  {
    week: 5,
    topic: "EDA Techniques",
    question:
      "What is the primary purpose of checking for missing values in EDA?",
    options: [
      "To delete the dataset",
      "To understand data quality and decide on treatment strategies",
      "To increase dataset size",
      "To improve visualization colors",
    ],
    answer: "To understand data quality and decide on treatment strategies",
    explanation:
      "Identifying missing values helps assess data quality and determine appropriate handling methods like imputation or removal. [Missing Data Handling](https://towardsdatascience.com/handling-missing-data-for-advanced-machine-learning-4f6c5a15eb6e)",
  },
  {
    week: 5,
    topic: "EDA Techniques",
    question:
      "Which pandas function provides summary statistics for numerical columns?",
    options: ["df.head()", "df.info()", "df.describe()", "df.shape"],
    answer: "df.describe()",
    explanation:
      "df.describe() generates descriptive statistics including count, mean, std, min, max, and quartiles for numerical columns. [Pandas Describe](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html)",
  },
  {
    week: 5,
    topic: "Data Insights",
    question:
      "What should you look for when examining data distributions during EDA?",
    options: [
      "Only the mean value",
      "Skewness, outliers, and distribution shape",
      "Only the maximum value",
      "Only missing values",
    ],
    answer: "Skewness, outliers, and distribution shape",
    explanation:
      "Understanding distribution characteristics helps in choosing appropriate analysis methods and identifying data anomalies. [Distribution Analysis](https://towardsdatascience.com/understanding-data-distribution-4f84a2e3f6f8)",
  },
  {
    week: 5,
    topic: "Data Quality",
    question: "Why is it important to check for duplicate records during EDA?",
    options: [
      "To increase dataset size",
      "To improve visualization",
      "To ensure data accuracy and prevent biased analysis",
      "To add more features",
    ],
    answer: "To ensure data accuracy and prevent biased analysis",
    explanation:
      "Duplicate records can skew analysis results and lead to incorrect conclusions by giving extra weight to certain observations. [Data Cleaning Best Practices](https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4)",
  },

  // Week 6: Supervised Machine Learning (10 MCQs)
  {
    week: 6,
    topic: "Linear Regression",
    question:
      "What does linear regression assume about the relationship between variables?",
    options: [
      "Non-linear relationship",
      "Linear relationship",
      "No relationship",
      "Exponential relationship",
    ],
    answer: "Linear relationship",
    explanation:
      "Linear regression assumes a linear relationship between independent and dependent variables. [Linear Regression Assumptions](https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares)",
  },
  {
    week: 6,
    topic: "Linear Regression",
    question:
      "Which metric is commonly used to evaluate linear regression models?",
    options: [
      "Accuracy",
      "F1-score",
      "Mean Squared Error (MSE)",
      "Confusion Matrix",
    ],
    answer: "Mean Squared Error (MSE)",
    explanation:
      "MSE measures the average squared difference between actual and predicted values in regression problems. [Regression Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics)",
  },
  {
    week: 6,
    topic: "Decision Trees",
    question: "What is the main advantage of decision trees?",
    options: [
      "Always highest accuracy",
      "Easy to interpret and visualize",
      "Never overfit",
      "Fastest training time",
    ],
    answer: "Easy to interpret and visualize",
    explanation:
      "Decision trees provide clear, interpretable rules that can be easily understood and visualized as tree structures. [Decision Trees](https://scikit-learn.org/stable/modules/tree.html)",
  },
  {
    week: 6,
    topic: "Decision Trees",
    question: "What is a common problem with deep decision trees?",
    options: [
      "Underfitting",
      "Overfitting",
      "Slow prediction",
      "Memory issues",
    ],
    answer: "Overfitting",
    explanation:
      "Deep decision trees can memorize training data, leading to overfitting and poor generalization to new data. [Tree Pruning](https://scikit-learn.org/stable/modules/tree.html#tree-pruning)",
  },
  {
    week: 6,
    topic: "Random Forest",
    question: "How does Random Forest improve upon single decision trees?",
    options: [
      "Uses only one tree",
      "Combines multiple trees to reduce overfitting",
      "Is always faster",
      "Uses less memory",
    ],
    answer: "Combines multiple trees to reduce overfitting",
    explanation:
      "Random Forest uses ensemble learning with multiple decision trees to improve accuracy and reduce overfitting. [Random Forest](https://scikit-learn.org/stable/modules/ensemble.html#forest)",
  },
  {
    week: 6,
    topic: "Random Forest",
    question: "What does Random Forest use to make final predictions?",
    options: [
      "The first tree only",
      "The most accurate tree",
      "Voting/averaging across all trees",
      "The last tree only",
    ],
    answer: "Voting/averaging across all trees",
    explanation:
      "Random Forest aggregates predictions from all trees through majority voting (classification) or averaging (regression). [Ensemble Methods](https://scikit-learn.org/stable/modules/ensemble.html)",
  },
  {
    week: 6,
    topic: "Model Evaluation",
    question:
      "What is the purpose of splitting data into training and testing sets?",
    options: [
      "To increase dataset size",
      "To evaluate model performance on unseen data",
      "To improve accuracy",
      "To reduce training time",
    ],
    answer: "To evaluate model performance on unseen data",
    explanation:
      "Train-test split allows unbiased evaluation of model performance on data it has not seen during training. [Cross Validation](https://scikit-learn.org/stable/modules/cross_validation.html)",
  },
  {
    week: 6,
    topic: "Model Evaluation",
    question: "What does R-squared measure in regression models?",
    options: [
      "The number of features",
      "The proportion of variance explained by the model",
      "The training time",
      "The number of data points",
    ],
    answer: "The proportion of variance explained by the model",
    explanation:
      "R-squared indicates how much of the variance in the dependent variable is explained by the independent variables. [R-squared Interpretation](https://scikit-learn.org/stable/modules/model_evaluation.html#r2-score)",
  },
  {
    week: 6,
    topic: "Feature Engineering",
    question:
      "Why might you need to scale features before applying machine learning algorithms?",
    options: [
      "To reduce dataset size",
      "Because algorithms may be sensitive to feature scales",
      "To increase accuracy always",
      "To speed up visualization",
    ],
    answer: "Because algorithms may be sensitive to feature scales",
    explanation:
      "Many ML algorithms are sensitive to feature scales, so scaling ensures all features contribute equally to the model. [Feature Scaling](https://scikit-learn.org/stable/modules/preprocessing.html#standardization-or-mean-removal-and-variance-scaling)",
  },
  {
    week: 6,
    topic: "Supervised Learning",
    question:
      "What is the main difference between classification and regression?",
    options: [
      "No difference",
      "Classification predicts categories, regression predicts continuous values",
      "Regression is always more accurate",
      "Classification uses more data",
    ],
    answer:
      "Classification predicts categories, regression predicts continuous values",
    explanation:
      "Classification predicts discrete class labels while regression predicts continuous numerical values. [Supervised Learning Types](https://scikit-learn.org/stable/supervised_learning.html)",
  },

  {
    week: 7,
    topic: "K-Means Clustering",
    question: "What is the primary goal of K-Means clustering?",
    options: [
      "To classify data into predefined categories",
      "To minimize within-cluster sum of squares",
      "To maximize between-cluster variance",
      "To predict continuous target variables",
    ],
    answer: "To minimize within-cluster sum of squares",
    explanation:
      "K-Means aims to minimize the within-cluster sum of squares (WCSS) by finding optimal cluster centroids. [K-Means Algorithm](https://scikit-learn.org/stable/modules/clustering.html#k-means)",
  },
  {
    week: 7,
    topic: "K-Means Clustering",
    question:
      "Which parameter in K-Means clustering needs to be specified beforehand?",
    options: [
      "The distance metric",
      "The number of clusters (k)",
      "The convergence threshold",
      "The initial centroid positions",
    ],
    answer: "The number of clusters (k)",
    explanation:
      "K-Means requires you to specify the number of clusters (k) before running the algorithm. [K-Means Parameters](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)",
  },
  {
    week: 7,
    topic: "PCA",
    question: "What does PCA stand for and what is its main purpose?",
    options: [
      "Principal Component Analysis - reduces dimensionality while preserving variance",
      "Predictive Classification Algorithm - classifies data points",
      "Partial Correlation Analysis - finds relationships",
      "Progressive Clustering Approach - groups similar data",
    ],
    answer:
      "Principal Component Analysis - reduces dimensionality while preserving variance",
    explanation:
      "PCA reduces the number of features while retaining most of the variance in the data through linear transformations. [PCA Documentation](https://scikit-learn.org/stable/modules/decomposition.html#pca)",
  },
  {
    week: 7,
    topic: "DBSCAN",
    question:
      "Which clustering algorithm can identify clusters of arbitrary shape and handle noise?",
    options: [
      "K-Means",
      "Hierarchical Clustering",
      "DBSCAN",
      "Gaussian Mixture Models",
    ],
    answer: "DBSCAN",
    explanation:
      "DBSCAN can find clusters of any shape and automatically identifies outliers as noise points. [DBSCAN Algorithm](https://scikit-learn.org/stable/modules/clustering.html#dbscan)",
  },
  {
    week: 7,
    topic: "DBSCAN",
    question: "What are the two main parameters required for DBSCAN?",
    options: [
      "n_clusters and max_iter",
      "eps and min_samples",
      "learning_rate and n_estimators",
      "alpha and beta",
    ],
    answer: "eps and min_samples",
    explanation:
      "DBSCAN requires eps (maximum distance between two samples) and min_samples (minimum number of samples in a neighborhood). [DBSCAN Parameters](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)",
  },
  {
    week: 7,
    topic: "Hierarchical Clustering",
    question: "What is the output of hierarchical clustering?",
    options: [
      "A single cluster assignment",
      "A dendrogram showing cluster hierarchy",
      "Principal components",
      "Reduced dimensions",
    ],
    answer: "A dendrogram showing cluster hierarchy",
    explanation:
      "Hierarchical clustering produces a dendrogram that shows the hierarchical relationship between clusters at different levels. [Hierarchical Clustering](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)",
  },
  {
    week: 7,
    topic: "K-Means Clustering",
    question: "How do you choose the optimal number of clusters in K-Means?",
    options: [
      "Always use 3 clusters",
      "Use the elbow method",
      "Use the maximum possible clusters",
      "Use the minimum possible clusters",
    ],
    answer: "Use the elbow method",
    explanation:
      'The elbow method plots WCSS vs number of clusters and looks for the "elbow" point where improvement diminishes. [Elbow Method](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_digits.html)',
  },
  {
    week: 7,
    topic: "PCA",
    question: "What does the first principal component represent?",
    options: [
      "The least important feature",
      "The direction of maximum variance",
      "The original first column",
      "The cluster center",
    ],
    answer: "The direction of maximum variance",
    explanation:
      "The first principal component captures the direction in which the data varies the most. [PCA Components](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)",
  },
  {
    week: 7,
    topic: "Unsupervised Learning",
    question:
      "What is the main difference between supervised and unsupervised learning?",
    options: [
      "Supervised uses more data",
      "Unsupervised has no target variable",
      "Supervised is always more accurate",
      "No difference",
    ],
    answer: "Unsupervised has no target variable",
    explanation:
      "Unsupervised learning finds patterns in data without labeled target variables, unlike supervised learning. [Unsupervised Learning](https://scikit-learn.org/stable/unsupervised_learning.html)",
  },
  {
    week: 7,
    topic: "Hierarchical Clustering",
    question: "What are the two main types of hierarchical clustering?",
    options: [
      "K-means and DBSCAN",
      "Agglomerative and Divisive",
      "Supervised and Unsupervised",
      "Linear and Non-linear",
    ],
    answer: "Agglomerative and Divisive",
    explanation:
      "Agglomerative starts with individual points and merges clusters, while divisive starts with all points and splits clusters. [Hierarchical Types](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)",
  },
  {
    week: 8,
    topic: "Moving Averages",
    question:
      "What is the purpose of a moving average in time series analysis?",
    options: [
      "To increase data points",
      "To smooth out short-term fluctuations",
      "To add seasonality",
      "To create missing values",
    ],
    answer: "To smooth out short-term fluctuations",
    explanation:
      "Moving averages smooth time series data by averaging values over a sliding window to reveal underlying trends. [Moving Averages](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rolling.html)",
  },
  {
    week: 8,
    topic: "ARIMA",
    question: "What do the three parameters (p, d, q) in ARIMA represent?",
    options: [
      "Past, Data, Quality",
      "Autoregressive order, Differencing degree, Moving average order",
      "Prediction, Drift, Quantity",
      "Period, Duration, Quality",
    ],
    answer: "Autoregressive order, Differencing degree, Moving average order",
    explanation:
      "ARIMA(p,d,q): p is autoregressive terms, d is degree of differencing, q is moving average terms. [ARIMA Model](https://www.statsmodels.org/stable/generated/statsmodels.tsa.arima.model.ARIMA.html)",
  },
  {
    week: 8,
    topic: "Seasonality",
    question: "What is seasonality in time series data?",
    options: [
      "Random fluctuations",
      "Predictable patterns that repeat over fixed periods",
      "Linear trends",
      "Missing data points",
    ],
    answer: "Predictable patterns that repeat over fixed periods",
    explanation:
      "Seasonality refers to regular, predictable patterns that repeat over specific time periods like months or quarters. [Time Series Components](https://www.statsmodels.org/stable/tsa.html#time-series-analysis)",
  },
  {
    week: 8,
    topic: "Forecasting",
    question: "What is the main goal of time series forecasting?",
    options: [
      "To explain past events",
      "To predict future values based on historical patterns",
      "To remove outliers",
      "To visualize data",
    ],
    answer: "To predict future values based on historical patterns",
    explanation:
      "Time series forecasting uses historical data patterns to predict future values of the time series. [Forecasting Methods](https://www.statsmodels.org/stable/tsa.html#forecasting)",
  },
  {
    week: 8,
    topic: "Time Series",
    question: "What makes time series data different from regular datasets?",
    options: [
      "It has more columns",
      "It has temporal ordering and autocorrelation",
      "It has fewer rows",
      "It has no missing values",
    ],
    answer: "It has temporal ordering and autocorrelation",
    explanation:
      "Time series data has temporal dependencies where current values depend on past values (autocorrelation). [Time Series Properties](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html)",
  },
  {
    week: 8,
    topic: "ARIMA",
    question: "What does stationarity mean in time series analysis?",
    options: [
      "Data never changes",
      "Statistical properties remain constant over time",
      "Data has no trend",
      "Data has perfect correlation",
    ],
    answer: "Statistical properties remain constant over time",
    explanation:
      "Stationarity means the mean, variance, and autocorrelation structure do not change over time. [Stationarity](https://www.statsmodels.org/stable/tsa.html#stationary-and-non-stationary-time-series)",
  },
  {
    week: 8,
    topic: "Moving Averages",
    question:
      "What is the difference between simple and exponential moving averages?",
    options: [
      "No difference",
      "Exponential gives more weight to recent observations",
      "Simple is always better",
      "Exponential uses fewer data points",
    ],
    answer: "Exponential gives more weight to recent observations",
    explanation:
      "Exponential moving averages assign exponentially decreasing weights to older observations, making them more responsive to recent changes. [EMA vs SMA](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.ewm.html)",
  },
  {
    week: 8,
    topic: "Time Series",
    question: "What are the main components of a time series?",
    options: [
      "Mean and variance only",
      "Trend, Seasonality, and Residual",
      "Only trend",
      "Only seasonality",
    ],
    answer: "Trend, Seasonality, and Residual",
    explanation:
      "Time series can be decomposed into trend (long-term direction), seasonality (recurring patterns), and residual (random component). [Time Series Decomposition](https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html)",
  },
  {
    week: 8,
    topic: "Forecasting",
    question:
      "Which metric is commonly used to evaluate time series forecasting accuracy?",
    options: [
      "Accuracy",
      "F1-score",
      "Mean Absolute Error (MAE)",
      "Confusion Matrix",
    ],
    answer: "Mean Absolute Error (MAE)",
    explanation:
      "MAE measures the average absolute difference between actual and predicted values, making it suitable for regression-type forecasting problems. [Forecasting Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics)",
  },
  {
    week: 8,
    topic: "Time Series",
    question: "What is autocorrelation in time series?",
    options: [
      "Correlation between different variables",
      "Correlation of a series with its own lagged values",
      "Perfect correlation",
      "No correlation",
    ],
    answer: "Correlation of a series with its own lagged values",
    explanation:
      "Autocorrelation measures how current values in a time series correlate with past values at different time lags. [Autocorrelation](https://www.statsmodels.org/stable/generated/statsmodels.tsa.stattools.acf.html)",
  },
  {
    week: 9,
    topic: "Tokenization",
    question: "What is tokenization in NLP?",
    options: [
      "Encrypting text data",
      "Breaking text into individual words or tokens",
      "Translating languages",
      "Removing punctuation",
    ],
    answer: "Breaking text into individual words or tokens",
    explanation:
      "Tokenization splits text into smaller units (tokens) like words, phrases, or sentences for further processing. [NLTK Tokenization](https://www.nltk.org/api/nltk.tokenize.html)",
  },
  {
    week: 9,
    topic: "TF-IDF",
    question: "What does TF-IDF stand for and measure?",
    options: [
      "Text Frequency - Inverse Document Frequency; measures word importance",
      "Term Frequency - Inverse Document Frequency; measures word importance",
      "Total Features - Inverse Data Frequency; measures features",
      "Text Features - Internal Data Frequency; measures text",
    ],
    answer:
      "Term Frequency - Inverse Document Frequency; measures word importance",
    explanation:
      "TF-IDF measures how important a word is to a document relative to a collection of documents. [TF-IDF Vectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)",
  },
  {
    week: 9,
    topic: "Text Classification",
    question: "What is the goal of text classification?",
    options: [
      "To count words",
      "To assign predefined categories to text documents",
      "To translate text",
      "To generate new text",
    ],
    answer: "To assign predefined categories to text documents",
    explanation:
      "Text classification automatically assigns text documents to predefined categories based on their content. [Text Classification](https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html)",
  },
  {
    week: 9,
    topic: "Basic NLP Models",
    question: "Which algorithm is commonly used for text classification tasks?",
    options: ["K-Means", "Naive Bayes", "PCA", "DBSCAN"],
    answer: "Naive Bayes",
    explanation:
      "Naive Bayes is particularly effective for text classification due to its handling of high-dimensional sparse data. [Naive Bayes Text](https://scikit-learn.org/stable/modules/naive_bayes.html#multinomial-naive-bayes)",
  },
  {
    week: 9,
    topic: "Text Preprocessing",
    question:
      "What is the purpose of removing stop words in text preprocessing?",
    options: [
      "To increase text length",
      "To remove common words that carry little meaningful information",
      "To add punctuation",
      "To translate text",
    ],
    answer: "To remove common words that carry little meaningful information",
    explanation:
      'Stop words like "the", "and", "is" are removed because they appear frequently but carry little discriminative information. [Stop Words](https://www.nltk.org/book/ch02.html)',
  },
  {
    week: 9,
    topic: "TF-IDF",
    question: "How does TF-IDF handle words that appear in many documents?",
    options: [
      "Increases their weight",
      "Decreases their weight",
      "Keeps weight the same",
      "Removes them completely",
    ],
    answer: "Decreases their weight",
    explanation:
      "TF-IDF reduces the weight of words that appear frequently across many documents since they are less discriminative. [TF-IDF Formula](https://scikit-learn.org/stable/modules/feature_extraction.html#tfidf-term-weighting)",
  },
  {
    week: 9,
    topic: "Text Classification",
    question:
      "What type of data do you need for supervised text classification?",
    options: [
      "Only text documents",
      "Text documents with known category labels",
      "Only category labels",
      "Unlabeled text only",
    ],
    answer: "Text documents with known category labels",
    explanation:
      "Supervised text classification requires labeled training data with both text documents and their corresponding categories. [Supervised Learning](https://scikit-learn.org/stable/supervised_learning.html)",
  },
  {
    week: 9,
    topic: "Basic NLP Models",
    question: "What is a bag-of-words model?",
    options: [
      "A model that considers word order",
      "A model that represents text as a collection of words ignoring order",
      "A model for generating text",
      "A model for word translation",
    ],
    answer:
      "A model that represents text as a collection of words ignoring order",
    explanation:
      "Bag-of-words represents text as an unordered collection of words, focusing on word frequency rather than sequence. [Bag of Words](https://scikit-learn.org/stable/modules/feature_extraction.html#the-bag-of-words-representation)",
  },
  {
    week: 9,
    topic: "Tokenization",
    question:
      "What is the difference between word tokenization and sentence tokenization?",
    options: [
      "No difference",
      "Word splits text into words, sentence splits into sentences",
      "Word is faster",
      "Sentence is more accurate",
    ],
    answer: "Word splits text into words, sentence splits into sentences",
    explanation:
      "Word tokenization breaks text into individual words while sentence tokenization splits text into individual sentences. [NLTK Tokenizers](https://www.nltk.org/api/nltk.tokenize.html)",
  },
  {
    week: 9,
    topic: "Text Classification",
    question:
      "Which evaluation metric is appropriate for multi-class text classification?",
    options: [
      "Mean Squared Error",
      "R-squared",
      "Accuracy and F1-score",
      "Silhouette score",
    ],
    answer: "Accuracy and F1-score",
    explanation:
      "Classification metrics like accuracy, precision, recall, and F1-score are used to evaluate text classification performance. [Classification Metrics](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics)",
  },
  {
    week: 10,
    topic: "Data Pipeline",
    question:
      "What is a data pipeline in the context of a data science project?",
    options: [
      "A physical pipe for data",
      "A series of automated steps for processing data from source to destination",
      "A visualization tool",
      "A storage system",
    ],
    answer:
      "A series of automated steps for processing data from source to destination",
    explanation:
      "A data pipeline automates the flow and transformation of data through various processing stages in a systematic way. [Data Pipelines](https://scikit-learn.org/stable/modules/compose.html#pipeline)",
  },
  {
    week: 10,
    topic: "Model Building",
    question: "What should you do before deploying a machine learning model?",
    options: [
      "Deploy immediately",
      "Validate performance on test data and ensure reproducibility",
      "Use only training data",
      "Skip testing",
    ],
    answer: "Validate performance on test data and ensure reproducibility",
    explanation:
      "Model validation ensures the model performs well on unseen data and deployment processes are reproducible. [Model Selection](https://scikit-learn.org/stable/model_selection.html)",
  },
  {
    week: 10,
    topic: "Flask App",
    question: "What is Flask in the context of model deployment?",
    options: [
      "A database",
      "A lightweight web framework for creating web applications",
      "A machine learning library",
      "A visualization tool",
    ],
    answer: "A lightweight web framework for creating web applications",
    explanation:
      "Flask is a Python web framework that allows you to create web applications and APIs for deploying ML models. [Flask Documentation](https://flask.palletsprojects.com/)",
  },
  {
    week: 10,
    topic: "Streamlit App",
    question:
      "What is the main advantage of using Streamlit for data science projects?",
    options: [
      "It is the fastest framework",
      "It allows rapid creation of interactive web apps with minimal code",
      "It has the best graphics",
      "It uses the least memory",
    ],
    answer:
      "It allows rapid creation of interactive web apps with minimal code",
    explanation:
      "Streamlit enables data scientists to quickly create interactive web applications without extensive web development knowledge. [Streamlit Docs](https://docs.streamlit.io/)",
  },
  {
    week: 10,
    topic: "GitHub Hosting",
    question: "Why is version control important in data science projects?",
    options: [
      "It makes code faster",
      "It tracks changes, enables collaboration, and maintains project history",
      "It reduces file size",
      "It improves accuracy",
    ],
    answer:
      "It tracks changes, enables collaboration, and maintains project history",
    explanation:
      "Version control systems like Git help manage code changes, facilitate team collaboration, and maintain a complete project history. [Git for Data Science](https://git-scm.com/doc)",
  },
  {
    week: 10,
    topic: "Model Deployment",
    question:
      "What is the difference between model training and model deployment?",
    options: [
      "No difference",
      "Training builds the model, deployment makes it available for use",
      "Training is faster",
      "Deployment uses less data",
    ],
    answer: "Training builds the model, deployment makes it available for use",
    explanation:
      "Training creates and optimizes the model using historical data, while deployment makes the trained model accessible for real-world predictions. [MLOps](https://ml-ops.org/)",
  },
  {
    week: 10,
    topic: "Data Pipeline",
    question: "What are the typical stages in a data science pipeline?",
    options: [
      "Only data collection",
      "Data collection, preprocessing, modeling, evaluation, deployment",
      "Only modeling",
      "Only visualization",
    ],
    answer: "Data collection, preprocessing, modeling, evaluation, deployment",
    explanation:
      "A complete data science pipeline includes data collection, cleaning/preprocessing, model training, evaluation, and deployment stages. [ML Pipeline](https://scikit-learn.org/stable/modules/compose.html#pipeline)",
  },
  {
    week: 10,
    topic: "Dashboard",
    question:
      "What is the purpose of creating a dashboard for a data science project?",
    options: [
      "To slow down the project",
      "To provide interactive visualization and insights for stakeholders",
      "To increase complexity",
      "To hide results",
    ],
    answer:
      "To provide interactive visualization and insights for stakeholders",
    explanation:
      "Dashboards present data insights and model results in an accessible, interactive format for business users and stakeholders. [Dashboard Design](https://plotly.com/dash/)",
  },
  {
    week: 10,
    topic: "Model Building",
    question: "What is cross-validation and why is it important?",
    options: [
      "A type of model",
      "A technique to assess model performance and generalization",
      "A deployment method",
      "A data collection technique",
    ],
    answer: "A technique to assess model performance and generalization",
    explanation:
      "Cross-validation evaluates model performance across multiple train-test splits to get a more reliable estimate of generalization. [Cross Validation](https://scikit-learn.org/stable/modules/cross_validation.html)",
  },
  {
    week: 10,
    topic: "Capstone Project",
    question: "What makes a good capstone data science project?",
    options: [
      "Uses the most complex algorithms",
      "Addresses a real problem, demonstrates technical skills, and provides actionable insights",
      "Has the most features",
      "Takes the longest time",
    ],
    answer:
      "Addresses a real problem, demonstrates technical skills, and provides actionable insights",
    explanation:
      "A strong capstone project combines technical proficiency with practical problem-solving and clear communication of results. [Project Portfolio](https://towardsdatascience.com/how-to-build-a-data-science-portfolio-5f566517c79c)",
  },
];
