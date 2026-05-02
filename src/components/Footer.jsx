import {
  Building,
  Clock,
  Clock10,
  Clock9,
  ClockAlert,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { title: "Tiktok", icon: <FaTiktok />, url: "#" },
  { title: "Instagram", icon: <FaInstagram />, url: "#" },
  { title: "Youtube", icon: <FaYoutube />, url: "#" },
];

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-10 transition-colors duration-300 ${isDarkMode ? "bg-brand-charcoal border-t border-gray-800 text-white" : "bg-brand-light-gray border-t border-gray-200 text-brand-charcoal"}`}
    >
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
                  <span
                    className={
                      isDarkMode ? "text-white" : "text-brand-charcoal"
                    }
                  >
                    ENV
                  </span>
                  <span className="bg-linear-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent">
                    TEH
                  </span>
                  <span
                    className={
                      isDarkMode ? "text-white" : "text-brand-charcoal"
                    }
                  >
                    .
                  </span>
                </div>
                <p
                  className={`${isDarkMode ? "text-white" : "text-brand-charcoal"} text-[10px] uppercase`}
                >
                  environment technology
                </p>
              </a>
            </div>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg max-w-sm mb-8`}
            >
              Pengembangan website dan solusi digital untuk membantu pertumbuhan
              bisnis tampil lebih profesional, efektif dan relevan di era
              digital.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-12 h-12 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} text-brand-orange rounded-xl flex items-center justify-center border hover:border-brand-orange hover:scale-110 transition-all`}
                >
                  <span className="sr-only">{social.title}</span>
                  <div className="text-xl">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-brand-charcoal"}`}
            >
              Tautan Cepat
            </h4>
            <ul
              className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
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
            <h4
              className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-brand-charcoal"}`}
            >
              Contact
            </h4>
            <ul
              className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Phone width={18} className="text-brand-orange" />
                  +62 895-363-616-395
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Mail width={18} className="text-brand-orange" />
                  envteh.group@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Building width={18} className="text-brand-orange" />
                  ENVTEH GROUP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <MapPin width={18} className="text-brand-orange" />
                  Semarang, Indonesia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-brand-charcoal"}`}
            >
              Jam Operasional
            </h4>
            <ul
              className={`space-y-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Clock9 width={18} className="text-brand-orange" />
                  Senin - Jumat (09:00 - 17:00)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors flex items-center gap-4"
                >
                  <Clock10 width={18} className="text-brand-orange" />
                  Sabtu - Minggu (10.00-17.00)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-14 pt-10 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"} flex flex-col md:flex-row justify-between items-center gap-6 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}
        >
          <p>© 2026 Envteh Group Software. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
