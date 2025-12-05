import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare
} from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const form = useRef();

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields!'
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address!'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const public_key = 'cYdtN1vpKahyud09I';
      const service_id = 'service_k3iknus';
      const template_id = 'template_gdxe0na';

      // sendForm: (serviceID, templateID, htmlFormElement, publicKey)
      await emailjs.sendForm(service_id, template_id, form.current, public_key);

      setStatus({
        type: 'success',
        message: 'Message sent! We will get back to you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      color: 'from-green-500 to-emerald-500',
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@rockerzpizza.com', 'support@rockerzpizza.com'],
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:hello@rockerzpizza.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Sector 29, Gurugram', 'Haryana, India - 122001'],
      color: 'from-red-500 to-orange-500',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 10 AM - 11 PM', 'Sat-Sun: 10 AM - 12 AM'],
      color: 'from-purple-500 to-pink-500',
      action: null
    }
  ];

  //   const sendEmail = (e) => {
  //   e.preventDefault();

  //   const public_key = 'cYdtN1vpKahyud09I'
  //   const service_id = 'service_k3iknus'
  //   const template_id = 'template_gdxe0na'

  //   emailjs
  //     .sendForm(service_id, template_id, form.current, {
  //       publicKey: public_key,
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-200">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => info.action && window.open(info.action, '_blank')}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} p-3 mb-4 group-hover:animate-pulse`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        

        <form ref={form} onSubmit={handleSubmit}>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="animate-fade-in-up delay-400">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a <span className="text-orange-400">Message</span>
              </h3>

              {status.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50' 
                    : 'bg-red-500/20 border border-red-500/50'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  )}
                  <p className={status.type === 'success' ? 'text-green-300' : 'text-red-300'}>
                    {status.message}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-orange-600 hover:to-red-600 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 active:scale-95'
                    }`}
                    >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-600">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2873488904437!2d77.0649!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sSector%2029%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why <span className="text-orange-400">Contact Us?</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                    <p className="text-gray-400 text-sm">We respond to all queries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Customer Support</h4>
                    <p className="text-gray-400 text-sm">Dedicated team to solve your problems</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Feedback Valued</h4>
                    <p className="text-gray-400 text-sm">Your suggestions help us improve</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multiple Channels</h4>
                    <p className="text-gray-400 text-sm">Reach us via phone, email, or form</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            </form>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;