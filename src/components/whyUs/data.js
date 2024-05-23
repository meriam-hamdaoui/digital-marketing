import { v4 as uuidv4 } from "uuid";
import reason1 from "../../assets/img/plan-presentation.png";
import reason2 from "../../assets/img/mobile-icons.png";
import reason3 from "../../assets/img/client.png";
import reason4 from "../../assets/img/speak-client.png";

export const reasons = [
  {
    id: uuidv4(),
    imgSrc: reason1,
    text: "Nous créons des stratégies sur mesure pour chaque client, en prenant en compte leurs besoins et leur contexte commercial.",
    order: 0,
    name: "top-left-card",
  },
  {
    id: uuidv4(),
    imgSrc: reason2,
    text: "Nous adoptons les dernières tendances en marketing digital pour offrir des solutions innovantes à nos clients.",
    order: 1,
    name: "top-right-card",
  },
  {
    id: uuidv4(),
    imgSrc: reason3,
    text: "Nous nous engageons à fournir un service client exceptionnel, en étant toujours disponibles, pour répondre aux questions et aux préoccupations de nos clients.",
    order: 0,
    name: "bottom-left-card",
  },
  {
    id: uuidv4(),
    imgSrc: reason4,
    text: "Nous visons des résultats concrets et mesurables pour nos clients, en optimisant nos stratégies pour un retour sur investissement maximal.",
    order: 2,
    name: "bottom-right-card",
  },
];
