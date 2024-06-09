import { v4 as uuidv4 } from "uuid";
import strategiePourquoi from "../../assets/img/strategie_pourquoi.png";
import mobile_icons from "../../assets/img/mobile_icons.png";
import client from "../../assets/img/client_pourquoi.png";
import visionPourquoi from "../../assets/img/vision_pourquoi.png";

export const reasonTab = [
  {
    id: uuidv4(),
    imgSrc: strategiePourquoi,
    text: "Nous créans des stratégies sur mesure pour chaque client, en prenant en compte leurs besoins et leur contexte commercial.",
    order: 0,
    name: "left_card",
  },
  {
    id: uuidv4(),
    imgSrc: mobile_icons,
    text: "Nous adoptons les dernières tendances en marketing digital pour offrir des solutions innovantes à nos clients.",
    order: 1,
    name: "right_card",
  },
  {
    id: uuidv4(),
    imgSrc: client,
    text: "Nous nous engageons à fournir un service client exceptionnel, en étant toujours disponibles, pour répondre aux questions et aux préoccupations de nos clients.",
    order: 0,
    name: "left_card",
  },
  {
    id: uuidv4(),
    imgSrc: visionPourquoi,
    text: "Nous visons des résultats concrets et mesurables pour nos clients, en optimisant nos stratégies pour un retour sur investissement maximal.",
    order: 2,
    name: "right_card",
  },
];
