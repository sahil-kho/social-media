import "./rightBar.scss";
import dev from "../../assets/Dev.jpeg";
import dev1 from "../../assets/Dev2.jpeg";
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev}
                alt=""
              />
              <span>Dev</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev1}
                alt=""
              />
              <span>D3V PAND3Y</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <p>
                <span>Chirag</span> changed their cover picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev1}
                alt=""
              />
              <p>
                <span>Dev Pandey</span> Liked your post
              </p>
            </div>
            <span>7 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev}
                alt=""
              />
              <p>
                <span> Dev Pandey</span> Liked your story
              </p>
            </div>
            <span>7 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1680764499879-8c2c6a72b31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <p>
                <span>Maahir M</span> replied to your comment
              </p>
            </div>
            <span>20 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1680764499879-8c2c6a72b31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Chirag</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online-disabled" />
              <span>Maahir</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1680764499879-8c2c6a72b31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online-disabled" />
              <span>Dev</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Yash</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Aman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev1}
                alt=""
              />
              <div className="online-disabled" />
              <span>Abhishek</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Sahil</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1683126899216-eb65393753c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Ananya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={dev}
                alt=""
              />
              <div className="online-disabled" />
              <span>Antriksh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online" />
              <span>Divyam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="online-disabled" />
              <span>Mayra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;