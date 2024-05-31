import { v4 as uuidv4 } from "uuid";

export const nosPacks = [
  {
    id: uuidv4(),
    name: "Pack Gestion Médias Sociaux",
    choices: [
      {
        id: uuidv4(),
        pack: "Pack SIMPLE",
        style: {
          color: "#5557d6",
          background: "rgba(230, 230, 250, 0.5)",
        },
        price: "70 dt/mois",
        details: ["sponsoring simple : 50 post", "Statistiques"],
      },
      {
        id: uuidv4(),
        pack: "Pack AVANCER",
        style: {
          color: "white",
          background: "rgba(184, 115, 51, 0.65)",
        },
        price: "150 dt/mois",
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
        pack: "Pack BASIQUE",
        style: {
          color: "#523298",
          background: "white",
        },
        price: "480 dt/mois",
        details: [
          "Modération Automatique",
          "Planning Editorial",
          "Réseau Sociaux",
        ],
      },
      {
        id: uuidv4(),
        pack: "Pack SILVER",
        style: {
          color: "white",
          background: "rgba(192, 192, 192, 0.7)",
        },
        price: "800 dt/mois",
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
        pack: "Pack BASIQUE",
        style: {
          color: "#523298",
          background: "white",
        },
        price: "700 dt/mois",
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
        pack: "Pack SILVER",
        style: {
          color: "white",
          background: "rgba(192, 192, 192, 0.7)",
        },
        price: "1000 dt/mois",
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
    name: `Pack Stratégie de Médias Sociaux + Formation et Consultation +
            Veille Concurrentielle`,
    choices: [
      {
        id: uuidv4(),
        pack: "Pack GOLD",
        style: {
          color: "white",
          background: "rgba(255, 169, 1, 0.75)",
        },
        price: `A partir de 1000 jusqu'à 2500`,
        details: [
          `Mini formation accéléré`,
          `Consulting`,
          `Analyse clientèles et concurrentielles`,
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
        pack: "Pack BASIQUE",
        style: {
          color: "#523298",
          background: "white",
        },
        price: "A partir 100 dt/mois",
        details: [
          ` Les collaborations avec les influencers30 %
            de frais de contrat`,
        ],
      },
    ],
  },
];
