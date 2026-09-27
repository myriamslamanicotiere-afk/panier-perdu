export default function Success() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-6 py-14 text-center">
      <p className="font-sans text-sm font-medium text-petrole">
        Panier Perdu
      </p>
      <h1 className="font-serif text-3xl text-encre sm:text-4xl">
        Paiement confirmé.
      </h1>
      <p className="text-lg text-encre/80">
        Merci. Vous allez recevoir un email dans les prochaines minutes avec
        les instructions pour connecter votre boutique.
      </p>
      <p className="text-sm text-encre/60">
        Si rien n&apos;arrive d&apos;ici 10 minutes, vérifiez vos courriers
        indésirables ou écrivez-nous.
      </p>
    </main>
  );
}
