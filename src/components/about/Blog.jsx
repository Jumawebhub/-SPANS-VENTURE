import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Intelligent Networks',
    excerpt: 'Explore how intelligent networks are transforming business operations and driving efficiency in the digital age.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '',
    author: '',
    category: 'Network Solutions'
  },
  {
    id: 2,
    title: 'Enhancing Security with Smart CCTV Systems',
    excerpt: 'Learn how smart CCTV systems are revolutionizing security measures for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '',
    author: '',
    category: 'Security Solutions'
  },
  {
    id: 3,
    title: 'The Role of ICT Infrastructure in Business Growth',
    excerpt: 'Discover how a robust ICT infrastructure can support business growth and digital transformation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '',
    author: '',
    category: 'ICT Infrastructure'
  }
];

const Blog = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Blog</h2>
          <p className="section-subtitle">Insights and Updates from Our Experts</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            Stay informed about the latest trends, insights, and innovations in the technology industry with our expert blog posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline inline-flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
