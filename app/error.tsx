"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-card/60 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Something Broke</p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Unexpected error while loading this page.
        </h1>
        <p className="text-muted-foreground mb-8">
          Please try again. If this keeps happening, return to the homepage and retry from there.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Try again
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
      </div>
    </main>
  );
}
