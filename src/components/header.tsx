import Image from "next/image";
import { ItemMenu } from "./itemMenu";
import { FaUser } from "react-icons/fa";
import Logo from '@/assets/logo.svg';
import { Container } from "./Container";


export function Header() {
    return (
        <>
            <header className="w-full h-20 bg-primary-orange">
                <Container>
                    <div className="flex items-center justify-between w-4/5">
                        <div className="flex items-center gap-14">
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                            <ul className="flex items-center gap-12">
                                <li>
                                    <ItemMenu name="Para você" />
                                </li>
                                <li>
                                    <ItemMenu name="Para empresas" />
                                </li>
                                <li>
                                    <ItemMenu name="Serviços" />
                                </li>
                                <li>
                                    <ItemMenu name="Ajuda" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-1/5 h-full items-center justify-center">
                        <button className="flex items-center justify-center gap-4 bg-transparent border-2 border-white text-white h-12 w-full rounded transition-colors hover:bg-white hover:text-primary-orange">
                            <span className="transition-colors group-hover:text-primary-orange">
                                <FaUser />
                            </span>
                            <span className="font-bold">Acessar conta</span>
                        </button>
                    </div>
                </Container>
            </header>
            <div className="h-[1px] bg-secondary-orange"></div> 
        </>
    );
}
