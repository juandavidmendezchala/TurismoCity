// import React, { useState } from 'react'
// import ChatBotLanding from './ChatBot'

// const ButtonChatBot = () => {
//     const [visible, setVisible] = useState(false);
//     const buttonBot = visible ? "ocultar" : "Ayuda"
//     return (
//         <div className="ChatBotConfigPosition">
//             {visible ? <ChatBotLanding /> : <div>Perfecto que no ande</div>}
//             <button onClick={() => {
//                 setVisible({ visible: !visible })
//             }}
//             >
//                 {buttonBot}
//             </button>
//         </div>
//     )
// }

// export default ButtonChatBot
import React from 'react'
import { Popup, Icon } from 'semantic-ui-react'
import ChatBotLanding from './ChatBot'
import "./ButtonChatBot.css"



const PopupExamplePopper = () => {
    return (
        <Popup className="PopUpBotContainer"
            content={
                <div className="Acomodo"><ChatBotLanding /></div>
            }
            position="top left"
            on='click'
            popper={{ id: 'popper-container', style: { background: "#fff" } }}
            trigger={<button className="EstiloBotonBot"><Icon name="chat"></Icon></button>}
        />)

}




export default PopupExamplePopper
