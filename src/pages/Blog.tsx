import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
  {
    "id": 1,
    "title": "Why Every Business Needs a Mobile App in 2025",
    "excerpt": "In today’s digital-first world, mobile apps are not just an option — they’re a necessity. Whether you're a small local business or a large enterprise, a well-designed mobile app can transform how you connect with your customers.",
    "date": "2025-06-11",
    "readTime": "10 min read",
    "category": "Mobile Development",
    "image": "/images/blogs/blog1.png",
    "slug": "why-every-business-needs-a-mobile-app-in-2025"
  },
  {
    "id": 2,
    "title": "Web Development Trends in 2025: What You Need to Know",
    "excerpt": "The web is evolving rapidly. Staying ahead of these changes ensures your business stays competitive. Here are the top web development trends shaping 2025 and how your business can leverage them.",
    "date": "2025-01-19",
    "readTime": "10 min read",
    "category": "Web Development",
    "image": "/images/blogs/blog2.png",
    "slug": "web-development-trends-in-2025-what-you-need-to-know"
  },
  {
    "id": 3,
    "title": "Android vs iOS App Development: Which is Right for Your Business?",
    "excerpt": "When launching an app, choosing between Android and iOS can be a critical decision. Here's what you need to consider.",
    "date": "2024-10-30",
    "readTime": "10 min read",
    "category": "Mobile Development",
    "image": "/images/blogs/blog3.png",
    "slug": "android-vs-ios-app-development-which-is-right-for-your-business"
  },
  {
    "id": 4,
    "title": "How We Build Custom Web Solutions That Deliver Results",
    "excerpt": "Your business is unique — your website should be too. Here's how we build custom web solutions that reflect your goals.",
    "date": "2024-07-22",
    "readTime": "10 min read",
    "category": "Web Development",
    "image": "/images/blogs/blog4.png",
    "slug": "how-we-build-custom-web-solutions-that-deliver-results"
  },
  {
    "id": 5,
    "title": "Top 5 Mistakes to Avoid When Developing a Mobile App",
    "excerpt": "Developing an app is a major investment. Avoid these common mistakes to ensure success.",
    "date": "2024-04-09",
    "readTime": "10 min read",
    "category": "Mobile Development",
    "image": "/images/blogs/blog5.png",
    "slug": "top-5-mistakes-to-avoid-when-developing-a-mobile-app"
  },
  {
    "id": 6,
    "title": "How a Well-Designed Website Increases Your Business Credibility",
    "excerpt": "Your website is your digital storefront. First impressions matter — here's why design counts.",
    "date": "2023-12-01",
    "readTime": "10 min read",
    "category": "Design",
    "image": "/images/blogs/blog6.png",
    "slug": "how-a-well-designed-website-increases-your-business-credibility"
  },
  {
    "id": 7,
    "title": "Our Development Process: From Idea to Launch",
    "excerpt": "We follow a transparent, efficient process to turn your ideas into digital products.",
    "date": "2023-08-14",
    "readTime": "10 min read",
    "category": "Web Development",
    "image": "/images/blogs/blog7.png",
    "slug": "our-development-process-from-idea-to-launch"
  },
  // {
  //   "id": 8,
  //   "title": "How We Turn Business Challenges into Digital Solutions",
  //   "excerpt": "We don’t just build apps or websites; we craft digital solutions tailored to solve your real problems.",
  //   "date": "2023-02-21",
  //   "readTime": "10 min read",
  //   "category": "Strategy",
  //   "image": "/images/blog/business-solutions.jpg",
  //   "slug": "how-we-turn-business-challenges-into-digital-solutions"
  // },
  // {
  //   "id": 9,
  //   "title": "The Role of Maintenance in Sustaining Digital Success",
  //   "excerpt": "Without ongoing maintenance, even the best digital products can fail to deliver lasting value.",
  //   "date": "2022-11-05",
  //   "readTime": "10 min read",
  //   "category": "Maintenance",
  //   "image": "/images/blog/digital-maintenance.jpg",
  //   "slug": "the-role-of-maintenance-in-sustaining-digital-success"
  // },
  {
    "id": 10,
    "title": "Designing User-Centered Apps and Websites That Drive Business Growth",
    "excerpt": "We focus on user-centered design to create apps and websites that engage visitors and convert them into loyal customers.",
    "date": "2022-03-17",
    "readTime": "10 min read",
    "category": "Design",
    "image": "/images/blogs/blog8.png",
    "slug": "designing-user-centered-apps-and-websites-that-drive-business-growth"
  },
]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Tech Insights & <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 font-body leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in technology and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${selectedCategory === category
                      ? 'bg-brand-blue hover:bg-brand-blue/90'
                      : 'hover:bg-gray-50'
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg font-body">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader className="p-6">
                    {/* Category Badge */}
                    <Badge
                      variant="secondary"
                      className="w-fit mb-3 bg-blue-50 text-brand-blue hover:bg-blue-100"
                    >
                      {post.category}
                    </Badge>

                    <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </CardTitle>

                    <p className="text-gray-600 font-body text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 p-0 h-auto py-2"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
