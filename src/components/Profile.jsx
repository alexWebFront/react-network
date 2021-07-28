const Profile = () =>{
   return(
      <section className="main-content">
        <div className="main-content-image">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="image"
          />
        </div>
        <section className="profile">
          <div className="profile-image">
            <img
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
        <section className="message">
          <h3 className="message-heading">Мои посты</h3>
          <form action="#" method="GET">
            
            <textarea name="textarea" placeholder="Мои новости"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </section>
      </section>
   );
}

export default Profile;