export type Lang = 'fr' | 'en'

type Node = { title: string; eyebrow: string; detail: string; metrics: string[] }
type Project = { subtitle: string; meta: string; description: string; tags: string[] }
type Experience = { year: string; role: string; meta: string[] }
type Row = [period: string, name: string, detail: string, note: string]

export type Content = {
  title: string
  nav: Record<'home' | 'about' | 'expertise' | 'projects' | 'experience' | 'education' | 'certifications' | 'contact', string>
  ui: { switchLang: string; toLight: string; toDark: string }
  hero: { titleA: string; titleB: string; taglineA: string; taglineB: string }
  about: { label: string; displayPre: string; displayHighlight: string; displayLine2: string; p1: string; p2: string; signatureRole: string }
  expertise: { label: string; titleA: string; titleB: string; items: [title: string, desc: string][] }
  system: { label: string; titleA: string; titleB: string; note: string; nodes: Node[] }
  projects: { label: string; titleA: string; titleB: string; view: string; items: Project[] }
  certifications: { label: string; titleA: string; titleB: string; items: [date: string, name: string, issuerAndType: string, extra: string][] }
  experience: { label: string; items: Experience[] }
  education: { label: string; formation: string; engagement: string; formationItems: Row[]; engagementItems: Row[] }
  stack: { label: string; titleA: string; titleB: string; toolsWord: string; groups: { name: string; tools: string[] }[] }
  contact: { label: string; titleA: string; titleB: string; lead: string; location: string; languages: string }
  footer: { text: string }
}

export const content: Record<Lang, Content> = {
  fr: {
    title: 'Ahmed Ghfiri | Mécatronique & Systèmes autonomes',
    nav: { home: 'Accueil', about: 'À propos', expertise: 'Expertise', projects: 'Projets', experience: 'Expérience', education: 'Formation', certifications: 'Certifications', contact: 'Contact' },
    ui: { switchLang: 'Switch to English', toLight: 'Passer en mode clair', toDark: 'Passer en mode sombre' },
    hero: {
      titleA: 'Élève ingénieur',
      titleB: 'Mécatronique',
      taglineA: 'Explorer prototyper valider',
      taglineB: 'construire ce qui n’existe pas encore',
    },
    about: {
      label: '01 / À propos',
      displayPre: 'Je donne une forme ',
      displayHighlight: 'physique',
      displayLine2: 'aux systèmes intelligents.',
      p1: 'Élève ingénieur en dernière année de mécatronique à ESPRIT, spécialisé en génie électromécanique et systèmes autonomes. Je conçois des machines qui perçoivent leur environnement, prennent des décisions et agissent avec précision.',
      p2: 'De la cellule d’un drone VTOL à sa supervision temps réel, mon travail relie mécanique, électronique et logiciel pour créer des systèmes fiables.',
      signatureRole: '— ingénieur en devenir',
    },
    expertise: {
      label: '02 / Expertise',
      titleA: 'Les outils',
      titleB: 'du mouvement.',
      items: [
        ['Conception mécanique & CAO', 'SolidWorks, ANSYS, Abaqus (FEA), simulation structurelle et aérodynamique'],
        ['Électronique & hardware embarqué', 'STM32, Altium Designer, KiCad, conception PCB, acquisition IMU, GPS, baromètre et magnétomètre'],
        ['IA & vision par ordinateur', 'YOLO, OpenCV, détection d’objets, vision thermique/RGB, IA embarquée sur Raspberry Pi'],
        ['Automatisation industrielle', 'Siemens TIA Portal, PLC, PLCSIM, capteurs et actionneurs industriels'],
        ['Systèmes autonomes & robotique', 'ROS, contrôle de drones, cinématique directe/inverse, PID, navigation GPS autonome'],
      ],
    },
    system: {
      label: '03 / Système AquaWing',
      titleA: 'Une mission,',
      titleB: 'cinq couches.',
      note: 'Chaque couche du système est pensée comme un organe indépendant, relié par un flux de données continu.',
      nodes: [
        { title: 'Capteurs', eyebrow: '01 / acquisition', detail: 'Le système agrège les signaux de navigation et d’altitude avant chaque cycle de contrôle.', metrics: ['IMU / GPS / Baro', 'Acquisition 100 Hz', 'Fusion multi-capteurs'] },
        { title: 'STM32', eyebrow: '02 / temps réel', detail: 'Le microcontrôleur exécute les boucles PID et orchestre les commandes critiques de vol.', metrics: ['Boucle PID : 100 Hz', 'Latence UART : < 5 ms', 'Architecture Cortex-M'] },
        { title: 'Raspberry Pi', eyebrow: '03 / mission', detail: 'Le calculateur de mission pilote la détection, les décisions et la supervision de l’autonomie.', metrics: ['Inférence YOLO', 'Mission edge', 'ROS / Python'] },
        { title: 'Actionneurs', eyebrow: '04 / propulsion', detail: 'Les consignes sont distribuées aux ESC et moteurs pour transformer le plan de vol en mouvement.', metrics: ['ESC / moteurs', 'Commande PWM', 'Redondance active'] },
        { title: 'Télémétrie', eyebrow: '05 / supervision', detail: 'Les données de vol remontent vers un dashboard pour observer l’état du véhicule en temps réel.', metrics: ['FastAPI / WebSocket', 'Dashboard live', 'Journalisation mission'] },
      ],
    },
    projects: {
      label: '04 / Projets phares',
      titleA: 'Du concept',
      titleB: 'au terrain.',
      view: 'Voir',
      items: [
        { subtitle: 'Drone VTOL autonome de sauvetage', meta: 'Projet CDIO · ESPRIT · 2025–2026', description: 'Cellule UAV VTOL validée par simulation aéro/structurelle, pile de vol autonome complète, détection IA de victimes (RGB + thermique, seuil 85 %), largage de bouée CO2 automatique.', tags: ['SolidWorks', 'STM32', 'Raspberry Pi', 'YOLO', 'PID', 'FastAPI / WebSocket'] },
        { subtitle: 'Plateforme R&D · TECHNOZOR', meta: 'Stage R&D · 2 mois · 2026', description: 'Conception d’une cellule UAV, deux variantes avioniques (PixHawk + carte STM32 custom), châssis étanche modulaire pour drone sous-marin autonome et plateforme cloud de supervision multi-UAV.', tags: ['Altium', 'PixHawk', 'STM32 custom', 'AUV', 'Cloud'] },
        { subtitle: 'Automatisation industrielle · COFICAB', meta: 'Stage · 4 mois · 2024', description: 'Conception et modélisation d’une machine d’irradiation, remplacement d’une procédure manuelle par un contrôle automatisé conforme aux normes de radiation.', tags: ['SolidWorks', 'Raspberry Pi 5', 'Automatisation industrielle'] },
      ],
    },
    experience: {
      label: '05 / Expérience',
      // TODO: compléter les périodes manquantes (et la ville pour la Société Nouvelle de Liège).
      items: [
        { year: '2026', role: 'Stagiaire R&D Drones', meta: ['Technozor', 'Tunis', 'Juil.–Août 2026'] },
        { year: '2025', role: 'Stagiaire Ingénieur', meta: ['STEG', 'Tunis'] }, // TODO: période
        { year: '2024', role: 'Stagiaire Conception & Automatisation', meta: ['COFICAB', 'Tunis', 'Stage de fin d’études'] }, // TODO: période
        { year: '2023', role: 'Stagiaire en Automatisation', meta: ['Société Nouvelle de Liège'] }, // TODO: ville, période
        { year: '2022', role: 'Stage d’initiation, Atelier mécanique', meta: ['Port de Tabarka'] }, // TODO: période
      ],
    },
    education: {
      label: '06 / Formation & engagement',
      formation: 'Formation académique',
      engagement: 'Engagement',
      formationItems: [
        ['2024–présent', 'ESPRIT, Tunis', 'Diplôme d’ingénieur en génie électromécanique, spécialité mécatronique (dernière année, PFE de 6 mois à réaliser). Programmes accrédités EUR-ACE par la CTI jusqu’en 2028.', ''],
        ['2021–2024', 'ISET Béja', 'Licence en génie mécanique, spécialité mécatronique, mention Assez bien.', ''],
        ['2021', 'Lycée de Tabarka', 'Baccalauréat sciences techniques.', ''],
      ],
      engagementItems: [
        ['2025–2026', 'Club Aéro ESPRIT', 'Vice-président — conception et construction d’avions RC et de drones de compétition', 'Membre depuis 2024'],
        ['2024–présent', 'IEEE', 'Membre', ''],
      ],
    },
    certifications: {
      label: '07 / Certifications',
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
      label: '08 / Stack technique',
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
      label: '09 / Contact',
      titleA: 'Travaillons ensemble',
      titleB: 'sur votre prochain projet.',
      lead: 'Élève ingénieur en mécatronique, je conçois des systèmes embarqués, robotiques et autonomes. Je suis ouvert aux opportunités de stage, d’emploi et de collaboration.',
      location: 'Tunis, Tunisie',
      languages: 'Langues : Arabe (natif) · Français (C1) · Anglais (B2)',
    },
    footer: { text: '© 2026 Ahmed Ghfiri · Élève ingénieur en mécatronique & systèmes autonomes' },
  },

  en: {
    title: 'Ahmed Ghfiri | Mechatronics & Autonomous Systems',
    nav: { home: 'Home', about: 'About', expertise: 'Expertise', projects: 'Projects', experience: 'Experience', education: 'Education', certifications: 'Certifications', contact: 'Contact' },
    ui: { switchLang: 'Passer en français', toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    hero: {
      titleA: 'Mechatronics',
      titleB: 'Engineering Student',
      taglineA: 'Explore prototype validate',
      taglineB: 'build what doesn’t exist yet',
    },
    about: {
      label: '01 / About',
      displayPre: 'I give a ',
      displayHighlight: 'physical',
      displayLine2: 'form to intelligent systems.',
      p1: 'Final-year mechatronics engineering student at ESPRIT, specialised in electromechanical engineering and autonomous systems. I design machines that perceive their environment, make decisions and act with precision.',
      p2: 'From the airframe of a VTOL drone to its real-time supervision, my work connects mechanics, electronics and software to build reliable systems.',
      signatureRole: '— engineer in the making',
    },
    expertise: {
      label: '02 / Expertise',
      titleA: 'The tools',
      titleB: 'of motion.',
      items: [
        ['Mechanical design & CAD', 'SolidWorks, ANSYS, Abaqus (FEA), structural and aerodynamic simulation'],
        ['Electronics & embedded hardware', 'STM32, Altium Designer, KiCad, PCB design, IMU, GPS, barometer and magnetometer acquisition'],
        ['AI & computer vision', 'YOLO, OpenCV, object detection, thermal/RGB vision, embedded AI on Raspberry Pi'],
        ['Industrial automation', 'Siemens TIA Portal, PLC, PLCSIM, industrial sensors and actuators'],
        ['Autonomous systems & robotics', 'ROS, drone control, forward/inverse kinematics, PID, autonomous GPS navigation'],
      ],
    },
    system: {
      label: '03 / AquaWing system',
      titleA: 'One mission,',
      titleB: 'five layers.',
      note: 'Each layer of the system is designed as an independent organ, linked by a continuous data flow.',
      nodes: [
        { title: 'Sensors', eyebrow: '01 / acquisition', detail: 'The system aggregates navigation and altitude signals before each control cycle.', metrics: ['IMU / GPS / Baro', '100 Hz acquisition', 'Multi-sensor fusion'] },
        { title: 'STM32', eyebrow: '02 / real time', detail: 'The microcontroller runs the PID loops and orchestrates critical flight commands.', metrics: ['PID loop: 100 Hz', 'UART latency: < 5 ms', 'Cortex-M architecture'] },
        { title: 'Raspberry Pi', eyebrow: '03 / mission', detail: 'The mission computer drives detection, decisions and autonomy supervision.', metrics: ['YOLO inference', 'Edge mission', 'ROS / Python'] },
        { title: 'Actuators', eyebrow: '04 / propulsion', detail: 'Commands are dispatched to the ESCs and motors to turn the flight plan into motion.', metrics: ['ESC / motors', 'PWM control', 'Active redundancy'] },
        { title: 'Telemetry', eyebrow: '05 / supervision', detail: 'Flight data is streamed to a dashboard to monitor the vehicle state in real time.', metrics: ['FastAPI / WebSocket', 'Live dashboard', 'Mission logging'] },
      ],
    },
    projects: {
      label: '04 / Featured projects',
      titleA: 'From concept',
      titleB: 'to the field.',
      view: 'View',
      items: [
        { subtitle: 'Autonomous VTOL rescue drone', meta: 'CDIO project · ESPRIT · 2025–2026', description: 'VTOL UAV airframe validated by aerodynamic/structural simulation, complete autonomous flight stack, AI victim detection (RGB + thermal, 85% threshold), automatic CO2 buoy release.', tags: ['SolidWorks', 'STM32', 'Raspberry Pi', 'YOLO', 'PID', 'FastAPI / WebSocket'] },
        { subtitle: 'R&D platform · TECHNOZOR', meta: 'R&D internship · 2 months · 2026', description: 'Design of a UAV airframe, two avionics variants (PixHawk + custom STM32 board), a modular waterproof chassis for an autonomous underwater drone, and a cloud platform for multi-UAV supervision.', tags: ['Altium', 'PixHawk', 'Custom STM32', 'AUV', 'Cloud'] },
        { subtitle: 'Industrial automation · COFICAB', meta: 'Internship · 4 months · 2024', description: 'Design and modelling of an irradiation machine, replacing a manual procedure with automated control compliant with radiation standards.', tags: ['SolidWorks', 'Raspberry Pi 5', 'Industrial automation'] },
      ],
    },
    experience: {
      label: '05 / Experience',
      items: [
        { year: '2026', role: 'Drone R&D Intern', meta: ['Technozor', 'Tunis', 'Jul.–Aug. 2026'] },
        { year: '2025', role: 'Engineering Intern', meta: ['STEG', 'Tunis'] },
        { year: '2024', role: 'Design & Automation Intern', meta: ['COFICAB', 'Tunis', 'Final-year internship'] },
        { year: '2023', role: 'Automation Intern', meta: ['Société Nouvelle de Liège'] },
        { year: '2022', role: 'Introductory internship, Machine shop', meta: ['Port of Tabarka'] },
      ],
    },
    education: {
      label: '06 / Education & involvement',
      formation: 'Academic background',
      engagement: 'Involvement',
      formationItems: [
        ['2024–present', 'ESPRIT, Tunis', 'Engineering degree in electromechanical engineering, mechatronics track (final year, 6-month final-year project to be completed). Programmes accredited EUR-ACE by the CTI until 2028.', ''],
        ['2021–2024', 'ISET Béja', 'Bachelor’s degree in mechanical engineering, mechatronics track, with honours (“Assez bien”).', ''],
        ['2021', 'Tabarka High School', 'Baccalaureate in technical sciences.', ''],
      ],
      engagementItems: [
        ['2025–2026', 'ESPRIT Aero Club', 'Vice-president — design and build of RC aircraft and competition drones', 'Member since 2024'],
        ['2024–present', 'IEEE', 'Member', ''],
      ],
    },
    certifications: {
      label: '07 / Certifications',
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
      label: '08 / Tech stack',
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
      label: '09 / Contact',
      titleA: 'Let’s work together',
      titleB: 'on your next project.',
      lead: 'Mechatronics engineering student, I design embedded, robotic and autonomous systems. I’m open to internship, job and collaboration opportunities.',
      location: 'Tunis, Tunisia',
      languages: 'Languages: Arabic (native) · French (C1) · English (B2)',
    },
    footer: { text: '© 2026 Ahmed Ghfiri · Mechatronics & Autonomous Systems Engineering Student' },
  },
}
