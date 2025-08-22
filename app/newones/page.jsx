"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight, Send } from "lucide-react";
import { toast } from "sonner";

export default function CareerPathSection() {
  const skills = [
    {
      id: "GenerativeAI",
      title: "Generative AI",
      description:
        "Create AI models that generate content like text, images, and code",
      example:
        "Build a ChatGPT-like assistant, create AI image generators like DALL-E, or develop code completion tools like GitHub Copilot",
    },
    {
      id: "AgenticAI",
      title: "Agentic AI",
      description:
        "Develop autonomous AI agents that can perform tasks independently",
      example:
        "Create AI agents that can browse the web, book appointments, manage emails, or automate customer service interactions",
    },
    {
      id: "ComputerNetworkingEnginner",
      title: "Computer Networking Engineer",
      description: "Design and manage network infrastructure and security systems",
      example:
        "Set up enterprise networks, configure firewalls, manage cloud infrastructure, or design secure communication protocols",
    },
    {
      id: "ProductManager",
      title: "Product Manager",
      description:
        "Lead product development from idea to launch and beyond",
      example:
        "Define product roadmaps, conduct user research, coordinate with engineering teams, and analyze market trends for successful product launches",
    },
  ];

  // states
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSkillSelect = (skillTitle) => {
    setSelectedSkill(skillTitle);
    setMessage(`I'm interested in learning more about ${skillTitle}.`);
  };

  const onSubmit = async () => {
    if (!name || !email || !message) {
      toast.error("⚠️ Please fill in all fields");
      return;
    }

    setIsLoading(true);
    toast.info("📤 Sending message...");

    try {
      const formData = new FormData();
      formData.append("access_key", "cd26d36f-3072-4816-be17-dcbfd029d1c5"); // ✅ Replace with your real key
      formData.append("name", name);
      formData.append("email", email);
      formData.append(
        "message",
        `Selected Skill: ${selectedSkill}\n\nMessage: ${message}`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setSelectedSkill("");
      } else {
        console.error("Web3Forms error:", data);
        toast.error(data.message || "❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("🌐 Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-900 p-8 rounded-2xl max-w-4xl mx-auto border border-gray-700 mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Choose Your Career Path
        </h2>
        <p className="text-gray-400">
          Explore different tech careers and get in touch to learn more
        </p>
      </div>

      {/* Skills Accordion */}
      <div className="space-y-4 mb-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-800 rounded-lg border border-gray-700"
          >
            <button
              onClick={() =>
                setExpandedSkill(expandedSkill === skill.id ? null : skill.id)
              }
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors rounded-lg"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
              {expandedSkill === skill.id ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedSkill === skill.id && (
              <div className="px-4 pb-4">
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-medium mb-2">
                    Real-world Examples:
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.example}
                  </p>
                </div>
                <button
                  onClick={() => handleSkillSelect(skill.title)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  I'm Interested in This
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {selectedSkill && (
            <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-3">
              <p className="text-blue-300 text-sm">
                <strong>Selected Interest:</strong> {selectedSkill}
              </p>
            </div>
          )}

          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Tell us about your interests and goals..."
              required
            />
          </div>

          <button
            onClick={onSubmit}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
}
