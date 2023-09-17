
import styles from './header-component.module.css';

export const getNavLinkClass = (isActive: boolean) => {
  const twClasses = styles.NavLink;
  return isActive ? `${twClasses} text-pink-400` : twClasses
}