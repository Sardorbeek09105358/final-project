import { useState } from "react";

function Location() {
    const [name, setName] = useState(localStorage.getItem("name"), "");
    const [phone, setPhone] = useState(localStorage.getItem("phone"), "");
    const [email, setEmail] = useState(localStorage.getItem("email"), "");
    const [question, setQuestion] = useState(
        localStorage.getItem("question"), ""
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
        setEmail("");
        setQuestion("");
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("email");
        localStorage.removeItem("question");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        localStorage.setItem(name, value);
        switch (name) {
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "question":
                setQuestion(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex gap-2 mx-auto w-full gap-3  h-[612-x] my-20 justify-center">
            <div className="w-[42%]">
                <div className="border-2 w-full rounded-2xl">
                    <iframe
                        className="rounded-2xl w-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13577.337172381369!2d69.2049699412457!3d41.28337677537935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1711913035465!5m2!1sru!2s"
                        width={700}
                        height={612}
                        style={{ border: 1 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className="w-[43%] p-5 rounded-2xl border-2">
              <div className="flex flex-col ml-6">
              <h1 className="font-medium text-[#202020] mb-[25px] text-3xl">
                    Остались вопросы?
                </h1>
                <p className="text-[#7A7687]">
                    Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или оставьте
                    свои координаты и наш менеджер <br /> перезвонит вам через 10 минут
                </p>
              </div>
                <div className="p-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Ваш телефон"
                                value={phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Ваш email"
                                value={email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <textarea
                                type="text"
                                id="question"
                                name="question"
                                placeholder="Ваш вопрос"
                                value={question}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div className="flex justify-between w-full gap-12">
                            <input
                                type="submit"
                                value="Отправить"
                                className="w-[230px] text-white bg-[#088269] rounded-full cursor-pointer"
                            />
                            <p>Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условияхx <span className="text-[#088269]">Политики конфиденциальности.</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Location;