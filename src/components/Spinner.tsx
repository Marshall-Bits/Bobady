import styled from "styled-components";

const SpinnerContainer = styled.div`
    .spinner {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(82, 0, 255, 0) 0deg,
            rgb(201, 29, 253) 360deg
        );
        animation: spin 2s infinite linear;
    }
    .spinner::before {
        content: "";
        border-radius: 50%;
        width: 80%;
        height: 80%;
    }

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
`

export const Spinner = () => {
    return (
        <SpinnerContainer>
            <div className="spinner"></div>
        </SpinnerContainer>
    );
}