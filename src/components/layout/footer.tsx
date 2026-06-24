import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FOOTER_COLUMNS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border" id="footer">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:gap-8">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A software consultancy building systems that solve real operational
              problems for enterprise teams.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            &copy; {year} Nexus Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
