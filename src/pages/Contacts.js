const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Belgorod, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>
                            <a href="tel:+79051234567">+7 (905) 123-45-67</a>
                        </p>
                        <p>
                            <a
                                href="https://t.me/dd_kaba"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://t.me/dd_kaba
                            </a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:evgklenin@gmail.com">
                                evgklenin@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
