import Post from "../post/Post";
import "./posts.scss";
import dev from "../../assets/Dev.jpeg"

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Dev Pandey",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Dev Pandey",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
        id: 1,
        name: "Dev Pandey",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: dev,
      },
  ];

  return <div className="posts">
    {posts.map(post=>(
        <Post post={post} key={post.id} />
    ))}

  </div>;
};

export default Posts;