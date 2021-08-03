import "./Profile_info.css";
const Profile_info = () =>{
   return(
        <section className="profile">
          <div className="profile-image">
            <img className="profile-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU"
              alt=""
            />
          </div>
          <div className="profile-description">
            <p className="profile-name">Имя: Алексей</p>
            <p className="profile-information">Дата рождения: 01.02.1996</p>
            <p className="profile-information">Город: Ижевск</p>
            <p className="profile-information">Образование: УдГУ</p>
            <p className="profile-information">
              Что делаю: Хуярю соцсеть на реакте
            </p>
          </div>
        </section>
   );
}

export default Profile_info;