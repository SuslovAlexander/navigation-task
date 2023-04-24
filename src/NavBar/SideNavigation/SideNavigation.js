import classes from './Navigation.module.css'
import {useState} from 'react';
import NavItem from "./NavBar/NavItem/NavItem";


const SideNavigation = ({onSetContemt}) => {
    const [list, setList] = useState([
        {id: 1, text: "Продукты", selected: true, name: "products"},
        {id: 2, text: "Пользователи", selected: false, name: "users"},
        {id: 3, text: "Категории", selected: false, name: "categories"},
        {id: 4, text: "Города", selected: false, name: "cities"},
        {id: 5, text: "Бренды", selected: false, name: "brands"},
        {id: 6, text: "Протоколы", selected: false, name: "protocols"},
        {id: 7, text: "Заказы", selected: false, name: "orders"},
        {id: 8, text: "Баннеры", selected: false, name: "banners"},
        {id: 9, text: "Семинары", selected: false, name: "seminars"},
        {id: 10, text: "Промокоды", selected: false, name: "codes"},
    ]);
    const handleClick = (id) => {
        let selectedElem = list.map(el => {
            el.selected = false;
            return el;
        });
        let clickedItem = selectedElem.find(el => el.id === id);
        clickedItem.selected = !clickedItem.selected;
        setList(selectedElem);
        onSetContemt(id)
    }

    return (
        <div className={classes.navigation}>
            <ul>
                {list.map(item => {
                    return <NavItem id={item.id} text={item.text} selected={item.selected} name={item.name}
                                    onClick={handleClick} key={Math.random().toString(16)}/>
                })}
            </ul>
        </div>
    )
}

export default SideNavigation;