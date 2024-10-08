import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import AlertModal from "../components/Modal/AlertModal";

// import MyPageModal from "@/components/Modal/MypageModal";

const ComponentsPage = () => {
    return (
        <div>
            <div className="font-sans" style={{ display: "flex" }}>
                <div>
                    <Text size="h1">Jungle</Text>
                    <br />
                    <Text size="h2">Jungle Board</Text>
                    <br />
                    <Text size="h4">Jungle Board</Text>
                    <br />
                    <Text size="h3">Jungle Board</Text>
                    <br />
                    <Text size="h5">this is password</Text>
                    <br />
                    <Text size="h6">this is password</Text>
                    <br />
                    <Text size="body">this is password</Text>
                    <br />
                    <Text size="body-bold">this is password</Text>
                    <Text size="button">this is password</Text>
                    <br />
                    <Text size="button-large">this is password</Text>
                    <br />
                    <Text size="button-large">this is password</Text>
                </div>
                <div>
                    <button className="button-regular">Regular Button</button>
                    <br />
                    <button className="button1">Large Button 1</button>
                    <br />
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
                <div>
                    <div>default</div>
                    <Input type="default" />
                    <div>password</div>
                    <Input type="password" placeholder="this is password" />
                    <div>large</div>
                    <Input type="large" />
                    <div>extraLarge</div>
                    <Input type="extraLarge" />
                    <div>doubleextraLarge</div>
                    <Input type="doubleextraLarge" />
                    <div>x-long</div>
                    <Input type="xlong" />
                    <div>x-long</div>
                    <Input type="ylong" />
                </div>
            </div>
            <div></div>
            <br />
            <div className="flex">
                <AlertModal
                    text="Are you sure you want to log out"
                    btn1="YES"
                    btn2="NO"
                    onCancel={() => {
                        console.log("yes");
                    }}
                    onConfirm={() => {
                        console.log("no");
                    }}
                />
                <AlertModal
                    text="Permenently Delete Your Account?"
                    btn1="YES"
                    btn2="NO"
                    onCancel={() => {
                        console.log("yes");
                    }}
                    onConfirm={() => {
                        console.log("no");
                    }}
                />
                {/* <MyPageModal
                    title="MY PAGE"
                    btn1="YES"
                    btn2="NO"
                    onCancle={() => {
                        console.log("yes");
                    }}
                    onConfirm={() => {
                        console.log("no");
                    }}
                    closeModal={() => {
                        
                    }}
                /> */}
            </div>
        </div>
    );
};

export default ComponentsPage;
