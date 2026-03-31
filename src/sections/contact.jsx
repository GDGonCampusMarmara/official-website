import { contactInfo } from "../constants/contactData";
import emailjs from '@emailjs/browser'
import Icon from "../components/common/icon";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.init(publicKey);

    emailjs.sendForm(
      serviceId,
      templateId,
      e.target
    )
    .then((result) => {
        alert("Mesaj başarıyla gönderildi!");
        e.target.reset();
    }, (error) => {
        console.error("Hata Detayı:", error);
        alert("Gönderim başarısız. Lütfen tekrar deneyin.");
    });
  };


  return (
    <section id="contact" className="py-24 bg-[#0a0d14] relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          <div className="space-y-8">
            <div>
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                Bize Ulaşın
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Bir Sorumuz mu Var? <br />
                <span className="text-gray-500">Hemen Yazın.</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                Etkinliklerimiz, projelerimiz veya topluluğumuz hakkında merak ettiğiniz her şeyi sorabilirsiniz. En kısa sürede dönüş yapacağız.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
                    <Icon
                      name={info.icon}
                      className="text-blue-500 group-hover:scale-110 transition-transform"
                      size={22}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Adınız</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">E-posta</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Konu</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Nasıl yardımcı olabiliriz?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Mesajınız</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                Gönder
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;