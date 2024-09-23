import {Card} from './../../helpers/Card'

function Cards (props) {
    return (<div className='card__wrapper'>
        <div className="container">
            {
                props.cards.map(card =>(
                    <Card key={card.id} name={card.name} subName={card.subName} firstName={card.firstName} />
                ))
            }
        </div>
    </div>)
}

export {Cards};