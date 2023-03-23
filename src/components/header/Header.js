import "./style.css";

const Header = () => {
    return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Всем привет, меня зовут <u>Денис</u></strong><br />
            </h1>
            <div className="header__text">
                <p>Образец сайта портфолио</p>
            </div>
            <a href="#!" className="btn">Скачать портфолио</a>
        </div>
    </header>);
}
 
export default Header;