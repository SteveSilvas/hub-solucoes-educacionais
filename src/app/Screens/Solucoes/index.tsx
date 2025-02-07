import Card from '@/components/Card';
import Image from 'next/image';
import React from 'react';
import hikes from "../../../assets/hikes.png";
import robot from "../../../assets/robot.png";
import medio from "../../../assets/medio.png";
import dsop from "../../../assets/dsop.png";
import mmp from "../../../assets/mmp.png";
import Link from 'next/link';

const Solucoes: React.FC = () => {
    return (
        <section className="w-full md:min-h-[50vh] bg-[#E0DEFB] flex flex-col justify-start items-start p-4">
            <strong className="text-4xl font-bold text-blue_d my-4">
                Soluções educacionais
            </strong>
            <p className="text-lg">
                Somos movidos pela paixão pela educação e estamos empenhados em fornecer soluções de excelência para escolas e
                educadores. Nosso propósito é fornecer ferramentas necessárias para preparar as gerações futuras para um mundo em
                constante evolução. Convidamos você a explorar nosso site e descobrir como estamos comprometidos em aprimorar a
                educação.
            </p>
            <div className="bg-[#E0DEFB] w-full flex flex-wrap justify-center gap-4 mt-4">
                <Card className="w-[45%] sm:w-[30%] lg:w-[18%]">
                    <Image className="w-full h-40 object-cover" src={hikes} alt="HIKES" />
                </Card>
                <Card className="w-[45%] sm:w-[30%] lg:w-[18%]">
                    <Image className="w-full h-40 object-cover" src={robot} alt="RobotLab - Laboratório de Robótica" />
                </Card>
                <Card className="w-[45%] sm:w-[30%] lg:w-[18%]">
                    <Image className="w-full h-40 object-cover" src={medio} alt="Ensino Médio" />
                </Card>
                <Card className="w-[45%] sm:w-[30%] lg:w-[18%]">
                    <Image className="w-full h-40 object-cover" src={dsop} alt="DSOP - Educação financeira" />
                </Card>
                <Card className="w-[45%] sm:w-[30%] lg:w-[18%]">
                    <Image className="w-full h-40 object-cover" src={mmp} alt="MMP - Materiais pedagógicos" />
                </Card>
            </div>
            <nav className='w-full flex justify-center'>
                <Link href="/solucoesdetalhe"
                 className='bg-blue_d hover:bg-blue_d/80 text-white px-4 py-2 rounded-lg mt-4 text-lg'>
                    Saiba mais
                </Link>
            </nav>
        </section>
    );
}

export default Solucoes;