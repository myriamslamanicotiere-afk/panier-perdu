"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(
        "Le paiement n'a pas pu démarrer. Réessayez dans un instant."
      );
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 sm:items-start">
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full sm:w-auto rounded-none bg-petrole px-8 py-4 text-lg font-semibold text-sable transition-colors hover:bg-encre disabled:opacity-60 active:bg-encre"
      >
        {loading ? "Redirection en cours…" : "Récupérer mes ventes perdues — 29€/mois"}
      </button>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
