import type en from "./en";

const fr: typeof en = {
  nav: {
    features: "Fonctionnalites",
    download: "Telecharger",
    changelog: "Changelog",
    roadmap: "A venir",
    downloadBtn: "Telecharger",
  },
  hero: {
    badge: "Mount & Blade II: Bannerlord",
    title1: "Calradia",
    title2: "Online",
    subtitle: "Conquerez la Calradia ensemble. Jouez la campagne complete avec vos amis en multijoueur en ligne. Batissez votre royaume, menez des batailles, forgez des alliances.",
    cta: "Telecharger gratuitement",
    ctaSecondary: "Decouvrir les fonctionnalites",
  },
  features: {
    title: "Fonctionnalites",
    items: [
      { title: "Multijoueur en ligne", desc: "Jouez la campagne complete de Bannerlord avec vos amis. Aucune limite de joueurs. Chaque joueur controle son propre seigneur." },
      { title: "Batailles en temps reel", desc: "Combattez ensemble ou les uns contre les autres dans des batailles synchronisees en temps reel. Chaque coup, chaque mort, chaque mouvement." },
      { title: "Monde partage", desc: "Un seul monde, entierement synchronise. Chaque joueur voit la meme carte, les memes evenements, la meme Calradia." },
      { title: "Serveur dedie", desc: "Architecture serveur-autoritaire. Aucun avantage pour l'hote. Un gameplay equitable pour tous." },
      { title: "Installation en un clic", desc: "Telechargez le launcher, cliquez sur jouer. Mises a jour automatiques, installation du mod automatique." },
      { title: "Gratuit et libre", desc: "Entierement gratuit. Cree par la communaute, pour la communaute. Conquerez la Calradia ensemble." },
    ],
  },
  download: {
    title: "Telecharger",
    subtitle: "Obtenez le launcher. Il gere tout : installation du mod, mises a jour et gestion du serveur.",
    cta: "Telecharger le Launcher",
    unavailable: "Telechargement pas encore disponible. Bientot !",
    requires: "Necessite Mount & Blade II: Bannerlord (Steam). Le launcher detecte automatiquement votre jeu.",
    version: "Version",
    steps: [
      { title: "Telecharger et extraire", desc: "Dezippez le launcher dans un dossier" },
      { title: "Lancer", desc: "Executez le launcher" },
      { title: "Jouer ensemble", desc: "Entrez l'IP de votre ami et cliquez sur Jouer" },
    ],
  },
  changelog: {
    title: "Changelog",
    subtitle: "Historique des versions depuis nos releases",
    loading: "Chargement des versions...",
    empty: "Aucune release pour le moment. Restez a l'ecoute !",
    latest: "Derniere",
  },
  roadmap: {
    title: "A venir",
    subtitle: "Calradia Online est en developpement actif. Voici ce sur quoi nous travaillons.",
    items: [
      "Creation de personnage et personnalisation d'apparence",
      "Synchronisation complete de l'economie et du commerce",
      "Gestion du royaume et evenements diplomatiques",
      "Cooperation d'armees et sieges",
      "Integration Steam Workshop",
      "Reconnexion apres deconnexion",
    ],
  },
  footer: {
    disclaimer: "Mod multijoueur fan-made pour Mount & Blade II: Bannerlord. Non affilie a TaleWorlds Entertainment.",
  },
};

export default fr;
