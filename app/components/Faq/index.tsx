"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is NOrdicLM?",
        subheading: 'NordicLM is an open-source project designed to help developers build intelligent, modular AI systems. With both short-term and long-term memory, agentic AI concepts, and built-in support for ETL and embeddings, NordicLM makes it simple to experiment, extend, and scale AI applications.'
    },
    {
        heading: "2.Who can benefit from NordicLM’s solutions?",
        subheading: 'Our solutions are designed for startups, enterprises, and research organizations across industries like finance, healthcare, retail, manufacturing, and technology.'
    },
    {
        heading: "3.Do you offer tailored AI solutions?",
        subheading: 'Yes. We work closely with clients to design custom AI systems that meet specific needs, instead of one-size-fits-all products.'
    },
    {
        heading: "4.What technologies do you use?",
        subheading: 'We leverage state-of-the-art AI frameworks such as TensorFlow, PyTorch, Hugging Face, OpenAI APIs, and cloud platforms (AWS, Azure, GCP) for scalable deployments.'
    },
    {
        heading: "5.How secure are NordicLM’s AI solutions?",
        subheading: 'Security and privacy are top priorities. We follow industry best practices, including data encryption, compliance with GDPR, HIPAA (where applicable), and role-based access control.'
    },
    {
        heading: "6.How does NordicLM handle client data?",
        subheading: 'All client data is processed under strict confidentiality. We offer on-premise and cloud deployment options depending on your data governance requirements.'
    },
    {
        heading: "7.Do you provide support after deployment?",
        subheading: 'Yes. We offer maintenance, updates, and monitoring services to ensure your AI system stays accurate and efficient over time.'
    },
    
    // {
    //     heading: "1. What is cryptocurrency?",
    //     subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    // },
    // {
    //     heading: "2. Can cryptocurrency be converted to cash?",
    //     subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    // },
    // {
    //     heading: "3. How long should you hold cryptocurrency?",
    //     subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into'
    // },

]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked And Question</h3>
            {/* <p className="text-center lg:text-lg font-normal text-bluish">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry standard dummy text ever since the 1500s,</p> */}

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
