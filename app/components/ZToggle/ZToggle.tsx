import './ZToggle.css';


export default function ZToggle({id, label, checked, updateFunc}) {
    
    function toggle() {
        updateFunc();
    }
    return (
        <div className='flex space-x-2 m-4'>
            <label className='font-semibold' htmlFor={id}>{label}</label>
            <div id={id} onClick={toggle} className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${checked ? 'bg-purple-500' : 'bg-gray-400'}`}>
                <div className={`toggle-circle bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ease-in-out ${checked == true ? " translate-x-7 " : ""}`} />
            </div>
        </div>
    )
}

