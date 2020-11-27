import * as React from "react"

function Logo(props) {
    return (
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M60 40h452V0H60C26.916 0 0 26.916 0 60v392c0 33.084 26.916 60 60 60h452V392.21c0-19.415-15.795-35.21-35.21-35.21H476c-10.819 0-19.79-8.793-19.996-19.602-.099-5.186 1.931-10.167 5.717-14.025 3.973-4.05 9.466-6.373 15.069-6.373 19.415 0 35.21-15.795 35.21-35.209V160H60c-11.028 0-20-8.972-20-20s8.972-20 20-20h452V80H60c-7.011 0-13.74 1.22-20 3.44V60c0-11.028 8.972-20 20-20zm0 160h412v77.193c-14.572 1.172-28.512 7.647-38.833 18.167-11.37 11.589-17.462 26.79-17.156 42.803.302 15.785 6.675 30.575 17.947 41.646 10.332 10.147 23.715 16.122 38.042 17.061V472H60c-11.028 0-20-8.972-20-20V196.573A59.736 59.736 0 0060 200z"/>
        </svg>
    )
}

export default Logo
