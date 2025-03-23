import { Link } from "lucide-react"
import { useState } from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(1)

  const sections = [
    { id: 1, title: "Conditions of Use" },
    { id: 2, title: "Privacy Policy" },
    { id: 3, title: "Copyright" },
    { id: 4, title: "Communications" },
    { id: 5, title: "Applicable Law" },
    { id: 6, title: "Disputes" },
    { id: 7, title: "Comments, Reviews, and Emails" },
    { id: 8, title: "License and Site Access" },
    { id: 9, title: "User Account" },
  ]

  const handleSectionClick = (id) => {
    setActiveSection(id)
    // Scroll to section
    const element = document.getElementById(`section-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-zinc-900">
    <Header  />
    <div className="min-h-screen bg-zinc-900 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute text-center top-0 left-0 text-[10rem] font-bold text-zinc-800 opacity-20 whitespace-nowrap pointer-events-none">
        Terms of Service
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl text-center  mt-15 md:text-5xl font-bold mb-16">Terms of Service</h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Sidebar navigation */}
          <div className="md:w-1/4">
            <nav className="sticky top-8">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`text-left w-full py-1 border-l-4 pl-3 transition-colors ${
                        activeSection === section.id
                          ? "border-green-500 text-green-500"
                          : "border-transparent hover:border-green-500/50 hover:text-green-500/80"
                      }`}
                    >
                      {section.id}. {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main content */}
          <div className="md:w-3/4">
            <div className="space-y-12 pb-20">
              {/* Section 1 */}
              <section id="section-1">
                <h2 className="text-3xl font-bold text-green-500 mb-6">1. Conditions of Use</h2>
                <p className="text-zinc-300 leading-relaxed">
                  We will provide their services to you, which are subject to the conditions stated below in this
                  document. Every time you visit this website, use its services or make a purchase, you accept the
                  following conditions. This is why we urge you to read them carefully.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2">
                <h2 className="text-3xl font-bold text-green-500 mb-6">2. Privacy Policy</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Before you continue using our website we advise you to read our{" "}
                  <Link href="/privacy-policy" className="text-green-500 hover:underline">
                    privacy policy
                  </Link>{" "}
                  regarding our user data collection. It will help you better understand our practices.
                </p>
              </section>

              {/* Section 3 */}
              <section id="section-3">
                <h2 className="text-3xl font-bold text-green-500 mb-6">3. Copyright</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Content published on this website (digital downloads, images, texts, graphics, logos) is the property
                  of our website and/or its content creators and protected by international copyright laws. The entire
                  compilation of the content found on this website is exclusive property, with copyright authorship for
                  this compilation.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4">
                <h2 className="text-3xl font-bold text-green-500 mb-6">4. Communications</h2>
                <p className="text-zinc-300 leading-relaxed">
                  The entire communication with us is electronic. Every time you send us an email or visit our website,
                  you are going to be communicating with us. You hereby consent to receive communications from us. We
                  will continue to communicate with you by posting news and notices on our website and by sending you
                  emails.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5">
                <h2 className="text-3xl font-bold text-green-500 mb-6">5. Applicable Law</h2>
                <p className="text-zinc-300 leading-relaxed">
                  By visiting this website, you agree that the laws of our country, without regard to principles of
                  conflict laws, will govern these terms and conditions, or any dispute of any sort that might come
                  between us and you, or our business partners and associates.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6">
                <h2 className="text-3xl font-bold text-green-500 mb-6">6. Disputes</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Any dispute related in any way to your visit to this website or to products you purchase from us shall
                  be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such
                  courts.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7">
                <h2 className="text-3xl font-bold text-green-500 mb-6">7. Comments, Reviews, and Emails</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing
                  of intellectual property rights, invasive of privacy or injurious in any other way to third parties.
                  Content has to be free of software viruses, political campaigns, and commercial solicitation.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8">
                <h2 className="text-3xl font-bold text-green-500 mb-6">8. License and Site Access</h2>
                <p className="text-zinc-300 leading-relaxed">
                  We grant you a limited license to access and make personal use of this website. You are not allowed to
                  download or modify it. This may be done only with written consent from us.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9">
                <h2 className="text-3xl font-bold text-green-500 mb-6">9. User Account</h2>
                <p className="text-zinc-300 leading-relaxed">
                  If you are an owner of an account on this website, you are solely responsible for maintaining the
                  confidentiality of your private user details (username and password). You are responsible for all
                  activities that occur under your account or password.
                </p>
              </section>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                <button className="px-12 py-3 border-green-500 text-green-500 font-medium rounded hover:bg-green-500/10 transition-colors">
                  Decline
                </button>
                <button className="px-12 py-3 bg-green-500 text-zinc-900 font-medium rounded hover:bg-green-500 transition-colors">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow border accent */}
      <div className="absolute top-0 bottom-0 right-0 w-2 bggreen-500"></div>
    </div>
    <Footer />
    </div>
  )
}

