import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import "./TriggerLogin.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/actions/userActions'
import 'semantic-ui-css/semantic.min.css'




const DropdownTriggerExample = () => {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    const dispatch = useDispatch()

    const singout = () => {
        dispatch(logout())
    }

    const trigger = (
        <span className="SpanNameLogin">
            <Icon name='user' /> Hola, {userInfo.name}
        </span>
    )

    const options = [
        {
            key: 'user',
            text: (
                <span>
                    Perfil de <strong>{userInfo.name}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Your Profile', href: 'profile' },
        { key: 'sign-out', text: 'Sign Out', onClick: singout, href: '/' },
    ]

    return (
        <div>
            <Dropdown trigger={trigger} options={options} />
        </div>
    )
}

export default DropdownTriggerExample