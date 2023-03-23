const Contacts = () => {
    return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Контакты</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Город</h2>
                            <p>Ижевск, Россия</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
                            <p><a href="tel:+79051234567">+7 (951) 210-66-22</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Почта</h2>
                            <p><a href="mailto:denis.panfilov4@gmail.com">denis.panfilov4@gmail.com</a></p>
                        </li>
                    </ul>

        </div>
    </main>);
}
 
export default Contacts;