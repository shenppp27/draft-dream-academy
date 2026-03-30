import placeholderImage from '../assets/hero.png'

export interface AnnouncementItem {
  id: number
  category: string
  date: string
  title: string
  description: string
  fullContent: string
  image: string
  year: number
}

export const announcements: AnnouncementItem[] = [
  {
    id: 1,
    category: 'Earthquake Drill',
    date: 'July 2, 2025',
    year: 2025,
    title: 'National Disaster Resilience Month 2025',
    description:
      'BatStateU ACTION Center joins the nation in observing National Disaster Resilience Month, promoting campus-wide preparedness and risk reduction activities.',
    fullContent: `The Batangas State University ACTION Center proudly joins the entire nation in the observance of National Disaster Resilience Month (NDRM) this July 2025, under the theme "Kayang Umaksyon ng Mamimiyano na Ito Buhay ang Kahandaang ng bawat Isa para sa Kahandaana, Kaligtasan at Katatagan."\n\nThis annual observance calls on every Filipino—students, faculty, staff, and local communities—to actively participate in disaster risk reduction and management activities. The BatStateU ACTION Center has organized a series of activities throughout the month, including earthquake drills, fire safety briefings, and community outreach programs in nearby barangays.\n\nAs the designated hub for disaster preparedness and response at BatStateU, the ACTION Center coordinates closely with the university's disaster management teams across all eleven campuses. The Center also works with local government units, DRRM offices, and national agencies to ensure the delivery of timely and accurate hazard information.\n\nStudents and faculty are encouraged to participate actively in all scheduled drills and seminars. Together, we build a more resilient university community.`,
    image: placeholderImage,
  },
  {
    id: 2,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    year: 2025,
    title: 'National Simultaneous Earthquake Drill — Q2 2025',
    description:
      'Batangas State University Pablo Borbon actively took part in the National Simultaneous Earthquake Drill to reinforce campus safety and disaster preparedness.',
    fullContent: `BatStateU Pablo Borbon campus participated in the second wave of the National Simultaneous Earthquake Drill (NSED) for 2025, organized in coordination with the Office of Civil Defense (OCD) and the Department of Education.\n\nThe drill simulated a major earthquake scenario, prompting students and staff to perform the standard Drop, Cover, and Hold On procedure before evacuating to designated assembly areas. Emergency response teams were on standby throughout the exercise.\n\nThe activity aimed to test and strengthen institutional emergency response plans, identify gaps in evacuation procedures, and reinforce awareness among the academic community. Post-drill evaluations were conducted to gather feedback and improve future preparedness efforts.\n\nAll eleven BatStateU campuses participated simultaneously, making it a university-wide demonstration of readiness and coordinated response capability.`,
    image: placeholderImage,
  },
  {
    id: 3,
    category: 'Community Outreach',
    date: 'June 10, 2025',
    year: 2025,
    title: 'ACTION Center Community Resilience Drive',
    description:
      'The ACTION Center led a community-based resilience program in Batangas City, equipping residents with disaster awareness and preparedness skills.',
    fullContent: `The BatStateU ACTION Center conducted a community resilience drive in partnership with the Batangas City DRRMO and local barangay officials. The program reached over 300 community members with hands-on training sessions covering basic first aid, evacuation route planning, and hazard identification.\n\nVolunteer students from the Master in Disaster Risk Management program served as facilitators and resource persons during the event. The outreach also distributed emergency preparedness kits to vulnerable households in flood-prone areas.\n\nThis initiative is part of the ACTION Center's broader commitment to extending university expertise to the wider community, aligned with BatStateU's mandate as the National Engineering University to serve the nation through science, technology, and innovation.`,
    image: placeholderImage,
  },
  {
    id: 4,
    category: 'Training',
    date: 'May 28, 2025',
    year: 2025,
    title: 'WISER Sensor Network Deployment Training',
    description:
      'Faculty and graduate students received hands-on training on the deployment and operation of the WISER wireless sensor network for emergency monitoring.',
    fullContent: `The ACTION Center, through its iACT4DRR program, held a training workshop on the deployment, calibration, and real-time monitoring of the WISER (Wireless Integrated Solution for Emergency Response) sensor network system.\n\nParticipants included engineering faculty, graduate students, and partner LGU technicians. The workshop covered sensor installation in hazard-prone areas, data transmission protocols, threshold-based alert configurations, and emergency notification procedures.\n\nWISER nodes have been strategically positioned across identified risk areas in Batangas province, providing continuous monitoring of environmental parameters linked to flood, landslide, and seismic risk. The system's data feeds directly into the ACTION Center's data-driven dashboard for real-time situational awareness.`,
    image: placeholderImage,
  },
  {
    id: 5,
    category: 'Recognition',
    date: 'April 15, 2025',
    year: 2025,
    title: 'BatStateU ACTION Center Receives National DRRM Award',
    description:
      'The ACTION Center was recognized at the national level for its outstanding contributions to disaster risk reduction, research, and community resilience.',
    fullContent: `The BatStateU ACTION Center has been awarded the National Disaster Risk Reduction and Management (NDRRM) Excellence Award for 2025, presented by the National DRRM Council in recognition of its exemplary programs and institutional contributions to disaster preparedness and response.\n\nThe award acknowledged the Center's end-to-end approach to disaster management, from research and technology development to community training and policy advocacy. Key initiatives that earned recognition include the WISER sensor network, the GUIDE geospatial information platform, and the flagship DREAM Academy program.\n\nUniversity President expressed pride in the entire ACTION Center team, noting that the award reflects BatStateU's commitment to translating engineering expertise into life-saving public service. The Center will use the award as motivation to expand its programs and deepen its partnerships with communities, government agencies, and international organizations.`,
    image: placeholderImage,
  },
  {
    id: 6,
    category: 'Academic',
    date: 'March 5, 2025',
    year: 2025,
    title: 'New Batch of MDRM Graduates Commissioned',
    description:
      'The DREAM Academy celebrated the graduation of its newest cohort of Master in Disaster Risk Management professionals, ready to serve communities across the region.',
    fullContent: `The BatStateU DREAM Academy proudly marks another milestone with the successful graduation of 38 new Master in Disaster Risk Management (MDRM) graduates during the university's commencement exercises.\n\nThe graduating class represents professionals from diverse sectors including local government, armed forces, health, education, and civil society. They completed the rigorous MDRM curriculum covering disaster science, risk assessment methodologies, emergency response planning, and field practicum in actual disaster scenarios.\n\nEach graduate is equipped to assume leadership roles in DRRM offices, contribute to evidence-based policy, and help build more resilient communities throughout the country. The graduation ceremony was attended by institutional partners and highlighted by testimonials from outstanding graduates who have already begun implementing DRRM improvements in their respective organizations.`,
    image: placeholderImage,
  },
  {
    id: 7,
    category: 'Alert',
    date: 'December 12, 2024',
    year: 2024,
    title: 'Typhoon Preparedness Advisory — December 2024',
    description:
      'BatStateU ACTION Center issues preparedness guidelines as a tropical cyclone approaches the Batangas region, urging all campuses to activate emergency protocols.',
    fullContent: `As Typhoon Queenie approaches the Philippine Area of Responsibility, the BatStateU ACTION Center is activating its campus emergency protocols across all eleven campuses. All campus administrators, DRRM focal persons, and safety officers are directed to implement their respective campus emergency plans immediately.\n\nKey directives include: securing all loose equipment and materials, ensuring availability of emergency supplies and first aid kits, identifying and clearing evacuation routes, and activating communication trees to account for all students, faculty, and staff.\n\nThe ACTION Center's monitoring team is in continuous coordination with PAGASA, the regional OCD office, and the Batangas PDRRMO. Real-time updates will be disseminated through official university channels, the ACTION Center website, and the WISER monitoring dashboard.\n\nAll community members are urged to remain indoors, avoid flood-prone areas, and follow advisories from local DRRM offices. Stay safe.`,
    image: placeholderImage,
  },
  {
    id: 8,
    category: 'Earthquake Drill',
    date: 'September 3, 2024',
    year: 2024,
    title: 'Q3 National Simultaneous Earthquake Drill',
    description:
      'All BatStateU campuses participated in the third quarter NSED, successfully completing evacuation simulations and post-drill assessments university-wide.',
    fullContent: `BatStateU's eleven campuses simultaneously participated in the Q3 National Simultaneous Earthquake Drill on September 3, 2024. The drill, coordinated by the ACTION Center, tested evacuation procedures, assembly area protocols, and post-event headcount procedures.\n\nCampus DRRM coordinators reported smooth execution of the drill, with most buildings cleared within the prescribed three-minute window. Minor gaps identified in previous drills—such as unclear assembly signage and slow stairway evacuation—were addressed through improvements implemented following the Q2 drill.\n\nThe ACTION Center commends all campus communities for their cooperation and preparedness. Post-drill reports have been submitted to the national OCD as required under DRRM law.`,
    image: placeholderImage,
  },
]