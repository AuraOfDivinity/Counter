import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const IncrementByButton = props => {
    const handleClick = () => {
        props.onClickHandler(props.increment);
    }

    return (
    <Button animated = 'fade' inverted color={props.color} onClick={handleClick} className="huge ui button">
        <Button.Content visible>{props.increment}</Button.Content>
        <Button.Content hidden>
            <Icon name= 'plus'></Icon>
        </Button.Content>
    </Button>)
}

export default IncrementByButton
