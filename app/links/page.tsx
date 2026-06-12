import SocialLinks from "@/components/ui/SocialLinks";
import ProfileImage from "@/components/ui/ProfileImage";

export default function LinksPage() {
  return (
    <main className="max-w-md mx-auto p-6 space-y-8">
      <section className="text-center space-y-3">
        <ProfileImage className="w-32 h-32 mx-auto" />
        <h1 className="text-2xl font-bold">Mateus Soares</h1>
        <p className="text-zinc-400">
          Desenvolvedor focado em evolução de microsserviços
        </p>
      </section>

      <section className="flex justify-center">
        <SocialLinks className="gap-4 text-zinc-300" iconSize={24} />
      </section>

      <section className="space-y-3">
        <a
          href="#"
          className="block w-full p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-brand transition-all text-center"
        >
          Meu Portfólio
        </a>
        <a
          href="#"
          className="block w-full p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-brand transition-all text-center"
        >
          Contato Profissional
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Meus Projetos</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-brand transition-colors cursor-pointer">
            <h3 className="font-bold text-brand">Nome do SaaS</h3>
            <p className="text-sm text-zinc-400">
              Breve descrição da solução que você criou.
            </p>
          </div>

          <div className="p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-brand transition-colors cursor-pointer">
            <h3 className="font-bold text-brand">Outro SaaS</h3>
            <p className="text-sm text-zinc-400">
              Evolução de microsserviços focada em X.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
