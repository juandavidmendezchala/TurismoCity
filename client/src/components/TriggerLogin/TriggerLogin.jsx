import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import "./TriggerLogin.css"

const trigger = (
    <span className="SpanNameLogin">
        <Icon name='user' /> Hola, Mati
    </span>
)

const options = [
    {
        key: 'user',
        text: (
            <span>
                Perfil de <strong>Mati Gerez</strong>
            </span>
        ),
        disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'sign-out', text: 'Sign Out' },
]

const DropdownTriggerExample = () => (
    <Dropdown trigger={trigger} options={options} />
)

export default DropdownTriggerExample