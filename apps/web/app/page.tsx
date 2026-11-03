import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, FileText, Image, MessageCircle, PenLine, Sparkles, WandSparkles, Languages, Presentation } from "lucide-react";

const tools = [
  { icon: PenLine, title: "AI Writing Assistant", text: "Draft, rewrite, proofread and improve essays, reports, emails and professional content." },
  { icon: Image, title: "AI Image Generator", text: "Turn text prompts into original visual concepts, illustrations and creative assets." },
  { icon: BriefcaseBusiness, title: "CV & Resume Builder", text: "Create polished, ATS-friendly CVs and tailored cover letters." },
  { icon: BookOpen, title: "Homework Assistant", text: "Understand difficult topics with guided, step-by-step explanations." },
  { icon: FileText, title: "Document Summariser", text: "Extract key ideas and useful notes from lengthy documents." },
  { icon: Sparkles, title: "Business Name Generator", text: "Explore brand names, slogans and positioning ideas for a new venture." },
  { icon: MessageCircle, title: "AI Chat", text: "Work through questions, ideas and tasks with a versatile AI assistant." },
  { icon: Languages, title: "AI Translator", text: "Translate and refine content for different languages and audiences." },
  { icon: Presentation, title: "More productivity tools", text: "Business plans, marketing copy, lesson plans and presentations." }
];

export default function Home() {
  return <main>
    <header className="container nav">
      <Link href="/" className="brand"><span className="brand-mark">M</span> MOZILERO AI</Link>
      <nav className="nav-links"><a href="#tools">AI Tools</a><a href="#how">How it works</a><a href="#plans">Plans</a><a href="#faq">FAQ</a></nav>
      <div className="nav-actions"><Link className="btn btn-outline" href="/login">Log in</Link><Link className="btn btn-primary" href="/signup">Get started <ArrowRight size={15}/></Link></div>
    </header>
    <section className="hero"><div className="container hero-grid">
      <div><span className="eyebrow"><WandSparkles size={14}/> ONE WORKSPACE. MANY POSSIBILITIES.</span>
        <h1>Make your next big idea <span className="gradient-text">happen with AI.</span></h1>
        <p>Write better, learn faster, create original visuals and move your work forward. MOZILERO AI brings practical, affordable AI tools together in one simple workspace.</p>
        <div className="hero-cta"><Link href="/signup" className="btn btn-primary">Start creating free <ArrowRight size={16}/></Link><a href="#tools" className="btn btn-outline">Explore AI tools</a></div>
        <div className="trust"><span>✓ Simple to use</span><span>✓ Flexible plans</span><span>✓ Your work in one place</span></div>
      </div>
      <div className="preview"><div className="preview-top"><span>✦ Your AI workspace</span><span className="status">Workspace preview</span></div><div className="tool-preview">
        {tools.slice(0,4).map((tool) => <div className="tool-tile" key={tool.title}><div className="tool-icon"><tool.icon size={18}/></div><b>{tool.title}</b><small>Explore tool →</small></div>)}
      </div><div style={{marginTop:16,padding:14,borderRadius:13,background:"#f7f8fc",fontSize:12,color:"#69738b"}}>Your ideas, drafts and projects — organised in one place.</div></div>
    </div></section>
    <section className="section" id="tools"><div className="container"><div className="section-heading"><span className="eyebrow">BUILT FOR EVERYDAY WORK</span><h2>Everything you need to <span className="gradient-text">get more done</span></h2><p>Useful AI tools for students, creators, professionals and growing businesses.</p></div><div className="cards">{tools.map((tool) => <article className="card" key={tool.title}><div className="tool-icon"><tool.icon size={20}/></div><h3>{tool.title}</h3><p>{tool.text}</p></article>)}</div></div></section>
    <section className="section section-soft" id="how"><div className="container"><div className="section-heading"><span className="eyebrow">A SIMPLE WORKFLOW</span><h2>From prompt to progress</h2><p>Choose a tool, tell it what you need and refine the result until it works for you.</p></div><div className="cards"><article className="card"><div className="tool-icon">01</div><h3>Choose your tool</h3><p>Start with writing, learning, images, documents or a business task.</p></article><article className="card"><div className="tool-icon">02</div><h3>Describe your goal</h3><p>Enter instructions and upload supported material when the tool allows it.</p></article><article className="card"><div className="tool-icon">03</div><h3>Review and use</h3><p>Improve the output, save your work and export it where available.</p></article></div></div></section>
    <section className="section" id="plans"><div className="container"><div className="section-heading"><span className="eyebrow">PRICING THAT CAN GROW WITH YOU</span><h2>Start small. Scale when ready.</h2><p>Plan prices and usage allowances will be published after payment and AI costs are configured.</p></div><div className="plans"><article className="plan"><h3>Free</h3><p>Explore essential tools and get started.</p><div className="price">₦0 <small>/ always</small></div><ul><li>Limited AI usage</li><li>Selected starter tools</li><li>Personal workspace</li></ul><Link className="btn btn-outline full" href="/signup">Create free account</Link></article><article className="plan featured"><span className="eyebrow">COMING SOON</span><h3>Pro</h3><p>More capacity for regular individual work.</p><div className="price">Coming soon</div><ul><li>Higher usage allowances</li><li>Advanced tools as enabled</li><li>Expanded project history</li></ul><Link className="btn btn-primary full" href="/signup">Join the platform</Link></article><article className="plan"><h3>Business</h3><p>Shared tools for teams and organisations.</p><div className="price">Coming soon</div><ul><li>Team workspace</li><li>Centralised billing</li><li>Usage analytics</li></ul><Link className="btn btn-outline full" href="/signup">Get started</Link></article></div></div></section>
    <section className="section section-soft" id="faq"><div className="container"><div className="section-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>Frequently asked questions</h2></div><div className="cards"><article className="card"><h3>Is MOZILERO AI free?</h3><p>A free account is planned with limited usage. Paid plans will be enabled after billing configuration and testing.</p></article><article className="card"><h3>Are AI results always correct?</h3><p>No. AI-generated content can contain errors. Review outputs before relying on them or publishing them.</p></article><article className="card"><h3>Can I use it on my phone?</h3><p>The website is responsive. A companion Android and iOS app is included in the project roadmap.</p></article></div></div></section>
    <footer className="footer"><div className="container footer-row"><span>© {new Date().getFullYear()} MOZILERO AI. Imagine. Create. Write. Innovate.</span><span>Built for ideas that move forward.</span></div></footer>
  </main>;
}
