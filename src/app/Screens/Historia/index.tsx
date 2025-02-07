import React from 'react';

const Historia: React.FC = () => {
    return (
        <section className="w-full md:min-h-[50vh] bg-white flex flex-col justify-start items-start p-4">
            <div className='my-4'>
                <strong className="text-4xl font-bold text-blue_d">
                    Está pronto para levar a
                </strong>
                <strong className="text-4xl font-bold text-orange_d">
                    educação
                </strong>
                <strong className="text-4xl font-bold text-blue_d">
                    em sua instituição a novos patamares?
                </strong>
            </div>

            <p className="text-lg text-start">
                Impulsionar transformações educacionais, capacitando e instrumentalizando educadores e escolas para que possam criar
                ambientes de ensino aprendizagem de excelência. Humanismo e educação responsável Diversidade, sustentabilidade e inovação
                pedagógica Aluno no centro Apoio ao corpo docente e crescimento contínuo Equidade educacional e democratização do conhecimento.
                Sermos referência no mercado enquanto fomentadores do ensino de qualidade e promotores da ciência.
            </p>

            <p className="text-lg mt-1">
                Ao longo de anos atuando como professor na área de exatas, Danilo Souza buscou recursos e tecnologias que pudesse
                implementar em suas aulas e aumentar a qualidade dos resultados nesses percursos formativos. Como reflexo disso ele firmou
                parcerias incríveis e fundou a ESQ Educação, hub de projetos educacionais, para replicar essas soluções em outras unidades
                escolares. Hoje além de CEO da ESQ, Danilo Souza é consultor da MMP Materiais pedagógicos e Diretor de Franquia da Irium
                Educação.
            </p>

            <p className="text-lg mt-1">
                Com um profundo conhecimento na área e uma paixão genuína por transformar a aprendizagem, o Professor Danilo é o seu
                ponto de contato direto para uma parceria de sucesso, estando à sua disposição para explorar e implementar soluções
                educacionais sob medida para seu contexto.
            </p>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 align-center mt-6'>

                <div className='flex flex-col items-center justify-start text-center'>
                    <strong className="text-4xl font-bold text-blue_d">Missão</strong>
                    <figure className='bg-[#E0DEFB] rounded-full w-[200px] h-[200px] my-3'>

                    </figure>
                    <div className="bg-gray-300 w-full p-3 rounded-lg md:h-[250px]">
                        <p className="text-lg text-start">
                            Impulsionar transformações educacionais,
                            capacitando e instrumentalizando
                            educadores e escolas para que possam criar
                            ambientes de ensino aprendizagem de
                            excelência.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start text-center'>
                    <strong className="text-4xl font-bold text-blue_d">Visão</strong>
                    <figure className='bg-[#E0DEFB] rounded-full w-[200px] h-[200px] my-3'>

                    </figure>
                    <div className="bg-gray-300 w-full p-3 rounded-lg md:h-[250px]">
                        <p className="text-lg text-start">
                            Ser referência no mercado
                            enquando fomentadores do ensino
                            de qualidade e promotores da ciência.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start text-center'>
                    <strong className="text-4xl font-bold text-blue_d">Valores</strong>
                    <figure className='bg-[#E0DEFB] rounded-full w-[200px] h-[200px] my-3'>

                    </figure>
                    <div className="bg-gray-300 w-full text-md  p-3 rounded-lg flex flex-col text-start md:h-[250px]">
                        <li>
                            Humanismo e educação responsável.
                        </li>
                        <li>
                            Diversidade, sustentabilidade e inovação pedagógica.
                        </li>
                        <li>
                            Aluno no centro.
                        </li>
                        <li>
                            Apoio ao corpo docente e crescimento contínuo.
                        </li>
                        <li>
                            Equidade educacional e democratização do conhecimento.
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Historia;
