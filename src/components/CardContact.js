// import "../App.css";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import emailjs from "@emailjs/browser";

// export default function CardContact() {
//   const schema = yup.object().shape({
//     sujet: yup
//       .string()
//       .required("Veuillez indiquer un sujet")
//       .min(5, "Votre sujet doit faire plus de 5 caractères"),
//     nom: yup
//       .string()
//       .required("Veuillez indiquer un nom")
//       .min(5, "Votre nom doit faire plus de 5 caractères"),
//     email: yup
//       .string()
//       .required("Veuillez indiquer un email")
//       .email("Veuillez entrer un email valide"),
//     msg: yup
//       .string()
//       .required("Veuillez indiquer un message")
//       .min(25, "Le message doit etre compris entre 25 et 5000 caractères!")
//       .max(5000, "Le message doit etre compris entre 25 et 5000 caractères!"),
//   });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     emailjs
//       .send(
//         "service_srmc42s",
//         "template_x4w7o2q",
//         {
//           sujet: data.sujet,
//           nom: data.nom,
//           email: data.email,
//           msg: data.msg,
//         },
//         "xv6koTbu15wzYZMJk"
//       )
//       .then(alert("mesage envoyé"));
//   };

//   return (
//     <div className="contact-container">
//       <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
//         <div class="pseudo-container">
//           <label htmlFor="nom">Nom</label>
//           <input
//             id="nom"
//             type="text"
//             placeholder="Jean Dupont"
//             {...register("nom")}
//           />
//           <p>{errors.nom?.message}</p>
//         </div>
//         <div class="pseudo-container">
//           <label htmlFor="sujet">Sujet</label>
//           <input
//             id="sujet"
//             type="text"
//             placeholder="Dire bonjour..."
//             {...register("sujet")}
//           />
//           <p>{errors.sujet?.message}</p>
//         </div>
//         <div className="email-container">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="text"
//             placeholder="exemple@gmail.com"
//             {...register("email")}
//           />
//           <p>{errors.email?.message}</p>
//         </div>
//         <div className="msg-container">
//           <label htmlFor="msg">Message</label>
//           <textarea
//             id="msg"
//             placeholder="Bonjours..."
//             style={{ resize: "none", height: "10vh" }}
//             rows={10}
//             {...register("msg")}
//           />
//           <p>{errors.msg?.message}</p>
//         </div>
//         <input type="submit" value="Valider" />
//       </form>
//     </div>
//   );
// }

import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default function CardContact() {
  const schema = yup.object().shape({
    sujet: yup
      .string()
      .required("Veuillez indiquer un sujet")
      .min(5, "Votre sujet doit faire plus de 5 caractères"),
    nom: yup
      .string()
      .required("Veuillez indiquer un nom")
      .min(5, "Votre nom doit faire plus de 5 caractères"),
    email: yup
      .string()
      .required("Veuillez indiquer un email")
      .email("Veuillez entrer un email valide"),
    msg: yup
      .string()
      .required("Veuillez indiquer un message")
      .min(25, "Le message doit etre compris entre 25 et 5000 caractères!")
      .max(5000, "Le message doit etre compris entre 25 et 5000 caractères!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    console.log(data);
    emailjs
      .send(
        "service_srmc42s",
        "template_x4w7o2q",
        {
          sujet: data.sujet,
          nom: data.nom,
          email: data.email,
          msg: data.msg,
        },
        "xv6koTbu15wzYZMJk"
      )
      .then(() => {
        alert("Message envoyé");
        reset(); // Réinitialise les valeurs du formulaire
      });
  };

  return (
    <div className="contact-container">
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="pseudo-container">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            type="text"
            placeholder="Jean Dupont"
            {...register("nom")}
          />
          <p>{errors.nom?.message}</p>
        </div>
        <div className="pseudo-container">
          <label htmlFor="sujet">Sujet</label>
          <input
            id="sujet"
            type="text"
            placeholder="Dire bonjour..."
            {...register("sujet")}
          />
          <p>{errors.sujet?.message}</p>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="exemple@gmail.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="msg-container">
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            placeholder="Bonjour..."
            style={{ resize: "none", height: "10vh" }}
            rows={10}
            {...register("msg")}
          />
          <p>{errors.msg?.message}</p>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
