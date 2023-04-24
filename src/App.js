import classes from './App.module.css';
import {useState} from "react";
import SideNavigation from "./NavBar/SideNavigation/SideNavigation";
import ContentScreen from "./Content/ContentScreen";

const App = () => {
   const contentList = [
       {id: 1, content: "Content for id===1 (Продукты)"},
       {id: 2, content: "Content for id===2 (Пользователи)"},
       {id: 3, content: "Content for id===3 (Категории)"},
       {id: 4, content: "Content for id===4 (Города)"},
       {id: 5, content: "Content for id===5 (Бренды)"},
       {id: 6, content: "Content for id===6 (Протоколы)"},
       {id: 7, content: "Content for id===7 (Заказы)"},
       {id: 8, content: "Content for id===8 (Баннеры)"},
       {id: 9, content: "Content for id===9 (Семинары)"},
       {id: 10, content: "Content for id===10 (Промокоды)"}
   ]
    const [showContent, setShowContent] = useState({id: 1, content: "Content for id===1"});
        const handleSetContent = (id) => { // тут логика просто для примера. Идея в том, что выбор конкретного пункта несет id "наверх"
        let temp = contentList.find(el => el.id === id);
        setShowContent(temp);
    }

    return (
        <div className={classes.container}>
            <section className={classes.app}>
                <SideNavigation onSetContemt={handleSetContent} />
                <ContentScreen content={showContent}/>
            </section>
        </div>
    )
}

export default App;
