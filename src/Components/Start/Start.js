import Spotify from '../../util/Spotify';
import './Start.css'

function Start(props){

    const handleLogin = () => {
        if (Spotify.getAccessToken())
            props.isLogin(true);

    }
    return (
        <div className='Start'>
            <button className='LoginButton' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Start;