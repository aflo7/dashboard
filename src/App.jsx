// import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineNotificationsActive } from "react-icons/md"
import clown from "./assets/clown.png"
import congolese from "./assets/congolese.png"
import cuban from "./assets/cuban.png"
import indian from "./assets/indian.png"
import japanese from "./assets/japanese.png"
import Dashboard from "./components/Dashboard"
import projects from "./js/projects"
import Project from "./components/Project"

function App() {
    return (
        <>
            <div className="container">
                <Dashboard />

                <div className="right-side">
                    <div className="top-bar">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px"
                                }}
                            >
                                <AiOutlineSearch className="search-icon" />

                                <input type="text" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px"
                                }}
                            >
                                <MdOutlineNotificationsActive />

                                <div>
                                    <img
                                        src={japanese}
                                        style={{ height: "30px" }}
                                    />
                                </div>
                                <div className="user">Profile</div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px"
                                }}
                            >
                                <img
                                    src={japanese}
                                    style={{ height: "50px" }}
                                />
                                <div>Hi there, Andres Flores (@andres)</div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
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
                                {projects.map((project, i) => {
                                    return (
                                        <Project
                                            key={i}
                                            projectTitle={project.title}
                                            projectDescription={
                                                project.description
                                            }
                                        />
                                    )
                                })}
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
                                            <div
                                                style={{
                                                    color: "gray",
                                                    fontSize: "12pt",
                                                    marginTop: "5px"
                                                }}
                                            >
                                                Pedro M
                                            </div>
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
                                            <div
                                                style={{
                                                    color: "gray",
                                                    fontSize: "12pt",
                                                    marginTop: "5px"
                                                }}
                                            >
                                                Professor Roy
                                            </div>
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
