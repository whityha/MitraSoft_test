import { Image, ListGroup } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div className="d-flex flex-column m-3">
            <p>Привет. Меня зовут Павел. Живу и работаю в Республике Беларусь.</p>
            <p>
                Коммерческий опыт более 2 лет, но я считаю его не особо релевентным, так как задачи
                были простые. В компании надеюсь (как описано в вакансии) на сложные задачи и
                быстрый рост.
            </p>
            <p>
                В тестовом есть недочеты, где-то захаркожено (например эта страница), где-то не
                затипизировано. Сделайте поблажку, делал быстро, чтобы успеть, пока не закрылась
                вакансия, попасть на собеседование.
            </p>
            <p>Зарплатные ожидания: по итогам собеседования, если тестовое понравится.</p>
            <p className="d-flex flex-column">
                Для связи:{' '}
                <a className="fw-bold" href="https://t.me/white408">
                    Telegram
                </a>
                <a className="fw-bold" href="mailto: p.a.khapaliuk@gmail.com">
                    E-mail
                </a>
            </p>
            <p>
                <a className="fw-bold" href="https://jck-auto.ru">
                    Последний коммерческий проект на React (кликабельно)
                </a>
            </p>
            <Image src="/assets/PHOTO.webp" width={200} rounded alt="Im not gay" />
            <ListGroup className="mt-3">
                <h5 className="fw-bold">Стэк технологий: </h5>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>TypeScript</ListGroup.Item>
                <ListGroup.Item>Redux</ListGroup.Item>
                <ListGroup.Item>Redux-Saga</ListGroup.Item>
                <ListGroup.Item>React-Toolkit</ListGroup.Item>
                <ListGroup.Item>styled-components</ListGroup.Item>
                <ListGroup.Item>Redux-thunk</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default AboutMe;
