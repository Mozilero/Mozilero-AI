"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [email,setEmail] = useState(""); const [password,setPassword] = useState("");
  const [busy,setBusy] = useState(false); const [message,setMessage] = useState("");
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const supabase = createClient();
      const result = mode === "signup"
        ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } })
        : await supabase.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (mode === "signup" && !result.data.session) setMessage("Check your email for a verification link before signing in.");
      else router.push("/dashboard");
      router.refresh();
    } catch (err) { setMessage(err instanceof Error ? err.message : "Authentication failed. Please try again."); }
    finally { setBusy(false); }
  }
  return <div className="auth-wrap"><section className="auth-card"><Link href="/" className="brand"><span className="brand-mark">M</span> MOZILERO AI</Link><h1>{mode === "login" ? "Welcome back" : "Create your account"}</h1><p>{mode === "login" ? "Sign in to continue to your AI workspace." : "Get started with your personal AI workspace."}</p><form onSubmit={submit}><div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div><div className="field"><label htmlFor="password">Password</label><input id="password" type="password" minLength={8} autoComplete={mode === "login" ? "current-password" : "new-password"} required value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters"/></div><button className="btn btn-primary full" disabled={busy}>{busy ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}</button></form>{message && <div className="message" role="status">{message}</div>}<p style={{marginTop:22}}>{mode === "login" ? "New to MOZILERO AI? " : "Already have an account? "}<Link href={mode === "login" ? "/signup" : "/login"} style={{color:"#5b4bc4",fontWeight:700}}>{mode === "login" ? "Create an account" : "Sign in"}</Link></p><p style={{fontSize:11}}>By continuing, you agree to use the platform responsibly. Terms and privacy documents will be published before public launch.</p></section></div>;
}
