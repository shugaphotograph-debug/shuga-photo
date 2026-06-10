import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-5 sm:px-8 py-8">
      <p className="text-center text-[10px] tracking-[0.25em] text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.siteName}
      </p>
    </footer>
  );
}
