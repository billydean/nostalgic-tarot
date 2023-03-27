import Nav from "./Nav";


function Header () {

    return (
        <header className="header">
            <h1>Big Ol' Header</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur odio eu commodo tempus. Suspendisse molestie nulla tortor, vitae vehicula neque gravida eget. Maecenas ut luctus massa. In gravida, nulla in mattis accumsan, mauris velit pellentesque lectus, at hendrerit turpis tortor sed nisi. Etiam feugiat porttitor faucibus. Vivamus sodales orci eu convallis mollis. In nunc sapien, aliquet ut purus sit amet, mattis consectetur purus. Aenean ornare purus at odio mollis, vitae aliquam mauris tincidunt. Nunc sed neque ligula. </p>
            <Nav />
        </header>
    )
};

export default Header;