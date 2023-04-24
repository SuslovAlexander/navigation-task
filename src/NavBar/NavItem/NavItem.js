import classes from './NavItem.module.css'
import Icon from "../NavItemIcon/NavItemIcon";

const NavItem = ({id, text, selected, name, onClick}) => {
    const navItem = `${classes.item} ${selected ? classes.selected : ""}`;

    const handleClick = () => {
        onClick(id)
    }

    return (
        <li className={navItem} onClick={handleClick}>
            {selected && <Icon color={"white"} name={name}/>}
            {!selected && <Icon color={"black"} name={name}/>}
            {text}
        </li>
    )
}

export default NavItem;