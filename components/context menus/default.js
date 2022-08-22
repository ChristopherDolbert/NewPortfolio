import React from 'react'

function DefaultMenu(props) {
    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <a rel="noreferrer noopener" href="mailto:christopher.dolbert@gmail.com" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🌟</span> <span className="ml-2">Complimenter ce projet</span>
            </a>
            <a rel="noreferrer noopener" href="mailto:christopher.dolbert@gmail.com" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">❗</span> <span className="ml-2">Signaler des bogues</span>
            </a>
            <Devider />
            <a rel="noreferrer noopener" href="https://fr.linkedin.com/in/christopher-dolbert-74851a14a" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🙋‍♂️</span> <span className="ml-2">Suivre sur <strong>Linkedin</strong></span>
            </a>
            <a rel="noreferrer noopener" href="https://github.com/SailorEudes" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🤝</span> <span className="ml-2">Suivre sur <strong>Github</strong></span>
            </a>
            <a rel="noreferrer noopener" href="mailto:christopher.dolbert@gmail.com" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📥</span> <span className="ml-2">Contactez-moi</span>
            </a>
            <Devider />
            <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🧹</span> <span className="ml-2">Réinitialiser Ubun</span>
            </div>
        </div>
    )
}

function Devider() {
    return (
        <div className="flex justify-center w-full">
            <div className=" border-t border-gray-900 py-1 w-2/5"></div>
        </div>
    );
}

export default DefaultMenu
