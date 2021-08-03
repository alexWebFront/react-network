import "./Sidebar.css";
const Sidebar = () => {
   return (
      <nav className="sidebar">
         <ul className="sidebar-menu">
            <a className="sidebar-menu-link" href="#s">
               <li className="sidebar-menu__item">Профиль</li>
            </a>
            <a href="#s">
               <li className="sidebar-menu__item">Сообщения</li>
            </a>
            <a href="#s">
               <li className="sidebar-menu__item">Новости</li>
            </a>
            <a href="#s">
               <li className="sidebar-menu__item">Музыка</li>
            </a>
            <a href="#s">
               <li className="sidebar-menu__item">Настройки</li>
            </a>
         </ul>
      </nav>
   );
};

export default Sidebar;