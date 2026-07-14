import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { BrandLogo } from "./BrandLogo";
import { BRAND } from "@/lib/brand";

type LegalLayoutProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <header className="border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <BrandLogo showTagline sizeClassName="text-xl" />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <p className="kicker">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>

        <article className="prose-legal mt-12 space-y-8 text-base leading-relaxed text-muted-foreground">
          {children}
        </article>
      </main>

      <footer className="border-t border-hairline py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {BRAND.fullName}. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="transition-colors hover:text-foreground">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
