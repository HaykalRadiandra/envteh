import { Building, Clock, ClockAlert, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { title: "Tiktok", icon: <FaTiktok />, url: "#" },
  { title: "Instagram", icon: <FaInstagram />, url: "#" },
  { title: "Youtube", icon: <FaYoutube />, url: "#" },
];

const Footer = () => {
  return (
    <footer className="py-10 bg-brand-light-gray dark:bg-brand-charcoal border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-start mb-6">
              <div className="relative w-26">
                <img
                  className="absolute h-24 w-24 -top-8 left-0"
                  src="/envteh/env.webp"
                  alt="Environtment Technology"
                />
              </div>
              <a
                href="#"
                className="text-3xl font-bold flex flex-col items-center"
              >
                <div className="w-full">
                  {" "}
                  <span className="text-white">ENV</span>
                  <span className="bg-linear-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent">
                    TEH
                  </span>
                  <span className="text-white">.</span>
                </div>
                <p className="text-white text-[10px] uppercase">
                  environment technology
                </p>
              </a>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Memimpin dalam pengembangan perangkat lunak kustom dan
              transformasi digital. Membangun perangkat lunak berkualitas sejak
              2024.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 dark:bg-gray-800 text-white rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-brand-orange hover:text-brand-orange transition-all"
                >
                  <span className="sr-only">{social.title}</span>
                  <div className="text-xl">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-orange transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-orange transition-colors"
                >
                  Paket
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-brand-orange transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-brand-orange transition-colors"
                >
                  Proses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Phone width={18} />
                  +62 082-1233-4567
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Mail width={18} />
                  envteh.group@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Building width={18} />
                  ENVTEH GROUP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <MapPin width={18} />
                  Semarang, Indonesia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">
              Jam Operasional
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <ClockAlert width={18} />
                  Senin - Sabtu (08:00 - 17:00)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <ClockAlert width={18} />
                  Minggu (Libur)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <p>© 2024 Envteh Group Software. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
