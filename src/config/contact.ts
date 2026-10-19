import profile from "../data/profile.json";

export const contact = {
  email: profile.email,
  emailUrl: `mailto:${profile.email}`,
  whatsapp: profile.whatsapp,
  whatsappUrl: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola Alejandro, me gustaría cotizar un sitio web.")}`,
};
