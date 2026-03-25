import { motion } from 'framer-motion'
import './FeaturedLinks.css'
import { fadeUp, staggerContainer, hoverLift, tapPress } from '../animations'

const featuredItems = [
  {
    id: 1,
    label: 'INVENTORY',
    className: 'featured-links__card--inventory',
    href: '#',
  },
  {
    id: 2,
    label: 'RESEARCH AND DEVELOPMENT',
    className: 'featured-links__card--research',
    href: '#',
  },
  {
    id: 3,
    label: 'ATLAS',
    className: 'featured-links__card--atlas',
    href: '#',
  },
  {
    id: 4,
    label: 'PARTNERSHIP',
    className: 'featured-links__card--partnership',
    href: '#',
  },
]

export default function FeaturedLinks() {
  return (
    <motion.section
      className="featured-links"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="featured-links__container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {featuredItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            className={`featured-links__card ${item.className}`}
            variants={fadeUp}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            <div className="featured-links__overlay" />
            <div className="featured-links__label">{item.label}</div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}