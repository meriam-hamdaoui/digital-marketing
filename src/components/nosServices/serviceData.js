import { v4 as uuidv4 } from "uuid";
import formationConsulting from "../../assets/img/formation-removebg.png";
import strategie from "../../assets/img/strategie.png";
import gestionContinue from "../../assets/img/gestionContinue.png";
import community from "../../assets/img/community-management.png";
import publicity from "../../assets/img/publicity-removebg.png";
import analyse from "../../assets/img/analyse-removebg.png";
import concurence from "../../assets/img/concurence-removebg.png";
import influence from "../../assets/img/influence-removebg.png";
import market from "../../assets/img/market-removebg.png";

export const serviceData = [
  {
    id: uuidv4(),
    title: "Formation et Consultation",
    img: formationConsulting,
    style: {
      width: "15rem",
      height: "15rem",
    },
    desc: "Nous offrons des sessions de formation et de consultation pour aider nos clients à comprendre les bases du marketing digital et à développer des stratégies adaptées à leurs besoins spécifiques. ",
  },
  {
    id: uuidv4(),
    title: "Stratégie de Médias Sociaux",
    img: strategie,
    style: {
      width: "18rem",
      height: "16rem",
    },
    desc: "Nous élaborons des stratégies de médias sociaux sur mesure en fonction des objectifs commerciaux de nos clients, de leur industrie et de leur public cible.",
  },
  {
    id: uuidv4(),
    title: "Gestion de Contenu",
    img: gestionContinue,
    style: {
      width: "19rem",
      height: "17rem",
    },
    desc: "Notre équipe créative produit un contenu de qualité et engageant pour les différents canaux de médias sociaux de nos clients.",
  },
  {
    id: uuidv4(),
    title: "Community Management",
    img: community,
    style: {
      width: "18rem",
      height: "18rem",
    },
    desc: "Nous gérons activement les communautés en ligne de nos clients, en interagissant avec leur audience et en stimulant l'engagement.",
  },
  {
    id: uuidv4(),
    title: "Publicité sur les Médias Sociaux",
    img: publicity,
    style: {
      width: "19rem",
      height: "18rem",
    },
    desc: "Nous concevons et exécutons des campagnes publicitaires ciblées sur les médias sociaux pour accroître la visibilité et la conversion.",
  },
  {
    id: uuidv4(),
    title: "Analyse et Reporting",
    img: analyse,
    style: {
      width: "18rem",
      height: "18rem",
    },
    desc: "Nous fournissons des analyses détaillées et des rapports réguliers sur les performances des campagnes, permettant à nos clients de suivre leur retour sur investissement.",
  },
  {
    id: uuidv4(),
    title: "Veille Concurrentielle",
    img: concurence,
    style: {
      width: "18.5rem",
      height: "18.5rem",
    },
    desc: "Nous surveillons en permanence l'activité de la concurrence pour identifier les opportunités et les menaces potentielles.",
  },
  {
    id: uuidv4(),
    title: "Influence Marketing",
    img: influence,
    style: {
      width: "18.5rem",
      height: "18.5rem",
    },
    desc: "Nous collaborons avec des influenceurs pour amplifier la portée et l'impact des campagnes de nos clients",
  },
  {
    id: uuidv4(),
    title: "Étude de la Clientèle et du Marché",
    img: market,
    style: {
      width: "17.5rem",
      height: "17.5rem",
    },
    desc: "Nous menons des études approfondies pour comprendre le public cible de nos clients et les tendances du marché qui les affectent",
  },
];
