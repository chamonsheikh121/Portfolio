import './index.css'

const Navbar = () => {
   
    return (
        <div id="navbar" className="p-1">
            <div className="flex justify-between">
               
                <ul className="flex  items-center uppercase font-bold gap-10">
                    <li><a href="" id="link">Home</a></li>
                    <li><a href="" id="link">About</a></li>
                    <li><a href="" id="link">Project</a></li>
                    <li><a href="" id="link">about</a></li>
                    <li><a href="" id="link">about</a></li>
                    <li><a href="" id="link">download</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;