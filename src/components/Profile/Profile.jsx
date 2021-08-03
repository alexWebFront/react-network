import Profile_image from "./Profile-image/Profile_image";
import Profile_info from "./Profile-info/Profile_info";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css"

const Profile = () => {
   return (
      <section className="main-content">
         <Profile_image />
         <Profile_info />
         <MyPosts/>
      </section>
   );
};

export default Profile;