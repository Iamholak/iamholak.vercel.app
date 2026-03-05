import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-card/60 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Page not found.
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
