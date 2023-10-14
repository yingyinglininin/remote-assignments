import Post from '../components/Post';
import { getPostData } from '../data/getPostData'; // Create this file to provide mock data

export default function Home() {
  const posts = getPostData();

  return (
    <div className="container mx-auto mt-8 text-black">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <h1 className='p-3'> Understanding Check </h1>
      <ol className='list-decimal px-7'>
        <li> <b>Why do we use Node.js? What does it do?</b> <br />
        Ans: Node.js allows us to run JavaScript on the server-side. It's commonly used for building scalable network applications and web servers. <br />
        The following are why we use Node.js and what it does: <br />
        - <b>JavaScript on the Server:</b> we can use the same programming language (JavaScript) for both client-side and server-side development, which can simplify development and reduce context switching.<br />
        - <b>Event-Driven and Non-Blocking:</b> Node.js uses an event loop to handle multiple concurrent connections without blocking the execution of other code. This makes it suitable for building high-performance and scalable applications, especially for tasks that involve I/O operations.<br />
        - <b>Large Ecosystem:</b> Node.js has a vast ecosystem of open-source packages available through npm (Node Package Manager). This ecosystem includes libraries and frameworks that simplify various aspects of web development<br />
        - <b>Community and Support:</b> Node.js has a large and active community of developers, which means we can find plenty of resources, tutorials, and support. It's well-documented and regularly updated.<br />
        - <b>Real-Time Applications:</b> Node.js is suitable for building real-time applications like chat applications, online gaming, and collaborative tools. Its event-driven architecture allows for low-latency communication.<br />
        - <b>Performance:</b> Due to its non-blocking and event-driven nature, Node.js can handle a large number of concurrent connections efficiently, making it a good choice for applications that require high performance and scalability.<br />
        In summary, we use Node.js for its ability to execute JavaScript on the server-side, its non-blocking, event-driven architecture, the vast ecosystem of packages, and its suitability for real-time and high-performance applications. It's a popular choice for building web servers, APIs, and various network applications.
        </li>
        <li><b>Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS?</b> <br />
        Ans: I created three components, including PostContainer, LikeButton, and LikeCount.
        CSS-in-JS is an approach that allows us to write CSS directly in our JavaScript code.
        Compared to reqular CSS, CSS-in-JS addresses the global scope issues by encapsulating styles within components, making it easier to manage and maintain styles.
        Besides, CSS-in-JS is well-suited for component-based architectures, such as those in React, where each component can have its own encapsulated styles.
        In summary, CSS-in-JS, including Styled-Components, offers a more structured and encapsulated way of styling components, reducing the risk of styling-related bugs and providing a more maintainable solution for complex applications.
        </li>
        <li><b>Discuss useState and useEffect. How did you use them?</b><br />
        Ans: 'useState' and 'useEffect' are two fundamental hooks provided by React that are commonly used to manage state and side effects in functional components.<br />
        - <b>useState: </b> "useState" is a hook used to add state to functional components. It allows us to define and update state variables within our component. We can use it to keep track of changing data, such as form input values, user interactions, or component-specific data.<br />
        - <b>useEffect:</b> "useEffect" is a hook used to perform side effects in functional components. Side effects can include data fetching, DOM manipulation, and more. useEffect allows us to manage these side effects in a declarative way, ensuring they occur at the right time during the component's lifecycle.<br />
        - <b>How They Were Used:</b> "useState" was used to manage component-specific state. For example, we might use it to manage the state of a form, a counter, or any other data that needs to be stored and updated within the component. 
        Otherwise, "useEffect" was used to manage side effects, such as data fetching, DOM updates, or subscriptions. The dependencies array was used to specify when the effect should run. An empty array ([]) means it runs once after the initial render, while specific dependencies trigger the effect when they change.
        </li>
        <li><b>Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? Think about getServerSideProps.</b><br />
        Ans: 'useState' and 'useEffect' are two fundamental hooks provided by React that are commonly used to manage state and side effects in functional components.<br />
        - <b>Client-Side Rendering (CSR): </b> In CSR, the initial HTML content is minimal and usually contains a JavaScript bundle that loads a framework (like React or Vue) and renders the actual content on the client-side. The client's browser takes care of rendering the UI after receiving the initial HTML. This approach provides fast page loads and interactivity but may lead to slower time-to-content and SEO challenges.<br />
        - <b>Server-Side Rendering (SSR): </b> In SSR, the server generates fully rendered HTML content for a web page and sends it to the client. This means that the initial HTML includes the actual content of the page. SSR can improve time-to-content and SEO because search engines can easily index the content. It may lead to slightly longer initial page load times compared to CSR, but it offers a better user experience in some scenarios.<br />
        - <b>Server-Side Rendering in Next.js:</b> <br />
        Step1 - Define a page component in our Next.js application.<br />
        Step2 - Export an asynchronous function named "getServerSideProps" from our page component. This function is executed on the server and is responsible for fetching data and returning it as props to our component.<br />
        Step3 - The data fetched in "getServerSideProps" is available when rendering the page. This means the content is initially rendered on the server-side.<br />
        Step4 - When a user navigates to the page, they receive fully rendered content, benefiting from SSR.
        </li>
        <li><b>Which coding styles did you follow when coding?</b><br />
        I followed indentation, naming conventions, comments, file organization when coding before. <br />
        After completing Week3 remote assignment, I learned "Airbnb React/JSX Style Guide". 
        </li>
      </ol>
    </div>
  );
}