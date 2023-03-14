import './Header.css'
import { useContext } from 'react'
import {UserContext} from '../../context/UserContext'

const Header = () => {

    const userInfo = useContext(UserContext)


    return(
        <>

            <h1>Header do site ContextAPI</h1>
            <span>
                {userInfo?.senha ?? "sem nome"}
            </span>
        </>
    )
}

export default Header