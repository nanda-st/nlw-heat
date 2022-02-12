import styles from './styles.module.scss'

import logo from '../../assets/logo.svg'

export function MessageList() {
    return (
        <>
            <div className={styles.messageListWrapper}>
                <img src={logo} alt='DOWhile 2021' />

                <ul className={styles.messageList}>
                    <li className={styles.message}>
                        <p className={styles.messageContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis quod, numquam eaque placeat neque exercitationem
                            officia nisi velit modi consequuntur. Dolorum!
                        </p>

                        <div className={styles.messageUser}>
                            <div className={styles.userPic}>
                                <img src='https://github.com/nanda-st.png' alt='Nanda Santos' />
                            </div>

                            <span>Nanda Santos</span>
                        </div>
                    </li>

                    <li className={styles.message}>
                        <p className={styles.messageContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis quod, numquam eaque placeat neque exercitationem
                            officia nisi velit modi consequuntur. Dolorum!
                        </p>

                        <div className={styles.messageUser}>
                            <div className={styles.userPic}>
                                <img src='https://github.com/nanda-st.png' alt='Nanda Santos' />
                            </div>

                            <span>Nanda Santos</span>
                        </div>
                    </li>

                    <li className={styles.message}>
                        <p className={styles.messageContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis quod, numquam eaque placeat neque exercitationem
                            officia nisi velit modi consequuntur. Dolorum!
                        </p>

                        <div className={styles.messageUser}>
                            <div className={styles.userPic}>
                                <img src='https://github.com/nanda-st.png' alt='Nanda Santos' />
                            </div>

                            <span>Nanda Santos</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}