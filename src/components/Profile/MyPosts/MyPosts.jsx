import "./MyPosts.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <section className="message">
      <h3 className="message-heading">Мои посты</h3>
      <form className="form-wrapper" action="#" method="GET">
        <textarea className="message-textarea" placeholder="Мои новости"></textarea>
        <button className="message-button" type="submit">Отправить</button>
      </form>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </section>
  );
}

export default MyPosts;