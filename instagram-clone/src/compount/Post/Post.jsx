import profilePic from '../../assets/Profile-Pic.png'
import './Post.css'

function Post(
    {
        profilePhoto=profilePic,
        name='User-Not-Found',
        time='.--'
    }
)
{
    return(
        <>
        <div className='Header'>
            <img src={profilePhoto} alt="No-profile-Pic-found" className='Profile'/>
            <p className='Name'>{name}</p>
            <p className='Time'>{time}</p>
        </div>
        </>
    );
}

export default Post