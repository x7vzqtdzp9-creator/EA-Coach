import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject
            ? `EA Coach — ${form.subject}`
            : "EA Coach — Nouvelle demande de contact",
          message: form.message,
          from_name: "EA Coach — Formulaire de contact",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(
          "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email."
        );
      }
    } catch {
      setError(
        "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez."
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.10_78)]/20 flex items-center justify-center mx-auto mb-4">
          <Mail className="text-[oklch(0.72_0.10_78)]" size={28} />
        </div>
        <h3 className="font-display text-2xl text-white mb-2">
          Message envoyé !
        </h3>
        <p className="text-white/60 font-body">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block font-nav text-white/60 mb-2"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            NOM COMPLET *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200"
            style={{ fontSize: "0.95rem" }}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label
            className="block font-nav text-white/60 mb-2"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            EMAIL *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200"
            style={{ fontSize: "0.95rem" }}
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div>
        <label
          className="block font-nav text-white/60 mb-2"
          style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
        >
          SUJET
        </label>
        <select
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200"
          style={{ fontSize: "0.95rem" }}
        >
          <option value="" className="bg-[oklch(0.22_0.06_250)]">
            Sélectionnez un sujet
          </option>
          <option value="entreprise" className="bg-[oklch(0.22_0.06_250)]">
            Coaching d'entreprise
          </option>
          <option value="individuel" className="bg-[oklch(0.22_0.06_250)]">
            Coaching individuel
          </option>
          <option value="equipe" className="bg-[oklch(0.22_0.06_250)]">
            Coaching d'équipe
          </option>
          <option value="solidaire" className="bg-[oklch(0.22_0.06_250)]">
            Accompagnement solidaire
          </option>
          <option value="autre" className="bg-[oklch(0.22_0.06_250)]">
            Autre demande
          </option>
        </select>
      </div>

      <div>
        <label
          className="block font-nav text-white/60 mb-2"
          style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
        >
          MESSAGE *
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200 resize-none"
          style={{ fontSize: "0.95rem" }}
          placeholder="Décrivez votre situation et vos besoins..."
        />
      </div>

      {error && (
        <p className="font-body text-red-400 text-sm text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          fontWeight: 700,
        }}
      >
        {sending ? "ENVOI EN COURS..." : "ENVOYER MON MESSAGE"}
        {!sending && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
