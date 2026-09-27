import CheckoutButton from "./components/CheckoutButton";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-14 sm:py-20">
      <section className="flex flex-col gap-6">
        <p className="font-sans text-sm font-medium text-petrole">
          Panier Perdu
        </p>
        <h1 className="font-serif text-4xl leading-tight text-encre sm:text-5xl">
          Chaque mois, des clients remplissent leur panier et partent sans
          payer.
        </h1>
        <p className="max-w-xl text-lg text-encre/80">
          Panier Perdu leur envoie deux relances écrites et personnalisées,
          automatiquement — sans que vous ayez à y penser.
        </p>
        <div className="pt-4">
          <CheckoutButton />
        </div>
        <p className="text-sm text-encre/60">
          Sans engagement. Annulable en un clic.
        </p>
      </section>

      <hr className="border-encre/15" />

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-encre">
          70% des paniers en ligne sont abandonnés avant paiement.
        </h2>
        <p className="text-encre/80">
          Sur une boutique qui fait 40 commandes par mois, cela représente
          souvent plus de 90 visiteurs prêts à acheter, mais jamais relancés.
          Les grandes solutions de relance sont vendues au volume et
          inaccessibles à ce niveau de chiffre d&apos;affaires. Panier Perdu
          est fait pour cette taille de boutique.
        </p>
      </section>

      <hr className="border-encre/15" />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl text-encre">
            Deux relances, au bon moment.
          </h3>
          <p className="text-encre/80">
            Un premier message peu après l&apos;abandon, un second quelques
            jours plus tard avec un code de réduction si besoin. Chaque
            message est personnalisé avec le contenu réel du panier.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl text-encre">
            Connecté à votre boutique en quelques minutes.
          </h3>
          <p className="text-encre/80">
            Panier Perdu se branche directement à votre boutique Shopify et
            lit les paniers abandonnés dès qu&apos;ils apparaissent. Aucune
            configuration technique de votre côté.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl text-encre">
            Un seul chiffre à surveiller.
          </h3>
          <p className="text-encre/80">
            Le montant récupéré grâce aux relances s&apos;affiche en euros,
            en temps réel, sur votre tableau de bord.
          </p>
        </div>
      </section>

      <hr className="border-encre/15" />

      <section className="flex flex-col gap-6 pb-8">
        <h2 className="font-serif text-2xl text-encre">
          29€ par mois, relances illimitées.
        </h2>
        <CheckoutButton />
      </section>
    </main>
  );
}
