import html from './assets/skills/file-type-html.svg'
import css from './assets/skills/css-3.png'
import js from './assets/skills/javascript-js.svg'

const Skills = () => {
    return (
        <div className="max-w-4xl mx-auto ">
            <h4 className="text-4xl my-20 text-center font-bold"><span className="border-b-4 pb-2 border-yellow-600">Sk</span>ills</h4>
            <div className='grid grid-cols-6 gap-10 p-10'>
                <div className='flex bg-gray-900 gap-2 rounded-md pt-2 justify-center items-center flex-col'>
                    <img className='w-[80px] object-cover' src={html} alt="" />
                    <h5 className='font-bold'>HTML</h5>
                </div>
                <div className='flex bg-gray-900 gap-2 rounded-md p-2 justify-center items-center flex-col'>
                    <img className='object-cover w-[80px] h-[80px]' src={css} alt="" />
                    <h5 className='font-bold'>CSS</h5>
                </div>
                <div className='flex bg-gray-900 gap-2 rounded-md p-2 justify-center items-center flex-col'>
                    <img className='object-cover rounded-xl w-[80px] h-[80px]' src={js} alt="" />
                    <h5 className='font-bold'>JavaScript</h5>
                </div>
            </div>
        </div>
    );
};

export default Skills;