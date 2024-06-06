import { v4 as uuidv4 } from "uuid";
import reason1 from "../../assets/img/strategie-removebg.png";
import reason2 from "../../assets/img/mobile-icons-removebg.png";
import reason3 from "../../assets/img/client-removebg.png";
import reason4 from "../../assets/img/resultat-1-removebg.png";

export const reasonTab = [
  {
    id: uuidv4(),
    imgSrc: reason1,
    text: "Nous créans des stratégies sur mesure pour chaque client, en prenant en compte leurs besoins et leur contexte commercial.",
    order: 0,
    name: "left_card",
  },
  {
    id: uuidv4(),
    imgSrc: reason2,
    text: "Nous adoptons les dernières tendances en marketing digital pour offrir des solutions innovantes à nos clients.",
    order: 1,
    name: "right_card",
  },
  {
    id: uuidv4(),
    imgSrc: reason3,
    text: "Nous nous engageons à fournir un service client exceptionnel, en étant toujours disponibles, pour répondre aux questions et aux préoccupations de nos clients.",
    order: 0,
    name: "left_card",
  },
  {
    id: uuidv4(),
    imgSrc: reason4,
    text: "Nous visons des résultats concrets et mesurables pour nos clients, en optimisant nos stratégies pour un retour sur investissement maximal.",
    order: 2,
    name: "right_card",
  },
];
