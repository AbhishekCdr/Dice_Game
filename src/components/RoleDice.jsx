import styled from "styled-components";

const RoleDice = ({roleDice, currentDice}) => {

    return (
        <DiceContainer>
            <div className="DiceImage" onClick={roleDice}>
                <img src={`/images/dice/dice${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
.DiceImage img {
    width: 250px;
}
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 24px;

    }
.DiceImage {
    cursor: pointer;
}

`;