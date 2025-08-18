
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScdz_QyxNiX9VD2nqR0MmOspDV3Ms9mQ8Mpva7-ShNIP4zPwg/formResponse';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const data = new FormData();
    // Replace 'entry.X' with your actual Google Form field entry IDs
    data.append('entry.1635521394', formData.name);
    data.append('entry.1179498991', formData.email);
    data.append('entry.443817391', formData.message);

    fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
      .then(() => {
        alert('Form submitted successfully!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => alert('Error submitting form.'));


  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 font-body leading-relaxed">
              Have questions or ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-800 mb-1">
                        India
                      </h3>
                      <p className="text-gray-600 font-body">
                        <a
                          href="https://maps.app.goo.gl/6PhbCa7zLZkA7NpAA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-brand-blue"
                        >
                          2 - Rameshwar Shopping, Bapa Sitaram Chowk,<br />
                          Nava Naroda, Ahmedabad - 382345
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-800 mb-1">
                        USA
                      </h3>
                      <p className="text-gray-600 font-body">
                        <a
                          href="https://maps.app.goo.gl/BdsNJPkXi5vh7Vaw8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-brand-blue"
                        >
                          515 Mullica hill rd, apt h215, glassboro, nj -08028
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-800 mb-1">
                        Phone Number
                      </h3>
                      <p className="text-gray-600 font-body">
                        <a href="tel:+919558693432" className="hover:underline text-brand-blue">+91 9558693432</a>
                        <br />
                        <a href="tel:+917043524203" className="hover:underline text-brand-blue">+91 7043524203</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-800 mb-1">
                        Email Address
                      </h3>
                      <p className="text-gray-600 font-body">
                        <a href="mailto:contact@teckysoft.com" className="hover:underline text-brand-blue">contact@teckysoft.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-800 mb-1">
                        Working Hours
                      </h3>
                      <p className="text-gray-600 font-body">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 4:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-500 font-body">
                  Interactive Map will be embedded here
                </p>
              </div> */}
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-gray-800">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl py-3 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
