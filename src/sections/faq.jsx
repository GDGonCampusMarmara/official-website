import FAQCard from "../components/faqCard";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[#0a0d14] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
            Merak Edilenler
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Sıkça Sorulan Sorular
          </h3>
        </div>
        <FAQCard />
      </div>
    </section>
  );
};

export default FAQ;
