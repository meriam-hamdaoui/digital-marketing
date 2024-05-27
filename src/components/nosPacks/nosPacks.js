import { v4 as uuidv4 } from "uuid";

export const nosPacks = [
  {
    id: uuidv4(),
    name: "Pack Gestion Médias Sociaux",
    choices: [
      {
        id: uuidv4(),
        price: "PACK SIMPLE 70 dt",
        details: ["sponsoring simple : 50 post", "Statistiques"],
      },
      {
        id: uuidv4(),
        price: "Pack Avancé 150 dt",
        details: ["sponsoring post", "stories", "méthodologies publicitaires"],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Pack Community Management",
    choices: [
      {
        id: uuidv4(),
        price: "PACK BASIQUE 480 dt/mois",
        details: [
          "Modération Automatique",
          "Planning Editorial",
          "Réseau Sociaux",
        ],
      },
      {
        id: uuidv4(),
        price: "Pack Silver 800 dt",
        details: [
          "Modération Automatique",
          "Planning Editorial",
          "Réseau Sociaux",
          "Publications et Stories",
          "Sponsoring",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Pack Gestion de Contenu",
    choices: [
      {
        id: uuidv4(),
        price: "PACK BASIQUE 700 dt /mois",
        details: [
          ` Assistance à l’élaboration d’une stratégie sociale et création
                  des comptes sociaux`,
          "Gestion et animation réseaux sociaux",
          ` Gestion et Assistance pour la collaboration avec les
                  influenceurs`,
          "Gestion des Ads",
        ],
      },
      {
        id: uuidv4(),
        price: "PACK SILVER 1000 dt /mois",
        details: [
          ` Assistance à l’élaboration d’une stratégie sociale et création
                  des comptes sociaux`,
          "Gestion et animation réseaux sociaux",
          ` Gestion et Assistance pour la collaboration avec les
                  influenceurs`,
          "Gestion des Ads",
          `Analyse etreporting (mensuel)`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Pack Influence Marketing",
    choices: [
      {
        id: uuidv4(),
        price: "A partir 100 dt",
        details: [
          ` Les collaborations avec les influencers30 %
            de frais de contrat`,
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: `Pack Stratégie de Médias Sociaux + Formation et Consultation +
            Veille Concurrentielle`,
    choices: [
      {
        id: uuidv4(),
        price: `A partir de 1000 jusqu'à 2500`,
        details: [
          `Mini formation accéléré`,
          `Consulting`,
          `Analyse clientèles et concurrentielles`,
        ],
      },
    ],
  },
];
