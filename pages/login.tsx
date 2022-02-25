import { Links } from "../models/Links";
import Input from "../templates/Input";
import NavBar from "../templates/NavBar";
import Button from "../templates/Button";
import Link from "next/link";

const Login = () => {
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
                >Login</span>
                <form className="flex flex-col gap-5">
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
                    <Button 
                        value="Submit"
                        onclick={() => console.log()}
                    />
                </form>
                <div className="border-b border-gray-400 w-80"/>
                <small>
                    No Account? 
                    <Link href="/signup">
                        <a className="hover:text-blue-500 hover:underline underline-offset-4"> Click here</a>
                    </Link>
                </small>
            </div>
        </div>
    )
}

export default Login;