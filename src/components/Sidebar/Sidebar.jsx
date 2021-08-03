import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
   return (
      <nav className="sidebar">
         <ul className="sidebar-menu">
            <NavLink to="/profile">
               <li className="sidebar-menu__item">Профиль</li>
            </NavLink>
            <NavLink to="/dialogs">
               <li className="sidebar-menu__item">Сообщения</li>
            </NavLink>
            <NavLink to="/news">
               <li className="sidebar-menu__item">Новости</li>
            </NavLink>
            <NavLink to="/music">
               <li className="sidebar-menu__item">Музыка</li>
            </NavLink>
            <NavLink to="/settings">
               <li className="sidebar-menu__item">Настройки</li>
            </NavLink>
         </ul>
      </nav>
   );
};

export default Sidebar;