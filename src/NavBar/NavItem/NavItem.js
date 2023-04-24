import classes from './NavItem.module.css'
import NavItemIconIcon from "../NavItemIcon/NavItemIcon";
import NavItemIcon from "../NavItemIcon/NavItemIcon";

const NavItem = ({id, text, selected, name, onClick}) => {
    const navItem = `${classes.item} ${selected ? classes.selected : ""}`;

    const handleClick = () => {
        onClick(id)
    }

    return (
        <li className={navItem} onClick={handleClick}>
            {selected && <NavItemIconIcon color={"white"} name={name}/>}
            {!selected && <NavItemIcon color={"black"} name={name}/>}
            {text}
        </li>
    )
}

export default NavItem;