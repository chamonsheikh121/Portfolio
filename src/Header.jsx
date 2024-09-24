import { useState, useEffect } from 'react';
import image from './../src/assets/C0SPERjD4hfgAAAAAElFTkSuQmCC.png';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import './index.css'; // We'll add styles for the typewriter effect here

const Header = () => {
    const texts = ['web developer', 'frontend developer', 'mern stack developer'];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 100 : 200;

     
        if (!isDeleting && charIndex === texts[index].length) {
            typingSpeed = 2000; 
            setTimeout(() => setIsDeleting(true), typingSpeed);
        }

      
        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);text
        }

        const timeout = setTimeout(() => {
            setText((prevText) =>
                isDeleting
                    ? texts[index].substring(0, prevText.length - 1)
                    : texts[index].substring(0, prevText.length + 1)
            );
            setCharIndex((prevCharIndex) => prevCharIndex + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, charIndex, texts]);

    return (
        <div className='flex flex-col-reverse md:flex-row mt-10 justify-between items-center'>
            <div className='p-10 space-y-5'>
                <h1 className='text-2xl'>Hello, Welcome</h1>
                <div className=''>
                    <h4>Myself</h4>
                    <h2 className='text-3xl'>
                        <span className='text-3xl md:text-5xl text-yellow-600 font-extrabold'>Chamon Ali</span>
                    </h2>
                </div>
                <div className='typewriter-container h-[50px] '>
                    <div className='typewriter'>
                        <h1 className='font-bold uppercase text-2xl md:text-4xl'>{text}</h1>
                    </div>
                </div>
                <div className='buttons flex flex-col md:flex-row items-center gap-2 md:gap-10'>
                    <a href='#lkjsd'>
                        <button className='w-full'>
                            <FiGithub /> github
                        </button>
                    </a>
                    <button className='w-full'>
                        <SlSocialLinkedin /> linkedin
                    </button>
                </div>
            </div>
            <img className='myImage' src={image} alt="" />
        </div>
    );
};

export default Header;
