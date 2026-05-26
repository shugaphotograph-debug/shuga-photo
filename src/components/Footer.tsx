export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-100 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">
          © {year} Shuga Photo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
