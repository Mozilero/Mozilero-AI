import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { BookOpen, FileText, Image, MessageCircle, PenLine, Sparkles, LogOut, LayoutDashboard, FolderOpen, CreditCard, Settings } from "lucide-react";

const shortcuts = [
  { icon: MessageCircle, name: "AI Chat", detail: "Your general AI assistant" },
  { icon: PenLine, name: "AI Writing", detail: "Draft and refine content" },
  { icon: Image, name: "Image Generator", detail: "Create visual concepts" },
  { icon: BookOpen, name: "Homework Help", detail: "Learn step by step" },
  { icon: FileText, name: "Document Summary", detail: "Understand long documents" },
  { icon: Sparkles, name: "Business Names", detail: "Explore brand ideas" }
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return <main className="dashboard"><aside className="sidebar"><Link href="/" className="brand"><span className="brand-mark">M</span> MOZILERO</Link><div className="side-label">WORKSPACE</div><a className="side-link active"><LayoutDashboard size={17}/> Dashboard</a><a className="side-link"><MessageCircle size={17}/> AI Chat</a><a className="side-link"><FolderOpen size={17}/> My Projects</a><div className="side-label">ACCOUNT</div><a className="side-link"><CreditCard size={17}/> Buy Credits</a><a className="side-link"><Settings size={17}/> Settings</a><form action="/auth/signout" method="post" style={{marginTop:32}}><button className="side-link" style={{border:0,background:"transparent",cursor:"pointer"}}><LogOut size={17}/> Sign out</button></form></aside><section className="dash-main"><div className="dash-head"><div><h1>Welcome to your workspace</h1><p>{user.email} · Your AI tools, all in one place.</p></div><span className="eyebrow">FREE ACCOUNT</span></div><div className="metric-grid"><div className="metric"><small>Available credits</small><strong>—</strong><small>Credit wallet will activate with Phase 4 billing.</small></div><div className="metric"><small>Current plan</small><strong>Free</strong><small>Starter access</small></div><div className="metric"><small>Projects</small><strong>0</strong><small>Your saved work will appear here.</small></div></div><div className="dash-panel"><h2>Explore your AI tools</h2><p style={{fontSize:13,color:"#68738d"}}>The workspace foundation is ready. Tool integrations are being added in subsequent development phases.</p><div className="cards" style={{gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",marginTop:20}}>{shortcuts.map(item=><article className="card" key={item.name}><div className="tool-icon"><item.icon size={19}/></div><h3>{item.name}</h3><p>{item.detail}</p><span style={{display:"inline-block",marginTop:13,fontSize:11,color:"#7b849a"}}>Coming in next phase</span></article>)}</div></div></section></main>;
}
