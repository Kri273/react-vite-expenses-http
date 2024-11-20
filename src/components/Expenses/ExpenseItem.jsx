import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'
import { useState } from 'react'

const ExpenseItem = (props) => {
    const{ date, price, title: initialTitle } = props;
    const [title, setTitle] = useState(initialTitle);

    const clickHandler = () => {
        console.log('clicked')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    )
}

export default ExpenseItem;