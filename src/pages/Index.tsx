import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { 
  PartyPopper, 
  Calendar, 
  Camera, 
  Music, 
  UtensilsCrossed, 
  Building2, 
  Heart, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Star,
  Users,
  Award,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="Red Devils Event Management" 
              className="h-14 w-auto"
            />
            <div className="flex flex-col hidden sm:flex">
              <span className="font-bold text-lg leading-tight">Red Devils</span>
              <span className="text-xs text-muted-foreground">Event Management Pvt Ltd</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Kolkata's Premier Event Management
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Making Your</span>
              <br />
              <span>Dreams Come</span>
              <br />
              <span className="text-primary">True</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              From grand weddings to corporate galas, we transform your vision into 
              unforgettable experiences. 15+ years of excellence in event management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                Plan Your Event
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground animate-float">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur">
                  <Calendar className="w-10 h-10 mb-3" />
                  <div className="font-semibold">Weddings</div>
                  <div className="text-sm opacity-80">Royal celebrations</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur mt-8">
                  <Building2 className="w-10 h-10 mb-3" />
                  <div className="font-semibold">Corporate</div>
                  <div className="text-sm opacity-80">Business events</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur -mt-4">
                  <Heart className="w-10 h-10 mb-3" />
                  <div className="font-semibold">Birthdays</div>
                  <div className="text-sm opacity-80">Celebrations</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur mt-4">
                  <Music className="w-10 h-10 mb-3" />
                  <div className="font-semibold">Parties</div>
                  <div className="text-sm opacity-80">Nightlife & more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl h-48 flex items-center justify-center">
                <Award className="w-20 h-20 text-primary-foreground opacity-80" />
              </div>
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Events Completed</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl h-48 flex items-center justify-center">
                <Users className="w-20 h-20 text-primary-foreground opacity-80" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium">
              <Heart className="w-4 h-4" />
              About Red Devils
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting <span className="text-primary">Unforgettable</span> Moments
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Red Devils Event Management Pvt Ltd has been the premier event management 
              company in Kolkata since 2009. We specialize in creating extraordinary 
              experiences that leave lasting impressions.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Our team of passionate professionals brings together creativity, precision, 
              and attention to detail to transform your vision into reality. From intimate 
              gatherings to grand celebrations, we handle every aspect of event management 
              with excellence and dedication.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Licensed & Insured",
                "24/7 Support",
                "Custom Themes",
                "Expert Team"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              Learn More About Us
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding solutions from venue selection to decoration, catering, and entertainment. We make your special day truly magical.",
      features: ["Venue Selection", "Theme Decoration", "Catering Service", "Entertainment"]
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional corporate event management including conferences, product launches, team buildings, and annual galas.",
      features: ["Conferences", "Product Launches", "Team Buildings", "Award Ceremonies"]
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Creative and exciting birthday celebrations for all ages with customized themes, games, and entertainment.",
      features: ["Kids Parties", "Adult Parties", "Themed Parties", "Surprise Events"]
    },
    {
      icon: Music,
      title: "Live Concerts",
      description: "End-to-end concert and music event management with top-tier artists, sound systems, and stage production.",
      features: ["Artist Booking", "Sound & Lighting", "Stage Setup", "Security"]
    },
    {
      icon: UtensilsCrossed,
      title: "Catering Services",
      description: "Exquisite multi-cuisine catering for all occasions with expert chefs and premium ingredients.",
      features: ["Multi-Cuisine", "Live Counters", "Royal Thali", "Custom Menus"]
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Professional photography and videography services to capture every precious moment of your event.",
      features: ["Wedding Films", "Photo Booths", "Drone Shots", "Album Design"]
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive event management solutions tailored to make your occasions 
            extraordinary and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const Gallery = () => {
  const galleryItems = [
    { title: "Royal Wedding", category: "Wedding", color: "from-pink-500 to-rose-500" },
    { title: "Corporate Gala", category: "Corporate", color: "from-blue-500 to-indigo-500" },
    { title: "Birthday Bash", category: "Birthday", color: "from-purple-500 to-violet-500" },
    { title: "Music Festival", category: "Concert", color: "from-orange-500 to-amber-500" },
    { title: "Product Launch", category: "Corporate", color: "from-cyan-500 to-teal-500" },
    { title: "Anniversary", category: "Celebration", color: "from-red-500 to-pink-500" },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest creations and see how we transform events into 
            unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <span className="text-sm font-medium mb-2 opacity-80">{item.category}</span>
                <h3 className="text-2xl font-bold text-center">{item.title}</h3>
                <Button 
                  variant="outline" 
                  className="mt-4 border-white text-white hover:bg-white hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Gallery
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content: "Red Devils made our wedding absolutely magical! Every detail was perfect, from the decorations to the coordination. Highly recommend!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "CEO, Tech Solutions",
      content: "Our annual corporate gala was flawlessly executed. Professional, creative, and attentive to every detail. True experts in event management.",
      rating: 5
    },
    {
      name: "Anita Das",
      role: "Mother of the Bride",
      content: "They transformed our venue into a fairytale setting. Our guests are still talking about the beautiful wedding we had. Thank you, Red Devils!",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                <Phone className="w-4 h-4" />
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Create Something <span className="text-primary">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to plan your next event? Get in touch with us and let's start 
                creating unforgettable memories together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Office</h3>
                  <p className="text-muted-foreground">
                    New Town AA-III<br />
                    Kolkata 700156, West Bengal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+918442980101" className="hover:text-primary transition-colors">+91-844-298-0101</a><br />
                    <a href="tel:+919836180680" className="hover:text-primary transition-colors">+91-9836-180-680</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@reddevils.co.in" className="hover:text-primary transition-colors">info@reddevils.co.in</a><br />
                    <a href="mailto:bookings@reddevils.co.in" className="hover:text-primary transition-colors">bookings@reddevils.co.in</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="outline" className="rounded-full">
                <Globe className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Globe className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Event Type</label>
                <select className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="concert">Concert/Live Show</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Event Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tell us about your event</label>
                <textarea
                  rows={4}
                  placeholder="Share your vision, requirements, and any special requests..."
                  className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                Submit Inquiry
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-background border-t py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Red Devils Event Management" 
                className="h-14 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Red Devils</span>
                <span className="text-xs text-muted-foreground">Event Management Pvt Ltd</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Creating extraordinary events and unforgettable experiences. 
              Your vision, our expertise - together we make magic happen.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Globe className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Globe className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['About Us', 'Our Services', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <a key={link} href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="space-y-2">
              {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Catering', 'Photography'].map((link) => (
                <a key={link} href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Red Devils Event Management Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  useSeoMeta({
    title: 'Red Devils Event Management Pvt Ltd | Kolkata\'s Premier Event Planners',
    description: 'Transform your dreams into unforgettable experiences. Kolkata\'s leading event management company specializing in weddings, corporate events, birthday parties, and more. Contact: info@reddevils.co.in',
    ogTitle: 'Red Devils Event Management Pvt Ltd | Kolkata\'s Premier Event Planners',
    ogDescription: 'Transform your dreams into unforgettable experiences. Kolkata\'s leading event management company specializing in weddings, corporate events, birthday parties, and more.',
    ogUrl: 'https://reddevils.co.in',
    ogSiteName: 'Red Devils Event Management',
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
