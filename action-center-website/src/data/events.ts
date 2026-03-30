import placeholderImage from '../assets/hero.png'

export interface EventItem {
  id: number
  category: string
  date: string
  title: string
  description: string
  fullContent: string
  image: string
  year: number
  location?: string
  time?: string
}

export const events: EventItem[] = [
  {
    id: 1,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    year: 2025,
    location: 'Pablo Borbon Campus',
    time: '8:00 AM',
    title: 'National Simultaneous Earthquake Drill',
    description:
      'BatStateU joins the nationwide earthquake drill, practicing Drop, Cover & Hold On procedures and campus-wide evacuation across all campuses.',
    fullContent: `The BatStateU ACTION Center leads the National Simultaneous Earthquake Drill (NSED) across all eleven campuses. This quarterly drill practices the standard Drop, Cover, and Hold On procedure mandated by the Office of Civil Defense.\n\nAll students, faculty, and staff are expected to participate. Assembly areas have been designated for each building. Emergency Response Teams will be stationed at each exit to guide evacuation.\n\nAfter the drill, campus coordinators will conduct a 15-minute feedback session to assess drill effectiveness, identify improvement areas, and document the evacuation timeline. Results will be submitted to the ACTION Center for university-wide analysis.`,
    image: placeholderImage,
  },
  {
    id: 2,
    category: 'Fire Drill',
    date: 'June 25, 2025',
    year: 2025,
    location: 'Alangilan Campus',
    time: '10:00 AM',
    title: 'Campus Fire Safety Drill & Seminar',
    description:
      'A combined fire safety drill and seminar covering fire prevention, evacuation procedures, and proper use of fire extinguishers for all campus personnel.',
    fullContent: `In compliance with Republic Act 9514 (Fire Code of the Philippines), BatStateU Alangilan Campus will conduct its bi-annual fire safety drill and seminar on June 25, 2025.\n\nThe event includes a fire evacuation simulation, a live fire extinguisher demonstration, and a lecture on fire prevention best practices. Representatives from the Bureau of Fire Protection (BFP) Batangas Chapter will serve as resource persons.\n\nAll personnel are required to attend. Certificates of participation will be issued to document completion of fire safety training. Campus offices should coordinate with the Safety Office for scheduling of different building evacuations.`,
    image: placeholderImage,
  },
  {
    id: 3,
    category: 'Training',
    date: 'July 2, 2025',
    year: 2025,
    location: 'ACTION Center, Miguel Malvar Building',
    time: '9:00 AM – 5:00 PM',
    title: 'GUIDE GIS Platform Training Workshop',
    description:
      'Hands-on training on the GUIDE geospatial information system for disaster risk reduction, open to DRRM officers, faculty, and graduate students.',
    fullContent: `The BatStateU ACTION Center invites DRRM officers, faculty members, and graduate students to a full-day training workshop on the GUIDE (GIS Utilization for Incidents, Disasters, and Emergencies) platform.\n\nParticipants will learn how to use GUIDE for mapping disaster-prone areas, visualizing hazard data, generating risk maps, and supporting post-disaster damage assessments. The workshop combines lectures with hands-on exercises using actual Batangas Province hazard datasets.\n\nMaterials, handouts, and a light lunch will be provided. Participants who complete the full training will receive a certificate of competency. Pre-registration is required due to limited slots. Contact the ACTION Center office to secure your participation.`,
    image: placeholderImage,
  },
  {
    id: 4,
    category: 'Awareness Campaign',
    date: 'July 10, 2025',
    year: 2025,
    location: 'All BatStateU Campuses',
    time: 'Throughout the Day',
    title: 'Safety Awareness Week — Barangay Partnership Program',
    description:
      'A week-long campus safety awareness campaign in partnership with local barangays, featuring exhibits, safety contests, and preparedness demonstrations.',
    fullContent: `The BatStateU ACTION Center launches its annual Safety Awareness Week from July 7–11, 2025, culminating in the Barangay Partnership Day on July 10.\n\nActivities throughout the week include: disaster preparedness exhibits across all campuses, first aid competitions among academic departments, emergency kit assembly workshops, and a virtual reality simulation of disaster scenarios using the Digital Twin Research Center's technology.\n\nOn July 10, campus volunteers will fan out across partner barangays to conduct community hazard assessments, distribute preparedness materials, and demonstrate lifesaving skills. Participation in one or more activities qualifies students for community service credits.\n\nThe ACTION Center encourages all academic departments to integrate safety awareness activities into their class programs for the week.`,
    image: placeholderImage,
  },
  {
    id: 5,
    category: 'Seminar',
    date: 'August 5, 2025',
    year: 2025,
    location: 'BatStateU Conference Hall',
    time: '1:00 PM – 5:00 PM',
    title: 'Regional DRRM Summit: Science-Based Risk Reduction',
    description:
      'BatStateU hosts the Regional DRRM Summit bringing together government agencies, LGUs, and academic institutions to advance science-based disaster risk management.',
    fullContent: `BatStateU ACTION Center, in partnership with the NDRRMC and RDRRMC Region IV-A, hosts the Regional DRRM Summit: "Science-Based Risk Reduction for Resilient Communities" on August 5, 2025.\n\nThe summit will feature keynote addresses from national DRRM authorities, technical presentations on cutting-edge risk assessment tools, and panel discussions on multi-sectoral collaboration. Sessions will cover flood and landslide risk modeling, community-based early warning systems, and the integration of AI in disaster response.\n\nRegistration is open to DRRM officers from LGUs and government agencies, local chief executives, faculty, and graduate students. Slots are limited. CPD units will be available for licensed engineers and practitioners. Contact the ACTION Center for registration.`,
    image: placeholderImage,
  },
  {
    id: 6,
    category: 'Training',
    date: 'October 14, 2024',
    year: 2024,
    location: 'ACTION Center, Miguel Malvar Building',
    time: '8:00 AM – 4:00 PM',
    title: 'Mass Casualty Incident Response Training',
    description:
      'Emergency response teams from BatStateU campuses received advanced training in mass casualty incident triage, rescue operations, and coordination protocols.',
    fullContent: `The BatStateU ACTION Center, in coordination with the Philippine Red Cross Batangas Chapter and the Bureau of Fire Protection, conducted a Mass Casualty Incident (MCI) Response Training for campus emergency response volunteers from all eleven campuses.\n\nThe training covered: START triage methodology, search and rescue fundamentals, psychological first aid for survivors, incident command system protocols, and inter-agency coordination during large-scale emergencies.\n\nParticipants included ROTC cadets, trained first aiders, campus medical staff, and DRRM volunteer coordinators. The full-day session concluded with a simulated MCI scenario for practical application of all learned concepts. Participants received certificates of completion recognized by the Philippine Red Cross.`,
    image: placeholderImage,
  },
]