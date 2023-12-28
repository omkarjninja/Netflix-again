import pro1 from "../assets/images/8.png";
import pro2 from "../assets/images/9.png";
import pfp from "../assets/images/pfp.png";
import pfp2 from "../assets/images/pfp2.png";
import pro3 from "../assets/images/10.jpg";
import "./profilepage.css";
import Profile from "../components/profile";
function ProfilePage(){
    const profile=[
        {
            src:pro1,
            href:"/main"
        },
        {
            src:pfp,
            href:"/main/new"
        },
        {
            src:pfp2,
            href:"/main/tv"
        }
    ]
    return(
        <div>
            <h1 className="profile-text">Who's watching?</h1>
            <div className="profile-box-container">
                <Profile src={profile[0].src} href={profile[0].href}></Profile>
                <Profile src={profile[1].src}  href={profile[1].href}></Profile>
                <Profile src={profile[2].src}  href={profile[2].href}></Profile>
            </div>
            {/* <button class="profile-manage"><a className="ok" href="/manage-profiles">Manage Profiles</a></button> */}

        </div>
    )
}
export default ProfilePage;