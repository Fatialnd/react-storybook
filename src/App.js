import Avatar from "./Avatar";
import avatarData from "./AvatarData";
import "./styles.css";

function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <Avatar
          className={avatarData.className}
          src={avatarData.src}
          alt={avatarData.alt}
          size={avatarData.size}
        />
      </Card>
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
