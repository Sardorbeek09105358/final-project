
import Marquee from "react-fast-marquee";

const CreateCarousel = () => {
    return (
        <div className="bg-[#E5E4ED] w-full h-[80vh] flex items-center flex-col justify-center mb-10">
            <div className="w-[90%] flex justify-between h-[200px] items-center">
                <h3 className="capitalize text-[28px] font-bold">Наши клиенты</h3>
                <h1 className="text-[40px] font-medium">БОЛЕЕ <span className="text-[#088269]">5000</span><br />  УСПЕШНЫХ ПРОЕКТОВ</h1>
            </div>
            <div className="w-full h-[500px] bg-[#E5E4ED]">
                <Marquee className="h-[400px]  gap-10 bg-[#E5E4ED]">
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2 flex flex-col justify-between cursor-pointer">
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%]"
                                src="https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png"
                                alt="Artel uzimizni maxsulot"
                            />
                            <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">ФГБУ «НМИЦ радиологии» Минздрава России</h3>
                    </div>
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2  flex flex-col justify-between cursor-pointer" >
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%] "
                                src="https://global-mt.ru/upload/iblock/55f/2ucwemhgjoqvi0xwad53u322awn6kydz/11.png"
                                alt="Expres24" />
                                <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">Больница Святителя Алексия Митрополита Московского</h3>
                    </div>
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2  flex flex-col justify-between cursor-pointer">
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%] "
                                src="https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png"
                                alt="Black star burger"
                            />
                            <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">Департамент здравоохранения города Москвы</h3>
                    </div>
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2  flex flex-col justify-between cursor-pointer">
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%] "
                                src="https://global-mt.ru/upload/iblock/d24/vwmcaq263qatmju6kh83be34r4v35rxj/12.png"
                                alt="broccolipark"
                            />
                            <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">Европейский Медицинский Центр EMC</h3>
                    </div>
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2  flex flex-col justify-between cursor-pointer">
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%] "
                                src="https://global-mt.ru/upload/iblock/e99/bvqt3v37a8oz2dh4iz7d1fh2ed0irqsj/logo.png"
                                alt="broccolipark"
                            />
                            <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">Клиническая больница № 85 ФМБА России</h3>
                    </div>
                    <div className="mx-20 h-[350px] w-[400px] rounded-2xl border bg-white shadow-xl pt-2  flex flex-col justify-between  cursor-pointer">
                            <img
                                className="mx-auto my-3 h-[30%] w-[40%] "
                                src="https://global-mt.ru/upload/iblock/4d0/3yg35cvejk0jpbralf633oflhcxgzzj5/logoy.png"
                                alt="broccolipark"
                            />
                            <h3 className="capitalize pl-3 h-[30%] pt-2 text-[18px]  bg-[#E1DFE7]">ГКБ имени С.С.Юдина в Москве</h3>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default CreateCarousel

