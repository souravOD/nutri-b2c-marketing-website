import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-nutri-warm-bg flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
      <div className="bg-nutri-green-pale rounded-full size-20 flex items-center justify-center mb-8">
        <span className="text-4xl">🍽️</span>
      </div>
      <h1 className="font-black text-nutri-dark text-6xl mb-4">404</h1>
      <p className="text-nutri-dark-body text-xl mb-8 max-w-md">
        This page isn&apos;t on the menu. Let&apos;s get you back to something
        delicious.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full px-8 py-4 bg-nutri-green-dark text-white font-bold text-base hover:bg-nutri-green-deep transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
