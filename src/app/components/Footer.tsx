import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/Iamholak/", label: "GitHub", icon: Github },
  { href: "https://x.com/0xholak", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com/in/kasali-olawale-habeeb", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div
            className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl text-transparent"
            style={{ fontWeight: 700 }}
          >
            Holak
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Building web apps, AI tools, and crypto products.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-gray-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-full border border-purple-500/20 p-2 text-gray-400 transition-all hover:border-purple-400/40 hover:text-white"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
