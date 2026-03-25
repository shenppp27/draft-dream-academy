import placeholderImage from '../assets/hero.png'

export interface AnnouncementItem {
  id: number
  category: string
  date: string
  title: string
  description: string
  image: string
}

export const announcements: AnnouncementItem[] = [
  {
    id: 1,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Announcement',
    description:
      'Batangas State University Pablo Borbon actively took part in the National Simultaneous Earthquake Drill to reinforce campus safety and disaster preparedness.',
    image: placeholderImage,
  },
  {
    id: 2,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Announcement',
    description:
      'The activity helped strengthen awareness, response coordination, and readiness across the university community during emergency scenarios.',
    image: placeholderImage,
  },
  {
    id: 3,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Announcement',
    description:
      'The drill served as a reminder of the importance of preparedness, safety measures, and organized evacuation procedures for all stakeholders.',
    image: placeholderImage,
  },
  {
    id: 4,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Announcement',
    description:
      'University offices, response teams, and campus personnel worked together to simulate coordinated emergency actions and improve institutional preparedness.',
    image: placeholderImage,
  },
  {
    id: 5,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Announcement',
    description:
      'The simulation encouraged students, faculty, and staff to stay alert, follow safety protocols, and respond properly during earthquake-related incidents.',
    image: placeholderImage,
  },
]