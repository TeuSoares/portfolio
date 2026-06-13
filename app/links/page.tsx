import { CodeXml, ArrowUpRight, Mail, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "@/components/ui/ProfileImage";
import SocialLinks from "@/components/ui/SocialLinks";
import { ElementType } from "react";

interface NavLink {
  label: string;
  href: string;
  icon?: ElementType<{ size?: number; className?: string }>;
}

interface ProjectItem {
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: ElementType<{ size?: number; className?: string }>;
}

const LINKS: NavLink[] = [
  { label: "Meu Portfólio", href: "/", icon: LayoutGrid },
  {
    label: "Newsletter",
    href: "https://mateusoaresz.substack.com/",
    icon: Mail,
  },
];

const PROJECTS: ProjectItem[] = [];

export default function LinksPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-12 min-h-screen">
      <header className="bg-bg-secondary p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-4 mb-8 backdrop-blur-sm">
        <div className="w-28 h-28 rounded-full">
          <ProfileImage className="w-full h-full rounded-full" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Mateus Soares
          </h1>
          <p className="text-zinc-200 mt-2 flex items-center justify-center gap-2">
            <CodeXml
              size={16}
              className="text-brand hidden min-[500px]:block"
            />
            Transformo ideias em realidade através do código.
          </p>
        </div>
        <SocialLinks
          className="gap-6 text-zinc-300 hover:text-white transition-colors"
          iconSize={24}
        />
      </header>

      {LINKS.length > 0 && (
        <section className="mb-10 space-y-3">
          {LINKS.map((link, index) => {
            const isExternal = link.href.startsWith("http");
            const Component = isExternal ? "a" : Link;

            return (
              <Component
                key={index}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 bg-bg-secondary border border-white/10 rounded-2xl hover:border-brand/50 hover:bg-white/3 transition-all duration-300 group"
              >
                <div className="p-2 bg-zinc-950 rounded-xl border border-white/10 text-brand">
                  {link.icon && <link.icon size={20} />}
                </div>
                <span className="font-semibold">{link.label}</span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Component>
            );
          })}
        </section>
      )}

      {PROJECTS.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold px-1">Meus Projetos</h2>
          <div className="grid grid-cols-1 gap-4">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;

              return (
                <a
                  key={index}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-bg-secondary p-5 rounded-3xl border border-white/10 hover:border-brand/50 hover:bg-white/3 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(var(--brand-color-rgb),0.2)]"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                  <div className="relative flex items-center gap-5">
                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden p-2">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      ) : Icon ? (
                        <Icon size={40} className="text-brand" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          className="text-zinc-600 group-hover:text-brand transition-colors"
                          size={20}
                        />
                      </div>
                      <p className="text-sm text-white/70 mt-1.5 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
