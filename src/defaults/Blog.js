const BlogSection = () => {
    const blogs = [
      {
        title: "Unlocking the Future of Education with ShikshaPath!",
        image: "https://i.ytimg.com/vi/aL0xaP-WofE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZwJP7SoYK6Nx5XyQDK-Jgb3qwEA", // Placeholder image
        excerpt: "Welcome to the world of ShikshaPath, where learning transforms into an exciting adventure!",
        link: "#", // Link to full blog
      },
      {
        title: "Innovative Learning: The Role of AI in Education",
        image: "https://www.q3tech.com/wp-content/uploads/2024/01/AI-1-1.jpg", // Placeholder image
        excerpt: "Discover how AI technology is revolutionizing education and making learning more accessible for everyone.",
        link: "#", // Link to full blog
      },
      {
        title: "Engaging Students with Interactive Resources",
        image: "https://www.educatorstechnology.com/wp-content/uploads/2024/05/Interactive-learning-tools-1-1024x535.png", // Placeholder image
        excerpt: "Explore the variety of interactive resources that keep students excited and engaged in their learning.",
        link: "#", // Link to full blog
      },
      {
        title: "Building a Community of Learners",
        image: "https://framerusercontent.com/images/Hpkc3Kx07ehKdakZ2Lblpkd9X3E.webp", // Placeholder image
        excerpt: "Learn about the importance of community in education and how ShikshaPath fosters collaboration.",
        link: "#", // Link to full blog
      },
    ];
  
    return (
      <section className="bg-gradient-to-r from-blue-400 to-purple-500 p-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">ShikshaPath Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-5 transition transform hover:scale-105">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <h3 className="text-xl font-semibold mt-4 text-purple-700">{blog.title}</h3>
              <p className="mt-2 text-gray-700">{blog.excerpt}</p>
              <a 
                href={blog.link} 
                className="mt-4 inline-block bg-yellow-400 text-white py-2 px-4 rounded-full hover:bg-yellow-300 transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  