import { Links } from "../models/Links";
import Input from "../templates/Input";
import NavBar from "../templates/NavBar";
import Button from "../templates/Button";
import Link from "next/link";
import Message from "../templates/Message";

const Signup = () => {
    const links: Links[] = [
        { value: "home", link: "/home" },
        { value: "login", link: "/login" },
        { value: "sign up", link: "/signup" },
    ]

    return (
        <div className="space-y-24">
            <NavBar
                title="PassManager"
                links={links}
            />

            <div className="container mx-auto flex items-center md:items-start flex-col gap-8">
                <span
                    className="text-4xl tracking-widest uppercase font-semibold text-blue-500"
                >Sign Up</span>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                        Type="text"
                        value="string"
                        htmlFor="Full Name"
                        onChange={(e) => console.log(e)}
                    />
                    <Input
                        Type="text"
                        value="string"
                        htmlFor="Email"
                        onChange={(e) => console.log(e)}
                    />
                    <Input
                        Type="password"
                        value="string"
                        htmlFor="Password"
                        onChange={(e) => console.log(e)}
                    />
                    <Input
                        Type="password"
                        value="string"
                        htmlFor="Confirm Password"
                        onChange={(e) => console.log(e)}
                    />
                    <div className="col-span-full pb-3 justify-self-center">
                        <Message message="Password doesn't match"/>
                    </div>
                    <Button 
                        value="Submit"
                        onclick={() => console.log()}
                    />
                </form>
                <div className="border-b border-gray-400 w-5/12"/>
                <small>
                    Already have a Account? 
                    <Link href="/login">
                        <a className="hover:text-blue-500 hover:underline underline-offset-4"> Click here</a>
                    </Link>
                </small>
            </div>
        </div>
    )
}

export default Signup;