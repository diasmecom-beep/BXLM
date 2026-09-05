"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site, entryPoints, training } from "@/lib/content";

type EntryPoint = (typeof entryPoints)[number];
type View = "info" | "form" | "sent";

export default function PedagogyCards() {
  const [active, setActive] = useState<EntryPoint | null>(null);
  const [view, setView] = useState<View>("info");
  const [formatId, setFormatId] = useState("");

  useEffect(() => {
    if (!active) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  function openInfo(entry: EntryPoint) {
    setActive(entry);
    setView("info");
    setFormatId("");
  }

  function openForm(entry: EntryPoint, fmt: string) {
    setActive(entry);
    setFormatId(fmt);
    setView("form");
  }

  return (
    <>
      <div className="cards">
        {entryPoints.map((c) => (
          <div className="card" key={c.id}>
            <span className="k">{c.k}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <p className="q">{c.question}</p>
            <div className="card-actions">
              <button
                type="button"
                className="card-link"
                onClick={() => openInfo(c)}
              >
                En savoir plus
              </button>
              <button
                type="button"
                className="card-link card-link-accent"
                onClick={() => openForm(c, "")}
              >
                Réserver
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActive(null)}
              aria-label="Fermer"
            >
              ×
            </button>

            {view === "info" && (
              <InfoView
                entry={active}
                onReserve={(fmt) => openForm(active, fmt)}
              />
            )}
            {view === "form" && (
              <FormView
                entry={active}
                formatId={formatId}
                onBack={() => setView("info")}
                onSent={() => setView("sent")}
              />
            )}
            {view === "sent" && (
              <SentView entry={active} onBack={() => setView("form")} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function InfoView({
  entry,
  onReserve,
}: {
  entry: EntryPoint;
  onReserve: (formatId: string) => void;
}) {
  return (
    <div>
      <p className="eyebrow modal-eyebrow">{entry.k}</p>
      <h3 id="modal-title" className="modal-title">
        {entry.title}
      </h3>
      <p className="modal-lead">{training.intro}</p>

      <div className="price-grid">
        {training.formats.map((f) => (
          <div className="price-card" key={f.id}>
            <div className="price-card-head">
              <h4>{f.name}</h4>
              <span className="price-tag">{f.price}</span>
            </div>
            <p className="price-meta">
              {f.duration} · {f.audience}
            </p>
            <p className="price-details">{f.details}</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => onReserve(f.id)}
            >
              Réserver cette formule
            </button>
          </div>
        ))}
      </div>

      <ul className="logistics-list">
        {training.logistics.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <p className="modal-note">{training.note}</p>
    </div>
  );
}

function FormView({
  entry,
  formatId,
  onBack,
  onSent,
}: {
  entry: EntryPoint;
  formatId: string;
  onBack: () => void;
  onSent: () => void;
}) {
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fmt, setFmt] = useState(formatId);
  const [participants, setParticipants] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formatLabel =
      training.formats.find((f) => f.id === fmt)?.name ??
      "à définir ensemble";
    const subject = `BXLM — demande de formation : ${entry.title}`;
    const body = [
      "Bonjour,",
      "",
      `Nous souhaitons organiser un atelier ou une formation BXLM autour de la porte d’entrée « ${entry.title} ».`,
      "",
      `- Organisme / établissement : ${org}`,
      `- Personne de contact : ${contact}`,
      `- E-mail : ${email}`,
      `- Téléphone : ${phone || "—"}`,
      `- Formule souhaitée : ${formatLabel}`,
      `- Nombre de participants : ${participants || "—"}`,
      `- Dates souhaitées : ${dates || "à convenir"}`,
      "",
      "Message complémentaire :",
      message || "—",
      "",
      "Cordialement,",
    ].join("\n");

    window.location.href = `mailto:${site.orderEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    onSent();
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <p className="eyebrow modal-eyebrow">{entry.k}</p>
      <h3 id="modal-title" className="modal-title">
        Réserver — {entry.title}
      </h3>
      <p className="modal-lead">
        Ce formulaire ouvre votre messagerie avec une demande déjà rédigée, à
        l’attention des auteurs.
      </p>

      <div className="form-grid">
        <label className="form-field">
          <span>Organisme / établissement *</span>
          <input
            required
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </label>
        <label className="form-field">
          <span>Personne de contact *</span>
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label className="form-field">
          <span>E-mail *</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-field">
          <span>Téléphone</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="form-field">
          <span>Formule souhaitée</span>
          <select value={fmt} onChange={(e) => setFmt(e.target.value)}>
            <option value="">À me conseiller</option>
            {training.formats.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} — {f.price}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field">
          <span>Nombre de participants</span>
          <input
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            placeholder="ex. 25 élèves"
          />
        </label>
        <label className="form-field form-field-wide">
          <span>Dates souhaitées</span>
          <input
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="ex. semaine du 12 janvier"
          />
        </label>
        <label className="form-field form-field-wide">
          <span>Message complémentaire</span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-outline" onClick={onBack}>
          ← Voir les tarifs
        </button>
        <button type="submit" className="btn btn-primary">
          Envoyer la demande
        </button>
      </div>
    </form>
  );
}

function SentView({ entry, onBack }: { entry: EntryPoint; onBack: () => void }) {
  return (
    <div>
      <p className="eyebrow modal-eyebrow">{entry.k}</p>
      <h3 id="modal-title" className="modal-title">
        Demande prête à l’envoi
      </h3>
      <p className="modal-lead">
        Votre logiciel de messagerie devrait s’être ouvert avec la demande
        pré-remplie, adressée à <strong>{site.orderEmail}</strong>. Si rien ne
        s’est ouvert, écrivez-nous directement à cette adresse en précisant la
        porte d’entrée « {entry.title} ».
      </p>
      <button type="button" className="btn btn-outline" onClick={onBack}>
        ← Revenir au formulaire
      </button>
    </div>
  );
}
