import { createContext, useState } from "react";


const BlogContext = createContext(null);


const BlogProvider = ({ children }) => {

    const [blogs] = useState([
        {
          id: 1,
          category: "Design",
          title: "UX review presentations",
          description:
            "How do you create compelling presentations that wow your colleagues and impress your managers? A great UX review presentation is not just about showing off designs—it’s about storytelling, engaging your audience, and providing actionable insights. This guide will take you through the key elements of an effective UX presentation, including structuring your content, choosing the right visuals, and presenting with confidence. Learn how to communicate design decisions, justify your UX choices with data, and handle feedback like a pro. We’ll also cover common mistakes to avoid and how to tailor your presentation to different audiences, from designers to stakeholders. Whether you're a beginner or an experienced designer, mastering UX review presentations will help you gain buy-in for your ideas and ensure that your designs lead to successful outcomes.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Olivia Rhye",
            date: "20 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 2,
          category: "Product",
          title: "Migrating to Linear 101",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking, making it a valuable tool for teams looking to improve efficiency. If you're considering migrating to Linear, this guide will walk you through the process step by step. We’ll cover setting up your workspace, importing existing tasks, organizing your backlog, and optimizing workflows. Learn best practices for collaborating with your team, using integrations, and automating repetitive tasks. Whether you’re transitioning from another project management tool or starting from scratch, understanding Linear’s capabilities will help you stay organized and boost productivity. By the end of this article, you'll have a clear roadmap for migrating your team to Linear and making the most of its features.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Phoenix Baker",
            date: "19 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 3,
          category: "Software Engineering",
          title: "Building your API Stack",
          description:
            "The rise of RESTful APIs has led to an explosion of tools for designing, testing, and managing APIs. Choosing the right API stack can significantly impact the efficiency and scalability of your software development. In this guide, we’ll explore the key components of an effective API stack, from frameworks and documentation tools to monitoring solutions and security practices. Learn about the differences between REST, GraphQL, and gRPC, and understand when to use each approach. We’ll also discuss the importance of API gateways, rate limiting, and best practices for handling authentication and authorization. Whether you're a backend developer or a product manager looking to improve API workflows, this guide will equip you with the knowledge needed to build a robust and scalable API ecosystem.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Lana Steiner",
            date: "18 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 4,
          category: "Management",
          title: "Bill Walsh leadership lessons",
          description:
            "Mental models are simplified representations of complex ideas, helping product managers make better decisions in fast-paced environments. In this guide, we explore some of the most powerful mental models used by successful PMs, from first-principles thinking and second-order consequences to the Eisenhower Matrix and opportunity cost analysis. Learn how to apply these models when prioritizing features, handling trade-offs, and aligning business goals with user needs. We’ll also cover techniques for avoiding cognitive biases and making data-driven decisions. Whether you’re a new or experienced product manager, understanding these mental models will improve your strategic thinking and help you navigate the challenges of building and scaling products.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Alec Whitten",
            date: "17 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 5,
          category: "Product",
          title: "PM mental models",
          description:
            "Wireframing is a crucial step in the design process, allowing teams to visualize and iterate on ideas before development begins. In this guide, we’ll break down the fundamentals of wireframing, including its benefits, key principles, and best practices. Learn about different types of wireframes—low-fidelity sketches, medium-fidelity digital wireframes, and high-fidelity interactive prototypes. Discover the best tools for wireframing, from Figma and Sketch to Balsamiq and Adobe XD. We’ll also discuss how wireframing helps in user testing, improves collaboration between designers and developers, and reduces costly revisions later in the process. By the end of this article, you'll have a clear understanding of how to create effective wireframes and streamline your design workflow.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Demi Wilkinson",
            date: "16 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 6,
          category: "Design",
          title: "What is Wireframing?",
          description:
            "Collaboration is a fundamental aspect of great design, fostering creativity, problem-solving, and innovation. In this article, we’ll explore how working with others—whether teammates, stakeholders, or users—can lead to better design outcomes. Learn how to embrace feedback, facilitate productive design critiques, and balance individual creativity with collective input. We’ll also discuss techniques for improving collaboration in remote and hybrid work environments, from using design collaboration tools to fostering a team culture of openness and shared ownership. Whether you're a solo designer or part of a large team, understanding the power of collaboration will help you grow as a designer and create more impactful experiences for users.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Candice Wu",
            date: "15 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 7,
          category: "Design",
          title: "How collaboration makes us better designers",
          description:
            "Collaboration is a fundamental aspect of great design, fostering creativity, problem-solving, and innovation. In this article, we’ll explore how working with others—whether teammates, stakeholders, or users—can lead to better design outcomes. Learn how to embrace feedback, facilitate productive design critiques, and balance individual creativity with collective input. We’ll also discuss techniques for improving collaboration in remote and hybrid work environments, from using design collaboration tools to fostering a team culture of openness and shared ownership. Whether you're a solo designer or part of a large team, understanding the power of collaboration will help you grow as a designer and create more impactful experiences for users.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Alec Whitten",
            date: "17 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 8,
          category: "Product",
          title: "Our top 10 Javascript frameworks to use",
          description:
            "JavaScript frameworks simplify development by providing pre-built structures and features, making it easier to build powerful applications. In this article, we rank the top 10 JavaScript frameworks based on popularity, performance, and developer experience. From React and Vue.js to Svelte and Angular, we’ll break down the strengths and weaknesses of each framework, their ideal use cases, and the latest trends shaping frontend and backend development. Learn which frameworks are best for building SPAs, progressive web apps, or server-side applications, and discover tips for choosing the right framework for your next project. Whether you're a beginner or an experienced developer, this guide will help you navigate the ever-evolving JavaScript ecosystem.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Demi Wilkinson",
            date: "16 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
        {
          id: 9,
          category: "Customer Success",
          title: "Podcast: Creating a better CX Community",
          description:
            "Customer experience (CX) is more than just providing good service—it’s about building lasting relationships and creating a strong community. In this podcast, we dive into how to create and nurture a thriving CX community that fosters engagement, loyalty, and customer advocacy. Learn from industry experts as they share insights on community-building strategies, digital engagement techniques, and ways to turn customers into brand ambassadors. We’ll also discuss common pitfalls and how to avoid them, from lack of participation to unclear value propositions. Whether you're a startup looking to build a CX community from scratch or an established brand looking to deepen customer connections, this podcast provides actionable takeaways for success.",
          image: "/placeholder.svg?height=200&width=400",
          author: {
            name: "Candice Wu",
            date: "15 Jan 2022",
            avatar: "/placeholder.svg?height=40&width=40",
          },
        },
      ])
    
    
  

  return <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>;
};

export { BlogContext, BlogProvider };





