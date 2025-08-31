export default function Footer() {
  return (
    <footer className="bg-[url('/catering/footer-pattern.jpeg')]">
      <div className="py-8 max-w-6xl text-sm text-center mx-auto px-4 md:px-6 lg:px-10 text-white ">
        <p>Savska cesta 25, 10000 Zagreb</p>
        <p className="mt-2">
          Izradio{" "}
          <a href="https://refresh.hr" className="underline">
            Refresh.hr
          </a>
        </p>
      </div>
    </footer>
  );
}
