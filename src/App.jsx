import { useState } from "react"
import {
    AiFillHome,
    AiFillProfile,
    AiOutlineHistory,
    AiOutlineEye,
    AiOutlineFork,
    AiOutlineSearch
} from "react-icons/ai"
import { TbMessages } from "react-icons/tb"
import { FaTasks } from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs"
import {
    MdOutlineNotificationsActive,
    MdDashboard,
    MdContactSupport,
    MdOutlinePrivacyTip,
    MdOutlineFavoriteBorder
} from "react-icons/md"
import { CiSettings } from "react-icons/ci"
import clown from "./assets/clown.png"
import congolese from "./assets/congolese.png"
import cuban from "./assets/cuban.png"
import indian from "./assets/indian.png"
import japanese from "./assets/japanese.png"

function App() {
    return (
        <>
            <div className="container">
                <div className="dashboard">
                    <div>
                        <div className="dashboard-btn top-dashboard-btn">
                            <MdDashboard />
                            <div
                                style={{ paddingLeft: "10px" }}
                                className="top-dashboard-btn-text"
                            >
                                Dashboard
                            </div>
                        </div>
                        <div className="dashboard-btn">
                            <AiFillHome />
                            <div style={{ paddingLeft: "10px" }}>Home</div>
                        </div>
                        <div className="dashboard-btn">
                            <AiFillProfile />
                            <div style={{ paddingLeft: "10px" }}>Profile</div>
                        </div>
                        <div className="dashboard-btn">
                            <TbMessages />
                            <div style={{ paddingLeft: "10px" }}>Messages</div>
                        </div>
                        <div className="dashboard-btn">
                            <AiOutlineHistory />
                            <div style={{ paddingLeft: "10px" }}>History</div>
                        </div>
                        <div className="dashboard-btn">
                            <FaTasks />
                            <div style={{ paddingLeft: "10px" }}>Tasks</div>
                        </div>
                        <div className="dashboard-btn">
                            <BsFillPeopleFill />
                            <div style={{ paddingLeft: "10px" }}>
                                Communities
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "30px" }}>
                        <div className="dashboard-btn">
                            <CiSettings />
                            <div style={{ paddingLeft: "10px" }}>Settings</div>
                        </div>

                        <div className="dashboard-btn">
                            <MdContactSupport />
                            <div style={{ paddingLeft: "10px" }}>Support</div>
                        </div>
                        <div className="dashboard-btn">
                            <MdOutlinePrivacyTip />
                            <div style={{ paddingLeft: "10px" }}>Privacy</div>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="top-bar">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                height: "60%"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    padding: "20px",
                                    paddingLeft: "10px"
                                }}
                            >
                                <div>
                                    <AiOutlineSearch className="search-icon" />
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <MdOutlineNotificationsActive className="notif-icon" />

                                <div className="icon">
                                    <img
                                        src={japanese}
                                        className="japanese-icon"
                                    />
                                </div>
                                <div
                                    style={{
                                        paddingLeft: "20px",
                                        padding: "20px"
                                    }}
                                    className="user"
                                >
                                    Andres Flores
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                height: "40%",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <div style={{ display: "flex" }}>
                                <div className="icon">
                                    <img
                                        src={japanese}
                                        style={{ height: "100%" }}
                                    />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "55px",
                                        paddingLeft: "10px"
                                    }}
                                >
                                    Hi there, Andres Flores (@andres)
                                </div>
                            </div>

                            <div style={{ display: "flex" }}>
                                <div className="top-bar-btn">New</div>
                                <div className="top-bar-btn">Upload</div>
                                <div className="top-bar-btn">Share</div>
                            </div>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="left-menu-wrapper">
                            <div className="menu-title">Your projects</div>
                            <div className="left-menu-grid-container">
                                <div className="item item1">
                                    <div className="item-title">
                                        Super Cool Project
                                    </div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="item item2">
                                    <div className="item-title">
                                        Less Cool Project
                                    </div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="item item3">
                                    <div className="item-title">Impossible</div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="item item4">
                                    <div className="item-title">
                                        Easy Peasy App
                                    </div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="item item5">
                                    <div className="item-title">Ad Blocker</div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="item item6">
                                    <div className="item-title">
                                        Money Maker
                                    </div>
                                    <div className="item-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sint deserunt enim
                                        officiis, sit, ut unde voluptatibus
                                        quisquam reiciendis sapiente ipsam
                                        doloremque fugiat veniam error magnam
                                        modi, cumque dolore possimus? Maxime.
                                    </div>

                                    <div className="options-wrapper">
                                        <AiOutlineFork
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <AiOutlineEye
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                        <MdOutlineFavoriteBorder
                                            style={{
                                                fontSize: "20pt",
                                                paddingLeft: "10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-menu-wrapper">
                            <div className="menu-title">Announcements</div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    marginBottom: "30px",
                                    padding: "20px"
                                }}
                            >
                                <div className="first-announcement">
                                    <div className="announcement-title">
                                        Site Maintenance
                                    </div>
                                    <div className="announcement-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rerum eaque cumque
                                        quidem natus ipsa autem, debitis sequi
                                        at consequatur maiores!
                                    </div>
                                </div>
                                <div className="announcement">
                                    <div className="announcement-title">
                                        Community Share Day
                                    </div>
                                    <div className="announcement-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rerum eaque cumque
                                        quidem natus ipsa autem, debitis sequi
                                        at consequatur maiores!
                                    </div>
                                </div>
                                <div className="announcement">
                                    <div className="announcement-title">
                                        Updated Privacy Policy
                                    </div>
                                    <div className="announcement-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rerum eaque cumque
                                        quidem natus ipsa autem, debitis sequi
                                        at consequatur maiores!
                                    </div>
                                </div>

                                <div className="announcement">
                                    <div className="announcement-title">
                                        Updated Privacy Policy 2
                                    </div>
                                    <div className="announcement-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rerum eaque cumque
                                        quidem natus ipsa autem, debitis sequi
                                        at consequatur maiores!
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div>Trending</div>

                                <div className="icons">
                                    <div className="icon-wrapper">
                                        <div className="icon">
                                            <img
                                                src={clown}
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <div style={{ paddingTop: "15px" }}>
                                            <div>@clownguy123</div>
                                            <div
                                                style={{
                                                    color: "gray",
                                                    fontSize: "12pt",
                                                    marginTop: "5px"
                                                }}
                                            >
                                                The Clown
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon-wrapper">
                                        <div className="icon">
                                            <img
                                                src={congolese}
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <div style={{ paddingTop: "15px" }}>
                                            <div>@congoy5</div>
                                            <div
                                                style={{
                                                    color: "gray",
                                                    fontSize: "12pt",
                                                    marginTop: "5px"
                                                }}
                                            >
                                                Mr Congo
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon-wrapper">
                                        <div className="icon">
                                            <img
                                                src={cuban}
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <div style={{ paddingTop: "15px" }}>
                                            <div>@cube99</div>
                                            <div style={{color: 'gray', fontSize: '12pt', marginTop: '5px'}}>Pedro M</div>
                                        </div>
                                    </div>

                                    <div className="icon-wrapper">
                                        <div className="icon">
                                            <img
                                                src={indian}
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <div style={{ paddingTop: "15px" }}>
                                            <div>@oopindia</div>
                                            <div style={{color: 'gray', fontSize: '12pt', marginTop: '5px'}}>Professor Roy</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
