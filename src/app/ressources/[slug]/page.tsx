import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import AlertBox from "@/components/ui/AlertBox";
import SummaryBox from "@/components/ui/SummaryBox";

type Article = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
};

const articles: Record<string, Article> = {
  "bilan-prevoyance-independant": {
    title: "Bilan prévoyance : ce que tout indépendant doit vérifier",
    description: "Revenu de remplacement, délai de carence, invalidité partielle : les points clés à vérifier avant d'avoir un problème.",
    category: "Prévoyance",
    date: "2025-03-10",
    readTime: "7 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Un bilan prévoyance permet d&apos;identifier précisément ce que vous percevriez en cas d&apos;arrêt de travail ou d&apos;invalidité, et les lacunes à combler selon votre statut et vos charges fixes.
        </SummaryBox>
        <h2>Pourquoi faire un bilan prévoyance ?</h2>
        <p>En tant qu&apos;indépendant, aucun employeur ne cotise pour vous au-delà de votre régime obligatoire. Selon votre statut (TNS, profession libérale, gérant…), les garanties de base varient fortement en montant et en durée. Sans analyse, il est difficile de savoir si vous êtes sous-couvert, sur-couvert, ou si vous payez des doublons inutiles.</p>
        <h2>Les 5 points à vérifier</h2>
        <h3>1. Le délai de carence</h3>
        <p>Votre régime obligatoire verse des indemnités journalières après un délai de carence. Selon votre caisse, ce délai peut aller de 3 jours à plusieurs mois. Pendant cette période, aucun revenu de remplacement. Avez-vous une épargne de précaution suffisante, ou un contrat complémentaire qui couvre ce délai ?</p>
        <h3>2. Le niveau d&apos;indemnité journalière</h3>
        <p>Les IJ versées par votre régime représentent rarement 100% de votre revenu habituel. Pour un médecin affilié à la CARMF, un architecte à la CIPAV ou un vétérinaire à la CARPV, les montants réels peuvent être très en deçà de vos charges fixes mensuelles.</p>
        <h3>3. La couverture en invalidité</h3>
        <p>L&apos;invalidité partielle est souvent plus coûteuse que l&apos;invalidité totale car elle n&apos;est pas toujours bien couverte. Si vous pouvez encore exercer à 50%, certains régimes ne versent rien, d&apos;autres versent une fraction calculée sur un taux d&apos;incapacité administrative.</p>
        <h3>4. Les frais généraux de votre cabinet</h3>
        <p>Loyer, salaires, charges fixes, remboursement d&apos;emprunts professionnels : ces dépenses continuent même si vous ne travaillez plus. Une garantie frais généraux peut prendre en charge ces coûts pendant votre incapacité.</p>
        <h3>5. La protection en cas de décès</h3>
        <p>En cas de décès, votre famille ou vos associés bénéficient-ils d&apos;une protection adaptée ? La garantie décès de votre régime est souvent très limitée.</p>
        <AlertBox type="info">
          <strong>Rappel réglementaire :</strong> Les informations présentées ici sont générales. Les montants réels des garanties dépendent de votre régime spécifique, de vos cotisations et de votre situation personnelle. Une analyse individuelle est nécessaire.
        </AlertBox>
        <h2>Comment réaliser ce bilan ?</h2>
        <p>Réunissez vos relevés de situation de votre caisse de retraite et prévoyance, listez vos charges fixes mensuelles (professionnelles et personnelles), et faites le point avec un conseiller spécialisé. Le bilan prend généralement 30 à 45 minutes et permet d&apos;avoir une vision claire de votre situation.</p>
        <p><Link href="/audit-prevoyance-gratuit" className="text-brand-blue font-medium hover:underline">→ Demander un audit prévoyance gratuit</Link></p>
      </div>
    ),
  },
  "arret-travail-professionnel-liberal": {
    title: "Arrêt de travail : ce qui se passe vraiment pour un professionnel libéral",
    description: "Indemnités journalières, délais de carence, régime obligatoire : ce que votre caisse vous verse réellement en cas d'arrêt.",
    category: "Prévoyance",
    date: "2025-02-20",
    readTime: "8 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          En cas d&apos;arrêt de travail, un professionnel libéral perçoit des indemnités journalières de son régime obligatoire après un délai de carence variable. Ces indemnités couvrent rarement l&apos;intégralité des charges fixes, d&apos;où l&apos;importance d&apos;une prévoyance complémentaire adaptée.
        </SummaryBox>
        <h2>Votre régime obligatoire et l&apos;arrêt de travail</h2>
        <p>Contrairement aux salariés qui bénéficient d&apos;indemnités journalières de la Sécurité sociale dès le 4e jour, les professionnels libéraux dépendent de leur caisse spécifique, avec des règles très différentes.</p>
        <h3>Le délai de carence</h3>
        <p>C&apos;est la période pendant laquelle aucune indemnité n&apos;est versée. Il varie selon votre régime : 90 jours à la CIPAV pour les architectes et psychologues, 90 jours à la CARMF pour les médecins en début de carrière, 3 jours à la CARPIMKO pour les orthophonistes dans certains cas.</p>
        <h3>Le montant des indemnités journalières</h3>
        <p>Les IJ versées sont calculées selon vos cotisations et votre ancienneté dans le régime. Pour les premières années d&apos;exercice, elles peuvent être significativement inférieures à votre revenu habituel.</p>
        <h2>Ce que ne couvre pas votre régime obligatoire</h2>
        <ul>
          <li>Les charges fixes professionnelles (loyer, salaires, remboursements)</li>
          <li>L&apos;arrêt partiel (si vous réduisez votre activité sans l&apos;arrêter complètement)</li>
          <li>Les premières semaines ou les premiers mois selon votre délai de carence</li>
          <li>Le maintien du niveau de vie si les IJ sont insuffisantes</li>
        </ul>
        <h2>Le rôle de la prévoyance complémentaire</h2>
        <p>Un contrat de prévoyance complémentaire peut prendre en charge :</p>
        <ul>
          <li>Le délai de carence du régime obligatoire</li>
          <li>Un complément d&apos;IJ pour atteindre un niveau de remplacement cible</li>
          <li>Les frais généraux du cabinet pendant l&apos;arrêt</li>
          <li>Une rente d&apos;invalidité en cas d&apos;arrêt prolongé</li>
        </ul>
        <AlertBox type="info">
          <strong>Note :</strong> Les conditions exactes (délai de carence, montants, durée de versement) varient selon le contrat choisi et votre situation. Une analyse personnalisée est nécessaire pour évaluer ce qui correspond à votre cas.
        </AlertBox>
        <p><Link href="/prevoyance-professionnelle" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la prévoyance professionnelle</Link></p>
      </div>
    ),
  },
  "erreurs-prevoyance-dirigeant": {
    title: "5 erreurs de prévoyance que font les dirigeants",
    description: "Confondre prévoyance collective et protection personnelle, négliger l'homme-clé, sous-estimer les frais généraux : les pièges courants.",
    category: "Dirigeants",
    date: "2025-02-05",
    readTime: "6 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Les 5 erreurs les plus fréquentes chez les dirigeants : confondre prévoyance collective et protection personnelle, se fier uniquement au régime obligatoire, négliger l&apos;homme-clé, oublier les frais généraux, et remettre à demain.
        </SummaryBox>
        <h2>Erreur 1 : Confondre prévoyance collective et protection personnelle</h2>
        <p>Un dirigeant qui a mis en place une prévoyance collective pour ses salariés est souvent convaincu qu&apos;il bénéficie de la même protection. Ce n&apos;est pas automatique. En tant que dirigeant (TNS ou assimilé salarié), votre statut peut vous exclure des garanties collectives ou vous donner accès à des niveaux de couverture très différents.</p>
        <h2>Erreur 2 : Se croire suffisamment couvert par son régime obligatoire</h2>
        <p>Le régime obligatoire des TNS (SSI) ou des assimilés salariés (régime général) offre une base, mais elle est souvent insuffisante pour maintenir le niveau de vie d&apos;un dirigeant. Les IJ et rentes versées en cas d&apos;incapacité sont calculées sur des bases qui ne reflètent pas toujours la réalité des revenus des dirigeants.</p>
        <h2>Erreur 3 : Négliger la garantie homme-clé</h2>
        <p>Si vous êtes une personne clé dans votre entreprise (seul vendeur, seul technicien, seul dirigeant opérationnel), votre incapacité pourrait mettre l&apos;entreprise en difficulté. La garantie homme-clé permet à l&apos;entreprise de traverser cette période en recrutant un remplaçant ou en compensant la perte de chiffre d&apos;affaires.</p>
        <h2>Erreur 4 : Oublier les frais généraux</h2>
        <p>Loyer, salaires, charges sociales patronales, remboursements d&apos;emprunts : ces coûts fixes continuent pendant votre arrêt. Sans garantie frais généraux, vous puisez dans votre épargne personnelle ou vous endettez pour maintenir l&apos;activité.</p>
        <h2>Erreur 5 : Remettre à demain</h2>
        <p>La prévoyance est souscrite en bonne santé. Attendre un problème de santé pour s&apos;en préoccuper, c&apos;est risquer d&apos;être refusé ou d&apos;obtenir des exclusions importantes. Plus tôt on souscrit, plus les conditions sont favorables.</p>
        <p><Link href="/prevoyance-dirigeant" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la prévoyance dirigeant</Link></p>
      </div>
    ),
  },
  "per-retraite-tns": {
    title: "PER et retraite pour les TNS : ce qu'il faut comprendre",
    description: "Plan d'épargne retraite, déduction des cotisations, plafond Madelin : les leviers de préparation retraite pour les travailleurs non salariés.",
    category: "Retraite",
    date: "2025-01-28",
    readTime: "9 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Le PER individuel permet aux TNS de déduire leurs versements de leur revenu imposable dans la limite du plafond disponible (plafond Madelin ou salarié selon le statut). C&apos;est un outil de préparation retraite qui peut également permettre une sortie en capital. Une analyse personnalisée est nécessaire selon votre situation fiscale.
        </SummaryBox>
        <h2>Pourquoi la retraite est un enjeu particulier pour les TNS</h2>
        <p>Les travailleurs non salariés cotisent en général moins que les salariés aux régimes de retraite obligatoires et complémentaires. Le niveau de pension attendu est souvent significativement inférieur au dernier revenu d&apos;activité. Anticiper est donc essentiel.</p>
        <h2>Le PER individuel (PERin)</h2>
        <p>Créé par la loi Pacte de 2019, le PER individuel remplace les anciens contrats Madelin et PERP. Il permet d&apos;épargner pour la retraite avec des versements volontaires déductibles du revenu imposable, dans la limite du plafond disponible.</p>
        <h3>La déductibilité fiscale</h3>
        <p>Pour les TNS, les versements sur un PERin peuvent être déduits du bénéfice imposable dans la limite du plafond dit "Madelin" (ou du plafond salarié, selon la structure et le choix retenu). Ce plafond est calculé en fonction des revenus professionnels.</p>
        <AlertBox type="info">
          <strong>Précision importante :</strong> La déductibilité fiscale dépend de votre situation précise (statut, structure juridique, revenus). Une analyse individuelle est nécessaire avant tout versement. Les règles fiscales peuvent évoluer.
        </AlertBox>
        <h3>Les modalités de sortie</h3>
        <p>À la retraite, le PER permet une sortie en rente, en capital, ou en combinaison des deux. La fiscalité à la sortie dépend du mode de sortie choisi et de la déductibilité appliquée lors des versements.</p>
        <h2>À combiner avec votre régime obligatoire</h2>
        <p>Le PER vient compléter votre régime de retraite obligatoire (CARMF, CIPAV, SSI…). Avant de calibrer vos versements, il est utile d&apos;estimer le niveau de pension attendu de votre régime obligatoire.</p>
        <p><Link href="/retraite-per" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la retraite et le PER</Link></p>
      </div>
    ),
  },
  "comparer-assurance-emprunteur": {
    title: "Comparer son assurance emprunteur : mode d'emploi",
    description: "Délégation d'assurance, loi Lemoine, garanties ITT/IPP : comment optimiser son assurance de prêt sans se perdre dans les comparatifs.",
    category: "Emprunteur",
    date: "2025-01-15",
    readTime: "7 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Depuis la loi Lemoine (2022), vous pouvez changer d&apos;assurance emprunteur à tout moment sans frais. Comparer implique d&apos;analyser les garanties (DC, PTIA, ITT, IPT, IPP) et pas seulement le taux. Pour les professions libérales, la définition de l&apos;incapacité de travail dans le contrat est particulièrement importante.
        </SummaryBox>
        <h2>La loi Lemoine change la donne</h2>
        <p>Depuis le 1er septembre 2022, la loi Lemoine permet à tout emprunteur de changer d&apos;assurance emprunteur à n&apos;importe quel moment, sans délai ni pénalité. C&apos;est une opportunité importante pour optimiser une garantie souvent contractée par défaut auprès de la banque.</p>
        <h2>Les garanties à comparer</h2>
        <p>L&apos;erreur classique est de comparer uniquement les taux. Ce qui compte vraiment, ce sont les garanties :</p>
        <ul>
          <li><strong>DC (Décès)</strong> : remboursement du capital restant dû en cas de décès</li>
          <li><strong>PTIA (Perte Totale et Irréversible d&apos;Autonomie)</strong> : assimilée au décès dans les contrats</li>
          <li><strong>ITT (Incapacité Temporaire Totale)</strong> : prise en charge des mensualités pendant l&apos;arrêt de travail</li>
          <li><strong>IPT et IPP (Invalidité Permanente Totale ou Partielle)</strong> : selon le taux d&apos;invalidité reconnu</li>
        </ul>
        <h2>Un enjeu particulier pour les professions libérales</h2>
        <p>La définition de l&apos;ITT varie selon les contrats : certains retiennent l&apos;impossibilité d&apos;exercer TOUTE activité professionnelle (définition restrictive), d&apos;autres l&apos;impossibilité d&apos;exercer VOTRE profession. Cette nuance peut avoir un impact considérable en cas de sinistre.</p>
        <p>Pour un chirurgien, un dentiste ou un chirurgien-orthopédiste dont l&apos;activité dépend de la motricité fine, la définition "votre profession" est nettement plus protectrice.</p>
        <AlertBox type="info">
          <strong>Rappel :</strong> Toute substitution d&apos;assurance emprunteur doit offrir un niveau de garanties au moins équivalent à l&apos;assurance groupe de la banque. La banque dispose d&apos;un délai pour accepter ou refuser la substitution.
        </AlertBox>
        <p><Link href="/assurance-emprunteur" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur l&apos;assurance emprunteur</Link></p>
      </div>
    ),
  },
  "choisir-mutuelle-sante": {
    title: "Choisir sa mutuelle santé : les questions à se poser",
    description: "Ticket modérateur, chambre particulière, optique, dentaire : comment lire un tableau de garanties et choisir selon son profil.",
    category: "Santé",
    date: "2024-12-18",
    readTime: "6 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Pour choisir sa mutuelle santé, il faut identifier ses postes de consommation prioritaires (dentaire, optique, hospitalisation) et comparer les remboursements réels en euros, pas en pourcentages du tarif de base qui peuvent être trompeurs.
        </SummaryBox>
        <h2>Lire un tableau de garanties</h2>
        <p>Les tableaux de garanties utilisent plusieurs types d&apos;expression : pourcentage de la base de remboursement de la Sécurité sociale (BR), montants forfaitaires en euros, ou pourcentage du tarif conventionnel. Il est essentiel de comprendre ce que cela représente concrètement.</p>
        <h2>Les postes à prioritiser selon votre profil</h2>
        <h3>Dentaire</h3>
        <p>Les soins dentaires (couronnes, implants, orthodontie) sont peu remboursés par la Sécurité sociale. La réforme 100% Santé a amélioré la couverture sur les soins prothétiques éligibles, mais des restes à charge importants subsistent sur les prothèses hors panier. Si vous avez des travaux dentaires réguliers, une bonne couverture dentaire est prioritaire.</p>
        <h3>Optique</h3>
        <p>Les remboursements optique sont plafonnés. Le 100% Santé couvre certaines montures, mais les verres progressifs ou les montures de gamme supérieure entraînent des restes à charge. À évaluer selon votre équipement habituel.</p>
        <h3>Hospitalisation</h3>
        <p>Chambre particulière, forfait journalier, dépassements d&apos;honoraires en secteur 2 ou 3 : les complémentaires santé varient beaucoup sur la prise en charge des frais hospitaliers.</p>
        <h2>Individuelle ou collective ?</h2>
        <p>Si vous êtes salarié, votre entreprise est tenue de vous proposer une mutuelle collective avec prise en charge d&apos;au moins 50% de la cotisation. En tant qu&apos;indépendant ou professionnel libéral, vous souscrivez une mutuelle individuelle, avec une liberté de choix totale.</p>
        <p><Link href="/complementaire-sante" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la complémentaire santé</Link></p>
      </div>
    ),
  },
  "prevoyance-collective-obligations-employeur": {
    title: "Prévoyance collective : ce que l'employeur doit mettre en place",
    description: "Obligations légales, conventions collectives, contrats surcomplémentaires : le point sur ce que vous devez proposer à vos salariés.",
    category: "Entreprise",
    date: "2024-12-05",
    readTime: "8 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Depuis 2016, tous les employeurs sont tenus de proposer une complémentaire santé à leurs salariés (ANI). Pour la prévoyance décès/incapacité/invalidité, les obligations varient selon la convention collective applicable. Ne pas se conformer expose l&apos;entreprise à des risques juridiques et financiers.
        </SummaryBox>
        <h2>L&apos;obligation complémentaire santé (ANI 2016)</h2>
        <p>Depuis le 1er janvier 2016, toute entreprise doit proposer une complémentaire santé collective à ses salariés, avec une prise en charge patronale d&apos;au moins 50% de la cotisation. Le contrat doit respecter les critères du contrat responsable.</p>
        <h2>La prévoyance collective (décès, incapacité, invalidité)</h2>
        <p>Les obligations en matière de prévoyance collective (garanties décès, incapacité de travail, invalidité) dépendent de la convention collective applicable à votre secteur. Certaines conventions imposent des garanties minimales précises, d&apos;autres laissent plus de liberté à l&apos;employeur.</p>
        <AlertBox type="warning">
          En cas de sinistre sur un salarié sans prévoyance collective conforme à la convention collective applicable, l&apos;employeur peut être tenu de verser de sa propre poche les prestations que le contrat aurait dû verser. La vérification de conformité est essentielle.
        </AlertBox>
        <h2>Au-delà des obligations : la surcomplémentaire</h2>
        <p>Au-delà du socle obligatoire, vous pouvez proposer des garanties optionnelles ou surcomplémentaires. C&apos;est un outil de fidélisation et d&apos;attractivité, notamment dans les secteurs où la concurrence pour recruter est forte.</p>
        <h2>L&apos;épargne salariale</h2>
        <p>PEE, PERCO/PER collectif, intéressement, participation : ces dispositifs complètent la protection sociale et constituent un levier de rémunération différée avec des avantages sociaux et fiscaux pour l&apos;entreprise et les salariés.</p>
        <p><Link href="/protection-sociale-entreprise" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la protection sociale d&apos;entreprise</Link></p>
      </div>
    ),
  },
  "medecin-liberal-proteger-revenus": {
    title: "Médecin libéral : protéger ses revenus face aux aléas de la vie",
    description: "CARMF, IJ complémentaires, frais généraux, assurance décès : le point complet sur la prévoyance du médecin libéral.",
    category: "Médecins",
    date: "2024-11-20",
    readTime: "10 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          La CARMF verse des indemnités journalières après 90 jours d&apos;arrêt (ou 3 jours selon les options souscrites). Ce délai de carence long et le niveau des IJ souvent insuffisant pour couvrir les charges du cabinet justifient une prévoyance complémentaire adaptée aux médecins libéraux.
        </SummaryBox>
        <h2>Ce que couvre la CARMF</h2>
        <p>La Caisse Autonome de Retraite des Médecins de France (CARMF) gère la retraite et, via l&apos;ASV, des garanties de prévoyance. En cas d&apos;arrêt de travail, le régime invalidité-décès de la CARMF peut verser :</p>
        <ul>
          <li>Des indemnités journalières selon les options souscrites (option A, B, ou C)</li>
          <li>Une rente d&apos;invalidité en cas d&apos;incapacité prolongée</li>
          <li>Un capital ou une rente en cas de décès</li>
        </ul>
        <p>Le délai de carence standard est de 90 jours. En pratique, un médecin en arrêt de travail perçoit souvent des revenus résiduels (honoraires de remplaçants, retards de paiement) pendant les premières semaines, mais cela s&apos;épuise rapidement.</p>
        <h2>Les lacunes les plus fréquentes</h2>
        <h3>Le délai de carence</h3>
        <p>90 jours sans revenu de remplacement, c&apos;est long si vous avez des charges fixes importantes (loyer du cabinet, salaires, remboursements). Un contrat complémentaire avec un délai de carence court (8, 15 ou 30 jours) peut combler ce vide.</p>
        <h3>Les frais généraux du cabinet</h3>
        <p>Pendant votre arrêt, le loyer, les charges, les salaires des assistants continuent. Si vous n&apos;avez pas de garantie frais généraux, vous devez puiser dans votre trésorerie personnelle ou professionnelle.</p>
        <h3>La définition de l&apos;invalidité professionnelle</h3>
        <p>Un médecin spécialiste (chirurgien, ophtalmologiste, etc.) peut être en incapacité d&apos;exercer SA spécialité tout en étant théoriquement apte à exercer une autre activité médicale. La définition de l&apos;invalidité dans votre contrat complémentaire doit couvrir cette situation.</p>
        <AlertBox type="info">
          <strong>Note :</strong> Les montants des garanties CARMF varient selon les options souscrites et l&apos;historique de cotisations. Une simulation personnalisée est recommandée pour connaître votre niveau de protection réel.
        </AlertBox>
        <p><Link href="/prevoyance-medecin" className="text-brand-blue font-medium hover:underline">→ Voir la page dédiée à la prévoyance médecin</Link></p>
      </div>
    ),
  },
  "dentiste-invalidite-professionnelle": {
    title: "Chirurgien-dentiste : comprendre le risque d'invalidité professionnelle",
    description: "TMS, pathologies du poignet, CARCDSF : pourquoi l'invalidité partielle est le risque le plus sous-estimé chez les dentistes.",
    category: "Dentistes",
    date: "2024-11-10",
    readTime: "7 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          L&apos;invalidité professionnelle partielle est le risque le plus sous-estimé pour les chirurgiens-dentistes. Les TMS (troubles musculo-squelettiques) liés aux postures de travail peuvent réduire la capacité d&apos;exercer sans entraîner une invalidité totale. La définition de l&apos;invalidité dans le contrat de prévoyance est déterminante.
        </SummaryBox>
        <h2>Les risques spécifiques du chirurgien-dentiste</h2>
        <p>L&apos;exercice de la chirurgie dentaire exige une précision motrice importante et des postures contraignantes sur de longues heures. Les risques professionnels les plus fréquents sont :</p>
        <ul>
          <li>Troubles musculo-squelettiques (épaule, dos, poignet, cervicales)</li>
          <li>Pathologies du canal carpien liées aux vibrations des instruments rotatifs</li>
          <li>Problèmes de vue liés au travail sous lumière intense</li>
          <li>Allergies aux produits utilisés (latex, résines composites, produits de nettoyage)</li>
        </ul>
        <h2>Pourquoi l&apos;invalidité partielle est le risque majeur</h2>
        <p>Un chirurgien-dentiste touché par une TMS peut se retrouver dans une situation intermédiaire : encore capable d&apos;exercer partiellement, mais avec une capacité réduite et une douleur chronique. Cette situation est souvent peu ou mal couverte par les régimes standard.</p>
        <p>La CARCDSF (Caisse Autonome de Retraite des Chirurgiens-Dentistes et des Sages-Femmes) prévoit des garanties invalidité, mais la couverture en cas d&apos;invalidité partielle mérite une attention particulière.</p>
        <h2>Ce qu&apos;il faut vérifier dans son contrat complémentaire</h2>
        <ul>
          <li>La définition de l&apos;invalidité professionnelle : "votre profession" ou "toute profession" ?</li>
          <li>Le taux d&apos;invalidité à partir duquel les garanties se déclenchent</li>
          <li>La couverture en cas d&apos;invalidité partielle avec exercice réduit</li>
          <li>La prise en charge des frais généraux du cabinet pendant l&apos;arrêt</li>
        </ul>
        <p><Link href="/prevoyance-dentiste" className="text-brand-blue font-medium hover:underline">→ Voir la page dédiée à la prévoyance dentiste</Link></p>
      </div>
    ),
  },
  "veterinaire-arret-travail": {
    title: "Vétérinaire : que se passe-t-il financièrement en cas d'arrêt ?",
    description: "CARPV, zoonoses, blessures animales : les risques spécifiques du vétérinaire et ce que garantit vraiment le régime obligatoire.",
    category: "Vétérinaires",
    date: "2024-10-28",
    readTime: "7 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          La CARPV verse des indemnités journalières après un délai de carence qui dépend des options souscrites. Les vétérinaires sont exposés à des risques spécifiques (blessures animales, zoonoses, accidents de manipulation) que le régime obligatoire ne couvre pas toujours de manière optimale.
        </SummaryBox>
        <h2>Les risques professionnels spécifiques du vétérinaire</h2>
        <p>L&apos;exercice vétérinaire expose à des risques que d&apos;autres professions libérales ne connaissent pas :</p>
        <ul>
          <li><strong>Blessures animales</strong> : morsures, coups de sabot, griffures pouvant entraîner des infections graves</li>
          <li><strong>Zoonoses</strong> : maladies transmissibles de l&apos;animal à l&apos;homme (brucellose, leptospirose, rage…)</li>
          <li><strong>Accidents de manipulation</strong> : chutes, blessures lors d&apos;interventions sur de grands animaux</li>
          <li><strong>Exposition aux produits médicaux vétérinaires</strong> : antibiotiques, anesthésiants, produits de désinfection</li>
        </ul>
        <h2>Ce que couvre la CARPV</h2>
        <p>La Caisse Autonome de Retraite et de Prévoyance des Vétérinaires (CARPV) offre des garanties de prévoyance. En cas d&apos;arrêt de travail, des indemnités journalières peuvent être versées après un délai de carence. Le niveau de couverture dépend des options choisies lors de l&apos;adhésion.</p>
        <h2>Les lacunes à anticiper</h2>
        <p>Pour les vétérinaires propriétaires d&apos;une clinique avec des charges fixes importantes (loyer, employés, équipements), l&apos;arrêt de travail crée un double problème : perte de revenus ET maintien des charges. Une garantie frais généraux est particulièrement pertinente dans ce cas.</p>
        <p>Les vétérinaires ruraux, souvent seuls dans leur zone géographique, ont également un enjeu de remplacement coûteux en cas d&apos;arrêt.</p>
        <p><Link href="/prevoyance-veterinaire" className="text-brand-blue font-medium hover:underline">→ Voir la page dédiée à la prévoyance vétérinaire</Link></p>
      </div>
    ),
  },
  "architecte-prevoyance-retraite": {
    title: "Architecte libéral : prévoyance et retraite, l'essentiel",
    description: "CIPAV, engagements chantiers, clause homme-clé en société : ce que l'architecte libéral doit anticiper.",
    category: "Architectes",
    date: "2024-10-15",
    readTime: "8 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          L&apos;architecte libéral affilié à la CIPAV bénéficie d&apos;un délai de carence de 90 jours en cas d&apos;arrêt de travail. Les engagements contractuels sur chantiers et la coordination de projets en cours rendent ce délai particulièrement problématique sans couverture complémentaire.
        </SummaryBox>
        <h2>Le régime CIPAV pour les architectes</h2>
        <p>La Caisse Interprofessionnelle de Prévoyance et d&apos;Assurance Vieillesse (CIPAV) gère la retraite et la prévoyance de nombreuses professions libérales, dont les architectes. En cas d&apos;arrêt de travail, le délai de carence standard est de 90 jours, après quoi des indemnités journalières sont versées selon les cotisations et la durée de l&apos;arrêt.</p>
        <h2>Les contraintes spécifiques de l&apos;architecte</h2>
        <h3>Les engagements contractuels</h3>
        <p>Un architecte en cours de suivi de chantier a des engagements juridiques et contractuels. Son arrêt de travail ne suspend pas ces obligations. Trouver un remplaçant compétent en urgence coûte cher et peut nuire à la qualité du projet et à la relation client.</p>
        <h3>Les honoraires différés</h3>
        <p>Dans la pratique architecturale, les honoraires sont souvent liés à l&apos;avancement des missions (esquisse, APS, APD, permis, DCE, chantier, réception). Un arrêt en cours de mission peut bloquer des honoraires non encore facturables.</p>
        <h3>En société d&apos;architecture</h3>
        <p>Si vous exercez en société (SARL, SAS, SELARL d&apos;architectes), la garantie homme-clé peut protéger la structure en cas d&apos;absence d&apos;un associé clé. Elle permet à la société de financer le remplacement ou de traverser une période de moindre activité.</p>
        <h2>La retraite CIPAV</h2>
        <p>La CIPAV gère deux régimes de retraite : le régime de base et le régime complémentaire. Les architectes ont intérêt à demander régulièrement un relevé de situation individuelle pour estimer leur pension future et évaluer si une épargne complémentaire (PER individuel) est pertinente.</p>
        <p><Link href="/prevoyance-architecte" className="text-brand-blue font-medium hover:underline">→ Voir la page dédiée à la prévoyance architecte</Link></p>
      </div>
    ),
  },
  "dirigeant-sasu-protection": {
    title: "Dirigeant de SASU : êtes-vous vraiment bien protégé ?",
    description: "Assimilé salarié, régime général, lacunes réelles : pourquoi le statut SASU ne garantit pas une protection suffisante sans contrats complémentaires.",
    category: "Dirigeants",
    date: "2024-10-02",
    readTime: "8 min",
    content: (
      <div className="prose-custom">
        <SummaryBox title="À retenir">
          Le dirigeant de SASU (président assimilé salarié) est rattaché au régime général de la Sécurité sociale, ce qui lui donne accès aux indemnités journalières et aux allocations chômage APLD. Mais le niveau de couverture réel dépend des cotisations versées et peut être insuffisant pour maintenir le niveau de vie d&apos;un dirigeant. Une analyse personnalisée est nécessaire.
        </SummaryBox>
        <h2>Le statut d&apos;assimilé salarié</h2>
        <p>Le président de SASU (Société par Actions Simplifiée Unipersonnelle) est "assimilé salarié" au regard des régimes sociaux. Il cotise au régime général de la Sécurité sociale et non à la SSI (ex-RSI) comme les TNS. Il bénéficie donc théoriquement de la même protection que les salariés pour la santé, la retraite et la prévoyance.</p>
        <h2>Ce que le régime général garantit</h2>
        <p>En tant qu&apos;assimilé salarié, le président de SASU peut bénéficier :</p>
        <ul>
          <li>D&apos;indemnités journalières en cas d&apos;arrêt maladie (après vérification des conditions d&apos;ouverture de droits)</li>
          <li>D&apos;une rente invalidité en cas d&apos;incapacité</li>
          <li>D&apos;une pension de retraite du régime général et de l&apos;Agirc-Arrco</li>
        </ul>
        <h2>Les lacunes réelles</h2>
        <h3>Le niveau des IJ</h3>
        <p>Les indemnités journalières du régime général sont calculées sur la base des salaires déclarés, dans la limite du plafond de la Sécurité sociale. Si votre rémunération en tant que dirigeant est élevée, le taux de remplacement réel peut être faible.</p>
        <h3>L&apos;absence de couverture chômage classique</h3>
        <p>Le président de SASU n&apos;est pas affilié à l&apos;assurance chômage Unédic (sauf accord d&apos;entreprise spécifique). En cas de cessation de la SASU, il ne bénéficie pas des allocations chômage classiques.</p>
        <h3>Les charges fixes de la société</h3>
        <p>En cas d&apos;arrêt, la SASU continue de supporter ses charges : loyer, abonnements, crédits professionnels, salaires des éventuels autres salariés. Sans organisation préalable, le dirigeant se retrouve dans une situation délicate.</p>
        <AlertBox type="info">
          <strong>Précision :</strong> La situation de chaque dirigeant de SASU est unique selon la rémunération choisie, les cotisations versées et la structure de la société. Seule une analyse individuelle permet de déterminer les lacunes réelles et les solutions adaptées.
        </AlertBox>
        <p><Link href="/prevoyance-dirigeant" className="text-brand-blue font-medium hover:underline">→ En savoir plus sur la prévoyance dirigeant</Link></p>
      </div>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} | Vincent Leroy AXA`,
    description: article.description,
    alternates: { canonical: `/ressources/${slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Ressources", href: "/ressources" }, { label: article.title }]} />
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-blue text-xs px-2 py-1">{article.category}</span>
            <span className="text-brand-gray-400 text-sm">{article.date} · {article.readTime} de lecture</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-8 leading-tight">
            {article.title}
          </h1>
          {article.content}
        </div>
      </article>

      <section className="py-8 bg-brand-gray-50 border-t border-brand-gray-100">
        <div className="container-wide max-w-3xl text-sm text-brand-gray-500">
          <p>Les informations présentées dans cet article sont générales et ne constituent pas un conseil personnalisé. Une étude individuelle est nécessaire avant toute décision.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Un audit gratuit pour aller plus loin" subtitle="30 à 45 minutes d'analyse personnalisée de votre situation, sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Prendre rendez-vous" />
        </div>
      </section>
    </>
  );
}
