

import { Card } from './Card';

const cards = [
  {
    id: 1,
    title: 'Гора Эверест (Джомолунгма)',
    text: "Эверест, известный также как Джомолунгма, является самой высокой точкой нашей планеты.",
    src: 'https://wikiway.com/upload/hl-photo/770/73c/gora-everest_51.jpg',
  },
  {
    id: 2,
    title: 'Special title treatment',
    text: 'Для многих людей побывать здесь – значит, исполнить свою самую сокровенную мечту.',
  },
];

export const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <Card key={card.id} src={card.src}>
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        );
      })}
    </div>
  );
};