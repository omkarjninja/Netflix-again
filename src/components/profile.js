
import "./profile.css"
function Profile(props){
    return(
        <div>
             <div class="profile-box profile">
       <a href={props.href}> <img src={props.src} alt="" srcset="" width="100%" height="100%" /></a>
    </div>
        </div>
    )
}
export default Profile;