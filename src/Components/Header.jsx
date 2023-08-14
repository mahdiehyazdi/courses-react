function Header() {
    return (
        <div className="header">
            <img src="Svg/buy.svg" />
            <div className="header__icon__center">
                <div>
                    <img src="Svg/home.svg" />
                    <span>Home</span>
                </div>
                <div>
                    <img src="Svg/products.svg" />
                    <span> Product</span>
                </div>
                <div>
                    <img src="Svg/about.svg" />
                    <span>About</span>
                </div>
            </div>
            <img src="Svg/profile.svg" />
        </div>
    );
}
export default Header;
