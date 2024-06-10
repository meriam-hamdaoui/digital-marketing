import { v4 as uuidv4 } from "uuid";

export const packAvecRibbon = [
  {
    id: uuidv4(),
    name: "Pack Gestion Médias Sociaux",
    choices: [
      {
        id: uuidv4(),
        pack: "Pack BASIQUE",
        style: {
          color: "#523298",
          background: "white",
        },
        price: "70 dt/mois",
        details: ["sponsoring simple : 50 post", "Statistiques"],
      },
      {
        id: uuidv4(),
        pack: ` Pack SILVER`,
        style: {
          color: "white",
          background: "rgba(192, 192, 192, 0.8)",
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
          background: "rgba(192, 192, 192, 0.8)",
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
          background: "rgba(192, 192, 192, 0.8)",
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
];
export const packSansRibbon = [
  {
    id: uuidv4(),
    name: `Formation et Consulting `,
    choice: [
      {
        price: `<>A partir de 1000dt/mois <br /> jusqu'à 2500dt/mois</>`,
        details: [
          `Stratégie de Médias Sociaux`,
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
    choice: [
      {
        price: "A partir 100 dt/mois",
        details: [
          ` Les collaborations avec les influencers 30%
          de frais de contrat`,
        ],
      },
    ],
  },
];
