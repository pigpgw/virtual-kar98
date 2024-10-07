import Button from "@/components/Button";

const ComponentsPage = () => {
    return (
        <div className="font-sans">
            <h1 className="logo-main">Jungle</h1>
            <h2 className="logo-login">Jungle Board</h2>
            <h3 className="logo-header">Header Text</h3>
            <h4 className="logo-modal">Modal Title</h4>
            <p className="title">This is a title</p>
            <p className="subtitle">This is a subtitle</p>
            <p className="body1">This is regular body text</p>
            <p className="body2">This is bold body text</p>
            <button className="button-regular">Regular Button</button>
            <button className="button1">Large Button 1</button>
            <button className="button2">Large Button 2</button>
            <br />
            <Button type="default">default</Button>
            <br />
            <Button type="signin">signin</Button>
            <br />
            <Button type="signup">signup</Button>
            <br />
            <Button type="logout">logout</Button>
            <br />
            <Button type="my">my</Button>
            <br />
            <Button type="write1">Write1</Button>
            <br />
            <Button type="write2">Write2</Button>
            <br />
            <Button type="yes">YES</Button>
            <br />
            <Button type="no">NO</Button>
            <br />
            <Button type="delete">Delete Account</Button>
        </div>
    );
};

export default ComponentsPage;
