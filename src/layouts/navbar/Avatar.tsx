import avatar from "../../assets/image/avatar.jpg";
import placeHolder from "../../assets/image/placeholder.jpg";
const Avatar = () => {
    return (
        <img
            className="rounded-full"
            height={30}
            width={30}
            alt="Avatar"
            src={placeHolder}
        />
    );
}

export default Avatar;