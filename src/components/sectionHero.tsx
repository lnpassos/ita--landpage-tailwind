import { Container } from "./Container";
import Image from "next/image";

import ImgAppleStore from '@/assets/btn-apple-store.svg';
import ImgGooglePlay from '@/assets/btn-google-play.svg';
import ArrowExplorer from '@/assets/arrow-explorer.svg';
import WomanImage from '@/assets/woman.png';

export function SectionHero() {
    return (
        <section className="w-full h-[720px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[500px] mb-14">
                    <h1 className="text-white text-7xl font-bold">Tenha seu banco na palma de sua mão</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">
                        Todas as operações que você precisa em um só lugar. Simples,
                        completo e feito pra você!
                    </p>

                    <div className="flex gap-4 mb-4">
                        <button className="transition-transform transform hover:scale-105"> 
                            <Image
                                src={ImgAppleStore}
                                alt="Apple Store"
                            />
                        </button>
                        <button className="transition-transform transform hover:scale-105"> 
                            <Image
                                src={ImgGooglePlay}
                                alt="Google Play"
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-4 mr-[150px] mt-[100px]"> 
                        <Image 
                            src={ArrowExplorer} 
                            alt="Arrow explorer" 
                            className="mr-2"
                        />
                        <span className="text-white text-sm font-bold">Continue explorando!</span>
                    </div>
                </div>

                <Image 
                    src={WomanImage}
                    alt="Woman"
                    className="mr-[-38px]"
                />
            </Container>
        </section>
    );
}
