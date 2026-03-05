"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <main className="w-full max-w-2xl rounded-2xl border border-border bg-card/60 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Application Error</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            A critical error occurred.
          </h1>
          <p className="text-muted-foreground mb-8">
            The app hit an unexpected issue. Retry or return to the homepage.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={reset}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Reload app
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg border border-border hover:border-primary/40 transition"
            >
              Back home
            </Link>
          </div>

          {error.digest && (
            <p className="mt-6 text-xs text-muted-foreground">Error ID: {error.digest}</p>
          )}
        </main>
      </body>
    </html>
  );
}
