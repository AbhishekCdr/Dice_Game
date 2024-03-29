import styled from "styled-components";

const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    );
};

export default TotalScore;

const ScoreContainer = styled.div`
    h1 {
        max-width: 200px;
        font-size: 100px;
        line-height: 100px;
        text-align: center;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }

`;
