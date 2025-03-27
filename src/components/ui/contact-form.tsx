import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '36af63d4-1a71-4a59-bf59-e75fd297a524',
          ...formData
        })
      });

      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 relative">
      {showSuccess && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
          Message sent successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <input 
          type="hidden" 
          name="access_key" 
          value="36af63d4-1a71-4a59-bf59-e75fd297a524"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-shaheen-900">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="focus-visible:ring-shaheen-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-shaheen-900">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
              className="focus-visible:ring-shaheen-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-shaheen-900">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your phone number"
            className="focus-visible:ring-shaheen-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-shaheen-900">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            rows={5}
            className="focus-visible:ring-shaheen-500"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-shaheen-500 hover:bg-shaheen-600 transition-all duration-300"
          >
            <Send size={16} className="mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <Phone size={18} className="text-shaheen-600" />
            <span className="text-sm">Or call us at</span>
            <a href="tel:+923109205439" className="text-shaheen-600 font-medium hover:underline">
              +92 310 9205439
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
