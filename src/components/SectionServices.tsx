import { Container } from "./Container";
import Image from "next/image";

import PhoneIcon from '@/assets/icon-phone.svg';
import SoluctionsIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg'
import PhoneImage from '@/assets/phone.png'

export function SectionServices() {
    return (
        <section className="relative h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <h1 className="block text-primary-orange text-[30px] font-bold uppercase mb-9">serviços exclusivos!</h1>
                    <h3 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa!</h3>
                    <p className="text-lg max-w-[554px] mb-16 text-secondary-gray">
                        Veja como você pode cuidar das suas finanças pelo app do Itaú de forma rápida e segura, no conforto de sua casa.
                    </p>
                    <ul className="flex flex-col items-start gap-2">
                        <li className="flex items-center gap-4 mb-12 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="flex-shrink-0 w-7 h-7"> 
                                <Image
                                    src={PhoneIcon}
                                    alt="Phone Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray text-base max-w-full"> 
                                Acompanhar sua conta, fazer transferências e pagamentos de onde estiver!
                            </p>
                        </li>  

                        <li className="flex items-center gap-4 mb-12 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="flex-shrink-0 w-7 h-7"> 
                                <Image
                                    src={SoluctionsIcon}
                                    alt="Phone Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray text-base max-w-full"> 
                                Soluções de empréstimos e renegociação para organizar suas finanças!
                            </p>
                        </li>  

                        <li className="flex items-center gap-4 mb-12 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="flex-shrink-0 w-7 h-7"> 
                                <Image
                                    src={OptionsIcon}
                                    alt="Phone Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray text-base max-w-full"> 
                                Diversas opções de investimentos de acordo com seu perfil de investidor!
                            </p>
                        </li>  

                        <li className="flex items-center gap-4 mb-12 border-opacity-gray">
                            <div className="flex-shrink-0 w-7 h-7"> 
                                <Image
                                    src={CardIcon}
                                    alt="Phone Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray text-base max-w-full"> 
                                Acompanhe a sua fatura do cartão de crédito e faça compras online com seu cartão virtual!
                            </p>
                        </li>  

                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
                <Image  
                    src={PhoneImage}
                    alt="Phone"
                    className="translate-x-[-50%]"
                />
            </div>
        </section>
    );
}
