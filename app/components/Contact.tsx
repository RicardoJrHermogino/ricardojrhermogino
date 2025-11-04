import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { contactInfo, socialLinks } from "../data/contact";

export function Contact() {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.sendForm(
        "service_1y8yjc3", // replace with your EmailJS Service ID
        "template_cswgyu7", // replace with your EmailJS Template ID
        e.target as HTMLFormElement,
        "JxrycaRVsQJppWwGh" // replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully! ✅", { id: toastId });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        id: toastId,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-gray-100">
      <Toaster position="bottom-center" theme="dark" richColors />


      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects.
            Let&apos;s discuss how we can work together!
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              {/* Name + Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="flex-1 px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
              />

              {/* Message */}
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 bg-white text-black text-lg py-3 rounded-md transition-colors ${
                  isSending
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Info + Socials + Availability */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let&apos;s connect
              </h3>
              <p className="text-gray-400 mb-6">
                I&apos;m always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and development.
              </p>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-gray-300">{<info.icon size={20} />}</div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-white hover:text-gray-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Follow me
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-700 rounded-md text-gray-300 hover:bg-white hover:text-black transition-all"
                  >
                    {<social.icon size={18} />}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                Availability
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                I&apos;m currently available for new projects and opportunities.
                My typical response time is within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
