import React, { Component } from "react";
import axios from "axios";
import posed from "react-pose";

import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { isMobile } from "react-device-detect";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  NavLink
} from "react-router-dom";
import Header from "./components/header.component";
import Footer from "./components/footer.component";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
const Circle = posed.div({
  attention: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 0
    }
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      image: null,
      openCamera: false,
      value: null,
      dataUri: null,
      isVisible: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 500);
  }

  handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    this.setState({ dataUri, openCamera: false });
    this.uploadImage(dataUri);
  }

  openCamera = () => {
    this.setState({ openCamera: true });
  };

  onChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
        this.uploadImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  uploadImage = imageData => {
    const data = new FormData();
    data.append("file", imageData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    
    axios
      .post("http://localhost:3001/api/upload", data, config)
      .then(response => {
        // alert("The file is successfully uploaded");
        this.props.history.push({
          pathname: "/image",
          state: [{ imageData}]
        });

        // return  <Redirect  to="/about"/>
      })
      .catch(error => {});
  };
  search = () => {
    if (this.state.value) {
      const body = {
        brandName: this.state.value
      };
      axios
        .post("http://localhost:3001/api/search", body)
        .then(response => {
          alert("The file is successfully uploaded");
        })
        .catch(error => {});
    }
  };

  updateText = e => {
    console.log("update text", e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    const { isVisible } = this.state;
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "black",
        width: "100%",
        color: "white",
        fontFamily: "Lobster"
        // width: "100vw",
      },
      logo: {
        margin: "0 auto"
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        // backgroundColor:'grey',
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease"
      }
    };
    return (
      <div>
        <Header></Header>

        <div style={styles.body}>
          {this.state.image || this.state.dataUri ? (
            <Box pose={isVisible ? "visible" : "hidden"}>
              <img
                // width
                id="target"
                width={"100%"}
                height={"100%"}
                maintainAspectRatio={true}
                style={{ width: "100%" }}
                src={this.state.image || this.state.dataUri}
              />
            </Box>
          ) : this.state.openCamera ? (
            <Camera
              onTakePhoto={dataUri => {
                this.handleTakePhotoAnimationDone(dataUri);
              }}
            />
          ) : (
            <div>
              <p
                style={{
                  fontFamily: `'Open Sans', sans-serif`,
                  fontSize: "3rem",
                  padding: "1rem 0",
                  marginTop: "40%",
                  marginRight: "30%",
                  marginLeft: "30%",
                  color: "green"
                }}
              >
                {" "}
                This is Qtrove content
              </p>
              <div>
                <form>
                  <label>
                    <div style={{ width: 400, marginTop: 10 }}>
                      <div style={{ float: "left", width: 350 }}>
                        <input
                          style={{
                            marginTop: 20,
                            marginRight: 0,
                            color: "black",
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: 20,
                            width: 300,
                            height: 30,
                            textAlign: "center",
                            font: "FontAwsome",
                            fontFamily: "FontAwesome!important",
                            backgroundColor: "#80808042",
                            marginLeft: 45,
                            outline: "none"
                          }}
                          onChange={this.updateText}
                          type="text"
                          name="name"
                          placeholder="&#xF002; Search..."
                        />
                      </div>
                      {this.state.value ? (
                        <div style={{ alignContent: "center", float: "right" }}>
                          <label onClick={this.search}>
                            <img
                              height="42"
                              style={{ marginTop: 15, marginRight: 5 }}
                              width="42"
                              src="https://www.activehands.com/wp-content/uploads/2019/05/kisspng-check-mark-computer-icons-clip-art-green-check-circle-5b3fb28f711452.5419564815309011354632.png"
                            ></img>
                          </label>
                        </div>
                      ) : null}
                    </div>
                  </label>
                  {/* <input type="submit" value="Submit" /> */}
                </form>
              </div>
              <div style={{ width: 400, marginTop: 10 }}>
                <div style={{ float: "left", margin: 40, marginLeft: 50 }}>
                  <input
                    type="file"
                    id="xyz"
                    onChange={this.onChange}
                    accept="image/*"
                    style={{
                      display: "none"
                    }}
                    onClick={this.edit}
                  />
                  <label
                    htmlFor="xyz"
                    style={{
                      color: "white",
                      borderRadius: 30,
                      width: 100,
                      height: 30,
                      backgroundColor: "green",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingRight: 20,
                      paddingLeft: 20
                    }}
                  >
                    {/* <NavLink  to={'/about'}>Gallery</NavLink> */}
                    Gallery
                  </label>
                </div>
                <div style={{ float: "right", margin: 40, marginRight: 50 }}>
                  {isMobile ? (
                    <div>
                      {" "}
                      <input
                        id="attachment--camera"
                        type="file"
                        accept="image/*"
                        capture
                        className="hidden"
                        onChange={this.onChange}
                        style={{
                          display: "none"
                        }}
                      />
                      <label
                        className="attachment_option bg_white"
                        htmlFor="attachment--camera"
                        style={{
                          color: "white",
                          borderRadius: 30,
                          width: 100,
                          height: 30,
                          backgroundColor: "green",
                          paddingTop: 10,
                          paddingBottom: 10,
                          paddingRight: 20,
                          paddingLeft: 20
                        }}
                      >
                        Camera
                        {/* <img alt="camera" src={cameraIcon} /> */}
                      </label>{" "}
                    </div>
                  ) : (
                    <label
                      style={{
                        color: "white",
                        borderRadius: 30,
                        width: 100,
                        height: 30,
                        backgroundColor: "green",
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingRight: 20,
                        paddingLeft: 20
                      }}
                      onClick={this.openCamera}
                    >
                      Camera
                    </label>
                  )}
                </div>
              </div>
            </div>
          )}

          <Footer name="Menu" />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
