import "./Post.css";
const Post = (props) => {
   return (
      <section className="post">
         <img src="https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg" alt="avatar" className="post-avatar" />
         { props.message }
         {/* <p className="post-message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sit molestias amet perferendis omnis, corporis vel totam possimus, atque reiciendis, pariatur placeat? Deleniti vero vitae officia eligendi magnam iusto perferendis!</p> */}
      </section>
   );
}

export default Post;