import {
  Code,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { useEffect, useRef } from "react";


export const ContactSection = () => {

    const timeoutRef = useRef(null);

  
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [formStatus, setFormStatus] = useState({
  submitting: false,
  success: false,
  error: false,
  message: "",
});

const handleinputchange = (e) =>{
  const { name, value } = e.target;
  setFormData((prev) =>({
   ...prev,
   [name]: value,
  }))
}

  const handleSubmit  = async (e) =>{
    e.preventDefault();
    
    setFormStatus({
       submitting: true,
       success: false,
       error: false,
       message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus({
       submitting: false,
       success: true,
       error: false,
       message: "Thank you for your message! I will get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      })
      timeoutRef.current = setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          message: "",
        }));
      }, 5000)
    } 
    catch (error) {
      setFormStatus({
       submitting: false,
       success: false,
       error: true,
       message: "Failed to send message. Please try again.",
      })
    }

  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                   anmolgoyal7817@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 78170-46824
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                   Delhi, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/anmolgoyal7817" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/GoyalAnnoy" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/__anmolgoyal__18" target="_blank">
                  <Instagram />
                </a>
                <a href="https://leetcode.com/u/a-goyal/" target="_blank">
                  <Code />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                  onChange={handleinputchange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="write your email"
                  onChange={handleinputchange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={handleinputchange}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {formStatus.message && (
                 <div
                     className={`mt-4 p-4 rounded text-center font-medium transition
                   ${formStatus.success
                     ? "bg-green-700 border-green-800 text-green-100"
                      : "bg-red-100 border border-red-300 text-red-600"}
                       `}
                      >
    {formStatus.message}
  </div>
)}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};