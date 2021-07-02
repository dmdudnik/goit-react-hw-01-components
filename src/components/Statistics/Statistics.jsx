import css from './Statistics.module.css'
//import PropTypes from "prop-types";


export const Statistics = ({ title, stats }) => {
  const stat = stats[0];
  return (
    <section className="statistics">
      
      <h2 className={css.title}>{title }</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  </ul>
</section>
  )
}
