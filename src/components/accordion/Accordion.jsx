import { useState } from 'react';
import "./accordion.css";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Accord = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
      <div className='w-full mx-auto h-[550px] flex items-center bg-[#088269]'>
          <div className='w-[90%] flex justify-center mx-auto'>
            <h3 className='w-[50%] text-[30px] font-semibold text-white'>Информация о компании</h3>
            <div className='w-[50%]'>
                <div>
                    <Accordion open={open} toggle={toggle} style={{backgroundColor: "[#088269]"}}>
                        <AccordionItem style={{background: "#088269"}}>
                            <AccordionHeader targetId="1" className='accordion'>О компании</AccordionHeader>
                            <AccordionBody accordionId="1"  style={{background: "#088269"}}>
                            Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены..
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem  style={{background: "#088269"}}>
                            <AccordionHeader targetId="2">Преимущества сотрудников</AccordionHeader>
                            <AccordionBody accordionId="2">
                            Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem  style={{background: "#088269"}}>
                            <AccordionHeader targetId="3">Достижения компании</AccordionHeader>
                            <AccordionBody accordionId="3">
                            Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem  style={{background: "#088269"}}>
                            <AccordionHeader targetId="4">Карьерный рост</AccordionHeader>
                            <AccordionBody accordionId="4">
                            Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Accord
