import { useContext, useEffect, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import styles from './styles.module.scss'

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext)
    const [message, setMessage] = useState('')

    return (
        <>
            <div className={styles.sendMessageFormWrapper}>
                <button className={styles.signOutButton} onClick={signOut}>
                    <VscSignOut size='32' />
                </button>

                <header className={styles.userInformation}>
                    <div className={styles.userPic}>
                        <img src={user?.avatar_url} alt={user?.name}/>
                    </div>

                    <strong className={styles.userName}>
                        {user?.name}
                    </strong>

                    <span className={styles.userGithub}>
                        <VscGithubInverted size='16' />
                        {user?.login}
                    </span>
                </header>

                <form className={styles.sendMessageForm}>
                    <label htmlFor='message'>Mensagem</label>
                    <textarea
                        name='message'
                        id='message'
                        placeholder='Qual sua expectativa para o evento?'
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />

                    <button type='submit'>Enviar mensagem</button>
                </form>
            </div>
        </>
    )
}