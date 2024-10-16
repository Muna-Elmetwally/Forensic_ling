import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="../../assets/legal (2).jpg"
        alt="Header-Image"
      />
      <div className="postdetails">
        <div className="postIS">
          <span className="postI">55555555</span>
          <span className="postI">55555555</span>
          <span className="postI">55555555</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor, sit amet consectetur adi
        </span>
        <hr />
        <span className="postDate">one hour ago</span>
      </div>
      <p className="Desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        dolorum dolorem sit fugit eos saepe voluptatibus omnis maxime deserunt?
        Ab repudiandae atque similique mollitia? Nihil laboriosam mollitia
        voluptas cumque cum.
      </p>
    </div>
  );
}
