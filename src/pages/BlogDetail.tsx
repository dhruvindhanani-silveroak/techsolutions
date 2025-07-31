import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Eye
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import blogPosts from '@/data/BlogsDetails';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentPost = blogPosts.find(post => post.slug === id);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/blog')} className="bg-brand-blue hover:bg-brand-blue/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentPost.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="text-gray-600 hover:text-brand-blue"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="mb-8">
              <Badge
                variant="secondary"
                className="mb-4 bg-blue-50 text-brand-blue hover:bg-blue-100"
              >
                {currentPost.category}
              </Badge>

              <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6 leading-tight">
                {currentPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(currentPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {currentPost.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {currentPost.views.toLocaleString()} views
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center justify-between py-4 border-y border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 mr-2">Share:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="text-blue-600 hover:text-blue-700 p-2"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="text-blue-400 hover:text-blue-500 p-2"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="text-blue-700 hover:text-blue-800 p-2"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl md:p-12 shadow-card">
              <div
                className="prose prose-lg max-w-none font-body leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
                style={{
                  '--tw-prose-body': '#4b5563',
                  '--tw-prose-headings': '#1f2937',
                  '--tw-prose-bold': '#1f2937',
                  '--tw-prose-links': '#3b82f6',
                  '--tw-prose-code': '#dc2626',
                  '--tw-prose-pre-code': '#e5e7eb',
                  '--tw-prose-pre-bg': '#1f2937',
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-green">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 font-body mb-8 leading-relaxed">
              Let's discuss how our expertise can help bring your ideas to life.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-white text-brand-blue hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-xl"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
