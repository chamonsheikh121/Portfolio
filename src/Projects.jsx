import { FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import bloodImage from './assets/BloodDonation.png'
import bistroBossImage from './assets/BistroBoss.png'


const Projects = () => {
    return (
        <div className="my-20">
            <h4 className="text-4xl text-center font-bold"><span className="border-b-4 pb-2 border-yellow-600">Pro</span>jects</h4>
            <div className="projects py-20 space-y-32">
                {/* ================== project 1 =========== */}
                <div className="flex items-center gap-10">
                    <div className="w-[600px] space-y-4">
                        <div>
                            <p className="text-xs underline underline-offset-4">Title</p>
                            <h3 className="text-2xl font-bold">Blood Donation</h3>
                        </div>
                        <div>
                            <p className="text-xs underline underline-offset-4">About</p>
                            <p className="font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae aut repellendus sint itaque voluptatem um. Quaerat quidem perspiciatis harum eligendi eniquid reprehenderit ab repellat, fuga velit impedit quasi quia! Dolorem possimus labore quia quam?</p>
                        </div>
                        <div className="buttons flex gap-5">
                            <a href=""><button className=""><FiGithub></FiGithub> Code</button></a>
                            <a href=""> <button className=""><FaLink></FaLink> Live</button>  </a>
                        </div>
                    </div>
                    <div className="h-[300px] w-[500px] ">
                        <img className="w-full h-full border border-gray-600 p-1" src={bloodImage} alt="" />
                    </div>
                </div>
                {/* ================== project 2 =========== */}

                <div className="flex  flex-row-reverse text-end items-center gap-10">
                    <div className="w-[600px] space-y-4">
                        <div>
                            <p className="text-xs underline underline-offset-4">Title</p>
                            <h3 className="text-2xl font-bold">Project Title</h3>
                        </div>
                        <div>
                            <p className="text-xs underline underline-offset-4">About</p>
                            <p className="font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae aut repellendus sint itaque voluptatem um. Quaerat quidem perspiciatis harum eligendi eniquid reprehenderit ab repellat, fuga velit impedit quasi quia! Dolorem possimus labore quia quam?</p>
                        </div>
                        <div className="buttons justify-end flex gap-5">
                            <a href=""> <button className=""><FiGithub></FiGithub> Code</button></a>
                            <a href=""><button className=""><FaLink></FaLink> Live</button></a>
                        </div>
                    </div>
                    <div className="h-[300px] w-[500px] ">
                    <img className="w-full h-full border border-gray-600 p-1" src={bistroBossImage} alt="" />
               </div>
                </div>
                {/* ================== project 3 =========== */}
                {/* <div className="flex items-center gap-10">
                    <div className="w-[600px] space-y-4">
                        <div>
                            <p className="text-xs underline underline-offset-4">Title</p>
                            <h3 className="text-2xl font-bold">Project Title</h3>
                        </div>
                        <div>
                            <p className="text-xs underline underline-offset-4">About</p>
                            <p className="font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae aut repellendus sint itaque voluptatem um. Quaerat quidem perspiciatis harum eligendi eniquid reprehenderit ab repellat, fuga velit impedit quasi quia! Dolorem possimus labore quia quam?</p>
                        </div>
                        <div className="buttons flex gap-5">
                            <a href=""><button className=""><FiGithub></FiGithub> Code</button></a>
                            <a href=""> <button className=""><FaLink></FaLink> Live</button>  </a>
                        </div>
                    </div>
                    <div className="h-[300px] w-[500px] ">
                        <img src="" alt="" />
    border-gray-600                 </div>
                </div> */}

                <div className="text-center w-full">
                    <Link to={'/utility-projects'}><button className="btn hover:bg-green-500 text-sm bg-green-600 text-black py-3 px-10 font-bold">See&nbsp;Utility&nbsp;Projects</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;