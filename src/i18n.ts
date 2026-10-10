export type Lang = 'fr' | 'en'

type Node = { title: string; detail: string; metrics: string[] }
type Project = { subtitle: string; meta: string; description: string; tags: string[] }
type Experience = { year: string; role: string; meta: string[]; desc: string }
type Row = [period: string, name: string, detail: string, note: string]
type Engagement = [name: string, period: string, role: string]

export type Content = {
  title: string
  nav: Record<'home' | 'about' | 'expertise' | 'projects' | 'experience' | 'education' | 'certifications' | 'contact', string>
  ui: { switchLang: string; toLight: string; toDark: string; openMenu: string; closeMenu: string }
  hero: { titleA: string; titleB: string; taglineA: string; taglineB: string }
  about: { displayPre: string; displayHighlight: string; displayLine2: string; p1: string; p2: string; signatureRole: string }
  expertise: { titleA: string; titleB: string; items: [title: string, desc: string][] }
  system: { titleA: string; titleB: string; note: string; nodes: Node[] }
  projects: { titleA: string; titleB: string; view: string; items: Project[] }
  certifications: { titleA: string; titleB: string; items: [date: string, name: string, issuerAndType: string, extra: string][] }
  experience: { items: Experience[] }
  education: { formation: string; engagement: string; formationItems: Row[]; engagementItems: Engagement[] }
  stack: { titleA: string; titleB: string; toolsWord: string; groups: { name: string; tools: string[] }[] }
  contact: { titleA: string; titleB: string; lead: string; location: string; languages: string; availability: string }
  footer: { text: string }
}

export const content: Record<Lang, Content> = {
  fr: {
    title: 'Ahmed Ghfiri | Mécatronique & Systèmes autonomes',
    nav: { home: 'Accueil', about: 'À propos', expertise: 'Expertise', projects: 'Projets', experience: 'Expérience', education: 'Formation', certifications: 'Certifications', contact: 'Contact' },
    ui: { switchLang: 'Switch to English', toLight: 'Passer en mode clair', toDark: 'Passer en mode sombre', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
    hero: {
      titleA: 'Élève ingénieur',
      titleB: 'Mécatronique',
      taglineA: 'Explorer prototyper valider',
      taglineB: 'construire ce qui n’existe pas encore',
    },
    about: {
      displayPre: 'Je donne une forme ',
      displayHighlight: 'physique',
      displayLine2: 'aux systèmes intelligents.',
      p1: 'Élève ingénieur en dernière année de mécatronique à ESPRIT, spécialisé en génie électromécanique et systèmes autonomes. Je conçois des machines qui perçoivent leur environnement, prennent des décisions et agissent avec précision.',
      p2: 'De la cellule d’un drone VTOL à sa supervision temps réel, mon travail relie mécanique, électronique et logiciel pour créer des systèmes fiables.',
      signatureRole: '— ingénieur en devenir',
    },
    expertise: {
      titleA: 'Les outils',
      titleB: 'du mouvement.',
      items: [
        ['Conception mécanique & CAO', 'SolidWorks, ANSYS, Abaqus (FEA), simulation structurelle et aérodynamique'],
        ['Électronique & hardware embarqué', 'STM32, Altium Designer, KiCad, conception PCB, acquisition IMU, GPS, baromètre et magnétomètre'],
        ['IA & vision par ordinateur', 'YOLO, OpenCV, détection d’objets, vision thermique/RGB, IA embarquée sur Raspberry Pi'],
        ['Automatisation industrielle', 'Siemens TIA Portal, PLC, PLCSIM, capteurs et actionneurs industriels'],
        ['Systèmes autonomes & robotique', 'ROS 2 (Humble), contrôle de drones, cinématique directe/inverse, PID, navigation GPS autonome'],
      ],
    },
    system: {
      titleA: 'Une mission,',
      titleB: 'cinq couches.',
      note: 'Chaque couche du système est pensée comme un organe indépendant, relié par un flux de données continu.',
      nodes: [
        { title: 'Capteurs', detail: 'Le système agrège les signaux de navigation et d’altitude avant chaque cycle de contrôle.', metrics: ['IMU / GPS / Baro', 'Acquisition 100 Hz', 'Fusion multi-capteurs'] },
        { title: 'STM32', detail: 'Le microcontrôleur exécute les boucles PID et orchestre les commandes critiques de vol.', metrics: ['Firmware temps réel en C', 'Navigation GPS par waypoints', 'Liaison UART vers Raspberry Pi'] },
        { title: 'Raspberry Pi', detail: 'Le calculateur de mission pilote la détection, les décisions et la supervision de l’autonomie.', metrics: ['Inférence YOLO', 'Mission edge', 'ROS / Python'] },
        { title: 'Actionneurs', detail: 'Les consignes sont distribuées aux ESC et moteurs pour transformer le plan de vol en mouvement.', metrics: ['ESC / moteurs', 'Commande PWM', 'Redondance active'] },
        { title: 'Télémétrie', detail: 'Les données de vol remontent vers un dashboard pour observer l’état du véhicule en temps réel.', metrics: ['FastAPI / WebSocket', 'Dashboard live', 'Journalisation mission'] },
      ],
    },
    projects: {
      titleA: 'Du concept',
      titleB: 'au terrain.',
      view: 'Voir',
      items: [
        { subtitle: 'Drone VTOL autonome de sauvetage', meta: 'Projet CDIO · ESPRIT · 2025–2026', description: 'Cellule UAV VTOL validée par simulation aéro/structurelle, pile de vol autonome complète, détection IA de victimes (RGB + thermique, seuil 85 %), largage de bouée CO2 automatique.', tags: ['SolidWorks', 'STM32', 'Raspberry Pi', 'YOLO', 'PID', 'FastAPI / WebSocket'] },
        { subtitle: 'Pile de contrôle ROS 2 / STM32', meta: 'Projet personnel · 2025–2026', description: 'Architecture ROS 2 Humble de 10 nœuds (cinématique, trajectoires 100 Hz, sécurité, vision, saisie d’objet), firmware STM32 FreeRTOS + micro-ROS avec PID 1 kHz et génération de pas à 20 kHz sur 6 axes, jumeau numérique 3D et calibration caméra main-œil.', tags: ['ROS 2', 'STM32', 'FreeRTOS', 'micro-ROS', 'PySide6 / OpenGL', 'OpenCV'] },
        { subtitle: 'Plateforme R&D · TECHNOZOR', meta: 'Stage R&D · 2 mois · 2026', description: 'Conception d’une cellule UAV, deux variantes avioniques (PixHawk + carte STM32 custom), châssis étanche modulaire pour drone sous-marin autonome et contribution à une plateforme cloud de supervision multi-UAV.', tags: ['Altium', 'PixHawk', 'STM32 custom', 'AUV', 'Cloud'] },
        { subtitle: 'Automatisation industrielle · COFICAB', meta: 'Stage · 4 mois · 2024', description: 'Conception et modélisation d’une machine d’irradiation, remplacement d’une procédure manuelle par un contrôle automatisé conforme aux normes de radiation.', tags: ['SolidWorks', 'Raspberry Pi 5', 'Automatisation industrielle'] },
      ],
    },
    experience: {
      items: [
        { year: '2026', role: 'Stagiaire R&D Drones', meta: ['Technozor', 'Tunis', 'Juil.–Août 2026 (2 mois)'], desc: 'Conception d’une carte de contrôle de vol STM32 custom (Altium, KiCad) et d’une variante PixHawk, mise en service depuis le bare metal et essais en vol. Châssis étanche pour drone sous-marin.' },
        { year: '2025', role: 'Stagiaire Ingénieur', meta: ['STEG', 'Tunis', '2025 (1,5 mois)'], desc: 'Cartographie du réseau national de distribution électrique (HT / MT / BT, postes de transformation).' },
        { year: '2024', role: 'Stage pratique, département Maintenance', meta: ['COFICAB', 'Tunis', 'Févr.–Mai 2024 (4 mois)'], desc: 'Conception SolidWorks d’une machine d’irradiation de câbles et automatisation de la procédure (Raspberry Pi 5), conforme aux normes de radiation industrielle.' },
        { year: '2023', role: 'Stagiaire en Automatisation', meta: ['Société Nouvelle du Liège', 'Tabarka', 'Janv.–Févr. 2023'], desc: 'Systèmes automatiques et programmation d’automates (PLC).' },
        { year: '2022', role: 'Stage d’initiation', meta: ['Entreprise Mécanique Générale', 'Port de Tabarka', 'Janv.–Févr. 2022'], desc: 'Techniques d’usinage et fabrication mécanique en atelier.' },
      ],
    },
    education: {
      formation: 'Formation académique',
      engagement: 'Engagement',
      formationItems: [
        ['2024–présent', 'ESPRIT, Tunis', 'Diplôme d’ingénieur en génie électromécanique, spécialité mécatronique (dernière année, PFE de 6 mois à réaliser). Programmes accrédités EUR-ACE par la CTI jusqu’en 2028.', ''],
        ['2021–2024', 'ISET Béja', 'Licence en génie mécanique, spécialité mécatronique, mention Assez bien.', ''],
        ['2021', 'Lycée de Tabarka', 'Baccalauréat sciences techniques.', ''],
      ],
      engagementItems: [
        ['Club Aéro ESPRIT', '2025–2026', 'Vice-président'],
        ['IEEE', 'Depuis 2024', 'Membre'],
        ['Club pour enfants', '', 'Formateur Arduino'],
      ],
    },
    certifications: {
      titleA: 'Certifications',
      titleB: 'et formations.',
      items: [
        ['9 octobre 2026', 'MATLAB Onramp', 'MathWorks · Formation en ligne terminée à 100 %', ''],
        ['7 octobre 2026', 'Applications of AI for Predictive Maintenance', 'NVIDIA Deep Learning Institute · Certificat NVIDIA DLI', 'ID : FvnkGbXrSS6WbV9CjRXhzQ'],
        ['Juin 2025', 'Bal des Projets, 12e édition', 'ESPRIT · Attestation de participation', ''],
        ['Avril 2022', 'Certified SolidWorks Associate (CSWA) – Mechanical Design', 'Dassault Systèmes · Certification officielle', 'Score : 195/240 (seuil 165) · ID : C-5DJU3FYW6E'],
        ['Avril 2022', 'Robotique (Arduino)', 'Elites Pro Academy, Béja · Certificat de formation accélérée', ''],
      ],
    },
    stack: {
      titleA: 'Stack',
      titleB: 'technique',
      toolsWord: 'outils',
      groups: [
        { name: 'Mécanique / CAO', tools: ['SolidWorks (CSWA)', 'CATIA V5', 'ANSYS', 'Abaqus', 'HyperMesh', 'OptiStruct', 'MATLAB / Simulink'] },
        { name: 'Électronique', tools: ['STM32', 'STM32CubeIDE', 'ARM Cortex-M', 'Raspberry Pi', 'ESP32', 'Arduino', 'PixHawk', 'FPGA', 'Intel Quartus', 'QuestaSim', 'Altium Designer', 'KiCad', 'LTspice'] },
        { name: 'Programmation', tools: ['C', 'C++', 'Python', 'VHDL', 'JavaScript', 'RTOS / FreeRTOS', 'Bare metal / HAL', 'micro-ROS'] },
        { name: 'Protocoles', tools: ['UART', 'SPI', 'I2C', 'CAN', 'TCP/IP', 'DDS', 'PROFINET', 'PROFIBUS', 'Zigbee', 'MQTT'] },
        { name: 'Robotique & contrôle', tools: ['PID', 'Cinématique directe et inverse', 'Modèle DH', 'Fusion multi-capteurs', 'Navigation par waypoints'] },
        { name: 'IA & vision', tools: ['OpenCV', 'YOLO / PyTorch', 'ROS 2 (Humble)', 'Vision thermique', 'ArUco', 'Calibration caméra / main-œil', 'IA embarquée'] },
        { name: 'Automatisation', tools: ['Siemens TIA Portal', 'PLCSIM', 'FluidSIM'] },
        { name: 'Web / backend', tools: ['FastAPI', 'WebSocket', 'SQLite', 'JWT', 'Docker', 'Linux', 'Git', 'HTML5', 'CSS3', 'PySide6 / Qt', 'OpenGL'] },
        { name: 'Essais & validation', tools: ['Debug sur cible (SWD)', 'Bancs d’essais', 'Plans d’essais', 'Tests unitaires'] },
      ],
    },
    contact: {
      titleA: 'Construisons la suite',
      titleB: 'ensemble.',
      lead: 'Élève ingénieur en mécatronique, je recherche un stage de fin d’études de 6 mois en France, à partir de décembre 2026, en systèmes embarqués, drones ou robotique, idéalement en laboratoire.',
      location: 'Tunis, Tunisie',
      languages: 'Langues : Arabe (natif) · Français (C1) · Anglais (B2)',
      availability: 'Disponible pour un PFE de 6 mois en France, dès décembre 2026',
    },
    footer: { text: '© 2026 Ahmed Ghfiri · Élève ingénieur en mécatronique & systèmes autonomes' },
  },

  en: {
    title: 'Ahmed Ghfiri | Mechatronics & Autonomous Systems',
    nav: { home: 'Home', about: 'About', expertise: 'Expertise', projects: 'Projects', experience: 'Experience', education: 'Education', certifications: 'Certifications', contact: 'Contact' },
    ui: { switchLang: 'Passer en français', toLight: 'Switch to light mode', toDark: 'Switch to dark mode', openMenu: 'Open menu', closeMenu: 'Close menu' },
    hero: {
      titleA: 'Mechatronics',
      titleB: 'Engineering Student',
      taglineA: 'Explore prototype validate',
      taglineB: 'build what doesn’t exist yet',
    },
    about: {
      displayPre: 'I give a ',
      displayHighlight: 'physical',
      displayLine2: 'form to intelligent systems.',
      p1: 'Final-year mechatronics engineering student at ESPRIT, specialised in electromechanical engineering and autonomous systems. I design machines that perceive their environment, make decisions and act with precision.',
      p2: 'From the airframe of a VTOL drone to its real-time supervision, my work connects mechanics, electronics and software to build reliable systems.',
      signatureRole: '— engineer in the making',
    },
    expertise: {
      titleA: 'The tools',
      titleB: 'of motion.',
      items: [
        ['Mechanical design & CAD', 'SolidWorks, ANSYS, Abaqus (FEA), structural and aerodynamic simulation'],
        ['Electronics & embedded hardware', 'STM32, Altium Designer, KiCad, PCB design, IMU, GPS, barometer and magnetometer acquisition'],
        ['AI & computer vision', 'YOLO, OpenCV, object detection, thermal/RGB vision, embedded AI on Raspberry Pi'],
        ['Industrial automation', 'Siemens TIA Portal, PLC, PLCSIM, industrial sensors and actuators'],
        ['Autonomous systems & robotics', 'ROS 2 (Humble), drone control, forward/inverse kinematics, PID, autonomous GPS navigation'],
      ],
    },
    system: {
      titleA: 'One mission,',
      titleB: 'five layers.',
      note: 'Each layer of the system is designed as an independent organ, linked by a continuous data flow.',
      nodes: [
        { title: 'Sensors', detail: 'The system aggregates navigation and altitude signals before each control cycle.', metrics: ['IMU / GPS / Baro', '100 Hz acquisition', 'Multi-sensor fusion'] },
        { title: 'STM32', detail: 'The microcontroller runs the PID loops and orchestrates critical flight commands.', metrics: ['Real-time firmware in C', 'GPS waypoint navigation', 'UART link to Raspberry Pi'] },
        { title: 'Raspberry Pi', detail: 'The mission computer drives detection, decisions and autonomy supervision.', metrics: ['YOLO inference', 'Edge mission', 'ROS / Python'] },
        { title: 'Actuators', detail: 'Commands are dispatched to the ESCs and motors to turn the flight plan into motion.', metrics: ['ESC / motors', 'PWM control', 'Active redundancy'] },
        { title: 'Telemetry', detail: 'Flight data is streamed to a dashboard to monitor the vehicle state in real time.', metrics: ['FastAPI / WebSocket', 'Live dashboard', 'Mission logging'] },
      ],
    },
    projects: {
      titleA: 'From concept',
      titleB: 'to the field.',
      view: 'View',
      items: [
        { subtitle: 'Autonomous VTOL rescue drone', meta: 'CDIO project · ESPRIT · 2025–2026', description: 'VTOL UAV airframe validated by aerodynamic/structural simulation, complete autonomous flight stack, AI victim detection (RGB + thermal, 85% threshold), automatic CO2 buoy release.', tags: ['SolidWorks', 'STM32', 'Raspberry Pi', 'YOLO', 'PID', 'FastAPI / WebSocket'] },
        { subtitle: 'ROS 2 / STM32 control stack', meta: 'Personal project · 2025–2026', description: 'ROS 2 Humble architecture of 10 nodes (kinematics, 100 Hz trajectories, safety, vision, object grasping), STM32 FreeRTOS + micro-ROS firmware with 1 kHz PID and 20 kHz step generation on 6 axes, 3D digital twin and hand-eye camera calibration.', tags: ['ROS 2', 'STM32', 'FreeRTOS', 'micro-ROS', 'PySide6 / OpenGL', 'OpenCV'] },
        { subtitle: 'R&D platform · TECHNOZOR', meta: 'R&D internship · 2 months · 2026', description: 'Design of a UAV airframe, two avionics variants (PixHawk + custom STM32 board), a modular waterproof chassis for an autonomous underwater drone, and contribution to a cloud platform for multi-UAV supervision.', tags: ['Altium', 'PixHawk', 'Custom STM32', 'AUV', 'Cloud'] },
        { subtitle: 'Industrial automation · COFICAB', meta: 'Internship · 4 months · 2024', description: 'Design and modelling of an irradiation machine, replacing a manual procedure with automated control compliant with radiation standards.', tags: ['SolidWorks', 'Raspberry Pi 5', 'Industrial automation'] },
      ],
    },
    experience: {
      items: [
        { year: '2026', role: 'Drone R&D Intern', meta: ['Technozor', 'Tunis', 'Jul.–Aug. 2026 (2 months)'], desc: 'Designed a custom STM32 flight-controller board (Altium, KiCad) and a PixHawk variant, brought them up from bare metal and ran flight tests. Waterproof chassis for an underwater drone.' },
        { year: '2025', role: 'Engineering Intern', meta: ['STEG', 'Tunis', '2025 (1.5 months)'], desc: 'Mapping of the national electricity distribution network (HV / MV / LV, transformer substations).' },
        { year: '2024', role: 'Work placement, Maintenance department', meta: ['COFICAB', 'Tunis', 'Feb.–May 2024 (4 months)'], desc: 'SolidWorks design of a cable irradiation machine and automation of the procedure (Raspberry Pi 5), compliant with industrial radiation standards.' },
        { year: '2023', role: 'Automation Intern', meta: ['Société Nouvelle du Liège', 'Tabarka', 'Jan.–Feb. 2023'], desc: 'Automated systems and PLC programming.' },
        { year: '2022', role: 'Introductory internship', meta: ['Entreprise Mécanique Générale', 'Port of Tabarka', 'Jan.–Feb. 2022'], desc: 'Machining techniques and mechanical manufacturing in a workshop.' },
      ],
    },
    education: {
      formation: 'Academic background',
      engagement: 'Involvement',
      formationItems: [
        ['2024–present', 'ESPRIT, Tunis', 'Engineering degree in electromechanical engineering, mechatronics track (final year, 6-month final-year project to be completed). Programmes accredited EUR-ACE by the CTI until 2028.', ''],
        ['2021–2024', 'ISET Béja', 'Bachelor’s degree in mechanical engineering, mechatronics track, with honours (“Assez bien”).', ''],
        ['2021', 'Tabarka High School', 'Baccalaureate in technical sciences.', ''],
      ],
      engagementItems: [
        ['ESPRIT Aero Club', '2025–2026', 'Vice-president'],
        ['IEEE', 'Since 2024', 'Member'],
        ['Children’s club', '', 'Arduino instructor'],
      ],
    },
    certifications: {
      titleA: 'Certifications',
      titleB: 'and training.',
      items: [
        ['9 October 2026', 'MATLAB Onramp', 'MathWorks · Online course, 100% completed', ''],
        ['7 October 2026', 'Applications of AI for Predictive Maintenance', 'NVIDIA Deep Learning Institute · NVIDIA DLI certificate', 'ID: FvnkGbXrSS6WbV9CjRXhzQ'],
        ['June 2025', 'Bal des Projets, 12th edition', 'ESPRIT · Certificate of participation', ''],
        ['April 2022', 'Certified SolidWorks Associate (CSWA) – Mechanical Design', 'Dassault Systèmes · Official certification', 'Score: 195/240 (pass mark 165) · ID: C-5DJU3FYW6E'],
        ['April 2022', 'Robotics (Arduino)', 'Elites Pro Academy, Béja · Intensive course certificate', ''],
      ],
    },
    stack: {
      titleA: 'Tech',
      titleB: 'stack',
      toolsWord: 'tools',
      groups: [
        { name: 'Mechanics / CAD', tools: ['SolidWorks (CSWA)', 'CATIA V5', 'ANSYS', 'Abaqus', 'HyperMesh', 'OptiStruct', 'MATLAB / Simulink'] },
        { name: 'Electronics', tools: ['STM32', 'STM32CubeIDE', 'ARM Cortex-M', 'Raspberry Pi', 'ESP32', 'Arduino', 'PixHawk', 'FPGA', 'Intel Quartus', 'QuestaSim', 'Altium Designer', 'KiCad', 'LTspice'] },
        { name: 'Programming', tools: ['C', 'C++', 'Python', 'VHDL', 'JavaScript', 'RTOS / FreeRTOS', 'Bare metal / HAL', 'micro-ROS'] },
        { name: 'Protocols', tools: ['UART', 'SPI', 'I2C', 'CAN', 'TCP/IP', 'DDS', 'PROFINET', 'PROFIBUS', 'Zigbee', 'MQTT'] },
        { name: 'Robotics & control', tools: ['PID', 'Forward & inverse kinematics', 'DH model', 'Multi-sensor fusion', 'Waypoint navigation'] },
        { name: 'AI & vision', tools: ['OpenCV', 'YOLO / PyTorch', 'ROS 2 (Humble)', 'Thermal vision', 'ArUco', 'Camera / hand-eye calibration', 'Embedded AI'] },
        { name: 'Automation', tools: ['Siemens TIA Portal', 'PLCSIM', 'FluidSIM'] },
        { name: 'Web / backend', tools: ['FastAPI', 'WebSocket', 'SQLite', 'JWT', 'Docker', 'Linux', 'Git', 'HTML5', 'CSS3', 'PySide6 / Qt', 'OpenGL'] },
        { name: 'Testing & validation', tools: ['On-target debugging (SWD)', 'Test benches', 'Test plans', 'Unit testing'] },
      ],
    },
    contact: {
      titleA: 'Let’s build what’s next',
      titleB: 'together.',
      lead: 'Mechatronics engineering student, I am looking for a 6-month final-year internship in France, starting December 2026, in embedded systems, drones or robotics, ideally in a research lab.',
      location: 'Tunis, Tunisia',
      languages: 'Languages: Arabic (native) · French (C1) · English (B2)',
      availability: 'Available for a 6-month final-year project in France from December 2026',
    },
    footer: { text: '© 2026 Ahmed Ghfiri · Mechatronics & Autonomous Systems Engineering Student' },
  },
}
