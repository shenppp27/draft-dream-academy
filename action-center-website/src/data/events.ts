import placeholderImage from '../assets/hero.png'
import type { EventItem } from '../components/EventCard'

export const events: EventItem[] = [
  {
    id: 1,
    category: 'Earthquake Drill',
    date: 'June 19, 2025',
    title: 'BatStateU Event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: placeholderImage,
  },
  {
    id: 2,
    category: 'Fire Drill',
    date: 'June 25, 2025',
    title: 'Campus Preparedness Event',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: placeholderImage,
  },
  {
    id: 3,
    category: 'Training',
    date: 'July 2, 2025',
    title: 'Disaster Response Seminar',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: placeholderImage,
  },
  {
    id: 4,
    category: 'Awareness Campaign',
    date: 'July 10, 2025',
    title: 'Safety Awareness Program',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: placeholderImage,
  },
]