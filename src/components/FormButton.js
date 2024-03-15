function FormButton({ value, inputValue, onClick })
{

    console.log(inputValue)
    return (
        <div>
            <input
                type="button"
                value={value}
                onClick={onClick}
            />
        </div>
    )
}

export default FormButton