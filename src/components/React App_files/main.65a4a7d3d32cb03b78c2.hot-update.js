webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_apple_Desktop_qtrove_camera_app_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html5_camera_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html5-camera-photo */ "./node_modules/react-html5-camera-photo/build/index.js");
/* harmony import */ var react_html5_camera_photo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html5_camera_photo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html5_camera_photo_build_css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html5-camera-photo/build/css/index.css */ "./node_modules/react-html5-camera-photo/build/css/index.css");
/* harmony import */ var react_html5_camera_photo_build_css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html5_camera_photo_build_css_index_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/apple/Desktop/qtrove-camera-app/client/src/App.js";



 // import logo from "./images/hamburger.jpeg";
// class App extends Component {
//   handleClick() {
//     // this.setState({
//     //     open: !this.state.open
//     // });
// }
//   render() {
//     return (
//       <div
//       // style={{
//       //   color: "red",
//       //   display: "flex",
//       //   justifyContent: "center"
//       // }}
//       >
//         {/* <header style={{ padding: 15, position: "relative", color: "black" }}>
//           <img
//             style={{
//               position: "relative",
//               top: 6,
//               paddingLeft: 0,
//               paddingRight: 14
//             }}
//             src={logo}
//             width="42"
//             height="42"
//             alt=""
//           />
//         </header> */}
//         <HamburgerMenu
//     // isOpen={this.state.open}
//     menuClicked={this.handleClick.bind(this)}
//     width={18}
//     height={15}
//     strokeWidth={1}
//     rotate={0}
//     color='black'
//     borderRadius={0}
//     animationDuration={0.5}
// />
//         <div style={{ backgroundColor: "green" }}>
//           <i></i>
//         </div>
//         <div>
//           <p
//             style={{
//               color: "black",
//               display: "flex",
//               justifyContent: "center",
//               margin: 30
//             }}
//           >
//             many harmful ingredients are present in products u daily use. qtrove
//             brings the alternative for that. to check if product u are using
//             contains harmful chemicals, take a photo and check for urself.
//           </p>
//           <div>
//             <input
//               id="attachment--camera"
//               type="file"
//               accept="image/*"
//               capture
//               className="hidden"
//               // onChange={this.handleAttachment}
//             />
//             <label
//               className="attachment_option bg_white"
//               htmlFor="attachment--camera"
//             >
//               <img alt="camera" />
//             </label>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

/* App.jsx */

class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.openCamera = () => {
      this.setState({
        openCamera: true
      });
    };

    this.onChange = event => {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();

        reader.onload = e => {
          this.setState({
            image: e.target.result
          });
        };

        reader.readAsDataURL(event.target.files[0]);
        const formData = new FormData();
        formData.append("image", event.target.files[0]); // for (var pair of formData.entries()) {
        //   console.log(pair[1]);
        // }

        console.log(">>>>>>>>>>", formData, event.target.files[0]);
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:3001/api/uploadToDB", formData, config).then(response => {
          alert("The file is successfully uploaded");
        }).catch(error => {});
      }
    };

    this.state = {
      menuOpen: false,
      image: null,
      openCamera: false,
      dataUri: null
    };
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    this.setState({
      dataUri,
      openCamera: false
    }); // setDataUri(dataUri);
  }

  handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  handleLinkClick() {
    this.setState({
      menuOpen: false
    });
  }

  render() {
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
        fontFamily: "Lobster" // width: "100vw",

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
    const menu = ["About Us", "Our Products", "Services", "FAQ", "Contact Us"];
    const menuItems = menu.map((val, index) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
        key: index,
        delay: `${index * 0.1}s`,
        onClick: () => {
          this.handleLinkClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, val);
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuButton, {
      open: this.state.menuOpen,
      onClick: () => this.handleMenuClick(),
      color: "white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Logo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Menu, {
      open: this.state.menuOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, menuItems), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.body,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, this.state.image ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      // width
      id: "target",
      width: "100%",
      height: "100%",
      maintainAspectRatio: true,
      style: {
        width: "100%"
      },
      src: this.state.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }) : this.state.openCamera ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_html5_camera_photo__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onTakePhoto: dataUri => {
        this.handleTakePhotoAnimationDone(dataUri);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "3rem",
        padding: "1rem 0",
        marginTop: "50%",
        marginRight: "30%",
        marginLeft: "30%",
        color: "green"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, " ", "This is Qtrove content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        margin: 20,
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
        marginLeft: 45
      },
      onChange: this.search,
      type: "text",
      name: "name",
      placeholder: "\uF002 Search...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: 2,
        width: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      height: "42",
      width: "42",
      src: "https://www.activehands.com/wp-content/uploads/2019/05/kisspng-check-mark-computer-icons-clip-art-green-check-circle-5b3fb28f711452.5419564815309011354632.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: 400,
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        float: "left",
        margin: 40,
        marginLeft: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file",
      id: "xyz",
      onChange: this.onChange,
      accept: "image/*",
      style: {
        display: "none"
      },
      onClick: this.edit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "xyz",
      style: {
        color: "white",
        borderRadius: 30,
        width: 100,
        height: 30,
        backgroundColor: "green",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "Gallery")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        float: "right",
        margin: 40,
        marginRight: 50
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      id: "attachment--camera",
      type: "file",
      accept: "image/*",
      capture: true,
      className: "hidden",
      onChange: this.onChange,
      style: {
        display: "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "attachment_option bg_white",
      htmlFor: "attachment--camera",
      style: {
        color: "white",
        borderRadius: 30,
        width: 100,
        height: 30,
        backgroundColor: "green",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "Camera")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
      name: "Menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    })));
  }

}
/* MenuItem.jsx*/


class MenuItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    const styles = {
      container: {
        opacity: 1,
        animation: "1s appear forwards",
        animationDelay: this.props.delay
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.menuItem,
      onMouseEnter: () => {
        this.handleHover();
      },
      onMouseLeave: () => {
        this.handleHover();
      },
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.line,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);
/* Menu.jsx */

class Menu extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: this.state.open ? "70%" : "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "width 0.1s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "3rem"
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449
      },
      __self: this
    }, this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.menuList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }, this.props.children) : null);
  }

}
/* MenuButton.jsx */


class MenuButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px"
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.container,
      onClick: this.props.onClick ? this.props.onClick : () => {
        this.handleClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: Object(_Users_apple_Desktop_qtrove_camera_app_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, {}, styles.lineTop),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: Object(_Users_apple_Desktop_qtrove_camera_app_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, {}, styles.lineMiddle),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: Object(_Users_apple_Desktop_qtrove_camera_app_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, {}, styles.lineBottom),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524
      },
      __self: this
    }));
  }

}
/* Footer.jsx */


function Footer(props) {
  const styles = {
    footer: {
      position: "relative",
      bottom: 0,
      width: "100%",
      marginTop: "7rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: props.color
    },
    line: {
      height: "1px",
      width: "90%",
      background: props.color
    },
    text: {
      padding: "0.5rem"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, props.title, " created by \xA9 2020"));
}

Footer.defaultProps = {
  color: "black",
  title: "qtrove"
};
/* Main.jsx */
// class Main extends React.Component {
//   render(){
//     const styles = {
//       main: {
//         display:'flex',
//         flexDirection:'column',
//         alignItems: 'center',
//         height: '100vh',
//       }
//     }
//     return (
//       <div style={styles.main}>
//         <App />
//       </div>
//     )
//   }
// }
// ReactDOM.render(
// <Main/>,document.querySelector('#root'));

/***/ })

})
//# sourceMappingURL=main.65a4a7d3d32cb03b78c2.hot-update.js.map